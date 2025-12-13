// Stripe Payment Links Configuration
// Generated from setup_stripe_products.ts

export const PAYMENT_LINKS = {
  discovery: {
    name: 'Free Discovery Session',
    price: 0,
    link: null, // Free - will use Calendly
  },
  single_session: {
    name: 'Single Breakthrough Session',
    price: 250,
    link: 'https://buy.stripe.com/test_aFa8wOdiB01nflNdYW63K02',
  },
  three_session: {
    name: '3-Session Package',
    price: 675,
    single: 'https://buy.stripe.com/test_00wbJ03I101n0qTbQO63K03',
    plan: 'https://buy.stripe.com/test_fZu9ASdiBaG17Tl1ca63K04',
  },
  six_session: {
    name: '6-Session Package',
    price: 1200,
    single: 'https://buy.stripe.com/test_14AaEWdiBeWhc9BbQO63K05',
    plan: 'https://buy.stripe.com/test_8x200i4M54hD1uX5sq63K06',
  },
  twelve_session: {
    name: '12-Session Deep Transformation',
    price: 2100,
    single: 'https://buy.stripe.com/test_8x200idiB4hDddF08663K07',
    plan: 'https://buy.stripe.com/test_fZu3cu3I1bK57Tl6wu63K08',
  },
  monthly_coaching: {
    name: 'Monthly Coaching Subscription',
    price: 600,
    link: 'https://buy.stripe.com/test_9B614m4M56pL6Phg7463K09',
  },
};

export type PaymentLinkKey = keyof typeof PAYMENT_LINKS;
