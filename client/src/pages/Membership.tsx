import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Membership() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-5xl font-light tracking-tight text-slate-900 sm:text-6xl">
              The Overflow Membership
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-slate-600">
              A continuous practice of awareness, pattern recognition, and living from overflow—not depletion.
            </p>
            <p className="mt-4 text-lg text-slate-500">
              Weekly live calls with Jeff. Monthly workshops. A community of people doing the real work.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="min-w-[200px]" asChild>
                <a href="mailto:jeff@jeffbatton.com?subject=Join%20The%20Overflow%20Membership">
                  Join for $29/Month
                </a>
              </Button>
              <p className="text-sm text-slate-500">
                Legacy clients: <Link href="#founding" className="underline">See Founding Member pricing</Link>
              </p>
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
                The Overflow Membership isn't a course you complete. It's a practice you continue. Every week, you show up to the live call. You hear other people's patterns and see your own. You track your cup level. You notice when you're shoulding. You catch yourself before you medicate.
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
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
              Total value: $7,200/year. Your price: $348/year ($29/month).
            </p>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {/* Weekly Live Call */}
              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white">
                    <Check className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Weekly Live Group Call
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">$2,400/year value</p>
                    <p className="mt-4 leading-relaxed text-slate-600">
                      Every Wednesday at 7pm ET. 90 minutes with Jeff. Pattern hunting in real time. Q&A and coaching. Watch others get coached and see yourself in their questions.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Foundation Course */}
              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white">
                    <Check className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      The Foundation Course
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">$1,500 value</p>
                    <p className="mt-4 leading-relaxed text-slate-600">
                      Self-paced video modules: How We Learn Love, The Overflow Cup, Root vs. Fruit, The Mirror Method, Want vs. Should. The core framework you can revisit anytime.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Monthly Workshop */}
              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white">
                    <Check className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Monthly Live Workshop
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">$1,200/year value</p>
                    <p className="mt-4 leading-relaxed text-slate-600">
                      Deep dives into specific topics: The Cup, Thorn vs. Cage, Forgiveness, Medication Behaviors, Shoulding. Live with Jeff, then recorded for replay.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Private Community */}
              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white">
                    <Check className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Private Member Community
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">$600/year value</p>
                    <p className="mt-4 leading-relaxed text-slate-600">
                      24/7 access to a community of people doing the work. Share wins, ask questions, find accountability partners. You're not doing this alone.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Bonus Content */}
              <Card className="p-8 md:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white">
                    <Check className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Bonus Content Library
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">$1,500/year value</p>
                    <p className="mt-4 leading-relaxed text-slate-600">
                      Podcast episodes (early access), blog posts, teachings, guest interviews. New content added monthly. Your library keeps growing.
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

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {/* Standard Membership */}
              <Card className="relative overflow-hidden p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-slate-900">
                    Standard Membership
                  </h3>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-slate-900">$29</span>
                    <span className="text-slate-600">/month</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">
                    Billed monthly. Cancel anytime.
                  </p>
                  <Button size="lg" className="mt-8 w-full" asChild>
                    <a href="mailto:jeff@jeffbatton.com?subject=Join%20The%20Overflow%20Membership%20-%20Standard">
                      Join Now
                    </a>
                  </Button>
                </div>
              </Card>

              {/* Founding Member */}
              <Card id="founding" className="relative overflow-hidden border-2 border-slate-900 p-8">
                <div className="absolute right-4 top-4 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                  LEGACY CLIENTS
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-slate-900">
                    Founding Member
                  </h3>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-slate-900">$19</span>
                    <span className="text-slate-600">/month</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">
                    Locked in for life. For past clients only.
                  </p>
                  <Button size="lg" className="mt-8 w-full" asChild>
                    <a href="mailto:jeff@jeffbatton.com?subject=Join%20The%20Overflow%20Membership%20-%20Founding%20Member">
                      Claim Your Rate
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
