import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Video, Loader2 } from 'lucide-react';

export default function DiscoverySession() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9F7F2] to-[#F0EBE0]/30">
      <div className="container py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-widest uppercase mb-6">
              Free Discovery Session
            </div>
            <h1 className="text-5xl font-serif font-medium text-primary tracking-tight mb-4">
              Let's Talk
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              A 60-minute conversation to explore how the Mirror Method can transform your relationships. No pressure, no sales pitch—just clarity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-white/80 rounded-lg border border-primary/10 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg text-primary mb-2">60 Minutes</h3>
              <p className="text-sm text-muted-foreground font-light">
                Focused conversation about your specific relationship challenge
              </p>
            </div>

            <div className="text-center p-6 bg-white/80 rounded-lg border border-primary/10 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Video className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg text-primary mb-2">Video Call</h3>
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

          {/* Calendly Iframe Embed */}
          <div className="bg-white rounded-lg border border-primary/10 shadow-lg overflow-hidden relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
                <span className="ml-3 text-muted-foreground">Loading calendar...</span>
              </div>
            )}
            <iframe
              src="https://calendly.com/jcbatton/phone?hide_gdpr_banner=1&background_color=f9f7f2&text_color=1e3a5f&primary_color=1e3a5f"
              width="100%"
              height="700"
              frameBorder="0"
              title="Schedule a Discovery Session"
              onLoad={() => setIsLoading(false)}
              style={{ border: 'none' }}
            />
          </div>

          {/* What to Expect Section */}
          <div className="mt-12 bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-serif text-primary text-center mb-6">What to Expect on This Call</h3>
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
              <p className="text-sm text-primary/60 font-medium">✓ 100% Free - No Credit Card Required</p>
              <p className="text-xs text-muted-foreground mt-2">Join 500+ clients who've transformed their relationships</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4 font-light">
              Not ready to schedule? Have questions first?
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
