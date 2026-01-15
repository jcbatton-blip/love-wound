import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function PracticeCircleCheckout() {
  const [isProcessing, setIsProcessing] = useState(false);
  const createCheckoutSession = trpc.stripe.createCheckoutSession.useMutation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCheckout = async () => {
    setIsProcessing(true);
    try {
      const { url } = await createCheckoutSession.mutateAsync({
        productId: "practice_circle",
      });
      
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("There was an error processing your payment. Please try again or contact jeff@jeffbatton.com");
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9F7F2] to-[#F0EBE0]/30">
      <div className="container py-24">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-widest uppercase mb-6">
              Practice Circle
            </div>
            <h1 className="text-5xl font-serif font-medium text-primary tracking-tight mb-4">
              Welcome to the Practice Circle
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Your application has been accepted. Complete your enrollment to begin.
            </p>
          </div>

          {/* What's Included */}
          <div className="bg-white rounded-2xl border border-primary/10 shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-serif text-primary mb-8">What's Included</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-primary mb-2">Two Group Sessions Monthly</h3>
                  <p className="text-muted-foreground font-light">
                    Practice awareness in real-time with others. Scheduled at consistent times each month.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-primary mb-2">One Private Session Monthly</h3>
                  <p className="text-muted-foreground font-light">
                    60-minute 1:1 session with Jeff to work on your specific patterns.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-primary mb-2">Ongoing Practice Container</h3>
                  <p className="text-muted-foreground font-light">
                    Month-to-month commitment. Cancel anytime with 30 days notice.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-primary/5 rounded-2xl border border-primary/10 p-8 md:p-12 mb-8">
            <div className="flex items-baseline justify-center gap-2 mb-4">
              <span className="text-5xl font-serif font-medium text-primary">$250</span>
              <span className="text-xl text-muted-foreground font-light">/month</span>
            </div>
            <p className="text-center text-muted-foreground font-light mb-8">
              Billed monthly. Cancel anytime with 30 days notice.
            </p>

            <Button
              onClick={handleCheckout}
              disabled={isProcessing}
              size="lg"
              className="w-full bg-primary text-white hover:bg-primary/90 font-serif text-lg py-6 h-auto rounded-full"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                "Complete Enrollment"
              )}
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-6 font-light">
              Secure payment processed by Stripe. You'll be redirected to complete your enrollment.
            </p>
          </div>

          {/* Important Information */}
          <div className="bg-white rounded-2xl border border-primary/10 p-8">
            <h3 className="text-xl font-serif text-primary mb-4">Important Information</h3>
            <div className="space-y-3 text-muted-foreground font-light">
              <p>
                • Your first payment will be processed immediately upon enrollment
              </p>
              <p>
                • You'll receive session scheduling details within 24 hours of enrollment
              </p>
              <p>
                • Month-to-month commitment—cancel anytime with 30 days written notice
              </p>
              <p>
                • Questions? Email <a href="mailto:jeff@jeffbatton.com" className="text-primary hover:underline">jeff@jeffbatton.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
