import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, CreditCard, FileText, User, ExternalLink, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { CALENDLY_LINKS } from '@shared/products';

export default function ClientPortal() {
  const [email, setEmail] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleManageSubscription = async () => {
    if (!showEmailInput) {
      setShowEmailInput(true);
      return;
    }

    if (!email || !email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);
    try {
      // Stripe Customer Portal requires a customer ID
      // For now, direct them to check their email for invoice links
      // In production with accounts, we'd look up their Stripe customer ID
      toast.info(
        "Check your email for invoice and payment links from Stripe. If you need help, contact Jeff directly.",
        { duration: 5000 }
      );
      setShowEmailInput(false);
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9F7F2] to-[#F0EBE0]/30">
      <div className="container py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-medium text-primary tracking-tight mb-4">
              Client Portal
            </h1>
            <p className="text-xl text-muted-foreground font-light">
              Manage your sessions, subscriptions, and payment methods
            </p>
          </div>

          {/* Cancellation Policy Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-amber-800 font-medium">24-Hour Cancellation Policy</p>
              <p className="text-sm text-amber-700">
                Sessions may be rescheduled up to 24 hours before your appointment. 
                Cancellations within 24 hours are non-refundable.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors bg-white/80">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl text-primary">Book a Session</CardTitle>
                <CardDescription className="font-light">
                  Schedule your next coaching session at a time that works for you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full rounded-full" size="lg" asChild>
                  <a href={CALENDLY_LINKS.mirror} target="_blank" rel="noopener noreferrer">
                    90-Min Mirror Session <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button className="w-full rounded-full" size="lg" variant="outline" asChild>
                  <a href={CALENDLY_LINKS.coaching} target="_blank" rel="noopener noreferrer">
                    60-Min Coaching Session <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors bg-white/80">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl text-primary">Manage Payments</CardTitle>
                <CardDescription className="font-light">
                  View invoices and payment history via email links from Stripe
                </CardDescription>
              </CardHeader>
              <CardContent>
                {showEmailInput ? (
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-primary/20 rounded-full focus:outline-none focus:border-primary"
                    />
                    <Button 
                      className="w-full rounded-full" 
                      size="lg"
                      onClick={handleManageSubscription}
                      disabled={loading}
                    >
                      {loading ? 'Loading...' : 'Get Billing Info'}
                    </Button>
                  </div>
                ) : (
                  <Button 
                    className="w-full rounded-full" 
                    size="lg"
                    onClick={handleManageSubscription}
                  >
                    Manage Billing
                  </Button>
                )}
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors bg-white/80">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl text-primary">Join Session</CardTitle>
                <CardDescription className="font-light">
                  Click here when it's time for your scheduled session
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full rounded-full" size="lg" variant="outline" asChild>
                  <a href="https://us02web.zoom.us/j/6811699428" target="_blank" rel="noopener noreferrer">
                    Join Zoom <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors bg-white/80">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl text-primary">Resources</CardTitle>
                <CardDescription className="font-light">
                  Access your session materials and resources
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full rounded-full" size="lg" variant="outline" onClick={() => toast.info("Resources coming soon!")}>
                  View Resources
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="font-serif text-xl text-primary">Need Help?</CardTitle>
              <CardDescription className="font-light">
                Have questions about your sessions or subscription? I'm here to help.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white" asChild>
                <a href="mailto:jeff@jeffbatton.com">Contact Jeff</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
