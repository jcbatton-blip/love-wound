import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Video, Loader2 } from 'lucide-react';

export default function DiscoverySession() {
  const [isLoading, setIsLoading] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);
  const [formData, setFormData] = useState({
    whyNow: '',
    whatTried: '',
    readyForCommitment: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Save application to database
      const response = await fetch("/api/submit-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      // Show Calendly after successful submission
      setShowCalendar(true);
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("There was an error submitting your application. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9F7F2] to-[#F0EBE0]/30">
      <div className="container py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-widest uppercase mb-6">
              Application Conversation
            </div>
            <h1 className="text-5xl font-serif font-medium text-primary tracking-tight mb-4">
              Apply for Root-Work Mentorship
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light mb-6">
              This application begins a conversation — not a commitment.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Root-work requires readiness, honesty, and willingness to stay with the work. If that resonates, you're welcome to apply.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-white/80 rounded-lg border border-primary/10 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg text-primary mb-2">30 Minutes</h3>
              <p className="text-sm text-muted-foreground font-light">
                Focused conversation about your patterns and readiness for long-term practice
              </p>
            </div>

            <div className="text-center p-6 bg-white/80 rounded-lg border border-primary/10 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Video className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg text-primary mb-2">Video Conversation</h3>
              <p className="text-sm text-muted-foreground font-light">
                Connect via Zoom from anywhere in the world
              </p>
            </div>

            <div className="text-center p-6 bg-white/80 rounded-lg border border-primary/10 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg text-primary mb-2">Flexible Scheduling</h3>
              <p className="text-sm text-muted-foreground font-light">
                Choose a time that works best for your schedule
              </p>
            </div>
          </div>

          {/* Application Form */}
          {!showCalendar ? (
            <div className="bg-white rounded-lg border border-primary/10 shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-serif text-primary text-center mb-6">Application Questions</h2>
              <p className="text-muted-foreground text-center mb-8">
                These questions help us both determine if this work is a good fit. Please answer honestly—there are no "right" answers.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-primary font-medium mb-2">
                    Why now? What's happening in your life that makes you ready for this work?
                  </label>
                  <textarea
                    required
                    value={formData.whyNow}
                    onChange={(e) => setFormData({ ...formData, whyNow: e.target.value })}
                    className="w-full p-4 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[120px]"
                    placeholder="Share what's bringing you here..."
                  />
                </div>
                <div>
                  <label className="block text-primary font-medium mb-2">
                    What have you already tried? (Therapy, coaching, books, courses, etc.)
                  </label>
                  <textarea
                    required
                    value={formData.whatTried}
                    onChange={(e) => setFormData({ ...formData, whatTried: e.target.value })}
                    className="w-full p-4 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[120px]"
                    placeholder="Tell me about your journey so far..."
                  />
                </div>
                <div>
                  <label className="block text-primary font-medium mb-2">
                    Are you ready to commit to a year-long, weekly practice? What makes you say yes or no?
                  </label>
                  <textarea
                    required
                    value={formData.readyForCommitment}
                    onChange={(e) => setFormData({ ...formData, readyForCommitment: e.target.value })}
                    className="w-full p-4 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[120px]"
                    placeholder="Be honest about your readiness..."
                  />
                </div>
                <div className="text-center pt-4">
                  <Button type="submit" size="lg" className="bg-primary text-white hover:bg-primary/90 font-serif text-lg px-12 py-6 h-auto rounded-full">
                    Submit Application & Schedule Conversation
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            /* Calendly Iframe Embed */
            <div className="bg-white rounded-lg border border-primary/10 shadow-lg overflow-hidden relative flex justify-center">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
                <span className="ml-3 text-muted-foreground">Loading calendar...</span>
              </div>
            )}
              <iframe
                src="https://calendly.com/jcbatton/phone?hide_gdpr_banner=1&background_color=f9f7f2&text_color=1e3a5f&primary_color=1e3a5f&embed_domain=jeffbatton.com&embed_type=Inline"
                width="100%"
                height="800"
                frameBorder="0"
                title="Schedule an Application Conversation"
                onLoad={() => setIsLoading(false)}
                style={{ border: 'none', minHeight: '800px' }}
                className="calendly-inline-widget"
              />
            </div>
          )}

          {/* What to Expect Section */}
          <div className="mt-12 bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-serif text-primary text-center mb-6">What to Expect in This Conversation</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-primary font-medium mb-2">We'll Explore Your Patterns</p>
                <p className="text-sm text-muted-foreground">I'll ask about your relationship history and help you see the recurring themes.</p>
              </div>
              <div>
                <p className="text-primary font-medium mb-2">You'll Get Clarity</p>
                <p className="text-sm text-muted-foreground">Most people leave with at least one "aha moment" about why they keep attracting the same dynamics.</p>
              </div>
              <div>
                <p className="text-primary font-medium mb-2">We'll Determine Fit</p>
                <p className="text-sm text-muted-foreground">No pressure, no sales pitch. Just an honest conversation about whether this work is right for you.</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-primary/60 font-medium">This application begins a conversation—not a commitment.</p>
              <p className="text-xs text-muted-foreground mt-2">Root-work requires readiness, honesty, and willingness to stay with the work.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4 font-light">
              Not ready to apply? Have questions first?
            </p>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full font-serif" asChild>
              <a href="mailto:jeff@jeffbatton.com">Send me an email</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
