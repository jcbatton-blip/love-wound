import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Eye, X, Ghost, Lock, Frown } from "lucide-react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();
  const mirrorY = useTransform(scrollY, [0, 500], [0, 150]);
  const mirrorScale = useTransform(scrollY, [0, 500], [1, 1.05]);
  const mirrorOpacity = useTransform(scrollY, [0, 300], [0.6, 0.3]);

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
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#F9F7F2] pt-20 md:pt-28">
        {/* Subtle Background Texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        
        {/* Central Mirror Frame Graphic - Enhanced with parallax */}
        <motion.div 
          className="mirror-graphic absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ y: mirrorY, scale: mirrorScale }}
        >
          <motion.div 
            className="w-[700px] h-[900px] border-[3px] border-primary rounded-[50%] shadow-[0_0_100px_rgba(0,0,0,0.2),0_0_50px_rgba(0,0,0,0.1)]"
            style={{ opacity: mirrorOpacity }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <motion.div 
            className="absolute w-[680px] h-[880px] border-[2px] border-primary/80 rounded-[50%]"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
          />
          <motion.div 
            className="absolute w-[660px] h-[860px] border-[1px] border-primary/50 rounded-[50%]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          />
        </motion.div>

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
                Awaken the self you already are — through a disciplined, relational practice that changes life at the root.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
                You don't need fixing. You need remembering. Your patterns aren't problems — they're Love Wounds formed before you had words.
              </p>
              <p className="text-sm md:text-base text-primary font-medium max-w-lg mx-auto leading-relaxed mt-6 mb-8">
                This work is designed for people willing to stay — because roots only change through time and relationship.
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto">
              <Link href="/discovery" className="inline-block">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className="bg-primary text-white hover:bg-white hover:text-primary hover:border-primary hover:border-2 font-serif text-base md:text-lg px-8 md:px-10 py-5 md:py-6 h-auto rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl">
                    Apply for Root-Work Mentorship
                  </Button>
                </motion.div>
              </Link>
              <Link href="/the-practice" className="inline-block">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className="bg-primary text-white hover:bg-white hover:text-primary hover:border-primary hover:border-2 font-serif text-base md:text-lg px-8 md:px-10 py-5 md:py-6 h-auto rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl">
                    Learn How Root-Work Works
                  </Button>
                </motion.div>
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

      {/* Mirror → Practice Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary">
              The Mirror Is Where It Starts.<br />
              Practice Is Where It Changes.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              This work is structured as a <strong className="text-primary">year-long, weekly coaching relationship</strong> — not one-off sessions or quick breakthroughs.
            </p>
            <div className="pt-6">
              <Link href="/discovery">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-serif text-lg px-10 py-6 h-auto rounded-full shadow-lg hover:shadow-2xl transition-all duration-300">
                    Apply for Root-Work Mentorship
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who This Is For - Filter Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary text-center">
              Who This Is For
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* This work IS for */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">
                  This work is for people who:
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Are exhausted from "doing the right thing" and still feeling empty</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Keep repeating the same patterns in relationships, work, or self-talk</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Are ready to stop managing symptoms and deal with the root</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Will commit to a real practice</span>
                  </li>
                </ul>
              </div>

              {/* This work is NOT for */}
              <div className="bg-muted/30 border border-muted rounded-2xl p-8">
                <h3 className="text-2xl font-serif font-bold text-muted-foreground mb-6">
                  This is not for people who:
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground/50 mt-1">•</span>
                    <span>Want a quick fix</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground/50 mt-1">•</span>
                    <span>Want validation without responsibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground/50 mt-1">•</span>
                    <span>Aren't willing to question their story</span>
                  </li>
                </ul>
              </div>
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
                You Already Know Something Isn't Working.
              </h2>
              <p className="text-2xl text-primary/70 font-serif italic">
                This isn't about learning more. It's about stopping the war with yourself.
              </p>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Anthony de Mello tells a story about a thorn. Instead of removing it, you build a cage around it. You create rules: "Don't touch me there." You develop patterns: "I'll leave before you can hurt me." You demand your partner change: "You need to stop triggering me."
              </p>
              <p>
                But here's what you're really asking: <em>Do something different so I don't have to feel this.</em> Your partner isn't the problem—they're just a mirror showing you where the thorn is.
              </p>
              <p>
                <strong className="text-primary">But the thorn is still there.</strong>
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
                When your cup is full, you don't notice the slights, the injustices, or the black-tie dress code. You're free.
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
                  Scripture says, <em>"Rejoice in all things"</em> (1 Thessalonians 5:16-18). The <strong>inability</strong> to rejoice is the diagnostic—it reveals you're looking at life from an unsurrendered place, where your well-being depends on circumstances going your way.
                </p>
                <p className="mb-4">
                  When your cup overflows, you <em>can</em> rejoice in all things—not because you're forcing it, but because nothing threatens you. That's freedom.
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
                It's about helping you <strong className="text-primary">see the pattern</strong> that's been running your life — the same way a mirror shows you what you can't see on your own. <Link href="/the-practice" className="text-primary hover:underline font-medium">Discover The Mirror Method →</Link>
              </p>
              <p>
                Once you finally see it, you stop repeating it.<br />
                And when the pattern breaks, your entire experience of love, identity, and abundance transforms.
              </p>
              <p className="text-2xl font-serif italic text-primary/80 border-l-4 border-primary pl-8 py-4 bg-primary/5 rounded-r-lg mt-8">
                Awareness is the doorway. I just hold up the mirror — you walk through it. <Link href="/the-practice" className="text-primary hover:underline font-medium not-italic text-base block mt-4">See how we work together →</Link>
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

          <div className="grid md:grid-cols-3 gap-8">
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
                quote: "Jeff taught me to be self sufficient. Before I would blame everyone around me instead of forgiving one's that have hurt me. It is hard to put into words how much he has done for me in just little over a year. He is the kindest, sensitive and engaging specialist I have ever met.",
                name: "Yumi",
                tagline: "\"A Road to Self-Empowerment\""
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
