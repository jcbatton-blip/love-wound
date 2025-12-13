import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Brain, Heart, Eye, GitBranch } from "lucide-react";

export default function Framework() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="pt-32 pb-16 min-h-screen bg-[#F9F7F2]">
      {/* Header */}
      <section className="container mb-24 text-center max-w-4xl mx-auto">
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-4xl md:text-6xl font-serif text-primary mb-8"
        >
          The Anatomy of the <span className="italic">Imprint</span>
        </motion.h1>
        <motion.p 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-xl text-muted-foreground leading-relaxed font-light"
        >
          We call it a wound, but it's actually a code. A set of instructions downloaded in childhood that dictates who you love and how you love.
        </motion.p>
      </section>

      {/* The 3-Step Process */}
      <section className="container mb-32">
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[1px] bg-primary/10 z-0" />

          {[
            {
              step: "01",
              title: "The Download",
              icon: <Brain className="w-8 h-8 text-primary" />,
              desc: "In the first 7 years, you are in a theta brainwave state—pure hypnosis. You absorb your parents' relationship dynamics as absolute truth. 'Dad drinks' becomes 'Love is unstable.'",
            },
            {
              step: "02",
              title: "The Re-Enactment",
              icon: <GitBranch className="w-8 h-8 text-primary" />,
              desc: "As an adult, you subconsciously seek partners who match this code. You don't want peace; you want familiarity. You hire actors to play the roles your parents wrote.",
            },
            {
              step: "03",
              title: "The Awakening",
              icon: <Eye className="w-8 h-8 text-primary" />,
              desc: "We don't fix the partner. We look at the mirror. When you see the code, you break the spell. Awareness changes the pattern instantly.",
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
              <Card className="h-full border border-primary/10 shadow-sm bg-white hover:shadow-md transition-shadow duration-300 rounded-none">
                <CardContent className="p-10 pt-12 relative text-center">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#F9F7F2] border border-primary/20 w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="font-serif font-bold text-primary">{item.step}</span>
                  </div>
                  <div className="mb-6 flex justify-center">{item.icon}</div>
                  <h3 className="text-2xl font-serif text-primary mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Study: The Setup */}
      <section className="py-24 bg-white mb-24">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-primary/40">Case Study</span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mt-4">The Setup</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                A newlywed couple came to me in crisis. After just 6 months of marriage, the husband—who had never been violent in his life—had hit her. She brought him to me to "fix him."
              </p>
              <p>
                When I asked about her history, she got agitated. "He's the problem!" she insisted. But I pressed on.
              </p>
              <ul className="space-y-2 pl-4 border-l-2 border-primary/20 italic">
                <li>"Tell me about your dad." <span className="text-primary">"He was a beater."</span></li>
                <li>"Your grandfather?" <span className="text-primary">"A beater."</span></li>
                <li>"Great-grandfather?" <span className="text-primary">"Beater too."</span></li>
              </ul>
              <p>
                Then I asked the clincher: "Has your stepdad ever hit your mom?" She paused. "Not much," she said.
              </p>
            </div>
            
            <div className="bg-[#F9F7F2] p-10 rounded-2xl border border-primary/10">
              <h3 className="text-2xl font-serif text-primary mb-6">The Subconscious Logic</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary font-bold shrink-0">1</div>
                  <p className="text-muted-foreground">Her childhood code: <strong className="text-primary">"If you don't hit me, you don't really love me."</strong></p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary font-bold shrink-0">2</div>
                  <p className="text-muted-foreground">She subconsciously "set him up" to hit her to validate this belief system.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary font-bold shrink-0">3</div>
                  <p className="text-muted-foreground">He likely had a matching wound ("I'm always in trouble," "I'm not enough") that made him susceptible to the setup.</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-primary/10 text-center">
                <p className="text-xl font-serif text-primary italic">
                  "It's not your fault. It's your programming."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: The "Dad Drinks" Example */}
      <section className="py-24 bg-[#F0EBE0]/30 mb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8">
                "If you love me, you'll drink."
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
                <p>
                  It sounds crazy to the conscious mind. Why would anyone want a partner who drinks, or hits, or leaves?
                </p>
                <p>
                  But to the subconscious mind, <strong className="font-medium text-primary">love = familiarity</strong>.
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
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square border border-primary/10 bg-white p-12 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <Heart className="w-16 h-16 text-primary mx-auto opacity-20" />
                  <p className="font-serif text-2xl text-primary italic leading-relaxed">
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
          <h2 className="text-3xl md:text-5xl font-serif text-primary">
            You Don't Need a Guru.<br />You Need a Mirror.
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            My job isn't to fix you. You aren't broken. My job is to hold up the mirror so you can see the code running your life.
          </p>
          <a href="/services" className="inline-block mt-8">
            <Button size="lg" className="font-serif rounded-full px-10 py-6 h-auto bg-primary text-white hover:bg-primary/90">
              Book a Mirror Session
            </Button>
          </a>
        </motion.div>
      </section>
    </div>
  );
}
