import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import Stripe from "stripe";
import { PRODUCTS, getProductById } from "../shared/products";

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

  stripe: router({
    createCheckoutSession: publicProcedure
      .input(z.object({ productId: z.string() }))
      .mutation(async ({ input, ctx }) => {
        const product = getProductById(input.productId);
        
        if (!product) {
          throw new Error("Product not found");
        }

        const origin = ctx.req.headers.origin || ctx.req.headers.referer?.replace(/\/$/, '') || 'https://lovewound.com';

        const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          line_items: [
            {
              price_data: {
                currency: product.currency,
                product_data: {
                  name: product.name,
                  description: product.description,
                },
                unit_amount: product.price,
              },
              quantity: 1,
            },
          ],
          mode: "payment",
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
});

export type AppRouter = typeof appRouter;
