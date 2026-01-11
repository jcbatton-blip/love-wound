import type { Express } from "express";
import { createServer, type Server } from "http";
import Stripe from "stripe";
import { PRODUCTS, getProductById } from "../shared/products";
import { getWelcomeEmail } from "./welcome-emails";
import { sendEmail } from "./email-service";
import { registerSubmitApplicationRoute } from "./routes/submit-application";
import { registerGetApplicationsRoute } from "./routes/get-applications";

// Initialize Stripe with the secret key from environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-11-17.clover" as any,
});

export function registerRoutes(app: Express): Server {
  // Register application routes
  registerSubmitApplicationRoute(app);
  registerGetApplicationsRoute(app);
  // API route to create a checkout session
  app.post("/api/create-checkout-session", async (req, res) => {
    try {
      const { productId } = req.body;
      
      if (!productId) {
        return res.status(400).json({ error: "Product ID is required" });
      }

      const product = getProductById(productId);
      
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      // Create the checkout session
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
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/services`,
        allow_promotion_codes: true,
      });

      res.json({ url: session.url });
    } catch (error: any) {
      console.error("Stripe error:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // API route to create a Stripe Customer Portal session
  app.post("/api/create-portal-session", async (req, res) => {
    try {
      const { customerId } = req.body;

      if (!customerId) {
        return res.status(400).json({ error: "Customer ID is required" });
      }

      const session = await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: `${req.headers.origin}/client-portal`,
      });

      res.json({ url: session.url });
    } catch (error: any) {
      console.error("Portal session error:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // Stripe webhook endpoint for payment success
  app.post("/api/stripe/webhook", async (req, res) => {
    const sig = req.headers["stripe-signature"];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!sig || !webhookSecret) {
      console.error("Missing webhook signature or secret");
      return res.status(400).send("Webhook Error: Missing signature or secret");
    }

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } catch (err: any) {
      console.error("Webhook signature verification failed:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the checkout.session.completed event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      
      // Extract customer email and product info
      const customerEmail = session.customer_details?.email;
      const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
      
      if (customerEmail && lineItems.data.length > 0) {
        const productName = lineItems.data[0].description;
        
        // Match product name to product ID
        const product = PRODUCTS.find(p => p.name === productName);
        
        if (product) {
          const welcomeEmail = getWelcomeEmail(product.id);
          
          if (welcomeEmail) {
            // Send welcome email via Gmail
            console.log("\n=== SENDING WELCOME EMAIL ===");
            console.log("To:", customerEmail);
            console.log("Product:", product.name);
            console.log("Subject:", welcomeEmail.subject);
            console.log("================================\n");
            
            const emailSent = await sendEmail({
              to: customerEmail,
              subject: welcomeEmail.subject,
              body: welcomeEmail.body
            });
            
            if (emailSent) {
              console.log("✅ Welcome email sent successfully");
            } else {
              console.error("❌ Failed to send welcome email");
            }
          }
        }
      }
    }

    res.json({ received: true });
  });

  const httpServer = createServer(app);
  return httpServer;
}
