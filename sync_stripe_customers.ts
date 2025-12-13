import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { users } from './drizzle/schema';
import Stripe from 'stripe';
import { eq } from 'drizzle-orm';

const DATABASE_URL = process.env.DATABASE_URL!;
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY!;

if (!DATABASE_URL || !STRIPE_SECRET_KEY) {
  console.error('Missing environment variables');
  process.exit(1);
}

const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: '2024-12-18.acacia' });
const sql = postgres(DATABASE_URL);
const db = drizzle(sql);

async function syncStripeCustomers() {
  console.log('Fetching customers from Stripe...');
  
  const customers = await stripe.customers.list({ limit: 100 });
  
  console.log(`Found ${customers.data.length} Stripe customers`);
  
  let synced = 0;
  let skipped = 0;
  let errors = 0;
  
  for (const customer of customers.data) {
    if (!customer.email || !customer.name) {
      console.log(`Skipping customer ${customer.id} - missing email or name`);
      skipped++;
      continue;
    }
    
    try {
      // Check if user already exists by email
      const existingUsers = await db.select().from(users).where(eq(users.email, customer.email));
      
      if (existingUsers.length > 0) {
        console.log(`✓ User already exists: ${customer.name} (${customer.email})`);
        skipped++;
        continue;
      }
      
      // Create user in database
      await db.insert(users).values({
        email: customer.email,
        name: customer.name,
        openId: `stripe_${customer.id}`,
        stripeCustomerId: customer.id,
        loginMethod: 'imported'
      });
      
      console.log(`✓ Synced: ${customer.name} (${customer.email})`);
      synced++;
      
    } catch (error: any) {
      console.error(`✗ Error syncing ${customer.name} (${customer.email}):`, error.message);
      errors++;
    }
  }
  
  console.log('\n=== Sync Summary ===');
  console.log(`Synced: ${synced}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Errors: ${errors}`);
  console.log(`Total: ${customers.data.length}`);
  
  await sql.end();
}

syncStripeCustomers().catch(console.error);
