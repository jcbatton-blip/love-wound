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
            Root-Work Mentorship
          </div>
          
          <h1 className="text-5xl md:text-6xl font-serif font-medium text-primary leading-tight">
            A Relational Practice
          </h1>
          
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            This is not session-based coaching. This is a year-long, weekly practice designed to rewire how you relate to yourself—which changes everything.
          </p>
        </div>
      </section>

      {/* What This Is */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-serif text-primary text-center mb-12">
            What This Is
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
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-[#F9F7F2] to-[#F0EBE0]">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-serif text-primary text-center mb-12">
            How It Works
          </h2>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 border border-primary/10">
              <h3 className="text-2xl font-serif text-primary mb-4">Weekly One-on-One Practice</h3>
              <p className="text-muted-foreground">
                We meet every week for 60 minutes via Zoom. This isn't therapy—it's practice. We identify your pattern, run new plays, and integrate them through repetition until they're automatic.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-primary/10">
              <h3 className="text-2xl font-serif text-primary mb-4">Root Identification</h3>
              <p className="text-muted-foreground">
                In the first 1-2 sessions, we identify your specific Love Wound—the subconscious pattern formed in childhood that's been running your relationships ever since. This is where the "aha moments" happen.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-primary/10">
              <h3 className="text-2xl font-serif text-primary mb-4">Integration Over Time</h3>
              <p className="text-muted-foreground">
                Real change happens through repetition. Just like learning a sport, you don't get better by understanding the theory—you get better by practicing until your body knows what to do without thinking. Most clients experience significant shifts within 3-4 months.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-primary/10">
              <h3 className="text-2xl font-serif text-primary mb-4">Year-Long Commitment</h3>
              <p className="text-muted-foreground">
                This work requires 12 months of weekly practice. Your patterns were built over decades—they don't change in a moment. Insight can happen quickly. Integration happens through repetition and relationship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For / Not For */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-serif text-primary text-center mb-12">
            Who This Is For
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* This IS For */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-serif text-primary mb-6 flex items-center gap-3">
                <Check className="w-6 h-6" /> This IS For You If:
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>You're exhausted from "doing the right thing" and still ending up drained</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>You keep attracting the same type of partner or dynamic</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>You're ready for root-level work, not surface-level strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>You're willing to commit to a year-long practice</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>You want to change how you relate to yourself, not just fix a relationship</span>
                </li>
              </ul>
            </div>

            {/* This IS NOT For */}
            <div className="bg-gradient-to-br from-muted/30 to-muted/50 rounded-2xl p-8 border border-muted">
              <h3 className="text-2xl font-serif text-primary mb-6 flex items-center gap-3">
                <X className="w-6 h-6" /> This IS NOT For You If:
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground/50 mt-0.5 flex-shrink-0" />
                  <span>You want a quick fix or breakthrough session</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground/50 mt-0.5 flex-shrink-0" />
                  <span>You're looking for validation without responsibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground/50 mt-0.5 flex-shrink-0" />
                  <span>You're not ready to see your own pattern</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground/50 mt-0.5 flex-shrink-0" />
                  <span>You can't commit to weekly practice for a year</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground/50 mt-0.5 flex-shrink-0" />
                  <span>You want someone to fix you instead of mirror you</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Expectation */}
      <section className="py-20 bg-gradient-to-b from-[#F9F7F2] to-[#F0EBE0]">
        <div className="container max-w-3xl">
          <div className="bg-white rounded-2xl p-12 border border-primary/10 text-center space-y-6">
            <h2 className="text-4xl font-serif text-primary">
              What This Requires
            </h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              This work requires commitment, honesty, and time. It is not designed for quick fixes or one-off relief.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              You'll need to show up weekly, be willing to see your pattern, and practice new responses until they become automatic. Most clients say the same thing: "I wish I'd done this years ago."
            </p>
            <div className="pt-6 space-y-6">
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
            </div>
          </div>
        </div>
      </section>

      {/* Apprenticeship Allusion */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <p className="text-lg text-muted-foreground leading-relaxed">
              For some people, this work doesn't stop with personal healing.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              After completing a full year of Root-Work Mentorship, a small number of clients feel called to walk this path alongside others.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              That path isn't taught. It's apprenticed. And it's never rushed.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-[#F9F7F2] to-[#F0EBE0]">
        <div className="container max-w-4xl">
          <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10 space-y-8 text-center">
              <h2 className="text-3xl md:text-5xl font-serif font-bold">
                Ready to Begin?
              </h2>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                This application begins a conversation—not a commitment. Root-work requires readiness, honesty, and willingness to stay with the work. If that resonates, you're welcome to apply.
              </p>
              <Button size="lg" variant="secondary" className="font-serif rounded-full px-10 py-6 h-auto text-lg" asChild>
                <Link href="/discovery">Apply for Root-Work Mentorship <ArrowRight className="w-5 h-5 ml-2" /></Link>
              </Button>
            </div>
            
            {/* Decorative background */}
            <div className="absolute inset-0 bg-[url('/images/pattern-imprint.png')] opacity-10 mix-blend-overlay bg-cover bg-center" />
          </div>
        </div>
      </section>
    </div>
  );
}
