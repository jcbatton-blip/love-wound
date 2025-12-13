import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { users } from './drizzle/schema';
import fs from 'fs';
import Stripe from 'stripe';

const DATABASE_URL = process.env.DATABASE_URL!;
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY!;

if (!DATABASE_URL) {
  console.error('DATABASE_URL not found');
  process.exit(1);
}

if (!STRIPE_SECRET_KEY) {
  console.error('STRIPE_SECRET_KEY not found');
  process.exit(1);
}

const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: '2024-12-18.acacia' });
const sql = postgres(DATABASE_URL);
const db = drizzle(sql);

async function importCustomers() {
  const csvContent = fs.readFileSync('/home/ubuntu/upload/Customers.csv', 'utf-8');
  const lines = csvContent.split('\n').filter(line => line.trim());
  
  // Skip header
  const dataLines = lines.slice(1);
  
  console.log(`Found ${dataLines.length} customers to import`);
  
  let imported = 0;
  let skipped = 0;
  let errors = 0;
  
  for (const line of dataLines) {
    const parts = line.split(',');
    const name = parts[0]?.trim();
    const email = parts[8]?.trim();
    const phone = parts[7]?.trim();
    const openBalance = parseFloat(parts[10]?.trim() || '0');
    
    if (!email || !name) {
      console.log(`Skipping row with missing data: ${line.substring(0, 50)}`);
      skipped++;
      continue;
    }
    
    try {
      // Create Stripe customer
      const stripeCustomer = await stripe.customers.create({
        email: email,
        name: name,
        phone: phone || undefined,
        metadata: {
          source: 'quickbooks_import',
          open_balance: openBalance.toString()
        }
      });
      
      console.log(`✓ Created Stripe customer: ${name} (${email}) - ID: ${stripeCustomer.id}`);
      
      // Create user in database
      await db.insert(users).values({
        email: email,
        name: name,
        openId: `imported_${Date.now()}_${Math.random().toString(36).substring(7)}`,
        stripeCustomerId: stripeCustomer.id
      });
      
      console.log(`✓ Created database user: ${name}`);
      imported++;
      
    } catch (error: any) {
      console.error(`✗ Error importing ${name} (${email}):`, error.message);
      errors++;
    }
  }
  
  console.log('\n=== Import Summary ===');
  console.log(`Imported: ${imported}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Errors: ${errors}`);
  console.log(`Total: ${dataLines.length}`);
  
  await sql.end();
}

importCustomers().catch(console.error);
