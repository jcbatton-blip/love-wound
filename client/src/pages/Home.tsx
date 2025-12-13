import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Eye, X, Ghost, Lock, Frown, UserX } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

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
        
        {/* Central Mirror Frame Graphic (Abstract representation) - Enhanced with deeper opacity and layered rings */}
        <div className="mirror-graphic absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
          <div className="w-[600px] h-[800px] border-[3px] border-primary rounded-[50%] transform scale-110 shadow-[0_0_80px_rgba(0,0,0,0.15)]" />
          <div className="absolute w-[580px] h-[780px] border-[2px] border-primary/80 rounded-[50%] transform scale-110" />
          <div className="absolute w-[560px] h-[760px] border-[1px] border-primary/50 rounded-[50%] transform scale-110" />
          <div className="absolute w-[540px] h-[740px] border-[1px] border-primary/30 rounded-[50%] transform scale-110" />
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
                You don't need fixing. You need remembering. Your patterns aren't problems—they're imprints from before you had words for them.
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/discovery" className="inline-block">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-serif text-lg px-10 py-6 h-auto rounded-full transition-all duration-300 shadow-lg">
                  Book Free Discovery Session
                </Button>
              </Link>
              <Link href="/pattern-revealed" className="inline-block">
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-serif text-lg px-10 py-6 h-auto rounded-full transition-all duration-300">
                  See How Patterns Work
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gradient-to-b from-[#F9F7F2] to-[#F0EBE0]/30">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/50 backdrop-blur-sm rounded-2xl p-12 border border-primary/10 shadow-lg"
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="text-6xl text-primary/20 font-serif leading-none">"</div>
              <p className="text-xl md:text-2xl font-serif italic text-primary leading-relaxed -mt-8">
                I spent years in therapy talking about my patterns. Three sessions with Jeff, and I finally understood why I kept choosing the same type of person. More importantly, I learned how to stop.
              </p>
              <div className="pt-4 border-t border-primary/10 w-full">
                <p className="text-sm font-medium text-primary tracking-widest uppercase">Sarah M.</p>
                <p className="text-sm text-primary/60">Marketing Director, Chicago</p>
              </div>
            </div>
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

      {/* The Six Love Wounds Section */}
      <section className="py-32 bg-[#FFFDF9]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-primary uppercase tracking-wide">
              The Six Love Wounds
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
              <Link href="/about">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-serif rounded-none px-8 py-6">
                  Read My Full Story
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative h-full min-h-[600px] bg-neutral-100">
            <img 
              src="/images/jeff-batton-headshot-enhanced.png" 
              alt="Jeff Batton" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-primary text-center mb-16">Stories from the Mirror</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-6 p-8 bg-[#F9F7F2] rounded-lg border border-primary/5">
              <p className="text-lg text-muted-foreground italic leading-relaxed">
                "Jeff's guidance has saved my life. I was in therapy for 17 years. I struggled with anxiety, depression and addiction. Jeff is not only a safe place for me but someone whose guidance I can trust. I could never imagine my life & headspace where they are today."
              </p>
              <div>
                <p className="font-serif text-primary text-lg">Tyler</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">"Everyone needs a Jeff"</p>
              </div>
            </div>
            <div className="space-y-6 p-8 bg-[#F9F7F2] rounded-lg border border-primary/5">
              <p className="text-lg text-muted-foreground italic leading-relaxed">
                "The Work, The Syllabus, The Questions. Jeff has a way about him to cut to the heart of the matter. It's not always easy but definitely worth it. I like to call it The Unlearning of Barbara B. I am no longer caught up in my stories of lack."
              </p>
              <div>
                <p className="font-serif text-primary text-lg">Barbara</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">"Life is Forever Changed"</p>
              </div>
            </div>
            <div className="space-y-6 p-8 bg-[#F9F7F2] rounded-lg border border-primary/5">
              <p className="text-lg text-muted-foreground italic leading-relaxed">
                "Jeff is amazing!! I struggle with anxiety and depression.. when I started with Jeff it was hard to comprehend what was real vs what my ego is telling me, but in one session right before my eyes the negative assumptions changed and I saw the positive outcome."
              </p>
              <div>
                <p className="font-serif text-primary text-lg">Denitra</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">"Jeff is the real deal"</p>
              </div>
            </div>
            <div className="space-y-6 p-8 bg-[#F9F7F2] rounded-lg border border-primary/5">
              <p className="text-lg text-muted-foreground italic leading-relaxed">
                "Jeff taught me to be self sufficient. Before I would blame everyone around me instead of forgiving one's that have hurt me. It is hard to put into words how much he has done for me in just little over a year. He is the kindest, sensitive and engaging specialist I have ever met."
              </p>
              <div>
                <p className="font-serif text-primary text-lg">Yumi</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">"A Road to Self-Empowerment"</p>
              </div>
            </div>
            <div className="space-y-6 p-8 bg-[#F9F7F2] rounded-lg border border-primary/5">
              <p className="text-lg text-muted-foreground italic leading-relaxed">
                "Jeff is like a lighthouse. Metaphorically speaking, he has helped me navigate through life's challenges and difficult times. Jeff provides a sense of direction, safety, and hope. And just like a lighthouse, Jeff helps me see when I'm off course."
              </p>
              <div>
                <p className="font-serif text-primary text-lg">Veronica</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">"Learning to see things differently"</p>
              </div>
            </div>
            <div className="space-y-6 p-8 bg-[#F9F7F2] rounded-lg border border-primary/5">
              <p className="text-lg text-muted-foreground italic leading-relaxed">
                "I started working with Jeff since Feb 2023 and looking back I can not tell you how much I have grown, and finally seeing life for what it is. BEAUTIFUL! Thanks to Jeff I understand that I am not just a mom, a wife, a daughter, and a friend. I am on the path to love myself."
              </p>
              <div>
                <p className="font-serif text-primary text-lg">Rachael</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">"Empowering Transformation"</p>
              </div>
            </div>
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
          <Link href="/services">
            <Button size="lg" className="bg-[#F9F7F2] text-primary hover:bg-white font-serif text-xl px-12 py-8 h-auto rounded-full transition-transform hover:scale-105">
              Book Your Breakthrough Session
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
