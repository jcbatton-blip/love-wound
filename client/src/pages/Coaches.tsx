import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, Users, BookOpen, Award, Heart, Target, Lightbulb, GraduationCap, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { trackEvent } from "@/lib/analytics";

export default function Coaches() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#F9F7F2] pt-24">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8 px-4"
          >
            <div className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-widest uppercase">
              Love Wound Coach Certification
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-primary leading-tight">
              Become a Certified<br />
              <span className="italic">Love Wound Coach</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary/70 font-serif italic">
              The Teaching Hospital for Inner Healing: Curriculum → Practicum → Residency
            </p>
            
            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:jeff@jeffbatton.com?subject=Founding Cohort Application - Love Wound Certification">
                <Button 
                  size="lg" 
                  className="bg-primary text-white hover:bg-primary/90 font-serif text-base md:text-lg px-8 md:px-10 py-5 md:py-6 h-auto rounded-full transition-all duration-300 shadow-lg"
                  onClick={() => trackEvent('coach_cert_apply_hero')}
                >
                  Apply for Founding Cohort
                </Button>
              </a>
              <a href="/coaches">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-serif text-base md:text-lg px-8 md:px-10 py-5 md:py-6 h-auto rounded-full transition-all duration-300"
                >
                  View Curriculum
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary">
                Why Most Coaching Fails to Create Lasting Change
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                The coaching industry is saturated with well-meaning practitioners who lack the depth to create real transformation. Clients come to them stuck in toxic relationship patterns, and coaches respond with:
              </p>
              <ul className="space-y-3 pl-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">—</span>
                  <span>Communication scripts that don't address why the client chose that partner in the first place</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">—</span>
                  <span>Boundary-setting techniques that fail because the client's wound makes them feel guilty for having boundaries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">—</span>
                  <span>Mindset affirmations that ring hollow because the unconscious pattern is still running</span>
                </li>
              </ul>
              <p className="text-2xl font-serif italic text-primary/80 border-l-4 border-primary pl-8 py-4 bg-primary/5 rounded-r-lg">
                The result? Clients feel temporarily better, then repeat the same pattern with a different person. They blame themselves. They think they're broken. And coaches feel helpless, watching their clients cycle through the same pain.
              </p>
              <p>
                <strong className="text-primary">The truth is:</strong> Most coaches were never trained in inner healing work. They learned tactics, not transformation. They can see the symptoms (toxic relationships, people-pleasing, self-sabotage) but they can't see the wound underneath.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 md:py-24 bg-[#F0EBE0]/30">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary">
                The Love Wound Method: Secular Inner Healing for Modern Coaches
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                For over 30 years, I've practiced a form of inner healing rooted in the work of John and Paula Sanford—pioneers in understanding how childhood wounds create adult patterns. Their work was profound, but it was wrapped in Christian language that limited its reach.
              </p>
              <p>
                I've spent three decades <strong className="text-primary">secularizing their methodology</strong>, integrating insights from A.S. Neill's radical psychology, Carl Jung's depth work, and Anthony de Mello's teachings on awareness. The result is <strong className="text-primary">The Love Wound Method</strong>—a systematic approach to helping clients see the unconscious pattern, break its spell, and rewrite their relational lives.
              </p>
              <p className="text-2xl font-serif italic text-primary/80 border-l-4 border-primary pl-8 py-4 bg-primary/5 rounded-r-lg">
                This is not a weekend workshop. This is a 12-month Teaching Hospital program: 6 months of intensive training + 6 months of paid practice under supervision.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-6">
              {[
                { icon: Heart, title: "Root Work, Not Fruit Chasing", desc: "Address the wound, not just the symptoms" },
                { icon: Target, title: "3-4 Sessions, Not 3-4 Years", desc: "Transform clients faster with depth work" },
                { icon: Lightbulb, title: "Awareness, Not Effort", desc: "Make the unconscious conscious" }
              ].map((item, index) => (
                <Card key={index} className="border-primary/10 hover:border-primary/30 transition-all duration-300 bg-white">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-serif text-primary">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The 3-Phase Model Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary">
              The Teaching Hospital Model
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We train coaches the same way doctors and therapists are trained: Learn → Practice → Residency. This isn't a certificate program. It's a professional development pathway.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                phase: "Phase 1",
                title: "Curriculum (Months 1-3)",
                icon: BookOpen,
                description: "Master the foundational frameworks through weekly group training and 1-on-1 coaching with Jeff.",
                includes: [
                  "Weekly 90-minute group training calls",
                  "Weekly 30-minute 1-on-1 coaching with Jeff",
                  "6 comprehensive modules covering the Love Wound Method",
                  "Weekly homework assignments and reading",
                  "Access to private community"
                ]
              },
              {
                phase: "Phase 2",
                title: "Practicum (Months 4-6)",
                icon: Stethoscope,
                description: "Apply what you've learned with real clients under Jeff's supervision. Practice the Mirror Method, conduct pattern hunts, and refine your skills.",
                includes: [
                  "Work with 5-10 volunteer clients (you recruit them)",
                  "Weekly case review calls with cohort",
                  "Weekly 30-minute 1-on-1 supervision with Jeff",
                  "Submit 1 recorded session per week for feedback",
                  "Final case study presentation for certification"
                ]
              },
              {
                phase: "Phase 3",
                title: "Residency (Months 7-12) - Optional",
                icon: GraduationCap,
                description: "Get paid to practice under the Love Wound brand. Jeff handles scheduling, billing, and marketing. You focus on coaching.",
                includes: [
                  "Take clients at $150/session (Teaching Clinic rate)",
                  "You keep 70% ($105/session), Jeff takes 30% ($45)",
                  "Jeff refers overflow clients to you",
                  "2x monthly group supervision (90 min)",
                  "1x monthly 1-on-1 with Jeff (30 min)",
                  "Option to stay in network or go independent after residency"
                ]
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 bg-gradient-to-br from-white to-[#F9F7F2]">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <phase.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-primary/60 tracking-widest uppercase mb-2">{phase.phase}</div>
                        <h3 className="text-2xl md:text-3xl font-serif text-primary mb-4">{phase.title}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">{phase.description}</p>
                        
                        <div>
                          <h4 className="font-medium text-primary mb-3">What's Included:</h4>
                          <ul className="space-y-2">
                            {phase.includes.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Curriculum Section */}
      <section className="py-16 md:py-24 bg-[#F9F7F2]">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary">
              The 6-Module Curriculum
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each module builds on the last, taking you from foundational concepts to advanced practice. By the end, you'll be able to identify a Love Wound in one session and guide a client to transformation in 3-4 sessions.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                module: "Module 1",
                weeks: "Weeks 1-4",
                title: "How We Learn Love",
                tagline: "The Download: Before language, before memory, you absorbed how love works.",
                concepts: [
                  "The 6 Love Wounds: Abandonment, Rejection, Invisibility, Control, Unworthiness, Betrayal",
                  "The Imprint: How patterns form before you have words for them",
                  "Child-centered vs. family-centered homes",
                  "How to identify a client's primary wound in intake"
                ],
                practicum: "Identify your own Love Wound and trace it to childhood. Practice intake sessions with 3 volunteer clients."
              },
              {
                module: "Module 2",
                weeks: "Weeks 5-8",
                title: "The Overflow Cup",
                tagline: "You can't give what you don't have. When your cup is empty, you're just shoulding all over yourself.",
                concepts: [
                  "The Cup Framework: Full, Empty, Below Empty",
                  "The Rejoicing Test: Can you rejoice when someone else gets what you want?",
                  "Below Empty = Medication (food, alcohol, porn, work, control)",
                  "The goal: Overflow (where you don't notice anymore)"
                ],
                practicum: "Track your own cup level for 30 days. Conduct Cup Assessments with 3 clients."
              },
              {
                module: "Module 3",
                weeks: "Weeks 9-12",
                title: "Pattern Hunting (Fruit to Root)",
                tagline: "You know a tree by its fruit. The pattern repeats itself. More times than not, it's literally the same pattern.",
                concepts: [
                  "How to spot 'shoulding' in client language",
                  "The Fruit: What they're doing that drains their cup",
                  "The Pattern: The repetitive behavior across relationships",
                  "The Root: The original wound/download"
                ],
                practicum: "Map a client's relationship history and demonstrate how their Love Wound has been the invisible architect."
              },
              {
                module: "Module 4",
                weeks: "Weeks 13-16",
                title: "The Mirror Method",
                tagline: "You can do the same thing, but you have to change the intent behind it.",
                concepts: [
                  "How to hold up the mirror without triggering defensiveness",
                  "The difference between behavior and intent",
                  "How to help clients see their pattern (awareness precedes change)",
                  "What to do when clients resist the mirror"
                ],
                practicum: "Conduct 5 Mirror Sessions (recorded for feedback). Learn to recognize the moment of 'seeing.'"
              },
              {
                module: "Module 5",
                weeks: "Weeks 17-20",
                title: "Changing the Story",
                tagline: "Forgiveness is the fruit of awareness.",
                concepts: [
                  "How to help clients rewrite their story",
                  "The shift from 'They did this TO me' to 'This is what I learned about love'",
                  "How to facilitate forgiveness (not forced, but natural)",
                  "The difference between understanding and excusing"
                ],
                practicum: "Guide 3 clients through story revision. Document the transformation."
              },
              {
                module: "Module 6",
                weeks: "Weeks 21-24",
                title: "Filling the Cup",
                tagline: "When you stop shoulding, the cup starts filling.",
                concepts: [
                  "How to help clients stop doing what they don't want to do",
                  "The practice of 'want-based living' vs 'should-based living'",
                  "How to recognize when the cup is filling (early signs)",
                  "How to know when a client has reached overflow"
                ],
                practicum: "Final case study presentation: client journey from wound to overflow."
              }
            ].map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-primary/10 hover:border-primary/20 transition-all duration-300 bg-white/80 backdrop-blur">
                  <CardContent className="p-8 space-y-6">
                    <div>
                      <div className="text-sm font-medium text-primary/60 tracking-widest uppercase mb-2">{module.module} • {module.weeks}</div>
                      <h3 className="text-2xl font-serif text-primary mb-3">{module.title}</h3>
                      <p className="text-lg font-serif italic text-primary/70">{module.tagline}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-primary mb-3">Core Concepts:</h4>
                      <ul className="space-y-2">
                        {module.concepts.map((concept, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{concept}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-primary/5 rounded-lg p-6">
                      <h4 className="font-medium text-primary mb-2">Practicum:</h4>
                      <p className="text-muted-foreground">{module.practicum}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Lineage Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary">
                Standing on the Shoulders of Giants
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The Love Wound Method didn't emerge from a vacuum. It's built on decades of work by pioneers who understood that transformation happens when we make the unconscious conscious.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  name: "A.S. Neill",
                  work: "Summerhill: A Radical Approach to Child Rearing",
                  insight: "Neill proved that coercion creates neurosis. When children are forced to \"do what they should\" instead of \"what they want,\" they learn self-betrayal as a survival strategy.",
                  takeaway: "The understanding that most relationship dysfunction stems from childhood coercion, not inherent brokenness."
                },
                {
                  name: "John & Paula Sanford",
                  work: "Healing the Wounded Spirit & Transformation of the Inner Man",
                  insight: "The Sanfords developed a comprehensive inner healing methodology rooted in Christian prayer ministry. Their work on bitter root judgments, generational patterns, and the wounded spirit was profound—but inaccessible to secular audiences.",
                  takeaway: "Their systematic approach to tracing adult patterns back to childhood wounds, stripped of religious language and reframed for universal application."
                },
                {
                  name: "Carl Jung",
                  work: "Depth Psychology",
                  insight: "Jung taught that \"until you make the unconscious conscious, it will direct your life and you will call it fate.\" His work on shadow, projection, and individuation forms the psychological backbone of The Love Wound Method.",
                  takeaway: "The understanding that awareness itself is transformative—once you see the pattern, you can't unsee it."
                },
                {
                  name: "Anthony de Mello",
                  work: "Awareness: The Perils and Opportunities of Reality",
                  insight: "De Mello's teachings on waking up from societal programming and releasing attachments provide the spiritual (but non-religious) dimension of this work.",
                  takeaway: "The practice of helping clients see their illusions (waiting to be saved, needing external validation) without trying to fix them."
                }
              ].map((thinker, index) => (
                <div key={index} className="bg-[#F9F7F2] rounded-xl p-8 space-y-4">
                  <h3 className="text-2xl font-serif text-primary">{thinker.name} — <em className="text-primary/70">{thinker.work}</em></h3>
                  <p className="text-muted-foreground leading-relaxed">{thinker.insight}</p>
                  <p className="text-primary font-medium border-l-4 border-primary pl-4">
                    What I took: {thinker.takeaway}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <p className="text-2xl font-serif italic text-primary/80 bg-primary/5 rounded-xl p-8">
                All four sources say the same thing: You've been programmed to live unconsciously. Society and family trained you to betray yourself. <strong>Awareness breaks the spell.</strong> Once you see it, you're free.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-16 md:py-24 bg-[#F0EBE0]/30">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary">
                Investment & Cohort Details
              </h2>
            </div>

            <Card className="border-primary/10 bg-white">
              <CardContent className="p-10 space-y-8">
                <div className="bg-primary/10 rounded-xl p-8 text-center space-y-4">
                  <h3 className="text-3xl font-serif text-primary">Founding Cohort Special Pricing</h3>
                  <div className="space-y-2">
                    <p className="text-2xl text-muted-foreground"><span className="line-through">$15,000</span> <span className="text-4xl font-bold text-primary">$6,000</span></p>
                    <p className="text-lg text-muted-foreground">Or 6 monthly payments of $1,000</p>
                  </div>
                  <p className="text-sm text-primary/70 italic">Limited to 10 coaches. Future cohorts will be $15,000.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-serif text-primary mb-4">Program Details</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground"><strong>Duration:</strong> 6 months (January - June 2025)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground"><strong>Format:</strong> Weekly group calls + weekly 1-on-1 coaching</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground"><strong>Cohort Size:</strong> Limited to 10 coaches</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground"><strong>Residency:</strong> Optional 6-month paid practice (Months 7-12)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif text-primary mb-4">What's Included</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">24 weekly group training calls (90 min)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">24 weekly 1-on-1 coaching sessions with Jeff (30 min)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">6 comprehensive training modules</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Private community access</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Certified Love Wound Coach credential</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-lg p-6">
                  <h3 className="text-xl font-serif text-primary mb-3">Why Founding Cohort Pricing?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You're getting $15K worth of training for $6K because you're helping me refine the curriculum. In exchange for the discount, I need your feedback, testimonials, and commitment to the full 6 months. This is a legitimate 60% discount—not a gimmick.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Ideal Candidate Section */}
      <section className="py-16 md:py-24 bg-[#F9F7F2]">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary">
                Is This Certification Right for You?
              </h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif text-primary mb-6">This program is designed for coaches who:</h3>
                <ul className="space-y-4">
                  {[
                    "Already have a coaching or counseling practice but feel limited by surface-level tools",
                    "Work with clients stuck in toxic relationship patterns and want to address the root cause",
                    "Are drawn to depth psychology, inner healing, or consciousness work",
                    "Want to differentiate themselves in a crowded market with a specialized methodology",
                    "Are ready to invest 6 months in mastering a transformative approach",
                    "Resonate with secular spirituality (Jung, de Mello, Neill) rather than religious frameworks"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary/5 rounded-xl p-8">
                <h3 className="text-2xl font-serif text-primary mb-4">Especially Powerful For:</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-primary">Recovering evangelicals</strong> who grew up in purity culture, complementarianism, or "submit and obey" theology. You know firsthand how religious coercion creates relationship dysfunction. You also know that most secular coaching feels shallow and most Christian coaching re-traumatizes. <strong className="text-primary">This training is the third way:</strong> Deep inner healing work that uses biblical wisdom without the dogma.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#F9F7F2] to-[#F0EBE0]">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-2xl text-primary/70 font-serif italic">
              Founding Cohort begins January 2025. Applications are now open.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're limiting enrollment to 10 coaches to ensure personalized attention. This is your chance to get in at the ground level of a framework that's about to explode.
            </p>
            <a href="mailto:jeff@jeffbatton.com?subject=Founding Cohort Application - Love Wound Certification">
              <Button 
                size="lg" 
                className="bg-primary text-white hover:bg-primary/90 font-serif text-lg px-12 py-7 h-auto rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl"
                onClick={() => trackEvent('coach_cert_apply_footer')}
              >
                Apply for Founding Cohort
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <p className="text-sm text-muted-foreground">
              Questions? Email <a href="mailto:jeff@jeffbatton.com" className="text-primary hover:underline">jeff@jeffbatton.com</a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
