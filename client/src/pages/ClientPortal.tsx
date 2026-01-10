import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, CreditCard, FileText, User, ExternalLink, AlertCircle, Play, Youtube } from 'lucide-react';
import { toast } from 'sonner';
import { CALENDLY_LINKS } from '@shared/products';

export default function ClientPortal() {
  const [email, setEmail] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [loading, setLoading] = useState(false);

  // Curated videos for clients - Jeff can update this list
  const recommendedVideos = [
    {
      title: "Understanding Your Love Wound",
      description: "The foundation of pattern recognition",
      youtubeId: "placeholder", // Replace with actual YouTube video ID
      duration: "15 min"
    },
    {
      title: "The Mirror Method Explained",
      description: "How awareness creates transformation",
      youtubeId: "placeholder", // Replace with actual YouTube video ID
      duration: "12 min"
    },
    {
      title: "Breaking the Pattern",
      description: "From recognition to freedom",
      youtubeId: "placeholder", // Replace with actual YouTube video ID
      duration: "18 min"
    }
  ];

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
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-medium text-primary tracking-tight mb-4">
              Client Portal
            </h1>
            <p className="text-xl text-muted-foreground font-light">
              Manage your sessions, subscriptions, and access resources
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
              <CardContent className="space-y-3">
                <Button className="w-full rounded-full" size="lg" variant="outline" asChild>
                  <a href="/submit-testimonial">
                    Share Your Experience
                  </a>
                </Button>
                <Button className="w-full rounded-full" size="lg" variant="outline" onClick={() => toast.info("Resources coming soon!")}>
                  View Resources
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Video Resources Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-serif text-primary">Recommended Videos</h2>
                <p className="text-muted-foreground font-light">Curated content to support your journey</p>
              </div>
              <Button variant="outline" size="sm" className="rounded-full" asChild>
                <a href="https://www.youtube.com/@jeffbatton" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-4 h-4 mr-2" />
                  Follow on YouTube
                </a>
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              {recommendedVideos.map((video, index) => (
                <Card key={index} className="border border-primary/10 hover:border-primary/30 transition-all hover:shadow-md bg-white/80 cursor-pointer group">
                  <CardContent className="p-4">
                    <div className="aspect-video bg-primary/5 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Play className="w-6 h-6 text-primary ml-1" />
                      </div>
                      <span className="absolute bottom-2 right-2 text-xs bg-black/60 text-white px-2 py-1 rounded">
                        {video.duration}
                      </span>
                    </div>
                    <h3 className="font-serif text-primary font-medium mb-1">{video.title}</h3>
                    <p className="text-sm text-muted-foreground font-light">{video.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4 italic">
              Videos coming soon — subscribe to Jeff's YouTube channel to be notified
            </p>
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
