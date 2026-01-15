import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";

export default function ThePractice() {
  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-[#F0EBE0] to-[#F9F7F2]">
        <div className="container max-w-4xl text-center space-y-6">
          <div className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-widest uppercase">
            The Practice
          </div>
          
          <h1 className="text-5xl md:text-6xl font-serif font-medium text-primary leading-tight">
            A Relational Practice
          </h1>
          
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            This is not session-based coaching. This is ongoing relational practice designed to rewire how you relate to yourself—which changes everything.
          </p>
        </div>
      </section>

      {/* SECTION 1: ROOT-WORK MENTORSHIP */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-serif text-primary text-center mb-12">
            Root-Work Mentorship
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              When you were born, all you knew was love. Mom and dad showed you how to DO love. Before you had language, before you had logic, before you had memory, they showed you: <strong className="text-primary text-2xl block text-center my-8">How love works.</strong>
            </p>
            <p>
              Not because anyone taught you... but because you felt it.
            </p>
            <p>
              Those early experiences became your <strong>Love Wound</strong>—a subconscious pattern that still determines who you're drawn to, how you show up in relationships, and where you drain your cup.
            </p>
            <p>
              <strong>Root-Work Mentorship</strong> is a weekly practice where we identify that pattern, interrupt it at the nervous system level, and integrate new responses until they become second nature.
            </p>
            <p className="text-primary font-medium border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-lg">
              This work is long-term, weekly, relational, and root-focused—not session-based.
            </p>
          </div>

          {/* How It Works */}
          <div className="space-y-8 mt-12">
            <h3 className="text-3xl font-serif text-primary text-center mb-8">How It Works</h3>
            
            <div className="bg-white rounded-2xl p-8 border border-primary/10">
              <h4 className="text-2xl font-serif text-primary mb-4">Weekly One-on-One Practice</h4>
              <p className="text-muted-foreground">
                We meet every week for 60 minutes via Zoom. This isn't therapy—it's practice. We identify your pattern, run new plays, and integrate them through repetition until they're automatic.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-primary/10">
              <h4 className="text-2xl font-serif text-primary mb-4">Root Identification</h4>
              <p className="text-muted-foreground">
                In the first 1-2 sessions, we identify your specific Love Wound—the subconscious pattern formed in childhood that's been running your relationships ever since. This is where the "aha moments" happen.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-primary/10">
              <h4 className="text-2xl font-serif text-primary mb-4">Integration Over Time</h4>
              <p className="text-muted-foreground">
                Real change happens through repetition. Just like learning a sport, you don't get better by understanding the theory—you get better by practicing until your body knows what to do without thinking. Most clients experience significant shifts within 3-4 months.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-primary/10">
              <h4 className="text-2xl font-serif text-primary mb-4">Year-Long Commitment</h4>
              <p className="text-muted-foreground">
                This work requires 12 months of weekly practice. Your patterns were built over decades—they don't change in a moment. Insight can happen quickly. Integration happens through repetition and relationship.
              </p>
            </div>
          </div>

          {/* Investment */}
          <div className="bg-white rounded-2xl p-12 border border-primary/10 text-center space-y-6 mt-12">
            <p className="text-2xl font-serif text-primary mb-4">Investment</p>
            
            <div className="space-y-4">
              <div>
                <p className="text-3xl font-serif text-primary mb-1">Solo Practice</p>
                <p className="text-lg text-muted-foreground">$12,000/year (paid in full) or $1,200/month</p>
              </div>
              
              <div>
                <p className="text-3xl font-serif text-primary mb-1">Couples Practice</p>
                <p className="text-lg text-muted-foreground">$18,000/year (paid in full) or $1,800/month</p>
              </div>
            </div>
            
            <p className="text-sm text-primary/60 italic pt-2">Both include weekly sessions + Sanctuary community access</p>
            
            <div className="pt-6">
              <Button size="lg" className="font-serif rounded-full px-10 py-6 h-auto text-lg bg-primary text-white hover:bg-primary/90" asChild>
                <Link href="/discovery">Apply <ArrowRight className="w-5 h-5 ml-2" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRACTICE CIRCLE */}
      <section className="py-20 bg-gradient-to-b from-[#F9F7F2] to-[#F0EBE0]">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-serif text-primary text-center mb-12">
            The Root-Work Practice Circle
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              A monthly, relational practice for people who are done trying to fix themselves and ready to stay with what's real.
            </p>
            <p>
              This is not traditional coaching.
            </p>
            <p>
              It's not problem-solving.
            </p>
            <p>
              And it's not about self-improvement.
            </p>
            <p>
              The Practice Circle exists for those who want to practice awareness over time—together—so insight doesn't disappear the moment life gets uncomfortable.
            </p>
          </div>

          {/* What's Included */}
          <div className="bg-white rounded-2xl p-8 border border-primary/10 mt-12">
            <h3 className="text-2xl font-serif text-primary mb-6">What's Included</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Two live group practice sessions per month</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>One private session per month, held within the practice</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Continuity, rhythm, and relationship</span>
              </li>
            </ul>
          </div>

          {/* What It Is Not */}
          <div className="bg-gradient-to-br from-muted/30 to-muted/50 rounded-2xl p-8 border border-muted mt-8">
            <h3 className="text-2xl font-serif text-primary mb-6">What It Is Not</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-muted-foreground/50 mt-0.5 flex-shrink-0" />
                <span>Not therapy</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-muted-foreground/50 mt-0.5 flex-shrink-0" />
                <span>Not crisis support</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-muted-foreground/50 mt-0.5 flex-shrink-0" />
                <span>Not drop-in coaching</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-muted-foreground/50 mt-0.5 flex-shrink-0" />
                <span>Not a substitute for Root-Work Mentorship</span>
              </li>
            </ul>
          </div>

          {/* Investment */}
          <div className="bg-white rounded-2xl p-12 border border-primary/10 text-center space-y-6 mt-12">
            <p className="text-2xl font-serif text-primary mb-4">Investment</p>
            <p className="text-3xl font-serif text-primary">$250/month</p>
            
            <div className="pt-6">
              <Button size="lg" className="font-serif rounded-full px-10 py-6 h-auto text-lg bg-primary text-white hover:bg-primary/90" asChild>
                <Link href="/discovery">Apply to the Practice Circle <ArrowRight className="w-5 h-5 ml-2" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: APPRENTICESHIP */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-serif text-primary text-center mb-12">
            Apprenticeship
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Some people who come into this work discover something unexpected.
            </p>
            <p>
              Not a desire to help. Not a calling to fix. But a quiet recognition:
            </p>
            <p className="text-xl text-primary font-serif italic text-center py-4">
              "I want to learn how to stay with others the way I learned to stay with myself."
            </p>
            <p>
              For those people, there is an apprenticeship.
            </p>
            <p>
              It is not a training. There is no certification. There is no timeline you can sign up for.
            </p>
            <p>
              Apprenticeship emerges after long-term root work, lived practice, and discernment. It unfolds slowly, relationally, and under supervision.
            </p>
            <p>
              Its purpose is not to create coaches—but to form people capable of holding space without rescuing, fixing, or performing.
            </p>
            <p>
              Most people will never enter this path. A few will know when it's time.
            </p>
            <p>
              When it is, the invitation is unmistakable.
            </p>
            <p className="text-primary/60 italic text-center pt-4">
              This is not something you pursue. It is something you are invited into.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
