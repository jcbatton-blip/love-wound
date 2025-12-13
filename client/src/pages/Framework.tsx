import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Heart, Eye, GitBranch } from "lucide-react";

export default function Framework() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      {/* Header */}
      <section className="container mb-20 text-center max-w-4xl mx-auto">
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6"
        >
          The Anatomy of the <span className="italic text-gold-gradient">Imprint</span>
        </motion.h1>
        <motion.p 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-xl text-muted-foreground leading-relaxed"
        >
          We call it a wound, but it's actually a code. A set of instructions downloaded in childhood that dictates who you love and how you love.
        </motion.p>
      </section>

      {/* The 3-Step Process */}
      <section className="container mb-32">
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent z-0" />

          {[
            {
              step: "01",
              title: "The Download",
              icon: <Brain className="w-8 h-8 text-primary" />,
              desc: "In the first 7 years, you are in a theta brainwave state—pure hypnosis. You absorb your parents' relationship dynamics as absolute truth. 'Dad drinks' becomes 'Love is unstable.'",
              color: "bg-primary/5"
            },
            {
              step: "02",
              title: "The Re-Enactment",
              icon: <GitBranch className="w-8 h-8 text-primary" />,
              desc: "As an adult, you subconsciously seek partners who match this code. You don't want peace; you want familiarity. You hire actors to play the roles your parents wrote.",
              color: "bg-primary/10"
            },
            {
              step: "03",
              title: "The Awakening",
              icon: <Eye className="w-8 h-8 text-primary" />,
              desc: "We don't fix the partner. We look at the mirror. When you see the code, you break the spell. Awareness changes the pattern instantly.",
              color: "bg-primary/5"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10"
            >
              <Card className={`h-full border-none shadow-lg ${item.color} backdrop-blur-sm`}>
                <CardContent className="p-8 pt-12 relative">
                  <div className="absolute -top-6 left-8 bg-background border border-primary/20 w-12 h-12 rounded-full flex items-center justify-center shadow-sm">
                    <span className="font-serif font-bold text-primary">{item.step}</span>
                  </div>
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Deep Dive: The "Dad Drinks" Example */}
      <section className="py-24 bg-muted/30 mb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                "If you love me, you'll drink."
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  It sounds crazy to the conscious mind. Why would anyone want a partner who drinks, or hits, or leaves?
                </p>
                <p>
                  But to the subconscious mind, <strong>love = familiarity</strong>.
                </p>
                <p>
                  If Dad loved Mom, and Dad drank, your 5-year-old brain wrote a simple equation: <span className="italic text-primary">Love includes drinking.</span>
                </p>
                <p>
                  So you meet a nice guy who doesn't drink. He's stable. He's kind. And you're... bored. There's no "spark." Because the spark isn't chemistry—it's recognition. Your wound recognizes its match.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center p-12">
                <div className="text-center space-y-4">
                  <Heart className="w-16 h-16 text-primary mx-auto opacity-80" />
                  <p className="font-serif text-2xl text-primary italic">
                    "We spend our lives chasing the feeling of home, even if home was a burning building."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Mirror Concept */}
      <section className="container mb-24 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">
            You Don't Need a Guru.<br />You Need a Mirror.
          </h2>
          <p className="text-xl text-muted-foreground">
            My job isn't to fix you. You aren't broken. My job is to hold up the mirror so you can see the code running your life.
          </p>
          <p className="text-lg text-muted-foreground">
            Once you see it, you can't unsee it. And that's when the freedom begins.
          </p>
          <Button size="lg" className="mt-8 font-serif rounded-full px-8">
            Book a Mirror Session
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
