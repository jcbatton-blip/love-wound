import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();
  const mirrorY = useTransform(scrollY, [0, 500], [0, 150]);
  const mirrorScale = useTransform(scrollY, [0, 500], [1, 1.05]);
  const mirrorOpacity = useTransform(scrollY, [0, 300], [0.6, 0.3]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="overflow-hidden bg-background">
      {/* Hero Section - Content Centered in Mirror */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#F9F7F2] pt-6 md:pt-28">
        {/* Subtle Background Texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

        {/* Central Mirror Frame Graphic - Enhanced with parallax */}
        <motion.div
          className="mirror-graphic absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ y: mirrorY, scale: mirrorScale }}
        >
          <motion.div
            className="w-[700px] h-[900px] border-[3px] border-primary rounded-[50%] shadow-[0_0_100px_rgba(0,0,0,0.2),0_0_50px_rgba(0,0,0,0.1)]"
            style={{ opacity: mirrorOpacity }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <motion.div
            className="absolute w-[680px] h-[880px] border-[2px] border-primary/80 rounded-[50%]"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
          />
          <motion.div
            className="absolute w-[660px] h-[860px] border-[1px] border-primary/50 rounded-[50%]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          />
        </motion.div>

        {/* Content Container - Centered within mirror */}
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl mx-auto text-center space-y-6 md:space-y-8 px-6 md:px-4 py-8 md:py-0"
          >
            <motion.div variants={fadeIn}>
              <span className="font-serif italic text-base md:text-xl text-primary/70 tracking-wide">
                The Love Wound Mirror™
              </span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-3xl md:text-6xl lg:text-7xl font-serif font-medium text-primary leading-tight">
              You Don't Need A Guru.<br />
              <span className="italic">You Need A Mirror.</span>
            </motion.h1>

            <motion.div variants={fadeIn} className="space-y-4 md:space-y-5">
              <h2 className="text-lg md:text-2xl lg:text-3xl font-serif text-primary/80 leading-relaxed">
                For people who've done the work, read the books, and changed everything externally — and still end up in the same place. Jeff Batton helps you find the pattern beneath the pattern and change it for good.
              </h2>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto">
              <Link href="/discovery" className="inline-block">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className="bg-primary text-white hover:bg-white hover:text-primary hover:border-primary hover:border-2 font-serif text-base md:text-lg px-8 md:px-10 py-5 md:py-6 h-auto rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl">
                    Apply for Root-Work Mentorship
                  </Button>
                </motion.div>
              </Link>
              <Link href="/the-practice" className="inline-block">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className="bg-primary text-white hover:bg-white hover:text-primary hover:border-primary hover:border-2 font-serif text-base md:text-lg px-8 md:px-10 py-5 md:py-6 h-auto rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl">
                    Learn How Root-Work Works
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who This Is For - Three Audience Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary">
              Who This Is For
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                question: "Stuck in the same relationship patterns?",
              },
              {
                question: "Dating the same wrong person again?",
              },
              {
                question: "Successful but feeling empty inside?",
              },
            ].map((card, index) => (
              <motion.div
                key={card.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Link href="/discovery" className="block h-full">
                  <Card className="h-full border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 bg-white cursor-pointer group">
                    <CardContent className="p-8 flex flex-col items-center justify-center text-center min-h-[200px]">
                      <h3 className="text-xl md:text-2xl font-serif font-medium text-primary group-hover:text-primary/80 transition-colors leading-snug">
                        {card.question}
                      </h3>
                      <span className="mt-6 text-sm font-medium tracking-widest uppercase text-primary/50 group-hover:text-primary transition-colors">
                        Book a Call →
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Jeff Section */}
      <section className="py-16 md:py-24 bg-[#F9F7F2]">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary">
              Coach of What Not to Do
            </h2>
            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6 text-left">
              <p>
                I've been a husband, an ex-husband, a father, a preacher, a missionary, a flight attendant, an author, and a coach for over 25 years. My resume reads like a wild sitcom script.
              </p>
              <p>
                I've made every mistake in the book — in relationships, in business, in life. That's not a disclaimer. That's my qualification.
              </p>
              <p className="text-xl font-serif italic text-primary/80 border-l-4 border-primary pl-8 py-4 bg-primary/5 rounded-r-lg">
                I don't coach from a textbook. I coach from the mirror.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }} className="pt-4">
              <a
                href="https://calendly.com/jcbatton/letstalk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-serif text-lg px-10 py-6 h-auto rounded-full shadow-lg hover:shadow-2xl transition-all duration-300">
                  Book a Free Discovery Call
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Love Wound Section */}
      <section className="py-20 md:py-32 bg-[#F9F7F2]">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-center space-y-10"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-serif font-medium text-primary">
                The Love Wound
              </h2>
              <p className="text-xl md:text-2xl font-serif italic text-primary/70">
                "You can't kill a tree by pulling the fruit off of it."
              </p>
            </div>
            <div className="text-left space-y-6 text-lg md:text-xl text-primary/80 leading-relaxed font-serif">
              <p>You were born whole. Pure love. No conditions, no filters, no fear. That's not a metaphor — that's your factory setting.</p>
              <p>But somewhere between birth and seven years old, while you were still wide open — still in that hypnotic state where everything downloads as truth — you learned what love looks like. Not from a book. Not from a teacher. From watching the two people who were supposed to show you.</p>
              <p>And whatever they did — that became love.</p>
              <p>Not because it was right. Not because it was healthy. But because you were too young to know the difference between what love is and what love does in this house.</p>
              <p>That download became your program. And your program has been running the show ever since.</p>
              <p>So you didn't keep choosing the wrong people. Your subconscious kept choosing the right ones — the ones who matched the program. The ones who made love feel familiar. Because familiar feels like home, even when home was the problem.</p>
              <p>And the cruelest part? You'd leave one. Find another. Same story, different face. Because you weren't pulling weeds.</p>
              <p className="font-serif italic text-primary/90 text-xl md:text-2xl border-l-4 border-primary pl-6 py-2">
                You were pulling fruit off a tree and wondering why it kept growing back.
              </p>
              <p>The Love Wound isn't a flaw in your character. It's a root. And roots don't respond to willpower or good intentions or another self-help book.</p>
              <p>There's a line that says "the axe is laid at the root." Not chopping. Not forcing. Just — awareness. Light on the thing that's been running in the dark.</p>
              <p>That's the moment everything changes.</p>
            </div>
            <p className="text-xl md:text-2xl font-serif font-medium text-primary pt-4">
              That's what we do here. We don't pull fruit. We find the root.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary">
              Work With Jeff
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-xl mx-auto">
              Choose the path that meets you where you are.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 — Discovery Call */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-primary/20 hover:border-primary/40 transition-all duration-300 bg-white/80 backdrop-blur flex flex-col">
                <CardContent className="p-8 flex flex-col flex-1 space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm font-medium tracking-widest uppercase text-primary/60">Entry Point</p>
                    <div className="text-4xl font-serif font-medium text-primary">FREE</div>
                    <p className="text-sm text-muted-foreground font-light">/ 30 min</p>
                    <p className="text-xl font-serif text-primary">Discovery Call</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed font-light flex-1">
                    No pressure, no pitch — just an honest conversation about where you are.
                  </p>
                  <a
                    href="https://calendly.com/jcbatton/letstalk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-white font-serif rounded-full py-5 h-auto transition-all duration-300">
                        Let's Talk
                      </Button>
                    </motion.div>
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 2 — Mirror Session */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-primary/20 hover:border-primary/40 transition-all duration-300 bg-white/80 backdrop-blur flex flex-col">
                <CardContent className="p-8 flex flex-col flex-1 space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm font-medium tracking-widest uppercase text-primary/60">Single Session</p>
                    <div className="text-4xl font-serif font-medium text-primary">$250</div>
                    <p className="text-sm text-muted-foreground font-light">/ 60 min</p>
                    <p className="text-xl font-serif text-primary">Mirror Session</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed font-light flex-1">
                    A single session. Just you and your mirror.
                  </p>
                  <a
                    href="https://calendly.com/d/cxkw-gzv-8kv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-white font-serif rounded-full py-5 h-auto transition-all duration-300">
                        Book Now
                      </Button>
                    </motion.div>
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 3 — 4-Session Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-primary/40 hover:border-primary/60 transition-all duration-300 bg-white shadow-xl flex flex-col relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary rounded-t-lg" />
                <CardContent className="p-8 flex flex-col flex-1 space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm font-medium tracking-widest uppercase text-primary/60">Best Value</p>
                    <div className="text-4xl font-serif font-medium text-primary">$850</div>
                    <p className="text-sm text-muted-foreground font-light">/ 4 x 60 min</p>
                    <p className="text-xl font-serif text-primary">4-Session Package</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed font-light flex-1">
                    Deep root work. This is where the real shift happens.
                  </p>
                  <a
                    href="https://calendly.com/d/cxkw-gzv-8kv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full bg-primary text-white hover:bg-primary/90 font-serif rounded-full py-5 h-auto transition-all duration-300 shadow-lg">
                        Book Now
                      </Button>
                    </motion.div>
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 4 — Apply for Root Work */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-primary/20 hover:border-primary/40 transition-all duration-300 bg-white/80 backdrop-blur flex flex-col">
                <CardContent className="p-8 flex flex-col flex-1 space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm font-medium tracking-widest uppercase text-primary/60">Full Engagement</p>
                    <div className="text-4xl font-serif font-medium text-primary">$12,000</div>
                    <p className="text-sm text-muted-foreground font-light">upfront / $14,000 payment plan</p>
                    <p className="text-xl font-serif text-primary">Apply for Root Work</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed font-light flex-1">
                    Application required. Not for everyone — and that's the point.
                  </p>
                  <Link href="/discovery" className="block">
                    <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-white font-serif rounded-full py-5 h-auto transition-all duration-300">
                        Apply Now
                      </Button>
                    </motion.div>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 5 — Couples Retreat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-primary/20 hover:border-primary/40 transition-all duration-300 bg-white/80 backdrop-blur flex flex-col">
                <CardContent className="p-8 flex flex-col flex-1 space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm font-medium tracking-widest uppercase text-primary/60">In-Person</p>
                    <div className="text-4xl font-serif font-medium text-primary">$4,500</div>
                    <p className="text-sm text-muted-foreground font-light">/ couple · 3 days all-inclusive</p>
                    <p className="text-xl font-serif text-primary">Couples Retreat</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed font-light flex-1">
                    Three days of intensive in-person couples work. All-inclusive.
                  </p>
                  <a
                    href="https://calendly.com/jcbatton/letstalk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-white font-serif rounded-full py-5 h-auto transition-all duration-300">
                        Let's Talk
                      </Button>
                    </motion.div>
                  </a>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>

            {/* Featured Testimonials Section */}
      <section className="py-16 md:py-24 bg-[#F9F7F2]">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary">
              What People Are Saying
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Tyler",
                initial: "T",
                text: "Jeff's guidance has saved my life. I was in therapy for 17 years. I struggled with anxiety, depression and addiction. I could never imagine my life & headspace where they are today. Everybody needs a Jeff in their life.",
              },
              {
                name: "Veronica",
                initial: "V",
                text: "Jeff is like a lighthouse. He helps me see when I'm off course. When I find myself in the middle of the ocean alone and afraid, his light, his smile, his compassion become the light that helps me find my way.",
              },
              {
                name: "Barbara B.",
                initial: "B",
                text: "Having awareness is the first step to transformation and with Jeff this becomes the roadmap of your life. A life filled with joy, peace and love in a way I had never experienced before. I like to call it The Unlearning of Barbara B.",
              },
              {
                name: "Mike B.",
                initial: "M",
                text: "Jeff is about freedom — freedom from our pasts that don't serve us. I'm living proof of what he told me was possible.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-8 flex flex-col space-y-6">
                    <p className="text-lg md:text-xl font-serif italic text-primary/80 leading-relaxed flex-1">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-4 pt-2 border-t border-primary/10">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-serif font-medium text-primary text-lg">{testimonial.initial}</span>
                      </div>
                      <span className="font-serif text-primary font-medium">— {testimonial.name}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* Email Capture Section — Brevo Embed */}
      <section className="py-16 md:py-24 bg-[#F9F7F2]">
        <div className="container max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary">
              Get Chapter 4 Free — The Love Wound You Don't Know You Have
            </h2>
            <p className="text-lg text-primary/70 font-light leading-relaxed">
              Drop your email. We'll send it straight to you.
            </p>
            <div className="mt-8">
              <iframe
                width="540"
                height="305"
                src="https://d09d9113.sibforms.com/serve/MUIFANfRqlMd8YfWHg-IK8PP7w0MQOo-iAhb3uUXtSh1OaYIkUKjFBpWbXgOFLJWtJrw_KNw-A5gu_V0sTqWJRf2TSucFOwxelgBbCpPS2qLCYr-NDSzljZiU508CaD0L2KjqsQhpmSy-aZ6911eRj9bN6zpiuPWSglRdSUCe7L2o_eWcHs7cZXtAqEmzO7s8C1XzLELNPt6HO18dg=="
                frameBorder="0"
                scrolling="auto"
                allowFullScreen
                style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
