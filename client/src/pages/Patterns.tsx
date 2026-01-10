import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Search, AlertCircle, CheckCircle2 } from "lucide-react";

export default function Patterns() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      {/* Hero */}
      <section className="container mb-24 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary/60 font-serif italic text-xl mb-4 block">The Art of Self-Observation</span>
          
          {/* Carl Jung Quote */}
          <blockquote className="text-lg md:text-xl text-muted-foreground italic border-l-4 border-primary/30 pl-6 my-8 text-left max-w-2xl mx-auto">
            "Until you make the unconscious conscious, it will direct your life and you will call it fate."
            <footer className="text-sm text-primary/60 mt-2 not-italic">— Carl Jung</footer>
          </blockquote>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8">
            Where's Your Goat<br />Still Gettable?
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Your triggers aren't obstacles. They are the map to your freedom. If it can rattle you, it owns you.
          </p>
          
          {/* Life as Mirror Quote */}
          <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary/30 pl-6 mt-8 text-left max-w-2xl mx-auto">
            "Life will continue to bring you people and circumstances to show you where you are not free."
            <footer className="text-sm text-primary/60 mt-2 not-italic">— Peter Crone</footer>
          </blockquote>
        </motion.div>
      </section>

      {/* The Goat Concept */}
      <section className="container mb-32">
        <div className="bg-muted/30 rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-primary">The Signal, Not the Problem</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  You don't have to be in a relationship to do relationship work. Because what triggers you in someone else is just showing you what's still unhealed in you.
                </p>
                <p>
                  That's the work—not fixing the other person, but asking: <span className="text-primary font-medium italic">"Why does this matter?"</span>
                </p>
                <p>
                  If it didn't matter, it wouldn't shake you. Wouldn't rattle you. Wouldn't get your goat.
                </p>
                <p>
                  But when it does? That's your signal. It's not the problem—it's the mirror.
                </p>
              </div>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-xl border border-primary/10">
              <h3 className="font-serif text-xl font-bold text-primary mb-6">The Pattern Hunter's Checklist</h3>
              <ul className="space-y-4">
                {[
                  "What specific behavior triggered me?",
                  "What old feeling did this bring up?",
                  "When was the first time I felt this?",
                  "What belief about myself is being threatened?",
                  "If this didn't matter, who would I be?"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Search className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Iron Sharpens Iron */}
      <section className="container mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
            Iron Sharpens Iron
          </h2>
          <p className="text-lg text-muted-foreground">
            Relationships are the friction that polishes the blade. We attract people who rub us the wrong way <em>on purpose</em>—so we can smooth out the rough edges of our own ego.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-destructive/5 border border-destructive/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <AlertCircle className="w-8 h-8 text-destructive" />
              <h3 className="text-2xl font-serif font-bold text-destructive">The Victim Trap</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              "Why does this keep happening to me? Why do I always find the narcissists/addicts/cheaters?"
            </p>
            <p className="text-sm font-medium text-destructive/80 uppercase tracking-wide">
              Result: Repeating the Cycle
            </p>
          </div>

          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-serif font-bold text-primary">The Pattern Hunter</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              "I see that I attracted this dynamic to show me where I still don't respect myself. Thank you for the lesson."
            </p>
            <p className="text-sm font-medium text-primary/80 uppercase tracking-wide">
              Result: Breaking the Code
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container text-center">
        <div className="bg-primary text-primary-foreground rounded-3xl p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif font-bold">
              Ready to Stop Chasing and Start Healing?
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              You can't fix what you can't see. Let's find the patterns together.
            </p>
            <Button size="lg" variant="secondary" className="font-serif rounded-full px-10 py-6 h-auto text-lg" asChild>
              <a href="/discovery">Book Free Discovery Call</a>
            </Button>
          </div>
          
          {/* Decorative background */}
          <div className="absolute inset-0 bg-[url('/images/pattern-imprint.png')] opacity-10 mix-blend-overlay bg-cover bg-center" />
        </div>
      </section>
    </div>
  );
}
