// Calendly booking links by session duration
export const CALENDLY_LINKS = {
  discovery: "https://calendly.com/jcbatton/phone", // 30 min - free discovery
  coaching: "https://calendly.com/jcbatton/let-s-talk", // 60 min - teaching clinic
  mirror: "https://calendly.com/jcbatton/mirror", // 90 min - mirror session
};

export const PRODUCTS = [
  {
    id: "kit",
    name: "The Kit",
    description: "The self-paced foundation. Understand the 6 Love Wounds and identify your primary pattern.",
    price: 4700, // $47 in cents
    currency: "usd",
    type: "one_time",
    calendlyLink: null, // Digital product, no booking needed
  },
  {
    id: "mirror_session",
    name: "The Mirror Session",
    description: "Private, confidential 90-minute deep dive to locate your pattern with Jeff's undivided attention.",
    price: 35000, // $350 in cents
    currency: "usd",
    type: "one_time",
    calendlyLink: CALENDLY_LINKS.mirror, // 90 min
  },
  {
    id: "teaching_clinic",
    name: "The Teaching Clinic",
    description: "60-minute 1:1 coaching with Jeff at 57% off. Session observed by certification interns and recorded for training.",
    price: 15000, // $150 in cents
    currency: "usd",
    type: "one_time",
    calendlyLink: CALENDLY_LINKS.coaching, // 60 min
  },
  {
    id: "inner_circle",
    name: "The Inner Circle",
    description: "Ongoing support for those committed to breaking patterns. Direct access to Jeff, monthly group work, and discounted sessions.",
    price: 2900, // $29/month in cents
    currency: "usd",
    type: "subscription",
    interval: "month",
    calendlyLink: null, // Group sessions scheduled separately
  },
  {
    id: "individual_container",
    name: "The Individual Container",
    description: "12 weekly sessions over 3 months. Deep reconstruction with direct access to Jeff.",
    price: 500000, // $5,000 in cents (pay in full)
    currency: "usd",
    type: "one_time",
    calendlyLink: CALENDLY_LINKS.mirror, // 90 min sessions
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
    calendlyLink: CALENDLY_LINKS.mirror, // 90 min sessions
  },
  {
    id: "couples_container",
    name: "The Couples Container",
    description: "12 weekly 90-minute sessions for couples. Relationship reconstruction.",
    price: 750000, // $7,500 in cents (pay in full)
    currency: "usd",
    type: "one_time",
    calendlyLink: CALENDLY_LINKS.mirror, // 90 min sessions
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
    calendlyLink: CALENDLY_LINKS.mirror, // 90 min sessions
  },
  {
    id: "retreat",
    name: "The Bespoke Retreat",
    description: "2.5 days of private, immersive work for one couple at a curated destination.",
    price: 1500000, // $15,000 in cents
    currency: "usd",
    type: "one_time",
    calendlyLink: null, // Custom scheduling for retreats
  },
  {
    id: "practice_circle",
    name: "Practice Circle",
    description: "Monthly relational practice: 2 group sessions + 1 private session. Ongoing awareness work.",
    price: 25000, // $250/month in cents
    currency: "usd",
    type: "subscription",
    interval: "month",
    calendlyLink: null, // Scheduled after acceptance
  }
];

export type Product = typeof PRODUCTS[number];

export const getProductById = (id: string) => PRODUCTS.find(p => p.id === id);
