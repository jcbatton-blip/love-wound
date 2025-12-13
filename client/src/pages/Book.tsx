import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, Quote, BookOpen } from "lucide-react";

export default function Book() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="pt-32 pb-16 min-h-screen bg-[#F9F7F2]">
      {/* Hero Section */}
      <section className="container mb-24">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1 space-y-8"
          >
            <div className="inline-block px-4 py-2 border border-primary/20 rounded-full text-sm font-serif italic text-primary/80">
              The Origin Story
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-primary leading-tight">
              Grinnin' Like a Jackass Eatin' Briars
            </h1>
            <p className="text-xl font-serif italic text-primary/60">
              A Memoir of Insanity, Awareness, and Acceptance
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Before I was a coach, I was a peanut farmer's son trying to outrun a 700-acre imprint. This is the raw, unpolished, and laugh-out-loud story of how I went from "caddywonked" to conscious.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://www.amazon.com/Grinnin-Like-Jackass-Eatin-Briars/dp/1734877421" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto font-serif rounded-full px-10 py-6 h-auto bg-primary text-white hover:bg-primary/90">
                  Get the Book on Amazon
                </Button>
              </a>
              <a href="https://www.audible.com/pd/Grinnin-Like-a-Jackass-Eatin-Briars-Audiobook/B0B8DT1ZKZ" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto font-serif rounded-full px-10 py-6 h-auto border-primary text-primary hover:bg-primary hover:text-white">
                  Listen on Audible
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center relative"
          >
            {/* Book Cover */}
            <div className="w-[300px] aspect-[2/3] bg-white shadow-2xl rotate-3 border border-primary/5 relative z-10 overflow-hidden">
              <img 
                src="/images/book-cover.jpg" 
                alt="Grinnin' Like a Jackass Eatin' Briars" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0" />
          </motion.div>
        </div>
      </section>

      {/* Why Read This? */}
      <section className="py-24 bg-[#F0EBE0]/30 mb-24">
        <div className="container max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-serif text-primary">
            Why This Isn't Just Another Memoir
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4 p-6 bg-white/50 border border-primary/5">
              <h3 className="text-xl font-serif text-primary">It's The "Prequel"</h3>
              <p className="text-muted-foreground font-light">
                Understand the "Love Wound" framework not as a theory, but as a lived experience. See how patterns form in real time.
              </p>
            </div>
            <div className="space-y-4 p-6 bg-white/50 border border-primary/5">
              <h3 className="text-xl font-serif text-primary">It's Hilarious</h3>
              <p className="text-muted-foreground font-light">
                Healing doesn't have to be heavy. I believe in "warm and stark transparency" served with a side of Southern grit.
              </p>
            </div>
            <div className="space-y-4 p-6 bg-white/50 border border-primary/5">
              <h3 className="text-xl font-serif text-primary">It's Global</h3>
              <p className="text-muted-foreground font-light">
                From a Georgia peanut farm to Hong Kong boardrooms. A journey that proves you can run far, but you can't hide from yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Reading */}
      <section className="py-24 bg-white mb-24">
        <div className="container max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-primary">
              Books That Changed My Life
            </h2>
            <p className="text-muted-foreground font-light max-w-2xl mx-auto">
              I often tell clients: "I can't do the work for you, but I can show you the map." These are the maps I trust. Read them, and we'll have a lot more to talk about.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Book 1 */}
            <div className="group space-y-6">
              <div className="aspect-[2/3] bg-muted relative overflow-hidden shadow-lg transition-transform group-hover:-translate-y-2 duration-300">
                <img 
                  src="/images/awareness-book.jpg" 
                  alt="Awareness by Anthony De Mello" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3 text-center">
                <h3 className="text-xl font-serif text-primary">Awareness</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Anthony De Mello</p>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                  "If you only read one book on this list, make it this one. It's the foundation of everything I teach about waking up."
                </p>
                <a href="https://amzn.to/3CQqZ1L" target="_blank" rel="noopener noreferrer" className="inline-block pt-2 text-primary hover:underline font-serif italic">
                  Get it on Amazon &rarr;
                </a>
              </div>
            </div>

            {/* Book 2 */}
            <div className="group space-y-6">
              <div className="aspect-[2/3] bg-muted relative overflow-hidden shadow-lg transition-transform group-hover:-translate-y-2 duration-300">
                <img 
                  src="/images/body-keeps-score.jpg" 
                  alt="The Body Keeps the Score" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3 text-center">
                <h3 className="text-xl font-serif text-primary">The Body Keeps the Score</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Bessel van der Kolk</p>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                  "You can't think your way out of a trauma response. This book explains why your body remembers what your mind tries to forget."
                </p>
                <a href="https://amzn.to/3CQqZ1L" target="_blank" rel="noopener noreferrer" className="inline-block pt-2 text-primary hover:underline font-serif italic">
                  Get it on Amazon &rarr;
                </a>
              </div>
            </div>

            {/* Book 3 */}
            <div className="group space-y-6">
              <div className="aspect-[2/3] bg-muted relative overflow-hidden shadow-lg transition-transform group-hover:-translate-y-2 duration-300">
                <img 
                  src="/images/attached-book.jpg" 
                  alt="Attached" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3 text-center">
                <h3 className="text-xl font-serif text-primary">Attached</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Amir Levine & Rachel Heller</p>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                  "The manual for your relationship style. Stop asking 'Why are they like this?' and start understanding the biology of attachment."
                </p>
                <a href="https://amzn.to/3CQqZ1L" target="_blank" rel="noopener noreferrer" className="inline-block pt-2 text-primary hover:underline font-serif italic">
                  Get it on Amazon &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="container mb-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl font-serif text-center text-primary">What Readers Are Saying</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Lovingly told, with warm and stark transparency and laugh-out-loud humor.",
              "An important book about uncovering our own truth and finding the courage to embrace what we find.",
              "I laughed, I cried, and I saw myself in every page. A masterclass in vulnerability.",
              "Jeff doesn't just tell his story; he invites you to look at your own with more compassion."
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 border border-primary/10 shadow-sm relative"
              >
                <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/10" />
                <div className="flex gap-1 mb-4 text-primary/60">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg font-serif italic text-primary/80 relative z-10">
                  "{review}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif">
            Start The Journey Before The Session
          </h2>
          <p className="text-xl text-primary-foreground/80 font-light">
            Read the story. See the pattern. Then let's talk.
          </p>
          <a href="https://www.amazon.com/Grinnin-Like-Jackass-Eatin-Briars/dp/1734877421" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-[#F9F7F2] text-primary hover:bg-white font-serif text-xl px-12 py-8 h-auto rounded-full transition-transform hover:scale-105">
              Buy The Book
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
