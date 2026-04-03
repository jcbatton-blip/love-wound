import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { trackBookingClick } from "@/lib/analytics";
import { trpc } from "@/lib/trpc";

const pricingTiers = [
  {
    name: "Let's Talk",
    price: "FREE",
    duration: "30 min Discovery Call",
    description: "Not sure if this is the right fit? Let's find out together. No pressure, no pitch — just an honest conversation about where you are and what you need.",
    features: [
      "30-Minute Video or Phone Call",
      "No Obligation",
      "Honest Assessment of Fit",
      "Free"
    ],
    cta: "Let's Talk",
    href: "https://calendly.com/jcbatton/letstalk",
    id: "discovery",
    popular: false,
    delay: 0,
  },
  {
    name: "Mirror Session",
    price: "$250",
    duration: "60 min Individual Session",
    description: "A single deep-dive session. We look at the pattern, name it, and begin to understand where it came from. Most people see more in 60 minutes than in years of traditional work.",
    features: [
      "60-Minute 1-on-1 Video Session",
      "Pattern Identification",
      "100% Private & Confidential",
      "Personalized Insight"
    ],
    cta: "Book Now",
    href: "https://calendly.com/d/cxkw-gzv-8kv",
    id: "mirror_session",
    popular: true,
    delay: 0.1,
  },
  {
    name: "4-Session Package",
    price: "$850",
    duration: "4 × 60 min Deep Root Work",
    description: "Four sessions to go deeper. Identify the root pattern, understand the code it wrote, and begin rewiring your responses. This is where real change starts to happen.",
    features: [
      "Four 60-Minute 1-on-1 Sessions",
      "Deep Pattern Work",
      "Root-Cause Identification",
      "Integration Between Sessions"
    ],
    cta: "Book Now",
    href: "https://calendly.com/d/cxkw-gzv-8kv",
    id: "package_4session",
    popular: false,
    delay: 0.2,
  },
  {
    name: "Apply for Root Work",
    price: "$12,000",
    duration: "$12K upfront / $14K payment plan",
    description: "Full engagement. Application required. This is deep, sustained root work — not for everyone, and that's the point. If you're ready to change the pattern for good, this is where it happens.",
    features: [
      "Application Required",
      "Deep Sustained Root Work",
      "Full Engagement Container",
      "Payment Plan Available ($14,000)"
    ],
    cta: "Apply Now",
    href: "",
    id: "root_work",
    popular: false,
    delay: 0.3,
  },
  {
    name: "Couples Retreat",
    price: "$4,500",
    duration: "3 days all-inclusive / per couple",
    description: "Three days of intensive in-person couples work. All-inclusive. No distractions — just you two, Jeff, and the patterns you've been running.",
    features: [
      "3-Day In-Person Retreat",
      "All-Inclusive Experience",
      "Intensive Couples Work",
      "Per Couple Pricing"
    ],
    cta: "Let's Talk",
    href: "https://calendly.com/jcbatton/letstalk",
    id: "couples_retreat",
    popular: false,
    delay: 0.4,
  },
];

