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

      {/* Work With Me - Comprehensive */}
      <section className="container mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Ways to Work With Me
          </h2>
          <p className="text-muted-foreground text-lg">
            I don't sell "advice." I sell awareness. Choose the level of depth you're ready for.
          </p>
        </div>

        {/* Single Sessions */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-semibold text-primary mb-8 text-center">Single Sessions</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* The Kit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-background border border-primary/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="mb-4">
                <h4 className="text-xl font-serif font-bold text-primary">The Kit</h4>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-3xl font-bold text-primary">$47</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                The self-paced foundation. Understand the 6 Love Wounds and identify your primary pattern.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>6 Love Wounds Digital Guide</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Audio Walkthrough</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Pattern Hunter Journal Prompts</span>
                </li>
              </ul>
              <Link href="/work-with-me">
                <Button className="w-full font-serif">Get The Kit</Button>
              </Link>
            </motion.div>

            {/* Mirror Session */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
                POPULAR
              </div>
              <div className="relative z-10">
                <div className="mb-4">
                  <h4 className="text-xl font-serif font-bold">The Mirror Session</h4>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-3xl font-bold">$350</span>
                  </div>
                </div>
                <p className="text-sm text-primary-foreground/90 mb-6">
                  Private, confidential 1:1 coaching. A 90-minute deep dive to locate your pattern with Jeff's undivided attention.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>100% Private & Confidential</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>90-Minute Video Call</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>No Observers, No Recording</span>
                  </li>
                </ul>
                <Link href="/work-with-me">
                  <Button className="w-full font-serif">Book A Session</Button>
                </Link>
              </div>
            </motion.div>

            {/* Teaching Clinic */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background border border-primary/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="mb-4">
                <h4 className="text-xl font-serif font-bold text-primary">The Teaching Clinic</h4>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-3xl font-bold text-primary">$150</span>
                  <span className="text-sm text-muted-foreground line-through">$350</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                1:1 coaching with Jeff at 57% off. Your session is observed by 2-4 certification interns and recorded for training purposes.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-amber-600">
                  <span className="mt-0.5">⚠</span>
                  <span>Observed by Interns (2-4 people)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-amber-600">
                  <span className="mt-0.5">⚠</span>
                  <span>Session Recorded for Training</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>60-Minute Session with Jeff</span>
                </li>
              </ul>
              <Link href="/work-with-me">
                <Button className="w-full font-serif">Book Clinic Session</Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Containers */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-semibold text-primary mb-8 text-center">Deep Work Containers</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Individual Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-background border-2 border-primary/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="mb-6">
                <h4 className="text-2xl font-serif font-bold text-primary">The Individual Container</h4>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-4xl font-bold text-primary">$5,000</span>
                  <span className="text-sm text-muted-foreground">or $1,350/mo × 4</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                The Reps. The Practice. The Rewiring. We don't just talk. We run the play until you can't get it wrong.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>12 Weekly Sessions (3 Months)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Direct Access (Voxer Support)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Customized Homework Protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Lifetime Access to The Kit</span>
                </li>
              </ul>
              <Link href="/work-with-me">
                <Button className="w-full font-serif text-base sm:text-lg py-6">
                  Apply for Individual Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            {/* Couples Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background border-2 border-primary/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="mb-6">
                <h4 className="text-2xl font-serif font-bold text-primary">The Couples Container</h4>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-4xl font-bold text-primary">$7,500</span>
                  <span className="text-sm text-muted-foreground">or $2,000/mo × 4</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                The Relationship Reconstruction. Re-learning the dance, one step at a time. We rebuild the foundation while you're living in the house.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>12 Weekly 90-Minute Sessions (3 Months)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Flexibility for Individual Breakout Sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Joint & Individual Voxer Support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Conflict Protocol Training</span>
                </li>
              </ul>
              <Link href="/work-with-me">
                <Button className="w-full font-serif text-base sm:text-lg py-6">
                  Apply for Couples Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Group Container & Retreat */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Inner Circle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-background border border-primary/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="mb-6">
              <h4 className="text-2xl font-serif font-bold text-primary">The Inner Circle</h4>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-4xl font-bold text-primary">$29</span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Ongoing support for those committed to breaking patterns. Direct access to Jeff, monthly group work, and discounted sessions.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Text Access for Urgent Support</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>2-4 Group Sessions per Month (90 min)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Discounted 1-on-1 Sessions ($250 vs $350)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Curated Video Library</span>
              </li>
            </ul>
            <Link href="/services">
              <Button className="w-full font-serif">Join The Inner Circle</Button>
            </Link>
          </motion.div>

          {/* Bespoke Retreat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="mb-6">
                <h4 className="text-2xl font-serif font-bold">The Bespoke Retreat</h4>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-4xl font-bold">$15,000</span>
                </div>
              </div>
              <p className="text-primary-foreground/90 mb-6">
                A private, immersive weekend for one couple. No distractions. Just deep conversation, reflection, and connection in a curated environment.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>2.5 Days of Intensive Immersion</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Hosted at a Private Destination</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Curated Culinary Experiences</span>
                </li>
              </ul>
              <Link href="/work-with-me">
                <Button className="w-full font-serif">Inquire for Availability</Button>
              </Link>
            </div>
            <div className="absolute inset-0 bg-white/5 mix-blend-overlay" />
          </motion.div>
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
