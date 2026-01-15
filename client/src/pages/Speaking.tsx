import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

export default function Speaking() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9F7F2] to-[#F0EBE0]/30">
      <Helmet>
        <title>Speaking - Jeff Batton</title>
        <meta name="description" content="Jeff Batton speaks to audiences about awareness, pattern-breaking, and the journey from religion to resonance. Available for churches, conferences, and retreats." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-28 pb-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-widest uppercase">
              Speaking
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-primary tracking-tight">
              You Don't Need Fixing.
              <br />
              <span className="italic">You Need Remembering.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              For over three decades, I've helped people see what they couldn't see on their own—the patterns running their lives, the thorns they're protecting, the cups they're draining.
            </p>
          </div>
        </div>
      </section>

      {/* What I Talk About */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-12">
            <div>
              <h2 className="text-4xl font-serif text-primary mb-8">What I Talk About</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
                <p>
                  I don't come with a formula. I come with a mirror.
                </p>
                <p>
                  Whether your audience is deconstructing their faith, stuck in relationship patterns they can't break, or trying to understand why they keep ending up in the same place—I help them see the root, not just chase the fruit.
                </p>
                <p>
                  The work I do centers on **awareness over effort**. Most people are trying to fix themselves when what they really need is to see the pattern that's been running their lives since before they had words for it.
                </p>
                <p>
                  I talk about:
                </p>
                <ul className="space-y-3 pl-6">
                  <li className="text-primary/80">• **The Love Wound Imprint** — how we learn love before we have language, and how that imprint shapes every relationship we enter</li>
                  <li className="text-primary/80">• **The Thorn and the Cage** — why we build entire systems to protect our pain instead of dealing with it</li>
                  <li className="text-primary/80">• **The Overflow Cup** — the difference between living from want vs. living from should, and why self-care doesn't work when your cup is empty</li>
                  <li className="text-primary/80">• **Recovering from Religion** — what happens when you leave the church but not God, and how to deconstruct without losing your foundation</li>
                  <li className="text-primary/80">• **Pattern Hunting** — how to work backward from the fruit to the root, and why trying harder keeps you stuck</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-primary/10 pt-12">
              <h2 className="text-4xl font-serif text-primary mb-8">Why This Work Matters</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
                <p>
                  Most people spend their lives managing symptoms—chasing better partners, better jobs, better strategies—without ever seeing the pattern underneath.
                </p>
                <p>
                  My work isn't about giving people answers. It's about helping them see what they've been too close to see. Once you see the pattern, you can't unsee it. And when the pattern breaks, everything changes.
                </p>
                <p>
                  I've spent over 30 years doing this work—first in churches, then in private practice, now with individuals, couples, and communities. The method is simple: hold up the mirror, ask the right questions, and let awareness do the heavy lifting.
                </p>
              </div>
            </div>

            <div className="border-t border-primary/10 pt-12">
              <h2 className="text-4xl font-serif text-primary mb-8">What Makes This Different</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
                <p>
                  I'm not a motivational speaker. I'm not here to pump you up or give you a five-step plan.
                </p>
                <p>
                  What makes this work different is **restraint**. I don't tell people what to do. I help them see what's already there. The insight comes from them, not from me.
                </p>
                <p>
                  I draw from decades of work with Anthony de Mello's *Awareness*, A.S. Neill's *Summerhill*, and my own 30+ years of coaching individuals and couples through the deeper layers of their patterns. But I don't come with a system to sell. I come with questions that reveal what you already know but haven't been able to see.
                </p>
                <p>
                  The tone is **subtle, Southern, sophisticated**—not preachy, not self-help, not hokey. I use stories, metaphors, and real-life examples that land without lecturing. The goal is always the same: help people see the pattern so they can stop repeating it.
                </p>
              </div>
            </div>

            <div className="border-t border-primary/10 pt-12">
              <h2 className="text-4xl font-serif text-primary mb-8">Who I Speak To</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
                <p>
                  I speak to audiences navigating:
                </p>
                <ul className="space-y-3 pl-6">
                  <li className="text-primary/80">• **Deconstruction and post-evangelicalism** — progressive churches, spiritual communities, and groups healing from religious trauma</li>
                  <li className="text-primary/80">• **Relationship patterns** — conferences, retreats, and communities focused on healing, growth, and awareness</li>
                  <li className="text-primary/80">• **Personal evolution** — anyone tired of chasing fruit and ready to lay the axe at the root</li>
                </ul>
                <p>
                  Whether it's a keynote, a workshop, or a multi-day retreat—virtual or in-person—I tailor the content to your audience and the questions they're actually asking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-serif text-primary">
              Let's Talk About Your Event
            </h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              If you're hosting a church service, a conference, or a retreat and this resonates, I'd love to hear what you're building and see if I'm the right fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-serif text-lg px-10 py-6 h-auto rounded-full" asChild>
                <a href="mailto:jeff@jeffbatton.com?subject=Speaking%20Inquiry">
                  Inquire About Speaking
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-serif text-lg px-10 py-6 h-auto rounded-full" asChild>
                <Link href="/about">
                  Learn More About Jeff
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
