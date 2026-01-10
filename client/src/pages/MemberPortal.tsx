import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, Check, Gift, Calendar, Video, BookOpen } from "lucide-react";
import { toast } from "sonner";

export default function MemberPortal() {
  const [copied, setCopied] = useState(false);
  
  // Mock data - will be replaced with real user data
  const memberData = {
    name: "Friend",
    referralLink: "jeffbatton.com/membership?ref=your-name",
    referralsThisMonth: 0,
    totalReferrals: 0,
    creditsEarned: 0,
    creditsUsed: 0,
    creditsAvailable: 0,
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://${memberData.referralLink}`);
    setCopied(true);
    toast.success("Referral link copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="container max-w-5xl">
        {/* Welcome Header */}
        <div className="mb-12 text-center">
          <h1 className="font-serif text-5xl font-light tracking-tight text-slate-900">
            Welcome Back, {memberData.name}
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Your Overflow Membership Portal
          </p>
        </div>

        {/* Credits Overview */}
        <Card className="mb-12 overflow-hidden border-2 border-slate-900 bg-slate-900 p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-slate-400">
                Your Credits
              </p>
              <p className="mt-2 font-serif text-5xl font-light">
                ${memberData.creditsAvailable}
              </p>
              <p className="mt-2 text-sm text-slate-400">
                {memberData.totalReferrals} {memberData.totalReferrals === 1 ? "referral" : "referrals"} • ${memberData.creditsEarned} earned • ${memberData.creditsUsed} used
              </p>
            </div>
            <Gift className="h-16 w-16 text-slate-400" />
          </div>
        </Card>

        {/* Share The Overflow */}
        <Card className="mb-12 p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white">
              <Gift className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-slate-900">
                Share The Overflow
              </h2>
              <p className="mt-2 text-slate-600">
                Refer a friend, get a month free. Your friend gets their first month at $19.
              </p>
              
              <div className="mt-6 space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Your Referral Link
                  </label>
                  <div className="mt-2 flex gap-2">
                    <input
                      type="text"
                      value={memberData.referralLink}
                      readOnly
                      className="flex-1 rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900"
                    />
                    <Button
                      onClick={handleCopyLink}
                      className="min-w-[120px]"
                    >
                      {copied ? (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="mr-2 h-4 w-4" />
                          Copy Link
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-900">
                    Referral Rewards:
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    1 referral = $29 credit • 3 referrals = $87 credit • 12 referrals = $348 credit (1 year free)
                  </p>
                </div>

                <div className="border-t border-slate-200 pt-4">
                  <p className="text-sm text-slate-600">
                    <strong>Use credits for:</strong> Free membership months, discounts on Mirror Sessions ($350), 12-Week Container ($4,200), Retreats ($15K), or VIP Coaching ($10K/month).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Quick Actions Grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {/* Upcoming Call */}
          <Card className="p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100">
                <Video className="h-5 w-5 text-slate-900" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  Next Call
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Wed, 7pm ET
                </p>
                <Button size="sm" className="mt-4 w-full" asChild>
                  <a href="https://us02web.zoom.us/j/6811699428" target="_blank" rel="noopener noreferrer">
                    Join Zoom
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          {/* Workshop */}
          <Card className="p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100">
                <Calendar className="h-5 w-5 text-slate-900" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  Next Workshop
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Coming soon
                </p>
                <Button size="sm" variant="outline" className="mt-4 w-full" disabled>
                  Register
                </Button>
              </div>
            </div>
          </Card>

          {/* Foundation Course */}
          <Card className="p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100">
                <BookOpen className="h-5 w-5 text-slate-900" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  Foundation Course
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  5 modules
                </p>
                <Button size="sm" variant="outline" className="mt-4 w-full" disabled>
                  Start Learning
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Foundation Course Modules */}
        <Card className="mb-12 p-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            Foundation Course
          </h2>
          <p className="mt-2 text-slate-600">
            The core framework. Watch anytime.
          </p>
          <div className="mt-8 space-y-4">
            {[
              "Module 1: How We Learn Love",
              "Module 2: The Overflow Cup",
              "Module 3: Root vs. Fruit",
              "Module 4: The Mirror Method",
              "Module 5: Want vs. Should",
            ].map((module, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <span className="text-slate-900">{module}</span>
                <Button size="sm" variant="outline" disabled>
                  Coming Soon
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Community & Resources */}
        <Card className="p-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            Community & Resources
          </h2>
          <p className="mt-2 text-slate-600">
            Connect with other members and access exclusive content.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Button variant="outline" size="lg" asChild>
              <a href="/submit-testimonial">
                Share Your Experience
              </a>
            </Button>
            <Button variant="outline" size="lg" disabled>
              View Past Recordings
            </Button>
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">
            Community platform launching soon. You'll receive an invite via email.
          </p>
        </Card>
      </div>
    </div>
  );
}
