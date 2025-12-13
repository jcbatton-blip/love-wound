import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PatternRevealed() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-b from-[#F0EBE0] to-[#F9F7F2]">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center space-y-8"
          >
            <div className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-widest uppercase">
              The Pattern Revealed
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-primary leading-tight">
              Why We're Drawn to What Hurts Us
            </h1>
            <p className="text-xl text-primary/70 font-light italic">
              The story that changes everything
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <div className="border-l-4 border-primary pl-8 py-6 bg-primary/5 rounded-r-lg">
              <p className="text-xl font-serif italic text-primary mb-0">
                "I once worked with a woman who told me she was attracted to men who hit her."
              </p>
            </div>

            <p>
              She wasn't being provocative. She wasn't damaged or broken. She was simply telling me the truth about her nervous system.
            </p>

            <p>
              When she was a little girl, her father would come home drunk and violent. Before he'd strike her mother, there was always a moment—a specific look in his eyes, a shift in his energy. That moment became her first lesson in love.
            </p>

            <p>
              Her body learned: <strong>This feeling means someone cares about me.</strong>
            </p>

            <p>
              Years later, as an adult, she'd meet a kind, stable man and feel... nothing. No spark. No chemistry. But when she'd meet someone with that same dangerous edge? Her entire system would light up. <em>This is it. This is love.</em>
            </p>

            <p>
              She wasn't choosing abuse. She was following her imprint.
            </p>

            <div className="h-px bg-primary/20 my-12" />

            <h2 className="text-3xl font-serif text-primary mt-16 mb-8">
              The Subtle Ones Run the Show
            </h2>

            <p>
              That story is extreme. But here's what matters: <strong>the subtle patterns work exactly the same way.</strong>
            </p>

            <p>
              Maybe your father was emotionally distant, so now you're drawn to partners who are "hard to reach." You call it mystery. Your nervous system calls it home.
            </p>

            <p>
              Maybe your mother was anxious and controlling, so now you seek partners who need you to fix them. You call it compassion. Your body calls it safety.
            </p>

            <p>
              Maybe you were praised only when you performed, so now you're attracted to people who withhold approval until you prove yourself. You call it ambition. Your system calls it love.
            </p>

            <p className="text-xl font-serif italic text-primary border-l-4 border-primary pl-8 py-4 bg-primary/5 rounded-r-lg">
              We don't choose our partners. We choose our patterns.
            </p>

            <div className="h-px bg-primary/20 my-12" />

            <h2 className="text-3xl font-serif text-primary mt-16 mb-8">
              Your Subconscious Programming
            </h2>

            <p>
              When we're born, all we know is love. We just don't know <em>how</em> to do love—and that's where mom and dad come in. Before you had language, before memory, before logic, you absorbed their blueprint. You learned what love looks like, what safety feels like, what connection means.
            </p>

            <p>
              And now, decades later, you're still following that blueprint. You're still seeking the feeling you learned to call love, even when it doesn't serve you. Even when it hurts.
            </p>

            <p>
              This isn't your fault. This is how humans work.
            </p>

            <p>
              But here's the good news: <strong>once you see the pattern, you can break its spell.</strong>
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12 mt-16 text-center space-y-6">
              <h3 className="text-2xl font-serif text-primary">
                Ready to See Your Pattern?
              </h3>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                In a free 30-minute discovery session, I'll help you identify the specific imprint that's been running your relationships—and show you how to rewrite it.
              </p>
              <Link href="/discovery">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-serif text-lg px-10 py-6 h-auto rounded-full transition-all duration-300 shadow-lg">
                  Book Your Free Discovery Session
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">
                No pressure. No sales pitch. Just clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Spacer */}
      <div className="h-20" />
    </div>
  );
}
