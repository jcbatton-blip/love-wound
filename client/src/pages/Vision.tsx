import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, Heart, Users, Music, MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function Vision() {
  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
        
        <div className="container max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full border border-primary/20 text-primary/60 text-sm tracking-widest uppercase"
          >
            The Future
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-primary leading-tight"
          >
            The Sanctuary.<br/>
            <span className="italic text-primary/80">A Conscious Living Community.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed"
          >
            We're building a physical home for this work. A place where community gathers not just to heal, but to practice a different way of being.
          </motion.p>
        </div>
      </section>

      {/* The Gathering (Weekly Event) */}
      <section className="py-20 bg-white border-y border-primary/5">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif text-primary">The Gathering</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Every Wednesday, we create an atmosphere for healing and connection. Music. Teaching. Presence. No cost. No barrier to entry.
              </p>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                This is the seed of the Sanctuary. We start here, in the digital space, and we grow into the physical.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 text-primary/80">
                  <Calendar className="w-5 h-5" />
                  <span>Every Wednesday Evening</span>
                </div>
                <div className="flex items-center gap-4 text-primary/80">
                  <MapPin className="w-5 h-5" />
                  <span>Live on Zoom (Soon in Detroit)</span>
                </div>
                <div className="flex items-center gap-4 text-primary/80">
                  <Heart className="w-5 h-5" />
                  <span>Free & Open to All</span>
                </div>
              </div>

              <p className="text-base text-muted-foreground font-light italic pt-4">
                If it resonates, come on Wednesday and be part of it.
              </p>

              <Button 
                className="mt-8 px-8 py-6 rounded-full font-serif text-lg bg-primary text-white hover:bg-primary/90"
                onClick={() => {
                  trackEvent('gathering_rsvp_click');
                  window.location.href = "mailto:jeff@jeffbatton.com?subject=RSVP for The Gathering";
                }}
              >
                RSVP for Next Gathering <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <div className="relative h-[500px] rounded-2xl overflow-hidden bg-[#1A2333] flex items-center justify-center p-8 text-center">
              <div className="absolute inset-0 bg-[url('/images/gathering-bg.jpg')] bg-cover bg-center opacity-20" />
              <div className="relative z-10 space-y-4">
                <h3 className="text-3xl font-serif text-[#D4AF37]">"We heal in community."</h3>
                <p className="text-white/60 font-light italic">- Jeff Batton</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Vision (Physical Center) */}
      <section className="py-24 px-4">
        <div className="container max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif text-primary">The Sanctuary: A Conscious Living Community</h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              A refurbished church in Detroit reimagined as a vibrant community space built on one principle: <strong>Unconditional Love</strong>.
            </p>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Not the greeting card version. The real thing. The kind that dissolves fear, heals wounds, and changes you from the inside out.
            </p>
            <p className="text-lg text-muted-foreground font-light leading-relaxed italic border-l-4 border-primary pl-6 py-4 bg-white/50 rounded-r-lg">
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
              <div key={i} className="p-8 bg-white rounded-2xl border border-primary/10">
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
    </div>
  );
}
