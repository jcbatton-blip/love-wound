import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2, CheckCircle } from "lucide-react";

export default function SubmitTestimonial() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    title: "",
    testimonial: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.title || !formData.testimonial) {
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true);

    // Create mailto link as fallback
    const subject = encodeURIComponent("New Testimonial Submission");
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Date: ${formData.date}\n` +
      `Title: ${formData.title}\n\n` +
      `Testimonial:\n${formData.testimonial}`
    );
    
    // Open mailto link
    window.location.href = `mailto:jeff@jeffbatton.com?subject=${subject}&body=${body}`;
    
    // Show success message
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4">
        <Card className="max-w-2xl w-full p-12 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h1 className="text-4xl font-serif text-primary mb-4">Thank You!</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Your testimonial has been sent to Jeff. He'll review it and add it to the website soon.
          </p>
          <p className="text-muted-foreground mb-8">
            Your experience matters and helps others find the support they need.
          </p>
          <Button asChild>
            <a href="/">Return Home</a>
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            Share Your Experience
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your story can help others take the first step toward transformation. 
            Share what working with Jeff has meant to you.
          </p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-slate-900 mb-2">
                Date
              </label>
              <input
                type="text"
                id="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="January 10, 2026"
              />
              <p className="text-sm text-muted-foreground mt-1">
                This will appear with your testimonial
              </p>
            </div>

            <div>
              <label htmlFor="title" className="block text-sm font-medium text-slate-900 mb-2">
                Title of Your Experience *
              </label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Life Changing Experience"
                required
              />
              <p className="text-sm text-muted-foreground mt-1">
                A short headline that captures your experience
              </p>
            </div>

            <div>
              <label htmlFor="testimonial" className="block text-sm font-medium text-slate-900 mb-2">
                Your Testimonial *
              </label>
              <textarea
                id="testimonial"
                value={formData.testimonial}
                onChange={(e) => setFormData({ ...formData, testimonial: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                rows={6}
                placeholder="Share your experience working with Jeff. What changed? What did you discover? How has your life transformed?"
                required
              />
              <p className="text-sm text-muted-foreground mt-1">
                Be specific about what you learned or how you've changed
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                By submitting this testimonial, you give permission for it to be shared on jeffbatton.com 
                and related marketing materials. Your email will not be published.
              </p>
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              Submit Testimonial
            </Button>
          </form>
        </Card>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Prefer email? Send directly to{" "}
            <a href="mailto:jeff@jeffbatton.com" className="text-primary hover:underline">
              jeff@jeffbatton.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
