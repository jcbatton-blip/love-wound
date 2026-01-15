import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import Stripe from "stripe";
import { PRODUCTS, getProductById } from "../shared/products";
import { getDb } from "./db";
import { tenantResponses } from "../drizzle/schema";

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-11-17.clover" as any,
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  tenants: router({
    submitResponse: publicProcedure
      .input(z.object({
        propertyAddress: z.string(),
        tenantName: z.string(),
        tenantEmail: z.string().email(),
        tenantPhone: z.string().optional(),
        photoDate1: z.string().optional(),
        photoDate2: z.string().optional(),
        photoDate3: z.string().optional(),
        showingPreferences: z.string().optional(),
        blackoutDates: z.string().optional(),
        advanceNoticeHours: z.number().default(24),
        questions: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) {
          throw new Error("Database not available");
        }
        
        await db.insert(tenantResponses).values({
          propertyAddress: input.propertyAddress,
          tenantName: input.tenantName,
          tenantEmail: input.tenantEmail,
          tenantPhone: input.tenantPhone || null,
          photoDate1: input.photoDate1 || null,
          photoDate2: input.photoDate2 || null,
          photoDate3: input.photoDate3 || null,
          showingPreferences: input.showingPreferences || null,
          blackoutDates: input.blackoutDates || null,
          advanceNoticeHours: input.advanceNoticeHours,
          questions: input.questions || null,
          status: "pending",
        });

        return { success: true };
      }),
  }),

  stripe: router({
    createCheckoutSession: publicProcedure
      .input(z.object({ productId: z.string() }))
      .mutation(async ({ input, ctx }) => {
        const product = getProductById(input.productId);
        
        if (!product) {
          throw new Error("Product not found");
        }

        const origin = ctx.req.headers.origin || ctx.req.headers.referer?.replace(/\/$/, '') || 'https://lovewound.com';

        // Determine mode based on product type
        const isSubscription = product.type === 'subscription';
        const mode = isSubscription ? 'subscription' : 'payment';

        const lineItemConfig: any = {
          quantity: 1,
        };

        if (isSubscription) {
          // For subscriptions, use price_data with recurring
          lineItemConfig.price_data = {
            currency: product.currency,
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.price,
            recurring: {
              interval: product.interval || 'month',
            },
          };
        } else {
          // For one-time payments
          lineItemConfig.price_data = {
            currency: product.currency,
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.price,
          };
        }

        const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          line_items: [lineItemConfig],
          mode,
          success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}&product_id=${input.productId}`,
          cancel_url: `${origin}/services`,
          allow_promotion_codes: true,
        });

        return { url: session.url };
      }),

    createPortalSession: publicProcedure
      .input(z.object({ customerId: z.string() }))
      .mutation(async ({ input, ctx }) => {
        const origin = ctx.req.headers.origin || ctx.req.headers.referer?.replace(/\/$/, '') || 'https://lovewound.com';

        const session = await stripe.billingPortal.sessions.create({
          customer: input.customerId,
          return_url: `${origin}/client-portal`,
        });

        return { url: session.url };
      }),
  }),

  testimonials: router({
    list: publicProcedure.query(async () => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      
      const { testimonials } = await import("../drizzle/schema");
      const { desc } = await import("drizzle-orm");
      
      return await db.select().from(testimonials).orderBy(desc(testimonials.displayOrder));
    }),

    featured: publicProcedure.query(async () => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      
      const { testimonials } = await import("../drizzle/schema");
      const { eq, desc } = await import("drizzle-orm");
      
      return await db.select().from(testimonials)
        .where(eq(testimonials.featured, 1))
        .orderBy(desc(testimonials.displayOrder));
    }),

    toggleFeatured: publicProcedure
      .input(z.object({ id: z.number(), featured: z.boolean() }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== 'admin') {
          throw new Error('Unauthorized');
        }
        
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        const { testimonials } = await import("../drizzle/schema");
        const { eq } = await import("drizzle-orm");
        
        await db.update(testimonials)
          .set({ featured: input.featured ? 1 : 0 })
          .where(eq(testimonials.id, input.id));
        
        return { success: true };
      }),

    add: publicProcedure
      .input(z.object({
        name: z.string(),
        initial: z.string(),
        date: z.string(),
        title: z.string(),
        text: z.string(),
        category: z.string().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== 'admin') {
          throw new Error('Unauthorized');
        }
        
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        const { testimonials } = await import("../drizzle/schema");
        
        // Get max displayOrder
        const existing = await db.select().from(testimonials);
        const maxOrder = Math.max(...existing.map(t => t.displayOrder), 0);
        
        await db.insert(testimonials).values({
          ...input,
          featured: 0,
          displayOrder: maxOrder + 1,
        });
        
        return { success: true };
      }),

    delete: publicProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== 'admin') {
          throw new Error('Unauthorized');
        }
        
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        const { testimonials } = await import("../drizzle/schema");
        const { eq } = await import("drizzle-orm");
        
        await db.delete(testimonials).where(eq(testimonials.id, input.id));
        
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