export default function Services() {
  const { data: featuredTestimonials = [] } = trpc.testimonials.featured.useQuery();

  const membershipOption = {
    name: "The Inner Circle",
    price: "29",
    period: "/ month",
    description: "The foundation for pattern work. 2 live group sessions per month, text access for urgent support, and discounted 1-on-1 sessions. Max 12 members per group.",
    features: [
      "2 Live Group Sessions/Month (1st & 3rd Tuesday, 90 min)",
      "Text Access via Voxer (Daily Support)",
      "Discounted 1-on-1 Sessions ($250 vs $350)",
      "Curated Video Library",
      "Max 12 Members Per Group",
      "Cancel Anytime"
    ],
    cta: "Join The Inner Circle",
    id: "inner_circle",
  };

  const retreats = {
    individual: {
      name: "Individual Retreat",
      normalPrice: "15,000",
      foundingPrice: "7,500",
      description: "4 days of intensive work in my home. You stay at Frederick Stearns House Historic Inn (8109 E Jefferson Ave). All meals coordinated. No distractions. Just you, me, and the pattern.",
      features: [
        "4 Days of Intensive 1-on-1 Work",
        "Sessions in My Home (Detroit)",
        "Stay at Frederick Stearns House Historic Inn",
        "All Meals Coordinated",
        "Post-Retreat Integration Support (30 days)"
      ],
      cta: "Apply for Founding Experience",
      id: "individual_retreat",
      delay: 0.4
    },
    couples: {
      name: "Couples Retreat",
      normalPrice: "22,500",
      foundingPrice: "11,250",
      description: "4 days of intensive couples work in my home. You stay at Frederick Stearns House Historic Inn (8109 E Jefferson Ave). All meals coordinated. No distractions. Just you two, me, and the patterns you've been running.",
      features: [
        "4 Days of Intensive Couples Work",
        "Sessions in My Home (Detroit)",
        "Stay at Frederick Stearns House Historic Inn",
        "All Meals Coordinated",
        "Post-Retreat Integration Support (30 days)"
      ],
      cta: "Apply for Founding Experience",
      id: "couples_retreat",
      delay: 0.5
    }
  };

  return (
    <div className="pt-32 pb-16 min-h-screen bg-[#F9F7F2]">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-5xl md:text-6xl font-serif text-primary">Work With Jeff Batton</h1>
          <h2 className="text-2xl md:text-3xl font-serif text-primary/80">
            Choose Your Starting Point
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Every path starts with a conversation. Begin wherever feels right.
          </p>
          {/* Pull Quote */}
          <div className="mt-12 max-w-3xl mx-auto">
            <blockquote className="relative py-8">
              <div className="absolute left-0 top-0 text-7xl text-primary/10 font-serif leading-none">"</div>
              <p className="text-3xl md:text-4xl font-serif font-bold italic text-primary text-center px-12">
                You can't plant enough tomato seeds to get corn.
              </p>
              <div className="absolute right-0 bottom-0 text-7xl text-primary/10 font-serif leading-none">"</div>
            </blockquote>
            <p className="text-center text-muted-foreground text-base font-medium mt-4">
              To change the harvest, we have to change the seed.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: tier.delay, duration: 0.5 }}
              className={`relative p-8 bg-white border shadow-sm rounded-2xl flex flex-col h-full ${
                tier.popular
                  ? "border-primary shadow-md"
                  : "border-primary/10"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium tracking-wide whitespace-nowrap">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-8 space-y-3">
                <h3 className="text-2xl font-serif text-primary">{tier.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">{tier.price}</span>
                </div>
                <p className="text-sm text-muted-foreground font-medium">{tier.duration}</p>
                <p className="text-muted-foreground font-light leading-relaxed text-sm">
                  {tier.description}
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-primary/80">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full py-6 rounded-full font-serif text-lg bg-primary text-white hover:bg-primary/90"
                onClick={() => {
                  trackBookingClick(tier.id);
                  if (tier.href) {
                    window.open(tier.href, "_blank");
                  } else {
                    window.location.href = "/discovery";
                  }
                }}
              >
                {tier.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Inner Circle Membership Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16 relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 md:p-12 border-2 border-slate-700"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-slate-900 px-4 py-1 rounded-full text-sm font-medium tracking-wide">
            ONGOING COMMUNITY
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-serif text-white mb-2">{membershipOption.name}</h3>
                <p className="text-lg text-white/80 font-light leading-relaxed">
                  {membershipOption.description}
                </p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-white">${membershipOption.price}</span>
                <span className="text-xl text-white/70">{membershipOption.period}</span>
              </div>
              <Button
                className="w-full md:w-auto px-8 py-6 rounded-full font-serif text-lg bg-white text-slate-900 hover:bg-white/90"
                onClick={() => {
                  trackBookingClick('membership');
                  window.location.href = "mailto:jeff@jeffbatton.com?subject=Join%20The%20Inner%20Circle";
                }}
              >
                {membershipOption.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div>
              <ul className="space-y-4">
                {membershipOption.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-white/90">
                    <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <div className="mt-32 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Client Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              Real transformations from people who've done the work.
            </p>
            <p className="text-base text-muted-foreground/70 max-w-xl mx-auto">
              These are the full stories. See what's possible when you break the pattern.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-primary/10 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif text-xl">
                    {testimonial.initial}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                  </div>
                </div>
                <h3 className="text-xl font-serif text-primary mb-3">{testimonial.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {testimonial.text}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Worked with Jeff? Share your experience.</p>
            <Button variant="outline" size="lg" asChild>
              <a href="/submit-testimonial">
                Share Your Experience
              </a>
            </Button>
          </div>
        </div>

        {/* The Retreat Section */}
        <div className="space-y-8 mt-32">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-block px-6 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium tracking-widest uppercase">
              Founding Retreat Experience
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-primary">
              The Retreat
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm offering the first 3 individual retreats and first 3 couples retreats at <strong>50% off</strong>. You get the full experience. I get to refine the format and gather testimonials. Once I've done these 6, the price goes back to normal.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Individual Retreat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: retreats.individual.delay }}
              className="relative overflow-hidden rounded-3xl bg-[#1A2333] text-[#F9F7F2] p-8"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37] opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
              <div className="relative z-10 space-y-6">
                <div>
                  <h3 className="text-3xl font-serif text-white mb-2">
                    {retreats.individual.name}
                  </h3>
                  <p className="text-base text-white/70 font-light leading-relaxed">
                    {retreats.individual.description}
                  </p>
                </div>
                <div className="pt-4">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-2xl text-white/40 line-through">${retreats.individual.normalPrice}</span>
                    <span className="text-5xl font-serif text-[#D4AF37]">${retreats.individual.foundingPrice}</span>
                  </div>
                  <p className="text-sm text-white/60">Limited to first 3 clients</p>
                </div>
                <ul className="space-y-3">
                  {retreats.individual.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full px-6 py-5 rounded-full font-serif text-base bg-[#D4AF37] text-[#1A2333] hover:bg-[#C49F27]"
                  onClick={() => {
                    trackBookingClick('retreat');
                    window.location.href = "mailto:jeff@jeffbatton.com?subject=Founding Individual Retreat Application";
                  }}
                >
                  {retreats.individual.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
            {/* Couples Retreat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: retreats.couples.delay }}
              className="relative overflow-hidden rounded-3xl bg-[#1A2333] text-[#F9F7F2] p-8 border-2 border-[#D4AF37]/30"
            >
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#D4AF37] text-[#1A2333] text-xs font-medium tracking-wider uppercase">
                Most Popular
              </div>
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37] opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
              <div className="relative z-10 space-y-6">
                <div>
                  <h3 className="text-3xl font-serif text-[#D4AF37] mb-2">
                    {retreats.couples.name}
                  </h3>
                  <p className="text-base text-white/70 font-light leading-relaxed">
                    {retreats.couples.description}
                  </p>
                </div>
                <div className="pt-4">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-2xl text-white/40 line-through">${retreats.couples.normalPrice}</span>
                    <span className="text-5xl font-serif text-[#D4AF37]">${retreats.couples.foundingPrice}</span>
                  </div>
                  <p className="text-sm text-white/60">Limited to first 3 couples</p>
                </div>
                <ul className="space-y-3">
                  {retreats.couples.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full px-6 py-5 rounded-full font-serif text-base bg-[#D4AF37] text-[#1A2333] hover:bg-[#C49F27]"
                  onClick={() => {
                    trackBookingClick('retreat');
                    window.location.href = "mailto:jeff@jeffbatton.com?subject=Founding Couples Retreat Application";
                  }}
                >
                  {retreats.couples.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
          {/* Retreat Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 border border-primary/10"
          >
            <h3 className="text-2xl font-serif text-primary mb-6">What You Get (Individual & Couples)</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-medium text-primary">The Experience:</h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p><span className="text-primary font-medium">Day 1 (Thursday):</span> Arrive. Settle into your luxury accommodations. Welcome dinner. We ease in.</p>
                  <p><span className="text-primary font-medium">Day 2 (Friday):</span> Morning session (3 hours). Lunch break. Afternoon deep dive (3 hours). Dinner on your own.</p>
                  <p><span className="text-primary font-medium">Day 3 (Saturday):</span> Morning session (3 hours). Free afternoon (sightseeing, rest, integration). Evening reflection session (2 hours). Celebration dinner.</p>
                  <p><span className="text-primary font-medium">Day 4 (Sunday):</span> Morning coffee and final integration session (2 hours). Departure.</p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium text-primary">What Jeff Gets:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Work out the logistics (hotel selection, meal timing, session flow)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Refine the curriculum (what works in 4 days vs. 12 weeks)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Gather testimonials and case studies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Document the process for future retreats</span>
                  </li>
                </ul>
                <p className="text-sm text-primary/70 italic pt-4">
                  This is transparency, not charity. You're helping me build something. Once I've done these 6 retreats, the price goes back to $15K (individual) and $22.5K (couples).
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* The Sanctuary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A2333] to-[#2A3343] text-[#F9F7F2] p-12 md:p-16"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37] opacity-5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37] opacity-5 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-block px-4 py-1 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-sm tracking-widest uppercase">
              Beyond Individual Work
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white">
              The Sanctuary
            </h2>
            <p className="text-xl text-white/80 font-light leading-relaxed italic">
              A Conscious Living Community
            </p>
            <p className="text-lg text-white/70 font-light leading-relaxed max-w-2xl mx-auto">
              Individual work removes your thorn and fills your cup. But what happens after? <strong className="text-white">The Sanctuary</strong> is where you come home. A physical and digital community built on one principle: <strong className="text-white">Unconditional Love</strong>.
            </p>
            <p className="text-base text-white/60 font-light leading-relaxed max-w-xl mx-auto">
              Weekly gatherings. Guest teachers. Live music. A refurbished church in Detroit reimagined as a space where healing becomes community.
            </p>
            <div className="pt-4">
              <Button asChild className="px-8 py-6 rounded-full font-serif text-lg bg-[#D4AF37] text-[#1A2333] hover:bg-[#C49F27]">
                <a href="/sanctuary">
                  See the Vision
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-white/40 italic pt-4">
              "Come here to find out what unconditional love really means."
            </p>
          </div>
        </motion.div>

        {/* FAQ */}
        <div className="mt-32 max-w-3xl mx-auto space-y-12">
          <h2 className="text-3xl font-serif text-center text-primary">Common Questions</h2>
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-xl font-serif text-primary">Why is this different from therapy?</h3>
              <p className="text-muted-foreground font-light">
                Therapy often focuses on validating your feelings. I focus on revealing the *mechanism* that creates them. We don't just talk about the wound; we look at the code it wrote.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-serif text-primary">Do I need to be in a relationship?</h3>
              <p className="text-muted-foreground font-light">
                No. In fact, singlehood is the best time to do this work because you can see the pattern without the noise of a partner triggering it constantly.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-serif text-primary">What if I'm not ready for the full container?</h3>
              <p className="text-muted-foreground font-light">
                Start with the Mirror Session. It's a low-risk way to experience the method. Most people see more in 60 minutes than they have in years of traditional work.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-serif text-primary">How do things actually change?</h3>
              <p className="text-muted-foreground font-light">
                Just like in sports, the way you change is running the play over and over again until it becomes second nature. We don't just talk about the pattern—we practice new responses until they're automatic.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-serif text-primary">Is there anything beyond the sessions?</h3>
              <p className="text-muted-foreground font-light">
                For a select few who've done deep work and want to go further—there's an apprenticeship path. It's not advertised. It's by invitation only. If you're curious, ask during your discovery call.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
