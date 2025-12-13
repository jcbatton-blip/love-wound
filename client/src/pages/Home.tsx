import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Eye, X, Ghost, Lock, Frown, UserX } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="overflow-hidden bg-background">
      {/* Hero Section - Editorial Style */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#F9F7F2]">
        {/* Subtle Background Texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        
        {/* Central Mirror Frame Graphic (Abstract representation) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
          <div className="w-[600px] h-[800px] border-[1px] border-primary rounded-[50%] transform scale-110" />
          <div className="absolute w-[580px] h-[780px] border-[1px] border-primary rounded-[50%] transform scale-110" />
        </div>

        <div className="container relative z-10 pt-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center space-y-10"
          >
            <motion.div variants={fadeIn}>
              <span className="font-serif italic text-xl text-primary/70 tracking-wide">
                The Love Wound Mirror™
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-serif font-medium text-primary leading-tight">
              You Don't Need A Guru.<br />
              <span className="italic">You Need A Mirror.</span>
            </motion.h1>
            
            <motion.div variants={fadeIn} className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif text-primary/80">
                Awaken the Self You Already Are.
              </h2>
              <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                You don't need to be fixed, healed, or reinvented. Just remember what you've forgotten. Your patterns aren't problems—they're the imprint you absorbed before you even had language.
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="pt-8">
              <Button size="lg" className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-white font-serif text-lg px-10 py-6 h-auto rounded-full transition-all duration-300">
                Take the Quiz: Discover Your Pattern
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Mirror Method Section */}
      <section className="py-32 bg-[#F0EBE0]/30">
        <div className="container text-center max-w-3xl mx-auto space-y-12">
          <div className="flex justify-center gap-4 text-primary/40 mb-8">
            <span className="text-2xl">♦</span>
            <span className="text-2xl">♦</span>
            <span className="text-2xl">♦</span>
          </div>
          
          <h2 className="text-4xl font-serif text-primary uppercase tracking-widest">
            The Mirror Method™
          </h2>
          
          <p className="font-serif text-xl italic text-primary/80">
            See the Pattern. Break its Spell. Rewrite Your Life.
          </p>
          
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed font-light">
            <p>
              Your life isn't shaped by your choices — it's shaped by your imprint. Before you ever had language, before logic or memory, you absorbed one thing:
            </p>
            <p className="font-serif text-xl text-primary">
              How love works.<br />
              Not because anyone taught you... but because you felt it.
            </p>
            <p>
              Those early experiences became the Love Wound Imprint™ — a subconscious pattern that still determines:
            </p>
            <ul className="space-y-2 italic text-primary/80">
              <li>— who you're drawn to</li>
              <li>— how you react</li>
              <li>— what feels like "home," even when it hurts</li>
            </ul>
            <p>
              Patterns aren't the problem. They're the map back to the root — the imprint you absorbed long before you had words for it.
            </p>
          </div>
        </div>
      </section>

      {/* The Five Love Wounds Section */}
      <section className="py-32 bg-[#FFFDF9]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-primary uppercase tracking-wide">
              The Five Love Wounds
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At the root of every relationship pattern is a Love Wound — a subconscious definition of how love works, formed in early childhood. This wound becomes the "code" that runs your adult relationships until you bring it into awareness and rewrite it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                icon: <Heart className="w-12 h-12 stroke-1" />,
                title: "The Abandonment Wound",
                desc: "The fear that people will leave so you either cling, over-give, or pick the unavailable."
              },
              {
                icon: <X className="w-12 h-12 stroke-1" />,
                title: "The Rejection Wound",
                desc: "The belief that you're 'too much' or 'not enough,' making relationships feel like auditions."
              },
              {
                icon: <Ghost className="w-12 h-12 stroke-1" />,
                title: "The Invisibility Wound",
                desc: "You learned love meant staying quiet, shrinking, or not having needs so you disappear in relationships."
              },
              {
                icon: <Lock className="w-12 h-12 stroke-1" />,
                title: "The Control Wound",
                desc: "When chaos was normal, love feels safer when you're in charge. You manage others to manage your anxiety."
              },
              {
                icon: <Frown className="w-12 h-12 stroke-1" />,
                title: "The Unworthiness Wound",
                desc: "The belief that love must be earned so you overperform, settle, or sabotage when it gets too good."
              },
              {
                icon: <UserX className="w-12 h-12 stroke-1" />,
                title: "The Betrayal Wound",
                desc: "Trust feels dangerous. You anticipate the lie before it's spoken and protect yourself by never fully letting go."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center space-y-6 group"
              >
                <div className="w-24 h-24 mx-auto border border-primary/20 rounded-full flex items-center justify-center text-primary group-hover:border-primary/50 transition-colors bg-[#F9F7F2]">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif text-primary">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light px-4">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Help You Break the Pattern */}
      <section className="py-32 bg-[#F0EBE0]/30">
        <div className="container text-center max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl font-serif text-primary">
            How I Help You Break the Pattern
          </h2>
          
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed font-light">
            <p>
              You don't rise by trying harder — you rise by becoming aware.
            </p>
            <p>
              My work isn't about diagnosing you, fixing you, or giving you a list of strategies you'll forget by next Tuesday.
            </p>
            <p>
              It's about helping you see the pattern that's been running your life — the same way a mirror shows you what you can't see on your own.
            </p>
            <p className="italic text-primary/80">
              Once you finally see it, you stop repeating it.<br />
              And when the pattern breaks, your entire experience of love, identity, and abundance transforms.
            </p>
            <p>
              Awareness is the doorway. I just hold up the mirror — you walk through it.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Jeffrey Section */}
      <section className="py-0 bg-[#FFFDF9]">
        <div className="grid md:grid-cols-2 min-h-[800px]">
          <div className="p-16 md:p-24 flex flex-col justify-center space-y-8 bg-[#FFFDF9]">
            <h2 className="text-5xl font-serif text-primary">
              Meet Jeffrey
            </h2>
            <p className="text-xl font-serif italic text-primary/60">
              The Mirror Behind the Method
            </p>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed font-light">
              <p>
                I'm not here to fix you. I'm here to help you finally see what's been running your life. For over three decades, I've coached individuals and couples through the deeper layers of their patterns—the subconscious beliefs formed in childhood that quietly shape every relationship, every reaction, every story they tell themselves.
              </p>
              <p>
                I created The Love Wound Mirror™ because people don't need more strategies. They need to understand why the same experiences keep repeating... even when they're trying their hardest to change.
              </p>
              <p>
                My approach is simple: I show you the truth you've been too close to see and once you see it, you can't unsee it. That's when life begins to shift effortlessly.
              </p>
            </div>
            
            <div className="pt-8">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-serif rounded-none px-8 py-6">
                Read My Full Story
              </Button>
            </div>
          </div>
          
          <div className="relative h-[500px] md:h-auto bg-[#1a1a1a]">
            {/* Placeholder for Jeff's Portrait */}
            <img 
              src="/images/jeff-portrait-placeholder.jpg" 
              alt="Jeffrey Batton" 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-primary text-primary-foreground text-center">
        <div className="container max-w-4xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-6xl font-serif">
            Ready to See What's In The Mirror?
          </h2>
          <p className="text-xl text-primary-foreground/80 font-light">
            The pattern stops when the awareness begins.
          </p>
          <Button size="lg" className="bg-[#F9F7F2] text-primary hover:bg-white font-serif text-xl px-12 py-8 h-auto rounded-full transition-transform hover:scale-105">
            Book Your Breakthrough Session
          </Button>
        </div>
      </section>
    </div>
  );
}
