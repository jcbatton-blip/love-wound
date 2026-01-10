import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Search, Lightbulb, Repeat } from "lucide-react";

export default function HowItWorks() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const steps = [
    {
      icon: Calendar,
      title: "Discovery Session",
      duration: "60 minutes · Free",
      description: "We'll explore your relationship patterns and see if this work resonates with you. No pressure, no sales pitch—just clarity about whether we're a good fit."
    },
    {
      icon: Search,
      title: "Pattern Assessment",
      duration: "First 1-2 sessions",
      description: "Together, we identify your specific Love Wound—the early imprint that's been shaping your attractions and relationship choices. This is where the 'aha moments' happen."
    },
    {
      icon: Lightbulb,
      title: "Rewriting the Pattern",
      duration: "Weeks 2-8",
      description: "Through guided reflection and somatic practices, you'll learn to recognize the pattern as it arises and choose differently. This isn't talk therapy—it's nervous system reprogramming."
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
      answer: "Most clients experience noticeable shifts within 3-4 sessions. Deep, lasting change typically happens over 3-6 months of consistent work. The timeline depends on how ingrained your pattern is and how ready you are to change it."
    },
    {
      question: "What if my partner won't participate?",
      answer: "This work is about you, not your partner. When you change your pattern, the dynamic shifts—even if your partner doesn't do the work. That said, some relationships can't survive when one person breaks their pattern. That's information, not failure."
    },
    {
      question: "Is this covered by insurance?",
      answer: "No. This is coaching, not therapy, so it's not covered by insurance. However, I offer payment plans and a monthly subscription option to make the work accessible."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-b from-[#F0EBE0] to-[#F9F7F2]">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center space-y-8"
          >
            <div className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-widest uppercase">
              The Process
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-primary leading-tight">
              How It Works
            </h1>
            <p className="text-xl text-primary/70 font-light max-w-2xl mx-auto">
              A clear path from pattern recognition to lasting change
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container max-w-5xl">
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
            <p className="text-xl font-serif italic text-primary border-l-4 border-primary pl-8 py-4 bg-white/50 rounded-r-lg">
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
            <p className="text-xl font-serif italic text-primary border-l-4 border-primary pl-8 py-4 bg-white/50 rounded-r-lg">
              Consistency beats intensity. Every single time.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#F9F7F2] to-[#F0EBE0]">
        <div className="container max-w-3xl">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12 text-center space-y-6">
            <h3 className="text-3xl font-serif text-primary">
              Ready to Start?
            </h3>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Book a free discovery session. No commitment, no pressure—just an honest conversation about whether this work is right for you.
            </p>
            <Link href="/discovery">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-serif text-lg px-10 py-6 h-auto rounded-full transition-all duration-300 shadow-lg">
                Book Your Free Discovery Session
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Spacer */}
      <div className="h-20" />
    </div>
  );
}
