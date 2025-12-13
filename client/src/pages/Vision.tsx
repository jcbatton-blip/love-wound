import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, Heart } from "lucide-react";
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
            <span className="italic text-primary/80">A Center for Spiritual Living.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed"
          >
            We are building a physical home for this work. A place where the community gathers not just to heal, but to live.
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
                Every week, we open the doors. No cost. No barrier to entry. Just a community coming together to speak the truth and witness each other.
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
                  <span>Live on Zoom (Soon in Person)</span>
                </div>
                <div className="flex items-center gap-4 text-primary/80">
                  <Heart className="w-5 h-5" />
                  <span>Free & Open to All</span>
                </div>
              </div>

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
            <h2 className="text-4xl font-serif text-primary">The Vision</h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Imagine a space that feels like a temple but welcomes you like a living room. A place for talks, workshops, meditation, and deep rest.
            </p>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              We are currently laying the groundwork for the <strong>Love Wound Center for Spiritual Living</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "The Hall", desc: "A space for weekly talks and community gatherings." },
              { title: "The Kitchen", desc: "Because healing happens over shared meals." },
              { title: "The Gardens", desc: "Nature as the ultimate co-regulator." },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl border border-primary/10">
                <h3 className="text-xl font-serif text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-12 border-t border-primary/10">
            <p className="text-muted-foreground font-light mb-6">Want to be part of building this?</p>
            <Button 
              variant="outline"
              className="px-8 py-6 rounded-full font-serif text-lg border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => {
                trackEvent('vision_inquiry_click');
                window.location.href = "mailto:jeff@jeffbatton.com?subject=Inquiry about The Center";
              }}
            >
              Contact Jeff
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
