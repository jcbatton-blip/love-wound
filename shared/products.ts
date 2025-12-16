export const PRODUCTS = [
  {
    id: "kit",
    name: "The Kit",
    description: "The self-paced foundation. Understand the 6 Love Wounds and identify your primary pattern.",
    price: 4700, // $47 in cents
    currency: "usd",
    type: "one_time",
  },
  {
    id: "mirror_session",
    name: "The Mirror Session",
    description: "Private, confidential 90-minute deep dive to locate your pattern with Jeff's undivided attention.",
    price: 35000, // $350 in cents
    currency: "usd",
    type: "one_time",
  },
  {
    id: "teaching_clinic",
    name: "The Teaching Clinic",
    description: "60-minute 1:1 coaching with Jeff at 57% off. Session observed by certification interns and recorded for training.",
    price: 15000, // $150 in cents
    currency: "usd",
    type: "one_time",
  },
  {
    id: "group_container",
    name: "The Group Container",
    description: "Weekly 90-minute group processing calls. Healing happens in community.",
    price: 35000, // $350/month in cents
    currency: "usd",
    type: "subscription",
    interval: "month",
  },
  {
    id: "individual_container",
    name: "The Individual Container",
    description: "12 weekly sessions over 3 months. Deep reconstruction with direct access to Jeff.",
    price: 500000, // $5,000 in cents (pay in full)
    currency: "usd",
    type: "one_time",
  },
  {
    id: "individual_container_plan",
    name: "The Individual Container (Payment Plan)",
    description: "12 weekly sessions over 3 months. 4 monthly payments.",
    price: 135000, // $1,350/month in cents
    currency: "usd",
    type: "subscription",
    interval: "month",
    installments: 4,
  },
  {
    id: "couples_container",
    name: "The Couples Container",
    description: "12 weekly 90-minute sessions for couples. Relationship reconstruction.",
    price: 750000, // $7,500 in cents (pay in full)
    currency: "usd",
    type: "one_time",
  },
  {
    id: "couples_container_plan",
    name: "The Couples Container (Payment Plan)",
    description: "12 weekly 90-minute sessions for couples. 4 monthly payments.",
    price: 200000, // $2,000/month in cents
    currency: "usd",
    type: "subscription",
    interval: "month",
    installments: 4,
  },
  {
    id: "retreat",
    name: "The Bespoke Retreat",
    description: "2.5 days of private, immersive work for one couple at a curated destination.",
    price: 1500000, // $15,000 in cents
    currency: "usd",
    type: "one_time",
  }
];

export type Product = typeof PRODUCTS[number];

export const getProductById = (id: string) => PRODUCTS.find(p => p.id === id);
