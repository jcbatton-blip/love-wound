import Stripe from 'stripe';

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY!;

if (!STRIPE_SECRET_KEY) {
  console.error('Missing STRIPE_SECRET_KEY');
  process.exit(1);
}

const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: '2024-12-18.acacia' });

async function setupStripeProducts() {
  console.log('Setting up Stripe products and payment links...\n');

  try {
    // 1. Discovery Session (Free)
    console.log('Creating Discovery Session...');
    const discoveryProduct = await stripe.products.create({
      name: 'Free Discovery Session',
      description: '30-minute introductory call to explore how the Mirror Method can transform your relationships',
    });
    console.log(`✓ Created product: ${discoveryProduct.name} (${discoveryProduct.id})`);

    // 2. Single Breakthrough Session
    console.log('\nCreating Single Breakthrough Session...');
    const singleSessionProduct = await stripe.products.create({
      name: 'Single Breakthrough Session',
      description: '1-hour deep-dive session using the Mirror Method to address a specific relationship challenge',
    });
    const singleSessionPrice = await stripe.prices.create({
      product: singleSessionProduct.id,
      unit_amount: 25000, // $250
      currency: 'usd',
    });
    const singleSessionLink = await stripe.paymentLinks.create({
      line_items: [{ price: singleSessionPrice.id, quantity: 1 }],
    });
    console.log(`✓ Created product: ${singleSessionProduct.name} (${singleSessionProduct.id})`);
    console.log(`  Payment link: ${singleSessionLink.url}`);

    // 3. 3-Session Package
    console.log('\nCreating 3-Session Package...');
    const threeSessionProduct = await stripe.products.create({
      name: '3-Session Package',
      description: 'Three 1-hour sessions to create lasting change in your relationship patterns (10% savings)',
    });
    
    // Single payment
    const threeSessionPrice = await stripe.prices.create({
      product: threeSessionProduct.id,
      unit_amount: 67500, // $675
      currency: 'usd',
    });
    const threeSessionLink = await stripe.paymentLinks.create({
      line_items: [{ price: threeSessionPrice.id, quantity: 1 }],
    });
    
    // Payment plan (3 monthly payments)
    const threeSessionPlanPrice = await stripe.prices.create({
      product: threeSessionProduct.id,
      unit_amount: 22500, // $225/month
      currency: 'usd',
      recurring: { interval: 'month', interval_count: 1 },
    });
    const threeSessionPlanLink = await stripe.paymentLinks.create({
      line_items: [{ price: threeSessionPlanPrice.id, quantity: 1 }],
    });
    
    console.log(`✓ Created product: ${threeSessionProduct.name} (${threeSessionProduct.id})`);
    console.log(`  Single payment: ${threeSessionLink.url}`);
    console.log(`  Payment plan: ${threeSessionPlanLink.url}`);

    // 4. 6-Session Package
    console.log('\nCreating 6-Session Package...');
    const sixSessionProduct = await stripe.products.create({
      name: '6-Session Package',
      description: 'Six 1-hour sessions for comprehensive relationship transformation (20% savings)',
    });
    
    // Single payment
    const sixSessionPrice = await stripe.prices.create({
      product: sixSessionProduct.id,
      unit_amount: 120000, // $1,200
      currency: 'usd',
    });
    const sixSessionLink = await stripe.paymentLinks.create({
      line_items: [{ price: sixSessionPrice.id, quantity: 1 }],
    });
    
    // Payment plan (3 monthly payments)
    const sixSessionPlanPrice = await stripe.prices.create({
      product: sixSessionProduct.id,
      unit_amount: 40000, // $400/month
      currency: 'usd',
      recurring: { interval: 'month', interval_count: 1 },
    });
    const sixSessionPlanLink = await stripe.paymentLinks.create({
      line_items: [{ price: sixSessionPlanPrice.id, quantity: 1 }],
    });
    
    console.log(`✓ Created product: ${sixSessionProduct.name} (${sixSessionProduct.id})`);
    console.log(`  Single payment: ${sixSessionLink.url}`);
    console.log(`  Payment plan: ${sixSessionPlanLink.url}`);

    // 5. 12-Session Deep Transformation
    console.log('\nCreating 12-Session Deep Transformation...');
    const twelveSessionProduct = await stripe.products.create({
      name: '12-Session Deep Transformation',
      description: 'Twelve 1-hour sessions for profound, lasting relationship transformation (30% savings)',
    });
    
    // Single payment
    const twelveSessionPrice = await stripe.prices.create({
      product: twelveSessionProduct.id,
      unit_amount: 210000, // $2,100
      currency: 'usd',
    });
    const twelveSessionLink = await stripe.paymentLinks.create({
      line_items: [{ price: twelveSessionPrice.id, quantity: 1 }],
    });
    
    // Payment plan (3 monthly payments)
    const twelveSessionPlanPrice = await stripe.prices.create({
      product: twelveSessionProduct.id,
      unit_amount: 70000, // $700/month
      currency: 'usd',
      recurring: { interval: 'month', interval_count: 1 },
    });
    const twelveSessionPlanLink = await stripe.paymentLinks.create({
      line_items: [{ price: twelveSessionPlanPrice.id, quantity: 1 }],
    });
    
    console.log(`✓ Created product: ${twelveSessionProduct.name} (${twelveSessionProduct.id})`);
    console.log(`  Single payment: ${twelveSessionLink.url}`);
    console.log(`  Payment plan: ${twelveSessionPlanLink.url}`);

    // 6. Monthly Coaching Subscription
    console.log('\nCreating Monthly Coaching Subscription...');
    const monthlyCoachingProduct = await stripe.products.create({
      name: 'Monthly Coaching Subscription',
      description: 'Ongoing support with 2 sessions per month, priority scheduling, and email support between sessions',
    });
    const monthlyCoachingPrice = await stripe.prices.create({
      product: monthlyCoachingProduct.id,
      unit_amount: 60000, // $600/month
      currency: 'usd',
      recurring: { interval: 'month' },
    });
    const monthlyCoachingLink = await stripe.paymentLinks.create({
      line_items: [{ price: monthlyCoachingPrice.id, quantity: 1 }],
    });
    
    console.log(`✓ Created product: ${monthlyCoachingProduct.name} (${monthlyCoachingProduct.id})`);
    console.log(`  Subscription link: ${monthlyCoachingLink.url}`);

    console.log('\n=== Setup Complete ===');
    console.log('All products and payment links have been created in Stripe.');
    console.log('Visit your Stripe Dashboard to view and manage them.');

  } catch (error: any) {
    console.error('Error setting up products:', error.message);
    process.exit(1);
  }
}

setupStripeProducts();
