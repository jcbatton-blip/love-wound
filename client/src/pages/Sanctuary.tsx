import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, Users, Heart, Sparkles, MapPin, Music, MessageCircle, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function Sanctuary() {
  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-[#F0EBE0] to-[#F9F7F2]">
        <div className="container max-w-4xl text-center space-y-6">
          <div className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-widest uppercase">
            Free Community
          </div>
          
          <h1 className="text-5xl md:text-6xl font-serif font-medium text-primary leading-tight">
            The Sanctuary
          </h1>
          
          <p className="text-2xl text-primary/70 font-serif italic">
            Wednesday Night Community Practice
          </p>
          
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            A free weekly gathering for people who've left the church but haven't left the search. Come experience the work before committing to anything.
          </p>
        </div>
      </section>

      {/* What It Is */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-serif text-primary text-center mb-12">
            What It Is
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Every Wednesday night, we gather online for an hour of pattern work, awareness practice, and community reflection. It's not therapy. It's not a sermon. It's not a sales pitch.
            </p>
            <p>
              It's a space where recovering evangelicals (and anyone else tired of performing) can practice seeing their patterns in real time, without judgment, without urgency, and without having to fix themselves.
            </p>
            <p className="text-primary font-medium border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-lg">
              This is church for people who left church. A place to belong without having to believe the "right" things.
            </p>
            <p>
              Some people come once out of curiosity. Some come for months before they're ready for deeper work. Some stay indefinitely because community itself is the practice.
            </p>
            <p>
              There's no membership, no commitment, and no cost. Just show up when it resonates.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-gradient-to-b from-[#F9F7F2] to-[#F0EBE0]">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-serif text-primary text-center mb-12">
            What to Expect
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-primary/10">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-serif text-primary mb-4">Every Wednesday Night</h3>
              <p className="text-muted-foreground">
                6:00 PM EST via Zoom. One hour. Drop in whenever you can—no RSVP required.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-primary/10">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-serif text-primary mb-4">Small Group Format</h3>
              <p className="text-muted-foreground">
                Intimate enough to be real, large enough to see your patterns reflected in others. Usually 8-15 people.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-primary/10">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-serif text-primary mb-4">Pattern Work Practice</h3>
              <p className="text-muted-foreground">
                We explore real-life situations through the lens of Love Wound patterns. You'll learn to see what's been invisible.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-primary/10">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-serif text-primary mb-4">No Pressure, No Pitch</h3>
              <p className="text-muted-foreground">
                This isn't a funnel. Come for as long as it serves you. Leave when it doesn't. No one will chase you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Join Wednesday Night */}
      <section className="py-20 bg-gradient-to-b from-[#F0EBE0] to-[#F9F7F2]">
        <div className="container max-w-4xl">
          <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10 space-y-8 text-center">
              <h2 className="text-3xl md:text-5xl font-serif font-bold">
                Join Us Wednesday Night
              </h2>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                No cost. No commitment. Just come see if this resonates.
              </p>
              <div className="space-y-4">
                <p className="text-lg text-primary-foreground/90">
                  <strong>When:</strong> Every Wednesday at 6:00 PM EST<br />
                  <strong>Where:</strong> Zoom (link sent after registration)
                </p>
                <Button size="lg" variant="secondary" className="font-serif rounded-full px-10 py-6 h-auto text-lg" asChild>
                  <a href="mailto:jeff@jeffbatton.com?subject=Sanctuary Wednesday Night Registration">Get the Zoom Link</a>
                </Button>
              </div>
            </div>
            
            {/* Decorative background */}
            <div className="absolute inset-0 bg-[url('/images/pattern-imprint.png')] opacity-10 mix-blend-overlay bg-cover bg-center" />
          </div>
        </div>
      </section>

      {/* The Vision - Physical Center */}
      <section className="py-24 bg-white border-y border-primary/5">
        <div className="container max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 rounded-full border border-primary/20 text-primary/60 text-sm tracking-widest uppercase">
              The Future
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-primary">A Conscious Living Community</h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              A refurbished church in Detroit reimagined as a vibrant community space built on one principle: <strong>Unconditional Love</strong>.
            </p>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Not the greeting card version. The real thing. The kind that dissolves fear, heals wounds, and changes you from the inside out.
            </p>
            <p className="text-lg text-muted-foreground font-light leading-relaxed italic border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-lg max-w-2xl mx-auto text-left">
              We're creating an atmosphere for healing and connection. Music that moves you. Teachings that land. A community that witnesses your becoming. When you feel those warm fuzzies, you're getting closer. That's your nervous system recognizing truth.
            </p>
          </div>

          <div className="space-y-4 text-left max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif text-primary text-center mb-6">What We're Building</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary mb-1">Weekly Gatherings</p>
                  <p className="text-sm text-muted-foreground font-light">Teachings on unconditional love as a practice, not a theory</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MessageCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary mb-1">Guest Teachers</p>
                  <p className="text-sm text-muted-foreground font-light">Mystics, healers, and thought leaders who live this work</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Music className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary mb-1">Live Music & Art</p>
                  <p className="text-sm text-muted-foreground font-light">Performances and installations that create resonance</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary mb-1">Event Space</p>
                  <p className="text-sm text-muted-foreground font-light">A container for workshops, ceremonies, and community</p>
                </div>
              </div>
            </div>
            <p className="text-center text-xl font-serif text-primary pt-6 italic">
              Come here to find out what unconditional love really means.
            </p>
            <p className="text-center text-muted-foreground font-light pt-2">
              This isn't religion. It's resonance. A place where you remember who you are.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "The Hall", desc: "A space for weekly gatherings and community connection." },
              { title: "The Kitchen", desc: "Because healing happens over shared meals." },
              { title: "The Gardens", desc: "Nature as the ultimate co-regulator." },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-[#F9F7F2] rounded-2xl border border-primary/10">
                <h3 className="text-xl font-serif text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Ways to Contribute */}
          <div className="pt-12 border-t border-primary/10">
            <h3 className="text-2xl font-serif text-primary mb-6">Want to Be Part of Building This?</h3>
            <p className="text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
              The Sanctuary is being built by the community, for the community. Whether you want to contribute financially, volunteer your time, or simply show up on Wednesdays—you're part of this.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="px-8 py-6 rounded-full font-serif text-lg bg-primary text-white hover:bg-primary/90"
                onClick={() => {
                  trackEvent('contribute_click');
                  window.location.href = "mailto:jeff@jeffbatton.com?subject=I Want to Contribute to The Sanctuary";
                }}
              >
                Contribute <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                variant="outline"
                className="px-8 py-6 rounded-full font-serif text-lg border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => {
                  trackEvent('volunteer_click');
                  window.location.href = "mailto:jeff@jeffbatton.com?subject=I Want to Volunteer at The Sanctuary";
                }}
              >
                Volunteer <Heart className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Connection to Mentorship */}
      <section className="py-20 bg-[#F9F7F2]">
        <div className="container max-w-3xl">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10 text-center space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ready for deeper, weekly 1:1 work?
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Root-Work Mentorship includes Sanctuary access plus personalized pattern work every week for a year.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-serif rounded-full px-8 py-6 mt-4" asChild>
              <Link href="/the-practice">Learn About Root-Work Mentorship</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
