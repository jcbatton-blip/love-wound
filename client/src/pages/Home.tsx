import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Fingerprint, RefreshCw, Heart } from "lucide-react";
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
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-reflection.png" 
            alt="Ethereal reflection" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/90" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="container relative z-10 pt-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <motion.div variants={fadeIn}>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium tracking-wider uppercase mb-4">
                Beyond The Wound
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight hero-text-shadow">
              It's Not a Wound.<br />
              <span className="text-gold-gradient italic">It's an Imprint.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto hero-text-shadow">
              You were born knowing love. You just learned how to do it from watching others. Rewrite the code that defines your relationships.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-serif text-lg px-8 py-6 h-auto rounded-full shadow-xl transition-transform hover:scale-105">
                Discover Your Pattern
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-serif text-lg px-8 py-6 h-auto rounded-full backdrop-blur-sm">
                Explore the Framework
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to Reflect</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
        </motion.div>
      </section>

      {/* The Insight Section */}
      <section className="py-24 md:py-32 bg-background relative">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="/images/pattern-imprint.png" 
                  alt="Neural pathways of imprinting" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-accent/20 rounded-full blur-3xl" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                The <span className="italic text-primary/80">Wound</span> is the Hook.<br />
                The <span className="italic text-primary/80">Code</span> is the Root.
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We call it a "Love Wound," but that's just the surface. In your first seven years, you were in a state of pure absorption—downloading patterns of love from your parents without judgment.
                </p>
                <p>
                  <strong className="text-primary font-medium">You didn't choose these patterns. You imprinted them.</strong>
                </p>
                <p>
                  "Dad hits mom" becomes "Hitting is love."<br />
                  "Mom hides emotions" becomes "Silence is safety."
                </p>
                <p>
                  These aren't flaws in your character. They are codes in your operating system. And codes can be rewritten.
                </p>
              </div>
              
              <div className="pt-4">
                <Link href="/framework">
                  <a className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all group">
                    <span className="border-b border-primary/30 pb-1 group-hover:border-primary">Read about the Imprinting Theory</span>
                    <ArrowRight size={18} />
                  </a>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Framework Steps */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">From Pattern to Freedom</h2>
            <p className="text-muted-foreground text-lg">
              We don't "fix" you because you aren't broken. We bring the unconscious to the conscious.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Fingerprint className="w-10 h-10 text-primary" />,
                title: "The Imprint",
                desc: "Identify the specific 'Love Code' you downloaded in childhood. Not the vague trauma, but the specific rules of engagement you learned."
              },
              {
                icon: <RefreshCw className="w-10 h-10 text-primary" />,
                title: "The Pattern",
                desc: "See how you attract partners with matching wounds. 'Iron sharpens iron'—we choose people who trigger our specific code to help us heal."
              },
              {
                icon: <Sparkles className="w-10 h-10 text-primary" />,
                title: "The Awakening",
                desc: "You don't need to chop the root. You just need to see it. Awareness itself is the transformation. Once you see, you can't unsee."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <Card className="h-full bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors duration-300">
                  <CardContent className="p-8 space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-primary">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Iron Sharpens Iron Section */}
      <section className="py-24 md:py-32 relative">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 order-2 md:order-1"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                Iron Sharpens Iron
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Why do you keep attracting the same type of partner? The one who disrespects you? The one who is emotionally unavailable?
                </p>
                <p>
                  It's not bad luck. It's <strong className="text-primary">matching wounds</strong>.
                </p>
                <p>
                  We subconsciously seek out partners who validate our internal belief system. If your code says "Love is earning affection," you will be bored by someone who gives it freely. You will seek the one who makes you work for it.
                </p>
                <p>
                  But this isn't a mistake. It's an opportunity. Your relationship is the laboratory where the healing happens.
                </p>
              </div>
              
              <div className="pt-4">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-serif rounded-full px-8">
                  Understand Your Attraction
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 md:order-2"
            >
              <div className="aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="/images/iron-sharpens-iron.png" 
                  alt="Iron sharpening iron abstract" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/awareness-light.png" 
            alt="Light of awareness" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        
        <div className="container relative z-10 text-center max-w-4xl mx-auto space-y-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold text-primary"
          >
            You don't change until you see.<br />
            <span className="italic font-light">And once you see, you can't unsee.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Start the journey from subconscious pattern to conscious freedom.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif text-xl px-10 py-8 h-auto rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              Begin Your Transformation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
