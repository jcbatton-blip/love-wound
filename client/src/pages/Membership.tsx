import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Membership() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white pt-24 pb-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-5xl font-light tracking-tight text-slate-900 sm:text-6xl">
              The Inner Circle
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-slate-600">
              A continuous practice of awareness, pattern recognition, and living from overflow—not depletion.
            </p>
            <p className="mt-4 text-lg text-slate-500">
              2 group sessions/month on Zoom (max 12 members). Text access for daily support. Discounted 1-on-1 sessions at $250. A curated video library.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="min-w-[200px]" asChild>
                <a href="mailto:jeff@jeffbatton.com?subject=Join%20The%20Overflow%20Membership">
                  Join for $29/Month
                </a>
              </Button>

            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-light text-slate-900">
              You've Done the Work. But the Pattern Keeps Showing Up.
            </h2>
            <div className="mt-8 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                You've read the books. You've been to therapy. You know what you should do. But when the moment comes, you find yourself doing what you don't want to do—again.
              </p>
              <p>
                You choose the same type of partner. You drain your cup giving to others. You medicate with food, work, or control when you get below empty. You know the fruit, but you can't find the root.
              </p>
              <p>
                <strong className="text-slate-900">This isn't about more information. It's about ongoing awareness.</strong>
              </p>
              <p>
                What makes this coaching—not just teaching—is that we run the plays over and over again until they become second nature. Just like learning a play in sports. That's how we rewire the subconscious.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Opens Up */}
      <section className="bg-slate-50 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-light text-slate-900">
              What Opens Up When You Practice Awareness
            </h2>
            <div className="mt-8 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                The Inner Circle isn't a course you complete. It's a practice you continue. Twice a month, you show up to the live call. You witness other people's patterns and see your own. You catch yourself before you medicate. You practice the plays between sessions.
              </p>
              <p>
                Awareness is the doorway. But repetition is how you walk through it.
              </p>
              <p>
                Over time, something shifts. The pattern loses its power. Your cup starts filling. You stop doing what you don't want to do. You live from overflow—not depletion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-serif text-4xl font-light text-slate-900">
              What You Get for $29/Month
            </h2>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {/* Group Sessions */}
              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white">
                    <Check className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      2 Live Group Sessions Per Month
                    </h3>
                    <p className="mt-4 leading-relaxed text-slate-600">
                      1st & 3rd Tuesday at 5pm EST on Zoom. Max 12 members per group (when one fills, we start another). Pattern hunting in real time with Jeff. Everyone gets seen.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Text Access */}
              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white">
                    <Check className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Text Access via Voxer
                    </h3>
                    <p className="mt-4 leading-relaxed text-slate-600">
                      Need support between sessions? Text Jeff directly when you're stuck in a pattern. Get quick coaching when you need it most.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Discounted 1-on-1s */}
              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white">
                    <Check className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Discounted 1-on-1 Sessions
                    </h3>
                    <p className="mt-4 leading-relaxed text-slate-600">
                      Members get Mirror Sessions at $250 (vs $350 regular price). When you need deeper work, you get priority access at a lower rate.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Video Library */}
              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white">
                    <Check className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Curated Video Library
                    </h3>
                    <p className="mt-4 leading-relaxed text-slate-600">
                      Access to Jeff's YouTube channel "The Recovering Evangelical" plus exclusive member-only teachings. The framework at your fingertips anytime.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-slate-50 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-serif text-4xl font-light text-slate-900">
              Simple, Transparent Pricing
            </h2>

            <div className="mt-16 flex justify-center">
              {/* Single Membership Option */}
              <Card className="relative w-full max-w-md overflow-hidden p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-slate-900">
                    The Inner Circle
                  </h3>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-slate-900">$29</span>
                    <span className="text-slate-600">/month</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">
                    Billed monthly. Cancel anytime.
                  </p>
                  <Button size="lg" className="mt-8 w-full" asChild>
                    <a href="mailto:jeff@jeffbatton.com?subject=Join%20The%20Inner%20Circle">
                      Join Now
                    </a>
                  </Button>
                </div>
              </Card>
            </div>

            <p className="mt-8 text-center text-sm text-slate-500">
              That's less than one therapy session. Less than a latte a week. For ongoing access to Jeff, the community, and the work.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-light text-slate-900">
              Why Membership Works (When Courses Don't)
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                Courses give you information. Membership gives you practice. You don't need more knowledge about your patterns—you need ongoing awareness of them.
              </p>
              <p>
                The weekly call is where the work happens. You show up. You listen. You see yourself in someone else's question. You realize you've been shoulding all week. You notice your cup is below empty. You catch the pattern before it catches you.
              </p>
              <p>
                <strong className="text-slate-900">This is the difference between knowing and living.</strong> The membership keeps you in the practice. And the practice changes everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Share The Overflow */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-4xl font-light text-slate-900">
              Share The Overflow
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-slate-600">
              Know someone who keeps choosing the wrong person? Share this with them.
            </p>
            <div className="mt-12 rounded-2xl border-2 border-slate-200 bg-white p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    Refer a Friend, Get a Month Free
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Your friend gets their first month at $19. You get 1 month free ($29 value).
                  </p>
                </div>
                <div className="border-t border-slate-200 pt-6">
                  <p className="text-sm text-slate-500">
                    Refer 3 friends = 3 months free • Refer 12 friends = 1 year free
                  </p>
                </div>
                <div className="pt-4">
                  <p className="text-slate-600">
                    Once you join, you'll get your unique referral link in the Member Portal. Share it with friends who are ready to stop repeating patterns and start living from overflow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-serif text-4xl font-light text-slate-900">
              Questions You Might Have
            </h2>

            <div className="mt-16 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  What if I can't make the live calls?
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  Every call is recorded and available in the member portal within 24 hours. You can watch on your own time. But the live calls are where the magic happens—try to make them when you can.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Can I cancel anytime?
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  Yes. No contracts, no commitments. Cancel anytime via email. But most people stay because the practice becomes part of their life.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Is this the same as the 12-week container?
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  No. The 12-week container is intensive 1:1 work. The membership is ongoing group work. Many people do the container first, then join the membership to stay in the practice.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Who is the Founding Member rate for?
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  Past clients who've already worked with Jeff (Discovery Call, Mirror Session, Container, Retreat, or Group). If you've worked with Jeff before, you get $19/month for life.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  What if I'm new and haven't worked with Jeff yet?
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  Perfect. The membership is a great way to start. You'll get the Foundation Course, weekly calls, and community. If you want deeper 1:1 work later, you can always add a container or retreat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-4xl font-light text-slate-900">
              Join The Overflow
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-slate-600">
              Stop doing what you don't want to do. Start living from overflow.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="min-w-[200px]" asChild>
                <a href="mailto:jeff@jeffbatton.com?subject=Join%20The%20Overflow%20Membership">
                  Join for $29/Month
                </a>
              </Button>
              <Button size="lg" variant="outline" className="min-w-[200px]" asChild>
                <Link href="/services">See All Offerings</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
