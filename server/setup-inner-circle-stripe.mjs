import Stripe from 'stripe';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: join(__dirname, '../.env') });

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-12-18.acacia',
});

async function setupInnerCircleProduct() {
  try {
    console.log('Creating The Inner Circle product in Stripe...');
    
    // Create the product
    const product = await stripe.products.create({
      name: 'The Inner Circle',
      description: 'Ongoing support for those committed to breaking patterns. Direct access to Jeff, monthly group work, and discounted sessions.',
      metadata: {
        product_id: 'inner_circle',
      },
    });

    console.log('✓ Product created:', product.id);

    // Create the price ($ 29/month recurring)
    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: 2900, // $29.00 in cents
      currency: 'usd',
      recurring: {
        interval: 'month',
      },
      metadata: {
        product_id: 'inner_circle',
      },
    });

    console.log('✓ Price created:', price.id);
    console.log('\n✅ Setup complete!');
    console.log('\nProduct ID:', product.id);
    console.log('Price ID:', price.id);
    console.log('\nYou can view this in your Stripe dashboard at:');
    console.log('https://dashboard.stripe.com/products/' + product.id);

  } catch (error) {
    console.error('❌ Error setting up product:', error.message);
    process.exit(1);
  }
}

setupInnerCircleProduct();
