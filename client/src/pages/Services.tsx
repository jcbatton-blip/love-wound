import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { trackBookingClick } from "@/lib/analytics";

export default function Services() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleCheckout = async (productId: string) => {
    try {
      setLoading(productId);
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Failed to start checkout. Please try again.");
    } finally {
      setLoading(null);
    }
  };
  const tiers = [
    {
      name: "The Kit",
      price: "47",
      description: "The self-paced foundation. Understand the 5 Love Wounds and identify your primary pattern.",
      features: [
        "The 5 Love Wounds Digital Guide",
        "Audio Walkthrough of the 'Wound -> Code -> Pattern' Framework",
        "The 'Pattern Hunter' Journal Prompts",
        "Immediate Access"
      ],
      cta: "Get The Kit",
      id: "kit",
      popular: false,
      delay: 0
    },
    {
      name: "The Mirror Session",
      price: "350",
      id: "mirror_session",
      description: "A 90-minute deep dive to locate your 'Goat' and see the pattern you can't see yourself.",
      features: [
        "90-Minute Video Call",
        "Personalized Pattern Diagnosis",
        "Immediate 'Pattern Interrupt' Tools",
        "Recording of the Session"
      ],
      cta: "Book A Session",
      popular: false,
      delay: 0.1
    },
    {
      name: "The Individual Container",
      price: "5,000",
      description: "The Reps. The Practice. The Rewiring. We run the play every week until you can't get it wrong. This is high-intensity training for your nervous system.",
      features: [
        "12 Weekly Strategy Sessions (3 Months)",
        "Direct Voxer/WhatsApp Access (Mon-Fri)",
        "Real-time 'Game Tape' Review & Adjustments",
        "The Full 'Love Wound' Digital Library"
      ],
      cta: "Apply for Individual Work",
      id: "individual_container",
      popular: true,
      delay: 0.2
    },
    {
      name: "The Couples Container",
      price: "7,500",
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
      delay: 0.3
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
        <div className="text-center space-y-6 mb-20">
          <h1 className="text-5xl md:text-6xl font-serif text-primary">Work With Me</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            I don't sell "advice." I sell awareness. Choose the level of depth you're ready for.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start mb-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: tier.delay, duration: 0.5 }}
              className={`relative p-8 bg-white border ${tier.popular ? 'border-primary shadow-xl scale-105 z-10' : 'border-primary/10 shadow-sm'} rounded-2xl flex flex-col h-full`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium tracking-wide">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-8 space-y-4">
                <h3 className="text-2xl font-serif text-primary">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-primary">${tier.price}</span>
                  {tier.name !== "The Kit" && <span className="text-muted-foreground">/ total</span>}
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
                  if (tier.id === "individual_container") {
                    trackBookingClick('individual');
                    window.location.href = "mailto:jeff@jeffbatton.com?subject=Application for The Container";
                  } else if (tier.id === "couples_container") {
                    trackBookingClick('couples');
                    window.location.href = "mailto:jeff@jeffbatton.com?subject=Application for The Container";
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
          </div>
        </div>
      </div>
    </div>
  );
}
