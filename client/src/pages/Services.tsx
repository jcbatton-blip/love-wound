import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
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
      popular: false,
      delay: 0
    },
    {
      name: "The Mirror Session",
      price: "350",
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
      name: "The Container",
      price: "3,500",
      description: "3 months of deep reconstruction. We don't just see the pattern; we rewrite the code.",
      features: [
        "12 Weekly 60-Minute Sessions",
        "Direct Voxer/WhatsApp Access (Mon-Fri)",
        "Customized 'Homework' & Integration Practices",
        "The Full 'Love Wound' Digital Library"
      ],
      cta: "Apply For The Container",
      popular: true,
      delay: 0.2
    }
  ];

  return (
    <div className="pt-32 pb-16 min-h-screen bg-[#F9F7F2]">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-20">
          <h1 className="text-5xl md:text-6xl font-serif text-primary">Work With Me</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            I don't sell "advice." I sell awareness. Choose the level of depth you're ready for.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
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
              >
                {tier.cta} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>

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
