import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Eye, X, Ghost, Lock, Frown } from "lucide-react";
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
      {/* Hero Section - Content Centered in Mirror */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#F9F7F2]">
        {/* Subtle Background Texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        
        {/* Central Mirror Frame Graphic - Now contains the content */}
        <div className="mirror-graphic absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[900px] border-[3px] border-primary rounded-[50%] shadow-[0_0_100px_rgba(0,0,0,0.2)] opacity-60" />
          <div className="absolute w-[680px] h-[880px] border-[2px] border-primary/80 rounded-[50%]" />
          <div className="absolute w-[660px] h-[860px] border-[1px] border-primary/50 rounded-[50%]" />
        </div>

        {/* Content Container - Centered within mirror */}
        <div className="container relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl mx-auto text-center space-y-8 px-4"
          >
            <motion.div variants={fadeIn}>
              <span className="font-serif italic text-lg md:text-xl text-primary/70 tracking-wide">
                The Love Wound Mirror™
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-primary leading-tight">
              You Don't Need A Guru.<br />
              <span className="italic">You Need A Mirror.</span>
            </motion.h1>
            
            <motion.div variants={fadeIn} className="space-y-5">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-primary/80">
                Awaken the Self You Already Are.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
                You don't need fixing. You need remembering. Your patterns aren't problems—they're imprints from before you had words for them.
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto">
              <Link href="/discovery" className="inline-block">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-serif text-base md:text-lg px-8 md:px-10 py-5 md:py-6 h-auto rounded-full transition-all duration-300 shadow-lg">
                  Begin the Mirror Method
                </Button>
              </Link>
              <Link href="/pattern-revealed" className="inline-block">
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-serif text-base md:text-lg px-8 md:px-10 py-5 md:py-6 h-auto rounded-full transition-all duration-300">
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="border-none shadow-xl bg-white/80 backdrop-blur">
              <CardContent className="p-10 md:p-14">
                <div className="text-6xl text-primary/20 font-serif leading-none mb-6">"</div>
                <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-8 italic">
                  I spent years in therapy talking about my patterns. Three sessions with Jeff, and I finally understood why I kept choosing the same type of person. More importantly, I learned how to stop.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-serif text-lg">SM</span>
                  </div>
                  <div>
                    <p className="font-medium text-primary">Sarah M.</p>
                    <p className="text-sm text-muted-foreground">Marketing Director, Chicago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* What I Do - SEO Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary">
              Relationship Life Coaching for Pattern Healing & Lasting Love
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              I help individuals and couples break toxic relationship patterns and build lasting, healthy love through awareness-based coaching. Whether you're stuck in cycles of abandonment, rejection, betrayal, or other Love Wounds, my approach gets to the root—not just the symptoms.
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-6">
              <div className="space-y-3">
                <h3 className="text-xl font-serif text-primary">Singles</h3>
                <p className="text-muted-foreground">Stuck in cycles of choosing the wrong person? Learn why—and how to stop.</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-serif text-primary">Couples</h3>
                <p className="text-muted-foreground">Ready to transform your relationship? Heal patterns together and rebuild trust.</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-serif text-primary">High-Performers</h3>
                <p className="text-muted-foreground">Successful everywhere except love? Discover the pattern holding you back.</p>
              </div>
            </div>
            <div className="pt-6">
              <Link href="/discovery">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-serif text-lg px-10 py-6 h-auto rounded-full">
                  Book Your Free Discovery Session
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Mirror Method Section */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-[#F0EBE0]/30 to-[#F9F7F2]">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8 mb-16"
          >
            <div className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-widest uppercase">
              The Mirror Method™
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary">
              See the Pattern. Break its Spell. Rewrite Your Life.
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              Your life isn't shaped by your choices — it's shaped by your imprint. Before you ever had language, before logic or memory, you absorbed one thing:
            </p>
            <p className="text-2xl font-serif italic text-primary/80">
              How love works.
            </p>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              Not because anyone taught you... but because you felt it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              Those early experiences became the <strong className="text-primary">Love Wound Imprint™</strong> — a subconscious pattern that still determines:
            </p>
            <ul className="space-y-3 pl-6">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">—</span>
                <span>who you're drawn to</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">—</span>
                <span>how you react</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">—</span>
                <span>what feels like "home," even when it hurts</span>
              </li>
            </ul>
              <p className="text-xl font-serif italic text-primary/80 border-l-4 border-primary pl-8 py-4 bg-primary/5 rounded-r-lg">
              Patterns aren't the problem. They're the map back to the root — the imprint you absorbed long before you had words for it.
            </p>
            <div className="text-center pt-8">
              <Link href="/discovery">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-serif text-lg px-10 py-6 h-auto rounded-full">
                  Book Your Free Discovery Session
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Six Love Wounds */}
      <section className="py-12 md:py-24 bg-[#F9F7F2]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary">
              The Six Love Wounds
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              At the root of every relationship pattern is a Love Wound — a subconscious definition of how love works, formed in early childhood. This wound becomes the "code" that runs your adult relationships until you bring it into awareness and rewrite it. <Link href="/patterns" className="text-primary hover:underline font-medium">Learn more about each wound →</Link>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Heart, title: "Abandonment", description: "Fear of being left behind or forgotten. You cling, chase, or sabotage before they can leave first." },
              { icon: Eye, title: "Rejection", description: "Fear of not being chosen. You dim your light, hide your truth, or perform to be accepted." },
              { icon: X, title: "Betrayal", description: "Fear of being deceived. You test loyalty, withhold trust, or stay hypervigilant for signs of betrayal." },
              { icon: Ghost, title: "Invisibility", description: "Fear of not mattering. You over-give, over-function, or disappear entirely to avoid being a burden." },
              { icon: Lock, title: "Suffocation", description: "Fear of losing yourself. You pull away, create distance, or resist commitment to protect your autonomy." },
              { icon: Frown, title: "Inadequacy", description: "Fear of not being enough. You overachieve, prove your worth, or stay small to avoid exposure." }
            ].map((wound, index) => (
              <motion.div
                key={wound.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-white/80 backdrop-blur">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <wound.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-serif text-primary">{wound.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {wound.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center pt-12"
          >
            <Link href="/discovery">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-serif text-lg px-10 py-6 h-auto rounded-full shadow-lg">
                Book Your Free Discovery Session
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How I Help Section */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-[#F9F7F2] to-[#F0EBE0]/30">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary">
                How I Help You Break the Pattern
              </h2>
              <p className="text-xl text-primary/70 font-serif italic">
                You don't rise by trying harder — you rise by becoming aware.
              </p>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                My work isn't about diagnosing you, fixing you, or giving you a list of strategies you'll forget by next Tuesday.
              </p>
              <p>
                It's about helping you <strong className="text-primary">see the pattern</strong> that's been running your life — the same way a mirror shows you what you can't see on your own. <Link href="/framework" className="text-primary hover:underline font-medium">Discover The Mirror Method →</Link>
              </p>
              <p>
                Once you finally see it, you stop repeating it.<br />
                And when the pattern breaks, your entire experience of love, identity, and abundance transforms.
              </p>
              <p className="text-xl font-serif italic text-primary/80 border-l-4 border-primary pl-8 py-4 bg-primary/5 rounded-r-lg mt-8">
                Awareness is the doorway. I just hold up the mirror — you walk through it. <Link href="/work-with-me" className="text-primary hover:underline font-medium not-italic text-base block mt-4">See how we work together →</Link>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet Jeffrey Section */}
      <section className="py-12 md:py-24 bg-[#F0EBE0]/30">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="/images/jeff-batton-headshot-enhanced.png" 
                alt="Jeff Batton - Relationship Life Coach and Creator of The Mirror Method for healing love wounds and toxic patterns" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-widest uppercase">
                Meet Jeffrey
              </div>
              <h2 className="text-4xl font-serif font-medium text-primary">
                The Mirror Behind the Method
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-sm text-primary/60 font-medium tracking-wide mb-2">
                  Creator of The Mirror Method™ · Author of "Grinnin' Like a Jackass Eatin' Briars"
                </p>
                <p>
                  I'm not here to fix you. I'm here to help you finally see what's been running your life. For over three decades, I've coached individuals and couples through the deeper layers of their patterns—the subconscious beliefs formed in childhood that quietly shape every relationship, every reaction, every story they tell themselves.
                </p>
                <p>
                  I created The Love Wound Mirror™ because people don't need more strategies. They need to understand <em>why</em> the same experiences keep repeating... even when they're trying their hardest to change.
                </p>
                <p>
                  My approach is simple: I show you the truth you've been too close to see and once you see it, you can't unsee it. That's when life begins to shift effortlessly.
                </p>
              </div>
              <Link href="/about">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-serif rounded-full px-8 py-6 h-auto">
                  Read My Full Story
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 md:py-24 bg-[#F9F7F2]">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary">
              Stories from the Mirror
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Jeff's guidance has saved my life. I was in therapy for 17 years. I struggled with anxiety, depression and addiction. Jeff is not only a safe place for me but someone whose guidance I can trust. I could never imagine my life & headspace where they are today.",
                name: "Tyler",
                tagline: "\"Everyone needs a Jeff\""
              },
              {
                quote: "The Work, The Syllabus, The Questions. Jeff has a way about him to cut to the heart of the matter. It's not always easy but definitely worth it. I like to call it The Unlearning of Barbara B. I am no longer caught up in my stories of lack.",
                name: "Barbara",
                tagline: "\"Life is Forever Changed\""
              },
              {
                quote: "Jeff is amazing!! I struggle with anxiety and depression.. when I started with Jeff it was hard to comprehend what was real vs what my ego is telling me, but in one session right before my eyes the negative assumptions changed and I saw the positive outcome.",
                name: "Denitra",
                tagline: "\"Jeff is the real deal\""
              },
              {
                quote: "Jeff taught me to be self sufficient. Before I would blame everyone around me instead of forgiving one's that have hurt me. It is hard to put into words how much he has done for me in just little over a year. He is the kindest, sensitive and engaging specialist I have ever met.",
                name: "Yumi",
                tagline: "\"A Road to Self-Empowerment\""
              },
              {
                quote: "Jeff is like a lighthouse. Metaphorically speaking, he has helped me navigate through life's challenges and difficult times. Jeff provides a sense of direction, safety, and hope. And just like a lighthouse, Jeff helps me see when I'm off course.",
                name: "Veronica",
                tagline: "\"Learning to see things differently\""
              },
              {
                quote: "I started working with Jeff since Feb 2023 and looking back I can not tell you how much I have grown, and finally seeing life for what it is. BEAUTIFUL! Thanks to Jeff I understand that I am not just a mom, a wife, a daughter, and a friend. I am on the path to love myself.",
                name: "Rachael",
                tagline: "\"Empowering Transformation\""
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-primary/10 hover:border-primary/20 transition-all duration-300 bg-white/80 backdrop-blur">
                  <CardContent className="p-8 space-y-6">
                    <p className="text-muted-foreground leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="space-y-1">
                      <p className="font-medium text-primary">{testimonial.name}</p>
                      <p className="text-sm text-primary/60 font-serif italic">{testimonial.tagline}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-[#F9F7F2] to-[#F0EBE0]">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary">
              Ready to See What's In The Mirror?
            </h2>
            <p className="text-xl text-primary/70 font-serif italic">
              The pattern stops when the awareness begins.
            </p>
            <Link href="/discovery">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-serif text-lg px-12 py-7 h-auto rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl">
                Begin Your Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
