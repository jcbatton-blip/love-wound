import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Search, Repeat, AlertCircle, CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const steps = [
    {
      icon: Calendar,
      title: "Application Call",
      duration: "30 minutes",
      description: "We'll explore your relationship patterns and see if this work resonates with you. No pressure, no sales pitch—just clarity about whether we're a good fit."
    },
    {
      icon: Search,
      title: "Pattern Assessment",
      duration: "First 1-2 sessions",
      description: "Together, we identify your specific Love Wound—the subconscious pattern that's been shaping your attractions and relationship choices. This is where the 'aha moments' happen."
    },
    {
      icon: Repeat,
      title: "Integration & Practice",
      duration: "Ongoing",
      description: "Real change happens through repetition. We run the plays over and over again until they become second nature—just like learning a play in sports. That's how we rewire the subconscious. Most clients experience significant shifts within 3-4 months."
    }
  ];

  const faqs = [
    {
      question: "Why do you require long-term commitment?",
      answer: "Because your patterns were built over decades — and real change happens through repetition, not insight alone. Awareness is fast. Integration takes time. Lasting change doesn't come from one-off sessions — it comes from a weekly practice that rewires how you relate to yourself."
    },
    {
      question: "How is this different from therapy?",
      answer: "Therapy often focuses on understanding your past. This work focuses on changing your future. We're not just talking about patterns—we're interrupting them at the nervous system level. Think of it as therapy + coaching + somatic work."
    },
    {
      question: "What if I've already tried coaching?",
      answer: "Most coaching focuses on behavior change (communication skills, dating strategies). This work goes deeper—we're addressing the subconscious programming that drives those behaviors. If you've tried everything and still end up in the same patterns, this is the missing piece."
    },
    {
      question: "Do I need to be in a relationship to do this work?",
      answer: "No. In fact, many clients find this work most powerful when they're single. You'll learn to recognize your pattern before you're in it, which means you can make different choices from the start."
    },
    {
      question: "How long does this take?",
      answer: "Most clients experience noticeable shifts within the first few months. Deep, lasting change typically happens over a year of consistent weekly practice. The timeline depends on how ingrained your pattern is and how ready you are to change it. This is Root-Work, not a quick fix."
    },
    {
      question: "What if my partner won't participate?",
      answer: "This work is about you, not your partner. When you change your pattern, the dynamic shifts—even if your partner doesn't do the work. That said, some relationships can't survive when one person breaks their pattern. That's information, not failure."
    },
    {
      question: "Is this covered by insurance?",
      answer: "No. This is coaching, not therapy, so it's not covered by insurance. However, I offer payment plans and a monthly subscription option to make the work accessible."
    },
    {
      question: "Is there anything beyond the 12-month mentorship?",
      answer: "For a select few who've completed Root-Work Mentorship and want to go deeper—there's an apprenticeship path. It's not advertised. It's by invitation only. If you're curious, ask during your application call."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-[#F0EBE0] to-[#F9F7F2]">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center space-y-8"
          >
            <div className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-widest uppercase">
              The Art of Self-Observation
            </div>
            
            {/* Carl Jung Quote */}
            <blockquote className="text-lg md:text-xl text-muted-foreground italic border-l-4 border-primary/30 pl-6 my-8 text-left max-w-2xl mx-auto">
              "Until you make the unconscious conscious, it will direct your life and you will call it fate."
              <footer className="text-sm text-primary/60 mt-2 not-italic">— Carl Jung</footer>
            </blockquote>
            
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-primary leading-tight">
              Where's Your Goat<br />Still Gettable?
            </h1>
            <p className="text-xl text-primary/70 font-light max-w-2xl mx-auto">
              Your triggers aren't obstacles. They are the map to your freedom. If it can rattle you, it owns you.
            </p>
            
            {/* Peter Crone Quote */}
            <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary/30 pl-6 mt-8 text-left max-w-2xl mx-auto">
              "Life will continue to bring you people and circumstances to show you where you are not free."
              <footer className="text-sm text-primary/60 mt-2 not-italic">— Peter Crone</footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* The Signal, Not the Problem */}
      <section className="py-20">
        <div className="container max-w-5xl">
          <div className="bg-muted/30 rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-primary">The Signal, Not the Problem</h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    You don't have to be in a relationship to do relationship work. Because what triggers you in someone else is just showing you what's still unhealed in you.
                  </p>
                  <p>
                    When you ask your partner to change—to stop triggering you—you're essentially asking them to do something different so <em>you</em> don't have to feel something. They're just a mirror showing you where a thorn is.
                  </p>
                  <p className="italic text-primary/70">
                    You're just mad at the mirror cause your hair's messed up. Getting a new mirror won't fix your hair.
                  </p>
                  <p>
                    That's the work—not fixing the other person, but asking: <span className="text-primary font-medium italic">"Why does this matter?"</span>
                  </p>
                  <p>
                    If it didn't matter, it wouldn't shake you. Wouldn't rattle you. Wouldn't get your goat.
                  </p>
                  <p>
                    But when it does? That's your signal. It's not the problem—it's the mirror.
                  </p>
                </div>
              </div>
              <div className="bg-background rounded-2xl p-8 shadow-xl border border-primary/10">
                <h3 className="font-serif text-xl font-bold text-primary mb-6">The Pattern Hunter's Checklist</h3>
                <ul className="space-y-4">
                  {[
                    "What specific behavior triggered me?",
                    "What old feeling did this bring up?",
                    "When was the first time I felt this?",
                    "What belief about myself is being threatened?",
                    "If this didn't matter, who would I be?"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Search className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Iron Sharpens Iron */}
      <section className="py-20 bg-gradient-to-b from-[#F9F7F2] to-[#F0EBE0]">
        <div className="container max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Iron Sharpens Iron
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              When you are born all you know is love. Mom and dad show you how to DO love. Before you had language, before you had logic, before you had memory, mom and dad showed you:
            </p>
            <p className="text-3xl md:text-4xl font-serif font-semibold text-primary mb-6">
              How love works.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Not because anyone taught you... but because you felt it.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              You think you're attracted to people because of how they look or how they act. But really, what draws you to one another are <strong className="text-primary">matching wounds</strong>. Those matching wounds are designed to bring each other's wounds to the surface—so you can become aware of them and ultimately heal from them.
            </p>
            <p className="text-lg text-muted-foreground">
              Relationships are the friction that polishes the blade. We attract people who rub us the wrong way <em>on purpose</em>—so we can smooth out the rough edges of our own ego.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-destructive/5 border border-destructive/10 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <AlertCircle className="w-8 h-8 text-destructive" />
                <h3 className="text-2xl font-serif font-bold text-destructive">The Victim Trap</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                "Why does this keep happening to me? Why do I always find the narcissists/addicts/cheaters?"
              </p>
              <p className="text-sm font-medium text-destructive/80 uppercase tracking-wide">
                Result: Repeating the Cycle
              </p>
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-serif font-bold text-primary">The Pattern Hunter</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                "I see that I attracted this dynamic to show me where I still don't respect myself. Thank you for the lesson."
              </p>
              <p className="text-sm font-medium text-primary/80 uppercase tracking-wide">
                Result: Breaking the Code
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Love Wound Patterns */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Common Love Wound Patterns
            </h2>
            <p className="text-lg text-muted-foreground">
              These are the most common matching wounds. See if you recognize yourself.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pattern 1: Anxious + Avoidant */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                The Anxious + The Avoidant
              </h3>
              <p className="text-muted-foreground mb-4">
                <strong className="text-primary">The Dynamic:</strong> One person craves closeness and reassurance, the other needs space and independence. The more one pursues, the more the other withdraws.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong className="text-primary">The Wound:</strong> The anxious partner learned love means fear of abandonment. The avoidant partner learned love means losing yourself.
              </p>
              <p className="text-sm text-primary/70 italic">
                What it teaches: The anxious learns to self-soothe. The avoidant learns to stay present.
              </p>
            </div>

            {/* Pattern 2: Abandoner + Abandoned */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                The Abandoner + The Abandoned
              </h3>
              <p className="text-muted-foreground mb-4">
                <strong className="text-primary">The Dynamic:</strong> One person fears being trapped and leaves before they can be left. The other fears being left and clings tighter, which triggers the abandoner to run.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong className="text-primary">The Wound:</strong> The abandoner learned love equals suffocation. The abandoned learned love equals loss.
              </p>
              <p className="text-sm text-primary/70 italic">
                What it teaches: The abandoner learns commitment doesn't mean death. The abandoned learns they're whole without someone else.
              </p>
            </div>

            {/* Pattern 3: Perfectionist + Rebel */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                The Perfectionist + The Rebel
              </h3>
              <p className="text-muted-foreground mb-4">
                <strong className="text-primary">The Dynamic:</strong> One person needs order, control, and "doing things right." The other resists rules and structure. The perfectionist tries to fix the rebel; the rebel resists being controlled.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong className="text-primary">The Wound:</strong> The perfectionist learned love means earning approval through performance. The rebel learned love means losing freedom.
              </p>
              <p className="text-sm text-primary/70 italic">
                What it teaches: The perfectionist learns to let go. The rebel learns structure isn't prison.
              </p>
            </div>

            {/* Pattern 4: Rescuer + Victim */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                The Rescuer + The Victim
              </h3>
              <p className="text-muted-foreground mb-4">
                <strong className="text-primary">The Dynamic:</strong> One person needs to be needed and fixes/saves the other. The other needs to be saved and stays helpless. Both are terrified of being alone.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong className="text-primary">The Wound:</strong> The rescuer learned love means being useful. The victim learned love means being taken care of.
              </p>
              <p className="text-sm text-primary/70 italic">
                What it teaches: The rescuer learns they're lovable without fixing anyone. The victim learns they're capable without being saved.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-8">
              These patterns aren't accidents. They're your subconscious trying to heal what was wounded in childhood. The question is: <strong className="text-primary">Will you stay unconscious and repeat the cycle, or will you wake up and break it?</strong>
            </p>
            <Link href="/discovery">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-serif text-lg px-10 py-6 h-auto rounded-full">
                Break Your Pattern
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              A clear path from pattern recognition to lasting change
            </p>
          </div>
          
          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col md:flex-row gap-8 items-start"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-baseline gap-4">
                      <h3 className="text-2xl font-serif text-primary">{step.title}</h3>
                      <span className="text-sm text-primary/60 font-medium">{step.duration}</span>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Testimonials - Short Quotes */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-primary mb-4">
              What Clients Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary/5 rounded-2xl p-8 border border-primary/10"
            >
              <p className="text-lg text-muted-foreground italic mb-4">
                "I spent years in therapy talking about my patterns. Three sessions with Jeff, and I finally understood why I kept choosing the same type of person."
              </p>
              <p className="text-sm font-medium text-primary">— Sarah M.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-primary/5 rounded-2xl p-8 border border-primary/10"
            >
              <p className="text-lg text-muted-foreground italic mb-4">
                "Jeff taught me to be self sufficient. Before I would blame everyone around me instead of forgiving those that hurt me."
              </p>
              <p className="text-sm font-medium text-primary">— Yumi</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary/5 rounded-2xl p-8 border border-primary/10"
            >
              <p className="text-lg text-muted-foreground italic mb-4">
                "Jeff has a way about him to cut to the heart of the matter. It's not always easy but definitely worth it."
              </p>
              <p className="text-sm font-medium text-primary">— Barbara</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-primary/5 rounded-2xl p-8 border border-primary/10"
            >
              <p className="text-lg text-muted-foreground italic mb-4">
                "Looking back I can not tell you how much I have grown. Thanks to Jeff I understand that I am not just a mom, a wife, a daughter. I am on the path to love myself."
              </p>
              <p className="text-sm font-medium text-primary">— Rachael</p>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/the-practice" className="text-primary hover:underline font-medium">
              Read all client stories →
            </Link>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-gradient-to-b from-[#F9F7F2] to-[#F0EBE0]">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-serif text-primary text-center mb-12">
            What to Expect
          </h2>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>
              <strong>This work is not easy.</strong> You'll be confronting patterns that have been running your life since childhood. There will be moments of discomfort, resistance, and doubt. That's normal.
            </p>
            <p>
              <strong>This work is not quick.</strong> You didn't develop these patterns overnight, and you won't undo them in a weekend workshop. Real change requires time, repetition, and patience.
            </p>
            <p>
              <strong>This work is worth it.</strong> When you break free from your Love Wound, you don't just change your relationships—you change your entire life. You stop seeking external validation. You stop settling for less than you deserve. You start choosing partners who actually see you.
            </p>
            <p className="text-2xl font-serif italic text-primary border-l-4 border-primary pl-8 py-4 bg-white/50 rounded-r-lg">
              Most clients say the same thing: "I wish I'd done this years ago."
            </p>
          </div>
        </div>
      </section>

      {/* How Change Happens - Consistency */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-serif text-primary text-center mb-12">
            How Change Actually Happens
          </h2>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>
              <strong>This is what makes me a coach, not a therapist.</strong> We don't just talk about your pattern—we run the play over and over again until it becomes second nature.
            </p>
            <p className="text-sm text-muted-foreground/70 italic">
              Research on early childhood development confirms this approach: <a href="https://www.instagram.com/p/DTN37CvDIKA/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">"Kids do not learn from long talks and logical debates. They learn by watching what you do."</a> Toddlers absorb patterns through observation—facial expressions, tone of voice, body language—not through verbal instruction. This is why your Love Wound was imprinted before you had words for it, and why changing it requires repetition, not just awareness.
            </p>
            <p>
              Think about learning any skill: shooting free throws, playing piano, speaking a new language. You don't get better by understanding the theory. You get better by practicing until your body knows what to do without thinking.
            </p>
            <p>
              <strong>The same is true for relationship patterns.</strong> You've been running your Love Wound pattern for decades. It's automatic. To change it, you need repetition—not insight.
            </p>
            <p>
              That's why the 12-week containers work. The people who see the most transformation are the people who show up consistently, week after week, running the new play until it replaces the old one.
            </p>
            <p className="text-2xl font-serif italic text-primary border-l-4 border-primary pl-8 py-4 bg-white/50 rounded-r-lg">
              Consistency beats intensity. Every single time.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-[#F9F7F2] to-[#F0EBE0]">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-serif text-primary text-center mb-16">
            Common Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-primary/10"
              >
                <h3 className="text-xl font-serif text-primary mb-4">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="bg-primary text-primary-foreground rounded-3xl p-12 md:p-20 relative overflow-hidden">
            <div className="relative z-10 space-y-8 text-center">
              <h2 className="text-3xl md:text-5xl font-serif font-bold">
                Ready to Start?
              </h2>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                This application begins a conversation—not a commitment. Root-work requires readiness, honesty, and willingness to stay with the work. If that resonates, you're welcome to apply.
              </p>
              <Button size="lg" variant="secondary" className="font-serif rounded-full px-10 py-6 h-auto text-lg" asChild>
                <Link href="/discovery">Apply for Root-Work Mentorship</Link>
              </Button>
            </div>
            
            {/* Decorative background */}
            <div className="absolute inset-0 bg-[url('/images/pattern-imprint.png')] opacity-10 mix-blend-overlay bg-cover bg-center" />
          </div>
        </div>
      </section>
    </div>
  );
}
