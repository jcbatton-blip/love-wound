import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Video } from 'lucide-react';

export default function DiscoverySession() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-widest uppercase mb-6">
              Free Discovery Session
            </div>
            <h1 className="text-5xl font-bold tracking-tight mb-4">
              Let's Talk
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A 30-minute conversation to explore how the Mirror Method can transform your relationships. No pressure, no sales pitch—just clarity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">30 Minutes</h3>
              <p className="text-sm text-muted-foreground">
                Focused conversation about your specific relationship challenge
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Video className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Video Call</h3>
              <p className="text-sm text-muted-foreground">
                Connect via Zoom from anywhere in the world
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-sm text-muted-foreground">
                Choose a time that works best for your schedule
              </p>
            </div>
          </div>

          {/* Calendly Inline Widget */}
          <div className="bg-card rounded-lg border p-8">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/jcbatton/let-s-talk?hide_gdpr_banner=1"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Not ready to schedule? Have questions first?
            </p>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:jcbatton@gmail.com">Send me an email</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
