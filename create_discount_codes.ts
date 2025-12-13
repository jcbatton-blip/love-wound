import Stripe from 'stripe';

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY!;

if (!STRIPE_SECRET_KEY) {
  console.error('Missing STRIPE_SECRET_KEY');
  process.exit(1);
}

const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: '2024-12-18.acacia' });

async function createDiscountCodes() {
  console.log('Creating legacy client discount codes...\n');

  try {
    // Create coupon for $150 sessions (40% off $250)
    const coupon150 = await stripe.coupons.create({
      amount_off: 10000, // $100 off
      currency: 'usd',
      duration: 'forever',
      name: 'Legacy Client - $150/session',
    });
    
    const code150 = await stripe.promotionCodes.create({
      coupon: coupon150.id,
      code: 'LEGACY150',
    });
    
    console.log(`✓ Created LEGACY150 - $100 off ($250 → $150)`);
    console.log(`  Coupon ID: ${coupon150.id}`);
    console.log(`  Code ID: ${code150.id}\n`);

    // Create coupon for $125 sessions (50% off $250)
    const coupon125 = await stripe.coupons.create({
      amount_off: 12500, // $125 off
      currency: 'usd',
      duration: 'forever',
      name: 'Legacy Client - $125/session',
    });
    
    const code125 = await stripe.promotionCodes.create({
      coupon: coupon125.id,
      code: 'LEGACY125',
    });
    
    console.log(`✓ Created LEGACY125 - $125 off ($250 → $125)`);
    console.log(`  Coupon ID: ${coupon125.id}`);
    console.log(`  Code ID: ${code125.id}\n`);

    // Create coupon for $95 sessions (62% off $250)
    const coupon95 = await stripe.coupons.create({
      amount_off: 15500, // $155 off
      currency: 'usd',
      duration: 'forever',
      name: 'Legacy Client - $95/session',
    });
    
    const code95 = await stripe.promotionCodes.create({
      coupon: coupon95.id,
      code: 'LEGACY95',
    });
    
    console.log(`✓ Created LEGACY95 - $155 off ($250 → $95)`);
    console.log(`  Coupon ID: ${coupon95.id}`);
    console.log(`  Code ID: ${code95.id}\n`);

    console.log('=== Setup Complete ===');
    console.log('All discount codes have been created in Stripe.');
    console.log('Legacy clients can now use these codes at checkout.');

  } catch (error: any) {
    console.error('Error creating discount codes:', error.message);
    process.exit(1);
  }
}

createDiscountCodes();
