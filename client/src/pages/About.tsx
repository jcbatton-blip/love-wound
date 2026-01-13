import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";

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
              <img 
                src="/images/jeff-batton-headshot-enhanced.png" 
                alt="Jeff Batton - Root-Work Mentor | Relational Practice Guide | Inner Transformation Specialist" 
                className="w-full h-full object-cover"
              />
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

      {/* Recovering Evangelical Story */}
      <section className="container mb-24">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center">
            I'm a Recovering Evangelical. Let Me Be Your Sponsor.
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I grew up in a world where "dying to self" was the highest virtue, where questioning was sin, and where your worth was measured by how much you could endure without complaint.
            </p>
            <p>
              It took me 30 years to see that I wasn't being holy—I was being programmed. The church didn't teach me love; it taught me self-betrayal. So I went on a Don Quixote quest to "fix myself."
            </p>
            <p>
              In my search for what was missing—never satisfied, always reaching for the next breakthrough—I found the work of A.S. Neill, John and Paula Sanford, Carl Jung, and Anthony de Mello. The deeper I went, the more I realized: this wasn't about following the rules better. The Bible wasn't a rulebook. It was a manual for how the universe works.
            </p>
            <p>
              And somewhere in that journey, I realized something profound: everything I'd been searching for—peace, connection, wholeness—wouldn't come from the rule-following, disciplined, self-denying Jeff the church had trained me to be. It would be the fruit of letting the real Jeff come to the surface. The authentic Jeff. The one who'd been buried under decades of performance.
            </p>
            <p>
              And here's what shocked me: the real Jeff produced better results than the disciplined version ever could.
            </p>
            <p>
              God wasn't what I'd been taught. God was more. A lot more.
            </p>
            <p>
              I didn't leave the church angry. I left because I'd found something deeper.
            </p>
            
            <div className="my-12 py-8 px-10 bg-gradient-to-br from-primary/10 to-primary/5 border-l-8 border-primary rounded-2xl shadow-lg">
              <p className="text-3xl md:text-4xl font-serif font-bold text-primary leading-tight">
                Religion is just politics in drag.
              </p>
              <p className="text-xl text-primary/70 mt-4 font-light italic">
                Let's strip away the costume and work with what's real.
              </p>
            </div>

            <p>
              Now I help other recovering evangelicals (and anyone else programmed by coercion) do the same. Not by giving you a new set of rules, but by holding up a mirror so you can finally see what's been invisible.
            </p>
          </div>
        </div>
      </section>

      {/* The Lineage - Philosophical Foundation */}
      <section className="container mb-24 bg-[#F0EBE0]/30 -mx-4 px-4 py-16 md:mx-0 md:px-16 rounded-2xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-12">
            The Lineage: Standing on the Shoulders of Giants
          </h2>
          
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-primary">A.S. Neill — <em>Summerhill: A Radical Approach to Child Rearing</em></h3>
              <p className="text-lg text-muted-foreground">
                Neill proved that coercion creates neurosis. When children are forced to "do what they should" instead of "what they want," they learn self-betrayal as a survival strategy. This becomes the foundation for drained cups and toxic relationships in adulthood.
              </p>
              <p className="text-primary font-medium">
                What I took: The understanding that most relationship dysfunction stems from childhood coercion, not inherent brokenness.
              </p>
            </div>

            <div className="w-24 h-0.5 bg-primary/20 mx-auto" />

            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-primary">John & Paula Sanford — <em>Healing the Wounded Spirit</em> & <em>Transformation of the Inner Man</em></h3>
              <p className="text-lg text-muted-foreground">
                The Sanfords developed a comprehensive inner healing methodology rooted in Christian prayer ministry. Their work on bitter root judgments, generational patterns, and the wounded spirit was profound—but inaccessible to secular audiences.
              </p>
              <p className="text-primary font-medium">
                What I took: Their systematic approach to tracing adult patterns back to childhood wounds, stripped of religious language and reframed for universal application.
              </p>
            </div>

            <div className="w-24 h-0.5 bg-primary/20 mx-auto" />

            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-primary">Carl Jung — Depth Psychology</h3>
              <p className="text-lg text-muted-foreground">
                Jung taught that "until you make the unconscious conscious, it will direct your life and you will call it fate." His work on shadow, projection, and individuation forms the psychological backbone of The Love Wound Method.
              </p>
              <p className="text-primary font-medium">
                What I took: The understanding that awareness itself is transformative—once you see the pattern, you can't unsee it.
              </p>
            </div>

            <div className="w-24 h-0.5 bg-primary/20 mx-auto" />

            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-primary">Anthony de Mello — <em>Awareness: The Perils and Opportunities of Reality</em></h3>
              <p className="text-lg text-muted-foreground">
                De Mello's teachings on waking up from societal programming and releasing attachments provide the spiritual (but non-religious) dimension of this work. His emphasis on awareness over effort aligns perfectly with the Mirror Method.
              </p>
              <p className="text-primary font-medium">
                What I took: The practice of helping clients see their illusions (waiting to be saved, needing external validation) without trying to fix them.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-2xl font-serif italic text-primary/80 bg-primary/5 rounded-xl p-8">
              All four sources say the same thing: You've been programmed to live unconsciously. Society and family trained you to betray yourself. <strong>Awareness breaks the spell.</strong> Once you see it, you're free.
            </p>
          </div>
        </div>
      </section>

      {/* My Philosophy */}
      <section className="container mb-24 bg-[#F9F7F2] -mx-4 px-4 py-16 md:mx-0 md:px-16 rounded-2xl">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-12">
            My Philosophy
          </h2>
          
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-primary">You Are Not Broken</h3>
              <p className="text-lg text-muted-foreground">
                You're just repeating what you were taught. And when those same painful patterns keep showing up—in your relationships, your work, your sense of self, your life direction—it's not because something's wrong with you. This work goes deeper than fixing relationship outcomes. It rewires how you relate to yourself, which changes everything: your partnerships, your purpose, your peace.
              </p>
            </div>

            <div className="w-24 h-0.5 bg-primary/20 mx-auto" />

            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-primary">You Can't Plant Enough Tomato Seeds to Get Corn</h3>
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

            <div className="w-24 h-0.5 bg-primary/20 mx-auto" />

            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-primary">What Makes Me a Coach</h3>
              <p className="text-lg text-muted-foreground">
                I don't just show you the pattern. We run the plays over and over again until they become second nature—just like learning a play in sports. That's how we rewire the subconscious.
              </p>
              <p className="text-lg text-muted-foreground">
                Awareness is the doorway. But repetition is how you walk through it.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="container max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F9F7F2] p-12 rounded-2xl"
        >
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">
            Ready to See What's In The Mirror?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            The pattern stops when the awareness begins.
          </p>
          <Link href="/discovery">
            <Button size="lg" className="font-serif text-lg px-8 py-6 h-auto">
              Apply for Root-Work Mentorship
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
