import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, MapPin, Users, Calendar } from "lucide-react";
import { Helmet } from "react-helmet";

export default function Speaking() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Speaking Engagements - Jeff Batton | Recovering Evangelical Speaker</title>
        <meta name="description" content="Book Jeff Batton for speaking engagements. Recovering evangelical speaker specializing in deconstruction, progressive Christianity, and relationship healing. Available for churches, conferences, and retreats." />
        <meta name="keywords" content="recovering evangelical speaker, deconstruction speaker, progressive Christian speaker, church speaker, relationship speaker, spiritual deconstruction, post-evangelical, Jeff Batton speaking" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white pt-24 pb-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-block rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
              SPEAKING ENGAGEMENTS
            </div>
            <h1 className="font-serif text-5xl font-light tracking-tight text-slate-900 sm:text-6xl">
              You Don't Need Fixing.
              <br />
              <span className="italic">You Need Remembering.</span>
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-slate-600">
              For over 30 years, I've helped people see what they couldn't see on their own. I speak to churches, conferences, and communities navigating deconstruction, relationship patterns, and the journey from religion to resonance.
            </p>
            <div className="mt-10">
              <Button size="lg" className="min-w-[200px]" asChild>
                <a href="mailto:jeff@jeffbatton.com?subject=Speaking%20Inquiry">
                  Inquire About Speaking
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Message */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-4xl font-light text-slate-900">
              What I Bring to Your Audience
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                I don't come with a formula to fix your people. I come with a mirror to help them see what's been running their lives—the patterns, the thorns they're protecting, the cups they're draining.
              </p>
              <p>
                Whether your audience is deconstructing their faith, healing from religious trauma, or stuck in relationship patterns they can't break, I help them see the root—not just chase the fruit.
              </p>
              <p className="text-xl font-semibold italic text-slate-900">
                "Religion is just politics in drag. What if God is bigger and deeper than all of that?"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-slate-50 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-serif text-4xl font-light text-slate-900">
              Speaking Topics
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
              Each talk is tailored to your audience and dynamically explores topics that emerge in real time. Here are the core themes:
            </p>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {/* Recovering Evangelical */}
              <Card className="p-8">
                <h3 className="text-2xl font-semibold text-slate-900">
                  The Recovering Evangelical
                </h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  For those leaving the church but not leaving God. How to deconstruct without losing your foundation. What happens when you realize the Bible is a universe manual, not a rulebook.
                </p>
                <ul className="mt-6 space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-slate-900" />
                    <span>Navigating deconstruction without losing yourself</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-slate-900" />
                    <span>From rule-following to authentic living</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-slate-900" />
                    <span>What if God is bigger than the church?</span>
                  </li>
                </ul>
              </Card>

              {/* Love Wounds */}
              <Card className="p-8">
                <h3 className="text-2xl font-semibold text-slate-900">
                  The Love Wound Mirror
                </h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  Why we keep choosing the same type of partner. How early childhood imprints shape adult relationships. The difference between chasing fruit and laying the axe at the root.
                </p>
                <ul className="mt-6 space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-slate-900" />
                    <span>How we learn love before we have language</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-slate-900" />
                    <span>Breaking patterns vs. managing symptoms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-slate-900" />
                    <span>The thorn you're protecting vs. the cage you're building</span>
                  </li>
                </ul>
              </Card>

              {/* Overflow Cup */}
              <Card className="p-8">
                <h3 className="text-2xl font-semibold text-slate-900">
                  The Overflow Cup
                </h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  Why self-care doesn't work when your cup is empty. The difference between want-based and should-based living. How to stop medicating and start filling.
                </p>
                <ul className="mt-6 space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-slate-900" />
                    <span>The Rejoicing Test: Are you living from overflow?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-slate-900" />
                    <span>Why medication behaviors keep you stuck</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-slate-900" />
                    <span>From depletion to abundance</span>
                  </li>
                </ul>
              </Card>

              {/* Pattern Hunting */}
              <Card className="p-8">
                <h3 className="text-2xl font-semibold text-slate-900">
                  Pattern Hunting
                </h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  How to see the pattern that's been running your life. The difference between insight and awareness. Why trying harder doesn't work—and what does.
                </p>
                <ul className="mt-6 space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-slate-900" />
                    <span>You know a tree by its fruit—work backward to the root</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-slate-900" />
                    <span>The subtle patterns are harder to see</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-slate-900" />
                    <span>Awareness is the doorway—not willpower</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Audiences */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-serif text-4xl font-light text-slate-900">
              Who I Speak To
            </h2>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-white">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  Progressive Churches
                </h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  Communities navigating deconstruction, post-evangelicalism, and spiritual evolution beyond dogma.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-white">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  Conferences & Retreats
                </h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  Relationship conferences, spiritual growth retreats, and personal development events.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-white">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  Deconstruction Communities
                </h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  Groups supporting people leaving fundamentalism, healing from religious trauma, and finding resonance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section className="bg-slate-50 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-4xl font-light text-slate-900">
              Logistics
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                <strong className="text-slate-900">Availability:</strong> I'm available for keynotes, workshops, and multi-day events. Virtual or in-person.
              </p>
              <p>
                <strong className="text-slate-900">Location:</strong> Based in Detroit, Michigan. Available nationally and internationally.
              </p>
              <p>
                <strong className="text-slate-900">Format:</strong> Talks range from 45-minute keynotes to full-day workshops. I can tailor the content and format to your audience and goals.
              </p>
              <p>
                <strong className="text-slate-900">Pricing:</strong> Contact me for pricing. Every engagement is unique, and I work with organizations of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-4xl font-light text-slate-900">
              Let's Talk About Your Event
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-slate-600">
              Whether you're hosting a church service, a conference, or a retreat, I'd love to hear what you're building and see if I'm the right fit.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="min-w-[200px]" asChild>
                <a href="mailto:jeff@jeffbatton.com?subject=Speaking%20Inquiry">
                  Inquire About Speaking
                </a>
              </Button>
              <Button size="lg" variant="outline" className="min-w-[200px]" asChild>
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
