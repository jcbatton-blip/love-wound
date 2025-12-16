import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";
import { CheckCircle2, Home, Calendar, Clock, MessageSquare } from "lucide-react";

export default function TenantPortal() {
  const [submitted, setSubmitted] = useState(false);
  const [propertyAddress, setPropertyAddress] = useState("");
  
  const [formData, setFormData] = useState({
    tenantName: "",
    tenantEmail: "",
    tenantPhone: "",
    photoDate1: "",
    photoDate2: "",
    photoDate3: "",
    showingPreferences: "",
    blackoutDates: "",
    advanceNoticeHours: "24",
    questions: "",
  });

  const submitResponse = trpc.tenants.submitResponse.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success("Response submitted successfully!");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to submit response");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!propertyAddress) {
      toast.error("Please select your property");
      return;
    }

    submitResponse.mutate({
      propertyAddress,
      ...formData,
      advanceNoticeHours: parseInt(formData.advanceNoticeHours),
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full shadow-lg">
          <CardContent className="pt-12 pb-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 rounded-full p-4">
                <CheckCircle2 className="w-16 h-16 text-green-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Thank You!
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Your response has been submitted successfully. We will review your availability and preferences and contact you shortly to confirm the photography and showing schedule.
            </p>
            <p className="text-sm text-slate-500">
              If you have any questions, please contact Jeff Batton at{" "}
              <a href="mailto:jcbatton@gmail.com" className="text-blue-600 hover:underline">
                jcbatton@gmail.com
              </a>
              {" "}or{" "}
              <a href="tel:404-503-2488" className="text-blue-600 hover:underline">
                (404) 503-2488
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 rounded-full p-3">
              <Home className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            Property Sale Notification
          </h1>
          <p className="text-lg text-slate-600">
            Batton Homes LLC
          </p>
        </div>

        {/* Notification Letter */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Important Notice to Tenants</CardTitle>
            <CardDescription>December 16, 2025</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700 leading-relaxed">
            <p>Dear Valued Tenant,</p>
            
            <p>
              I am writing to inform you that we have made the decision to list your property for sale. 
              This decision was not made lightly, and I want to assure you that we are committed to making 
              this transition as seamless as possible for you.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-semibold text-blue-900 mb-2">What This Means for You</p>
              <p className="text-blue-800">
                <strong>Your lease remains valid and enforceable.</strong> The new owner will honor all 
                existing lease agreements, including your current rental rate and lease terms. Your rights 
                as a tenant are fully protected under Michigan law, and there will be no disruption to your tenancy.
              </p>
            </div>

            <p className="font-semibold text-slate-900">What We Need From You</p>
            <p>To market the property effectively, we will need to:</p>
            
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong>Schedule professional photography</strong> of the property. We would like to coordinate 
                a time that works best for you when your unit is clean and photo-ready. This will be a one-time 
                visit and should take no more than 30-45 minutes.
              </li>
              <li>
                <strong>Conduct property showings</strong> for prospective buyers. We understand that your home 
                is your private space, and we want to be respectful of your schedule.
              </li>
            </ol>

            <p>
              We will work with you to minimize disruption and ensure that all showings are conducted 
              professionally and respectfully.
            </p>

            <p className="font-semibold text-slate-900">Our Commitment to You</p>
            <p>
              I want to emphasize that this sale will not negatively impact your tenancy. We are working with 
              a professional real estate team (The Good Company, Royal Oak, MI) who understand the importance of respecting tenant 
              rights and maintaining positive landlord-tenant relationships.
            </p>

            <p>
              Thank you for your cooperation and understanding during this process. We truly appreciate you as 
              a tenant and want to ensure this transition is as smooth as possible.
            </p>

            <p className="pt-4">
              Sincerely,<br />
              <strong>Jeff Batton</strong><br />
              Owner, Batton Homes LLC<br />
              (404) 503-2488
            </p>
          </CardContent>
        </Card>

        {/* Response Form */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Calendar className="w-6 h-6 text-blue-600" />
              Submit Your Availability & Preferences
            </CardTitle>
            <CardDescription>
              Please complete this form by December 23, 2025
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Property Selection */}
              <div className="space-y-2">
                <Label htmlFor="property" className="text-base font-semibold">
                  Your Property Address *
                </Label>
                <Select value={propertyAddress} onValueChange={setPropertyAddress} required>
                  <SelectTrigger id="property">
                    <SelectValue placeholder="Select your property" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2494 Hazelwood Street">2494 Hazelwood Street</SelectItem>
                    <SelectItem value="18703 Prairie Street">18703 Prairie Street</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900 border-b pb-2">
                  Contact Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.tenantName}
                      onChange={(e) => setFormData({ ...formData, tenantName: e.target.value })}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.tenantEmail}
                      onChange={(e) => setFormData({ ...formData, tenantEmail: e.target.value })}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.tenantPhone}
                    onChange={(e) => setFormData({ ...formData, tenantPhone: e.target.value })}
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Photography Availability */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900 border-b pb-2 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  Photography Availability
                </h3>
                <p className="text-sm text-slate-600">
                  Please provide 2-3 date and time options when we can schedule professional photography (30-45 minutes)
                </p>
                
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="photo1">Option 1</Label>
                    <Input
                      id="photo1"
                      value={formData.photoDate1}
                      onChange={(e) => setFormData({ ...formData, photoDate1: e.target.value })}
                      placeholder="e.g., Monday Dec 23, 2-4pm"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="photo2">Option 2</Label>
                    <Input
                      id="photo2"
                      value={formData.photoDate2}
                      onChange={(e) => setFormData({ ...formData, photoDate2: e.target.value })}
                      placeholder="e.g., Tuesday Dec 24, 10am-12pm"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="photo3">Option 3</Label>
                    <Input
                      id="photo3"
                      value={formData.photoDate3}
                      onChange={(e) => setFormData({ ...formData, photoDate3: e.target.value })}
                      placeholder="e.g., Wednesday Dec 25, 1-3pm"
                    />
                  </div>
                </div>
              </div>

              {/* Showing Preferences */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900 border-b pb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Property Showing Preferences
                </h3>
                
                <div className="space-y-2">
                  <Label htmlFor="preferences">Preferred Days/Times for Showings</Label>
                  <Textarea
                    id="preferences"
                    value={formData.showingPreferences}
                    onChange={(e) => setFormData({ ...formData, showingPreferences: e.target.value })}
                    placeholder="e.g., Weekdays after 5pm, Weekends between 10am-4pm"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="blackout">Blackout Dates/Times (When showings are NOT allowed)</Label>
                  <Textarea
                    id="blackout"
                    value={formData.blackoutDates}
                    onChange={(e) => setFormData({ ...formData, blackoutDates: e.target.value })}
                    placeholder="e.g., Dec 24-26 (holidays), Tuesdays before 6pm (work schedule)"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notice">How much advance notice do you need?</Label>
                  <Select 
                    value={formData.advanceNoticeHours} 
                    onValueChange={(value) => setFormData({ ...formData, advanceNoticeHours: value })}
                  >
                    <SelectTrigger id="notice">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12">12 hours</SelectItem>
                      <SelectItem value="24">24 hours (recommended)</SelectItem>
                      <SelectItem value="48">48 hours</SelectItem>
                      <SelectItem value="72">72 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Questions/Concerns */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900 border-b pb-2 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  Questions or Concerns
                </h3>
                
                <div className="space-y-2">
                  <Label htmlFor="questions">Do you have any questions or concerns? (Optional)</Label>
                  <Textarea
                    id="questions"
                    value={formData.questions}
                    onChange={(e) => setFormData({ ...formData, questions: e.target.value })}
                    placeholder="Please share any questions or concerns you may have..."
                    rows={4}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={submitResponse.isPending}
                >
                  {submitResponse.isPending ? "Submitting..." : "Submit Response"}
                </Button>
                <p className="text-sm text-slate-500 text-center mt-3">
                  Please submit by December 23, 2025
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-slate-600">
          <p>
            Questions? Contact Jeff Batton at{" "}
            <a href="mailto:jcbatton@gmail.com" className="text-blue-600 hover:underline">
              jcbatton@gmail.com
            </a>
            {" "}or{" "}
            <a href="tel:404-503-2488" className="text-blue-600 hover:underline">
              (404) 503-2488
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
