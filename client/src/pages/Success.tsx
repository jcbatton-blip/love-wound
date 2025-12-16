import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Calendar, ArrowRight, Loader2 } from 'lucide-react';
import { Link, useSearch } from 'wouter';
import { getProductById, CALENDLY_LINKS } from '@shared/products';

export default function Success() {
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const sessionId = params.get('session_id');
  const productId = params.get('product_id');
  
  const [product, setProduct] = useState<ReturnType<typeof getProductById>>(undefined);
  
  useEffect(() => {
    // Try to get product from URL param or localStorage
    const pid = productId || localStorage.getItem('last_product_id');
    if (pid) {
      setProduct(getProductById(pid));
      localStorage.removeItem('last_product_id');
    }
  }, [productId]);

  const calendlyLink = product?.calendlyLink;
  const isDigitalProduct = product?.id === 'kit';

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9F7F2] to-[#F0EBE0]/30 flex items-center justify-center">
      <div className="container py-24">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-medium text-primary tracking-tight mb-4">
            Payment Successful!
          </h1>
          
          <p className="text-xl text-muted-foreground font-light mb-8">
            {product ? (
              <>Thank you for purchasing <strong className="text-primary">{product.name}</strong>.</>
            ) : (
              <>Thank you for your purchase.</>
            )}
          </p>

          {/* Next Steps */}
          <div className="bg-white rounded-xl border border-primary/10 shadow-lg p-8 mb-8">
            {isDigitalProduct ? (
              <>
                <h2 className="text-2xl font-serif text-primary mb-4">Your Kit is Ready</h2>
                <p className="text-muted-foreground mb-6">
                  Check your email for access to The Kit. You'll receive the digital guide, audio walkthrough, and journal prompts within the next few minutes.
                </p>
                <Button size="lg" className="rounded-full font-serif" asChild>
                  <Link href="/">
                    Return Home
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </>
            ) : calendlyLink ? (
              <>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-serif text-primary mb-4">Now, Let's Schedule Your Session</h2>
                <p className="text-muted-foreground mb-6">
                  Click below to choose a time that works for you. You'll receive a confirmation email with Zoom details.
                </p>
                <Button size="lg" className="rounded-full font-serif" asChild>
                  <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                    Book Your Session
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-serif text-primary mb-4">What's Next?</h2>
                <p className="text-muted-foreground mb-6">
                  Jeff will reach out within 24 hours to schedule your sessions and discuss next steps.
                </p>
                <Button size="lg" className="rounded-full font-serif" asChild>
                  <Link href="/">
                    Return Home
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </>
            )}
          </div>

          {/* Confirmation Note */}
          <p className="text-sm text-muted-foreground">
            A receipt has been sent to your email. If you have any questions, email{' '}
            <a href="mailto:jeff@jeffbatton.com" className="text-primary hover:underline">
              jeff@jeffbatton.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
