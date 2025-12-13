import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      {/* Hero */}
      <section className="container mb-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-muted">
              {/* Placeholder for Jeff's photo - using a generic professional placeholder for now */}
              <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                [Jeff Batton Portrait]
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-xl shadow-lg border border-primary/10 max-w-xs">
              <p className="font-serif text-xl text-primary italic">
                "I don't know what it is — but I know what it ain't. And this ain't it."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary">
              The Coach of<br />"What Not To Do"
            </h1>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                My coaching comes with stories, scars, Southern sayings, and soul-level honesty.
              </p>
              <p>
                I don't come from a place of having it all figured out. I come from waking up crossways in the bed and realizing: <span className="italic">this ain't your bed.</span>
              </p>
              <p>
                That was my moment. On the sidewalk, empty and wrecked. I didn't know where I was going or what that even meant... but the one thing I did know was that I wasn't going to be miserable anymore.
              </p>
              <p>
                And that's when the real awakening began.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-muted/30 mb-24">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12">
            My Philosophy
          </h2>
          
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-primary">You Are Not Broken</h3>
              <p className="text-lg text-muted-foreground">
                You're just repeating what you were taught. And when those same painful patterns keep showing up—in your relationships, your work, your inner world—it's not because something's wrong with you. It's just time to plant something different.
              </p>
            </div>

            <div className="w-24 h-0.5 bg-primary/20 mx-auto" />

            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-primary">You Can't Plant Tomatoes and Get Corn</h3>
              <p className="text-lg text-muted-foreground">
                If you keep planting the seeds of your childhood programming, you will keep harvesting the same relationships. To change the harvest, we have to change the seed.
              </p>
            </div>

            <div className="w-24 h-0.5 bg-primary/20 mx-auto" />

            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-primary">Awareness Changes Everything</h3>
              <p className="text-lg text-muted-foreground">
                "If you're ready to listen and if you're ready to be challenged, then the most important thing of all becomes self-observation." — Anthony De Mello
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work With Me */}
      <section className="container mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Ways to Work With Me
          </h2>
          <p className="text-muted-foreground">
            Start your journey of un-becoming everything that isn't you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-background border border-primary/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">1:1 Coaching</h3>
            <p className="text-muted-foreground mb-8 min-h-[80px]">
              Deep, personalized work to identify your specific Love Code and rewrite it. We go to the root, not just the fruit.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Weekly 60-minute sessions
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Direct access for urgent triggers
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Personalized pattern mapping
              </li>
            </ul>
            <Button className="w-full font-serif">Apply for Coaching</Button>
          </div>

          <div className="bg-primary text-primary-foreground rounded-2xl p-8 shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold mb-4">Digital Courses</h3>
              <p className="text-primary-foreground/80 mb-8 min-h-[80px]">
                Self-paced journeys to help you become a Pattern Hunter in your own life. Coming soon.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  The Love Wound Masterclass
                </li>
                <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  Pattern Hunter Toolkit
                </li>
                <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  7-Day Awareness Challenge
                </li>
              </ul>
              <Button variant="secondary" className="w-full font-serif">Join Waitlist</Button>
            </div>
            {/* Texture overlay */}
            <div className="absolute inset-0 bg-white/5 mix-blend-overlay" />
          </div>
        </div>
      </section>
    </div>
  );
}
