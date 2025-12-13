import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { users } from './drizzle/schema';
import Stripe from 'stripe';

const DATABASE_URL = process.env.DATABASE_URL!;
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY!;

if (!DATABASE_URL || !STRIPE_SECRET_KEY) {
  console.error('Missing environment variables');
  process.exit(1);
}

const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: '2024-12-18.acacia' });

async function syncStripeCustomers() {
  const connection = await mysql.createConnection(DATABASE_URL);
  const db = drizzle(connection);
  
  console.log('Fetching customers from Stripe...');
  
  const customers = await stripe.customers.list({ limit: 100 });
  
  console.log(`Found ${customers.data.length} Stripe customers`);
  
  let synced = 0;
  let skipped = 0;
  
  for (const customer of customers.data) {
    if (!customer.email || !customer.name) {
      console.log(`Skipping customer ${customer.id} - missing email or name`);
      skipped++;
      continue;
    }
    
    try {
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
      if (error.message?.includes('Duplicate entry')) {
        console.log(`✓ Already exists: ${customer.name} (${customer.email})`);
        skipped++;
      } else {
        console.error(`✗ Error syncing ${customer.name}:`, error.message);
      }
    }
  }
  
  console.log('\n=== Sync Summary ===');
  console.log(`Synced: ${synced}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Total: ${customers.data.length}`);
  
  await connection.end();
}

syncStripeCustomers().catch(console.error);
