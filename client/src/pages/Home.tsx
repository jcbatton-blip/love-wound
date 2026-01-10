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
                <Button size="lg" className="bg-primary text-white hover:bg-white hover:text-primary hover:border-primary hover:border-2 font-serif text-base md:text-lg px-8 md:px-10 py-5 md:py-6 h-auto rounded-full transition-all duration-300 shadow-lg">
                  Book Free Discovery Session
                </Button>
              </Link>
              <Link href="/pattern-revealed" className="inline-block">
                <Button size="lg" className="bg-primary text-white hover:bg-white hover:text-primary hover:border-primary hover:border-2 font-serif text-base md:text-lg px-8 md:px-10 py-5 md:py-6 h-auto rounded-full transition-all duration-300 shadow-lg">
                  See How Patterns Work
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-8 bg-gradient-to-b from-[#F9F7F2] to-[#F0EBE0]/30">
        <div className="container max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="border-none shadow-xl bg-white/80 backdrop-blur">
              <CardContent className="p-6 md:p-8">
                <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-6 italic">
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
              <div className="flex flex-col p-6 bg-white rounded-xl border border-primary/10">
                <h3 className="text-xl font-serif text-primary mb-4">Singles</h3>
                <p className="text-muted-foreground mb-4 flex-grow">Stuck in cycles of choosing the wrong person? Learn why—and how to stop.</p>
                <Link href="/discovery" className="inline-block">
                  <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-white rounded-full">
                    Start Here <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col p-6 bg-white rounded-xl border border-primary/10">
                <h3 className="text-xl font-serif text-primary mb-4">Couples</h3>
                <p className="text-muted-foreground mb-4 flex-grow">Ready to transform your relationship? Heal patterns together and rebuild trust.</p>
                <Link href="/discovery" className="inline-block">
                  <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-white rounded-full">
                    Book Together <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col p-6 bg-white rounded-xl border border-primary/10">
                <h3 className="text-xl font-serif text-primary mb-4">High-Performers</h3>
                <p className="text-muted-foreground mb-4 flex-grow">Successful everywhere except love? Discover the pattern holding you back.</p>
                <Link href="/discovery" className="inline-block">
                  <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-white rounded-full">
                    Break The Pattern <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
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
              When you were born, the only thing you knew was love. Mom and dad showed you how to do it. Before you had language, before logic or memory, you absorbed:
            </p>
            <div className="py-8">
              <p className="text-4xl md:text-5xl font-serif font-semibold text-primary">
                How love works.
              </p>
            </div>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              Not because anyone taught you... but because you felt it. That's where imprinting comes in.
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
            
            <p className="mt-6">
              You think you're attracted to people because of how they look or how they act. But really, what draws you to one another are <strong className="text-primary">matching wounds</strong>. Those matching wounds are designed to bring each other's wounds to the surface—so you can become aware of them and ultimately heal from them.
            </p>
            
            <p className="italic text-primary/70 mt-4">
              Iron sharpens iron.
            </p>
            
            <p className="text-2xl font-serif italic text-primary/80 border-l-4 border-primary pl-8 py-4 bg-primary/5 rounded-r-lg mt-6">
              Patterns aren't the problem—they're the fruit of a deeper root. They're the map back to the imprint you absorbed long before you had words for it.
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

      {/* The Thorn You're Protecting - de Mello Framework */}
      <section className="py-12 md:py-24 bg-white">
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
                You're Not Broken. You Have a Thorn You're Protecting.
              </h2>
              <p className="text-2xl text-primary/70 font-serif italic">
                Most coaches help you build a better cage. I help you remove the thorn.
              </p>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Anthony de Mello tells a story about a thorn. Instead of removing it, we build a cage around it. We create rules: "Don't touch me there." We develop patterns: "I'll leave before you can hurt me." We demand our partner change: "You need to stop triggering me."
              </p>
              <p>
                But here's what you're really asking: <em>Do something different so I don't have to feel this.</em> Your partner isn't the problem—they're just a mirror showing you where the thorn is. You're just mad at the mirror cause your hair's messed up. Getting a new mirror won't fix your hair.
              </p>
              <p>
                <strong className="text-primary">But the thorn is still there.</strong>
              </p>
              <p>
                Most coaches help you build a better cage. Better boundaries. Better communication. Better coping strategies. They teach you to manage the thorn, protect it, work around it.
              </p>
              <p className="text-2xl font-serif italic text-primary/80 border-l-4 border-primary pl-8 py-4 bg-primary/5 rounded-r-lg">
                I don't help you manage the cage. I help you remove the thorn.
              </p>
              <p>
                The thorn is your Love Wound—the imprint formed in childhood that's been running your relationships ever since. The cage is the pattern you built to protect it. And the exhaustion you feel? That's from spending your whole life defending something that doesn't need to be there.
              </p>
              <p>
                <strong className="text-primary">Once the thorn is removed, you don't need the cage anymore.</strong> No more rules. No more demands. No more victim stories. Just freedom.
              </p>
            </div>

            <div className="text-center pt-6">
              <Link href="/discovery">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-serif text-lg px-10 py-6 h-auto rounded-full">
                  Remove the Thorn
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stop Draining Your Cup - Overflow Framework */}
      <section className="py-12 md:py-24 bg-white">
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
                Stop Draining Your Cup. The Overflow Happens Naturally.
              </h2>
              <p className="text-2xl text-primary/70 font-serif italic">
                When your cup is full, you don't notice the slights, the injustices, or the black-tie dress code. You're free.
              </p>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Most people spend their lives draining their cup—doing what they <em>should</em> instead of what they <em>want</em>, betraying themselves to keep the peace, waiting to be saved by someone else.
              </p>
              <p>
                The result? Resentment. Exhaustion. Toxic relationships. Medicating the emptiness.
              </p>
              <p className="text-2xl font-serif italic text-primary/80 border-l-4 border-primary pl-8 py-4 bg-primary/5 rounded-r-lg">
                My work isn't about filling your cup. It's about helping you see how you're draining it.
              </p>
              <p>
                Once you stop the drain (heal the wound, break the pattern, end the self-betrayal), the cup fills naturally. And when it overflows, you stop noticing. You stop keeping score. You stop defending yourself.
              </p>
              <p>
                <strong className="text-primary">That's self-actualization. That's what the father in the Prodigal Son had—a cup so full, he could rejoice when his son returned instead of keeping score of the betrayal. That's freedom.</strong>
              </p>
              <div className="bg-primary/5 rounded-xl p-8 mt-8">
                <h3 className="text-2xl font-serif text-primary mb-4">The Rejoicing Test</h3>
                <p className="mb-4">
                  Scripture says, "Rejoice in all things." When your cup is in overflow, you <em>can</em> rejoice in all things—not because you're forcing it, but because nothing threatens you.
                </p>
                <p className="font-medium text-primary">
                  Where are you NOT rejoicing? That's where your cup isn't full. That's where the wound lives.
                </p>
              </div>
            </div>

            <div className="text-center pt-6">
              <Link href="/discovery">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-serif text-lg px-10 py-6 h-auto rounded-full">
                  Fill Your Cup to Overflow
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Root vs. Fruit Framework */}
      <section className="py-12 md:py-24 bg-[#F0EBE0]/30">
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
                Stop Chasing the Fruit. Heal the Root.
              </h2>
              <p className="text-2xl text-primary/70 font-serif italic">
                When you focus on the fruit, you're focused on lack.
              </p>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                You think you want a better relationship. What you actually need is to see the pattern that keeps creating bad ones.
              </p>
              <p>
                You think you want more confidence. What you actually need is to heal the wound that makes you seek validation.
              </p>
              <p>
                You think you want inner peace. What you actually need is to stop betraying yourself.
              </p>
              <p className="text-2xl font-serif italic text-primary/80 border-l-4 border-primary pl-8 py-4 bg-primary/5 rounded-r-lg">
                Most coaches help you chase the fruit. I help you heal the root. Once the root is healed, the fruit appears on its own.
              </p>
              <p>
                <strong className="text-primary">The fruit—the relationship, the confidence, the peace—isn't a goal to chase. It's what remains when you stop draining your cup.</strong>
              </p>
            </div>

            <div className="text-center pt-6">
              <Link href="/discovery">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-serif text-lg px-10 py-6 h-auto rounded-full">
                  Heal the Root
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Relationship Myth - Two Overflow Cups */}
      <section className="py-12 md:py-24 bg-[#F9F7F2]">
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
                Your Partner Can't Fill Your Cup. And You Can't Fill Theirs.
              </h2>
              <p className="text-2xl text-primary/70 font-serif italic">
                The goal is two overflow cups—not two people trying to complete each other.
              </p>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Most people enter relationships with half-empty cups, hoping their partner will fill the rest. "I got my cup to here, now YOU take it the rest of the way."
              </p>
              <p>
                This is the source of every toxic dynamic:
              </p>
              <ul className="space-y-3 pl-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">—</span>
                  <span>Codependency ("I need you to complete me")</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">—</span>
                  <span>Resentment ("I'm giving everything, why isn't it enough?")</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">—</span>
                  <span>Blame ("If you really loved me, I wouldn't feel this empty")</span>
                </li>
              </ul>
              <p className="text-2xl font-serif italic text-primary/80 border-l-4 border-primary pl-8 py-4 bg-primary/5 rounded-r-lg">
                Your partner can't fill your cup. Only you can. But here's the good news: Your partner shows you exactly where your cup isn't full. Every trigger, every fight, every moment of resentment—that's the mirror.
              </p>
              <p>
                <strong className="text-primary">The goal isn't to find someone who fills your cup. The goal is to reach overflow yourself—and find someone who's also in overflow.</strong>
              </p>
              <p>
                Two overflow cups = a relationship where nobody's keeping score, nobody's waiting to be saved, and nobody's operating from lack.
              </p>
            </div>

            <div className="text-center pt-6">
              <Link href="/discovery">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-serif text-lg px-10 py-6 h-auto rounded-full">
                  Build Your Overflow
                </Button>
              </Link>
            </div>
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
              <p className="text-2xl text-primary/70 font-serif italic">
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
              <p className="text-2xl font-serif italic text-primary/80 border-l-4 border-primary pl-8 py-4 bg-primary/5 rounded-r-lg mt-8">
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
            <p className="text-2xl text-primary/70 font-serif italic">
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
