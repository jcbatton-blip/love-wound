export const PRODUCTS = [
  {
    id: "kit",
    name: "The Kit",
    description: "The self-paced foundation. Understand the 5 Love Wounds and identify your primary pattern.",
    price: 4700, // in cents
    currency: "usd",
    type: "one_time",
  },
  {
    id: "mirror_session",
    name: "The Mirror Session",
    description: "A 90-minute deep dive to locate your 'Goat' and see the pattern you can't see yourself.",
    price: 35000, // in cents
    currency: "usd",
    type: "one_time",
  },
  {
    id: "container",
    name: "The Container",
    description: "3 months of deep reconstruction. We don't just see the pattern; we rewrite the code.",
    price: 350000, // in cents
    currency: "usd",
    type: "one_time",
  }
];

export const getProductById = (id: string) => PRODUCTS.find(p => p.id === id);
