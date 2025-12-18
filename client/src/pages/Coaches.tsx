import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Users, BookOpen, Award } from "lucide-react";
import { motion } from "framer-motion";
import { trackEvent } from "@/lib/analytics";

export default function Coaches() {
  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4">
        <div className="container max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full border border-primary/20 text-primary/60 text-sm tracking-widest uppercase"
          >
            The Practitioner's Path
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-primary leading-tight"
          >
            Don't Just Coach.<br/>
            <span className="italic text-primary/80">Heal the Pattern.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed"
          >
            Most coaches get stuck on the "story." Learn the Love Wound™ framework to see the "code" beneath the behavior and facilitate permanent transformation for your clients.
          </motion.p>
        </div>
      </section>

      {/* The Problem/Solution */}
      <section className="py-20 bg-white border-y border-primary/5">
        <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center px-4">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif text-primary">The Missing Piece in Your Practice</h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              You know the feeling. You have a brilliant session, the client has a breakthrough, but two weeks later they are back in the same loop.
            </p>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              That's because you're coaching the <strong>symptom</strong> (the fight, the breakup, the anxiety) instead of the <strong>source</strong> (the Wound).
            </p>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Most coaches spend their careers pulling fruit off the tree—addressing communication issues, boundary problems, attachment styles. But here's the thing: <strong>the more fruit you pull, the more you get.</strong> The tree keeps blooming.
            </p>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              The Mirror Method lays the axe at the root. We don't cut it. We expose it. I make you a <strong>pattern hunter</strong>—you track the patterns (the fruit) back to the childhood imprint. When your client sees the root, the fruit changes on its own.
            </p>
          </div>
          <div className="grid gap-6">
            {[
              { title: "Diagnose with Precision", desc: "Stop asking 'how does that feel' and start telling them 'here is why you do that.'", icon: Users },
              { title: "The 6-Wound Framework", desc: "Master the specific antidotes for Abandonment, Rejection, Invisibility, Control, Unworthiness, and Betrayal.", icon: BookOpen },
              { title: "Certified Methodology", desc: "Stand out in a crowded market with a proprietary, proven clinical framework.", icon: Award },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-xl bg-[#F9F7F2] border border-primary/5">
                <div className="shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground font-light text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Offerings */}
      <section className="py-24 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-primary mb-4">Two Ways to Train</h2>
            <p className="text-muted-foreground font-light">Join the circle of practitioners.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* The Circle */}
            <div className="bg-white p-10 rounded-3xl border border-primary/10 shadow-sm flex flex-col">
              <div className="mb-6">
                <span className="text-xs font-bold tracking-widest uppercase text-primary/40">Weekly Support</span>
                <h3 className="text-3xl font-serif text-primary mt-2">The Practitioner's Circle</h3>
              </div>
              <p className="text-muted-foreground font-light mb-8 flex-grow">
                A weekly support group for life coaches. We process <em>your</em> counter-transference, workshop difficult client cases, and keep your own vessel clean so you can serve at the highest level.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-primary/80">
                  <Check className="w-4 h-4 text-primary" /> Weekly 90-min Group Calls
                </li>
                <li className="flex items-center gap-3 text-sm text-primary/80">
                  <Check className="w-4 h-4 text-primary" /> Case Study Reviews
                </li>
                <li className="flex items-center gap-3 text-sm text-primary/80">
                  <Check className="w-4 h-4 text-primary" /> Peer Support Network
                </li>
              </ul>
              <Button 
                className="w-full py-6 rounded-full font-serif text-lg bg-[#F9F7F2] text-primary hover:bg-[#F0EBE0]"
                onClick={() => {
                  trackEvent('coach_circle_click');
                  window.location.href = "mailto:jeff@jeffbatton.com?subject=Application for Practitioner's Circle";
                }}
              >
                Apply to Join
              </Button>
            </div>

            {/* The Certification */}
            <div className="bg-[#1A2333] p-10 rounded-3xl text-[#F9F7F2] flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
              
              <div className="mb-6 relative z-10">
                <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">Certification Program</span>
                <h3 className="text-3xl font-serif text-white mt-2">Love Wound™ Certified</h3>
              </div>
              <p className="text-white/70 font-light mb-8 flex-grow relative z-10">
                A comprehensive 6-month training to master the Love Wound framework. Learn the theory, practice the diagnostic tools, and get certified to use this methodology with your own clients. Upon certification, you're eligible to join the JBLC coaching team—practice under the Love Wound brand while we handle scheduling, billing, and marketing. You focus on the work, we handle the business.
              </p>
              <ul className="space-y-3 mb-8 relative z-10">
                <li className="flex items-center gap-3 text-sm text-white/80">
                  <Check className="w-4 h-4 text-[#D4AF37]" /> 6-Month Curriculum
                </li>
                <li className="flex items-center gap-3 text-sm text-white/80">
                  <Check className="w-4 h-4 text-[#D4AF37]" /> Clinical Rounds (Observe Live Sessions)
                </li>
                <li className="flex items-center gap-3 text-sm text-white/80">
                  <Check className="w-4 h-4 text-[#D4AF37]" /> Official Certification Badge
                </li>
                <li className="flex items-center gap-3 text-sm text-white/80">
                  <Check className="w-4 h-4 text-[#D4AF37]" /> Coaching Position at JBLC
                </li>
              </ul>
              <Button 
                className="w-full py-6 rounded-full font-serif text-lg bg-[#D4AF37] text-[#1A2333] hover:bg-[#C49F27] relative z-10"
                onClick={() => {
                  trackEvent('coach_certification_click');
                  window.location.href = "mailto:jeff@jeffbatton.com?subject=Waitlist for Love Wound Certification";
                }}
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
