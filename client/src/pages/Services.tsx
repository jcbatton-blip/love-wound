import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { trackBookingClick } from "@/lib/analytics";
import { trpc } from "@/lib/trpc";

export default function Services() {
  const [loading, setLoading] = useState<string | null>(null);
  const [isPaymentPlan, setIsPaymentPlan] = useState(false);

  const checkoutMutation = trpc.stripe.createCheckoutSession.useMutation({
    onSuccess: (data) => {
      if (data.url) {
        window.location.href = data.url;
      }
    },
    onError: (error) => {
      console.error("Checkout error:", error);
      toast.error("Failed to start checkout. Please try again.");
    },
    onSettled: () => {
      setLoading(null);
    },
  });

  const handleCheckout = (productId: string) => {
    setLoading(productId);
    // Store product ID for success page to show correct booking link
    localStorage.setItem('last_product_id', productId);
    checkoutMutation.mutate({ productId });
  };
  const primaryTiers = [
    {
      name: "Discovery Call",
      price: "Free",
      description: "Not sure where to start? Let's talk. Let's see if we're a match.",
      features: [
        "60-Minute Video Call",
        "Explore Your Pattern",
        "No Pressure, No Pitch",
        "See If We're A Fit"
      ],
      cta: "Book Discovery Call",
      id: "discovery",
      popular: false,
      delay: 0,
      hasPaymentPlan: false
    },
    // TEMPORARILY DISABLED - The Kit will be re-enabled once digital files are ready
    // {
    //   name: "The Kit",
    //   price: "47",
    //   description: "The self-paced foundation. Understand the 6 Love Wounds and identify your primary pattern.",
    //   features: [
    //     "The 6 Love Wounds Digital Guide",
    //     "Audio Walkthrough of the 'Wound -> Code -> Pattern' Framework",
    //     "The 'Pattern Hunter' Journal Prompts",
    //     "Immediate Access"
    //   ],
    //   cta: "Get The Kit",
    //   id: "kit",
    //   popular: false,
    //   delay: 0,
    //   hasPaymentPlan: false
    // },
    {
      name: "The Mirror Session",
      price: "350",
      id: "mirror_session",
      description: "One session to see the thorn you've been protecting. Most coaches help you build a better cage. I show you what doesn't need to be there.",
      features: [
        "✓ 100% Private & Confidential",
        "✓ 90-Minute Video Call",
        "✓ Personalized Pattern Diagnosis",
        "✓ No Observers, No Recording",
        "✓ Full Attention on You"
      ],
      cta: "Book A Session",
      popular: true,
      delay: 0.1,
      hasPaymentPlan: false
    },
    {
      name: "The Individual Container",
      price: isPaymentPlan ? "1,350" : "5,000",
      period: isPaymentPlan ? "/ month × 4" : "/ total",
      totalPrice: isPaymentPlan ? "$5,400 total" : null,
      description: "We don't help you manage the cage. We remove the thorn. Then we fill your cup to overflow so the pattern can't run anymore.",
      features: [
        "12 Weekly Sessions (3 Months)",
        "Direct Access (Voxer Support)",
        "Customized 'Homework' Protocols",
        "Lifetime Access to The Kit"
      ],
      cta: "Apply for Individual Work",
      id: "individual_container",
      popular: true,
      delay: 0.2,
      hasPaymentPlan: true
    },
    {
      name: "The Couples Container",
      price: isPaymentPlan ? "2,000" : "7,500",
      period: isPaymentPlan ? "/ month × 4" : "/ total",
      totalPrice: isPaymentPlan ? "$8,000 total" : null,
      description: "Most couples therapy teaches communication tactics. We help each partner fill their own cup to overflow. Two overflow cups = a relationship where nobody's keeping score.",
      features: [
        "12 Weekly 90-Minute Sessions (3 Months)",
        "Flexibility for Individual Breakout Sessions",
        "Joint & Individual Voxer Support",
        "Conflict Protocol Training"
      ],
      cta: "Apply for Couples Work",
      id: "couples_container",
      popular: false,
      delay: 0.3,
      hasPaymentPlan: true
    }
  ];

  const membershipOption = {
    name: "The Inner Circle",
    price: "29",
    period: "/ month",
    description: "Ongoing support for those committed to breaking patterns. Direct access to Jeff, monthly group work, and discounted sessions.",
    features: [
      "✓ Text Access for Urgent Support",
      "✓ 2-4 Group Sessions per Month (90 min)",
      "✓ Discounted 1-on-1 Sessions ($250 vs $350)",
      "✓ Curated Video Library",
      "✓ Cancel Anytime"
    ],
    cta: "Join The Inner Circle",
    id: "inner_circle",
    popular: true,
    delay: 0.1,
    hasPaymentPlan: false
  };

  const retreats = {
    individual: {
      name: "Individual Retreat",
      normalPrice: "15,000",
      foundingPrice: "7,500",
      description: "4 days of intensive 1-on-1 work at a luxury destination. All meals included. No distractions. Just you, me, and the pattern.",
      features: [
        "4 Days of Intensive 1-on-1 Work",
        "Luxury Hotel Accommodations",
        "All Meals Included",
        "Post-Retreat Integration Support (30 days)"
      ],
      cta: "Apply for Founding Experience",
      id: "individual_retreat",
      popular: false,
      delay: 0.4
    },
    couples: {
      name: "Couples Retreat",
      normalPrice: "22,500",
      foundingPrice: "11,250",
      description: "4 days of intensive couples work at a luxury destination. All meals included. No distractions. Just you two, me, and the patterns you've been running.",
      features: [
        "4 Days of Intensive Couples Work",
        "Luxury Hotel Accommodations",
        "All Meals Included",
        "Post-Retreat Integration Support (30 days)"
      ],
      cta: "Apply for Founding Experience",
      id: "couples_retreat",
      popular: true,
      delay: 0.5
    }
  };

  return (
    <div className="pt-32 pb-16 min-h-screen bg-[#F9F7F2]">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-5xl md:text-6xl font-serif text-primary">One-on-One Relationship Coaching with Jeff Batton</h1>
          <h2 className="text-2xl md:text-3xl font-serif text-primary/80">
            Break Toxic Patterns & Build Lasting Love
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            I don't sell "advice." I sell awareness. Choose the level of depth you're ready for.
          </p>
          <div className="mt-6 inline-block px-6 py-3 bg-primary/5 border border-primary/20 rounded-full">
            <p className="text-sm text-primary/70 font-medium">
              <span className="font-serif italic">Limited Availability:</span> I work with a maximum of 10 clients at a time to ensure deep, focused attention.
            </p>
          </div>
          
          {/* Pull Quote */}
          <div className="mt-12 max-w-3xl mx-auto">
            <blockquote className="relative py-8">
              <div className="absolute left-0 top-0 text-6xl text-primary/10 font-serif leading-none">"</div>
              <p className="text-2xl md:text-3xl font-serif italic text-primary text-center px-12">
                You can't plant enough tomato seeds to get corn.
              </p>
              <div className="absolute right-0 bottom-0 text-6xl text-primary/10 font-serif leading-none">"</div>
            </blockquote>
            <p className="text-center text-muted-foreground text-sm mt-4">
              To change the harvest, we have to change the seed.
            </p>
          </div>
        </div>

        {/* Payment Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-full border border-primary/10 inline-flex relative">
            <motion.div
              className="absolute top-1 bottom-1 bg-primary rounded-full"
              initial={false}
              animate={{
                x: isPaymentPlan ? "100%" : "0%",
                width: "50%"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <button
              onClick={() => setIsPaymentPlan(false)}
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                !isPaymentPlan ? "text-white" : "text-primary hover:text-primary/80"
              }`}
            >
              Pay in Full
            </button>
            <button
              onClick={() => setIsPaymentPlan(true)}
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                isPaymentPlan ? "text-white" : "text-primary hover:text-primary/80"
              }`}
            >
              Payment Plan
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start mb-16">
          {primaryTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: tier.delay, duration: 0.5 }}
              className="relative p-8 bg-white border border-primary/10 shadow-sm rounded-2xl flex flex-col h-full"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium tracking-wide">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-8 space-y-4">
                <h3 className="text-2xl font-serif text-primary">{tier.name}</h3>
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1 flex-wrap">
                    <span className="text-4xl font-bold text-primary">${tier.price}</span>
                    {tier.hasPaymentPlan ? (
                      <span className="text-sm text-muted-foreground">{tier.period}</span>
                    ) : (
                      tier.name !== "The Kit" && <span className="text-muted-foreground">/ total</span>
                    )}
                  </div>
                  {tier.totalPrice && (
                    <p className="text-xs text-muted-foreground">{tier.totalPrice}</p>
                  )}
                </div>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-primary/80">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="break-words">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full py-6 rounded-full font-serif text-lg bg-primary text-white hover:bg-primary/90"
                onClick={() => {
                  if (tier.id === "discovery") {
                    trackBookingClick('discovery');
                    window.open("https://calendly.com/jcbatton/let-s-talk", "_blank");
                  } else if (tier.id === "teaching_clinic" || tier.id === "mirror_session") {
                    trackBookingClick(tier.id === "teaching_clinic" ? 'clinic' : 'mirror');
                    window.open("https://calendly.com/jcbatton/let-s-talk", "_blank");
                  } else if (tier.id === "group_container") {
                    trackBookingClick('group');
                    window.location.href = "mailto:jeff@jeffbatton.com?subject=Waitlist for The Group Container";
                  } else if (tier.id === "individual_container") {
                    trackBookingClick('individual');
                    window.open("https://calendly.com/jcbatton/let-s-talk", "_blank");
                  } else if (tier.id === "couples_container") {
                    trackBookingClick('couples');
                    window.open("https://calendly.com/jcbatton/let-s-talk", "_blank");
                  } else {
                    handleCheckout(tier.id);
                  }
                }}
                disabled={loading === tier.id}
              >
                {loading === tier.id ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                {tier.cta} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Membership Section - Will be restructured in next phase */}
        {/* Temporarily removed - being redesigned */}

        {/* The Retreat Section - Founding Experience */}
        <div className="space-y-8">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-block px-6 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium tracking-widest uppercase">
              Founding Retreat Experience
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-primary">
              Work Out the Bugs With Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm offering the first 3 individual retreats and first 3 couples retreats at <strong>50% off</strong>. You get the full luxury experience. I get to refine the format and gather testimonials. Once I've done these 6, the price goes back to normal.
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
                  {retreats.individual.cta} <ArrowRight className="w-4 h-4 ml-2" />
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
                  {retreats.couples.cta} <ArrowRight className="w-4 h-4 ml-2" />
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
              <Button 
                asChild
                className="px-8 py-6 rounded-full font-serif text-lg bg-[#D4AF37] text-[#1A2333] hover:bg-[#C49F27]"
              >
                <a href="/vision">
                  See the Vision <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
            
            <p className="text-sm text-white/40 italic pt-4">
              "Come here to find out what unconditional love really means."
            </p>
          </div>
        </motion.div>

        {/* FAQ / Objection Handling */}
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
                Start with the Mirror Session. It's a low-risk way to experience the method. Most people see more in 90 minutes than they have in years of traditional work.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-serif text-primary">How do things actually change?</h3>
              <p className="text-muted-foreground font-light">
                Just like in sports, the way you change is running the play over and over again until it becomes second nature. We don't just talk about the pattern—we practice new responses until they're automatic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
