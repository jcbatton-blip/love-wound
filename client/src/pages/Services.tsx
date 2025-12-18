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
  const tiers = [
    {
      name: "Discovery Call",
      price: "Free",
      description: "Not sure where to start? Let's talk. A 60-minute conversation to see if the Mirror Method is right for you.",
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
    {
      name: "The Kit",
      price: "47",
      description: "The self-paced foundation. Understand the 6 Love Wounds and identify your primary pattern.",
      features: [
        "The 6 Love Wounds Digital Guide",
        "Audio Walkthrough of the 'Wound -> Code -> Pattern' Framework",
        "The 'Pattern Hunter' Journal Prompts",
        "Immediate Access"
      ],
      cta: "Get The Kit",
      id: "kit",
      popular: false,
      delay: 0,
      hasPaymentPlan: false
    },
    {
      name: "The Mirror Session",
      price: "350",
      id: "mirror_session",
      description: "Private, confidential 1:1 coaching. A 90-minute deep dive to locate your pattern with Jeff's undivided attention.",
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
      name: "The Teaching Clinic",
      price: "150",
      description: "1:1 coaching with Jeff at 57% off. Your session is observed by 2-4 certification interns and recorded for training purposes.",
      features: [
        "⚠ Observed by Interns (2-4 people)",
        "⚠ Session Recorded for Training",
        "✓ 60-Minute Session with Jeff",
        "✓ Full Love Wound Methodology",
        "✓ Save $200 (57% Discount)"
      ],
      cta: "Book a Clinic Session",
      id: "teaching_clinic",
      popular: false,
      delay: 0.05,
      hasPaymentPlan: false
    },
    {
      name: "The Group Container",
      price: "350",
      description: "Healing happens in community. A weekly processing group for those ready to do the work alongside others on the path.",
      features: [
        "Weekly 90-Minute Group Calls",
        "Hot-Seat Coaching Opportunities",
        "Peer Witnessing & Support",
        "Monthly Subscription (Cancel Anytime)"
      ],
      cta: "Join the Waitlist",
      id: "group_container",
      popular: false,
      delay: 0.1,
      hasPaymentPlan: false
    },
    {
      name: "The Individual Container",
      price: isPaymentPlan ? "1,350" : "5,000",
      period: isPaymentPlan ? "/ month (4 payments)" : "/ total",
      description: "The Reps. The Practice. The Rewiring. We don't just talk. We run the play until you can't get it wrong.",
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
      period: isPaymentPlan ? "/ month (4 payments)" : "/ total",
      description: "The Relationship Reconstruction. Re-learning the dance, one step at a time. We rebuild the foundation while you're living in the house.",
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

  const retreat = {
    name: "The Bespoke Retreat",
    price: "15,000",
    description: "A private, immersive weekend for one couple. No distractions. Just deep conversation, reflection, and connection in a curated environment.",
    features: [
      "2.5 Days of Intensive Immersion",
      "Hosted at a Private Destination",
      "Curated Culinary Experiences",
      "Post-Retreat Integration Support"
    ],
    cta: "Inquire for Availability",
    id: "retreat",
    popular: false,
    delay: 0.4
  };

  return (
    <div className="pt-32 pb-16 min-h-screen bg-[#F9F7F2]">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-5xl md:text-6xl font-serif text-primary">Work With Me</h1>
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
                You can't plant tomatoes and get corn.
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
          {tiers.map((tier, index) => (
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
                <div className="flex items-baseline gap-1 flex-wrap">
                  <span className="text-4xl font-bold text-primary">${tier.price}</span>
                  {tier.hasPaymentPlan ? (
                    <span className="text-sm text-muted-foreground">{tier.period}</span>
                  ) : (
                    tier.name !== "The Kit" && <span className="text-muted-foreground">/ total</span>
                  )}
                </div>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-primary/80">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-6 rounded-full font-serif text-lg ${tier.popular ? 'bg-primary text-white hover:bg-primary/90' : 'bg-[#F9F7F2] text-primary hover:bg-[#F0EBE0]'}`}
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

        {/* The Retreat Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-[#1A2333] text-[#F9F7F2] p-8 md:p-16"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-sm tracking-widest uppercase">
                The Pinnacle Experience
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-white">
                {retreat.name}
              </h2>
              <p className="text-lg text-white/80 font-light leading-relaxed">
                {retreat.description}
              </p>
              <div className="pt-4">
                <div className="text-3xl font-serif text-[#D4AF37] mb-1">Starting at ${retreat.price}</div>
                <div className="text-sm text-white/60">All-inclusive (excluding travel)</div>
              </div>
            </div>

            <div className="space-y-8">
              <ul className="grid gap-4">
                {retreat.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg text-white/90">
                    <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Retreat Agenda */}
              <div className="pt-6 border-t border-white/10">
                <h3 className="text-xl font-serif text-[#D4AF37] mb-4">The Experience</h3>
                <div className="space-y-3 text-sm text-white/70">
                  <p><span className="text-white/90 font-medium">Thursday:</span> Arrive. Settle in. Nightcap (or three, no judgment).</p>
                  <p><span className="text-white/90 font-medium">Friday:</span> Morning coffee while we ease into the hard stuff. Lunch break (you'll need it). Afternoon deep dive. Dinner that costs more than your first car.</p>
                  <p><span className="text-white/90 font-medium">Saturday:</span> Breakfast. Sightseeing (because staring at your patterns all day is exhausting). Integration work. Celebration dinner at a restaurant with more forks than you know what to do with.</p>
                  <p><span className="text-white/90 font-medium">Sunday:</span> Coffee, reflection, and the realization that you just paid $15k to have someone hold up a mirror. Worth it. Departure.</p>
                </div>
              </div>
              
              <Button 
                className="w-full md:w-auto px-8 py-6 rounded-full font-serif text-lg bg-[#D4AF37] text-[#1A2333] hover:bg-[#C49F27]"
                onClick={() => {
                  trackBookingClick('retreat');
                  window.location.href = "mailto:jeff@jeffbatton.com?subject=Inquiry for Bespoke Retreat";
                }}
              >
                {retreat.cta} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
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
