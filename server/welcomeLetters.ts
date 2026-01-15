/**
 * Welcome letter templates for Practice Circle and Root-Work Mentorship
 * Sent automatically after payment confirmation via Stripe webhook
 */

export const PRACTICE_CIRCLE_WELCOME = {
  subject: "Welcome to the Practice Circle",
  body: `Welcome to the Practice Circle.

Your enrollment is confirmed. Here's what happens next—and what I need from you to make this work.

**What You Can Expect From Me**

• Two group sessions monthly (scheduled at consistent times)
• One private 60-minute session monthly (you'll schedule this)
• A container for awareness, not advice—I'm here to hold up the mirror, not tell you what to do
• Direct, clear communication about scheduling and logistics

**What I Expect From You**

• **Stable internet connection** — Audio/video quality matters. Test your setup before sessions.
• **24-hour cancellation notice** — Life happens, but I need advance notice to offer your slot to someone else. Late cancellations forfeit the session.
• **Notification-free environment** — Turn off phone notifications, close unnecessary tabs, and create space to be fully present. This work requires your full attention.
• **Show up ready** — Don't multitask. Don't half-listen. If you're here, be here.

**Session Logistics**

• Group sessions are held via Zoom at [times TBD—you'll receive a calendar invite]
• Private sessions are scheduled via [scheduling link TBD]
• All sessions are recorded and available for 30 days (group sessions only shared with participants)
• Monthly billing occurs on the [day] of each month

**Cancellation Policy**

• Month-to-month commitment—no long-term contract
• Cancel anytime with 30 days written notice to jeff@jeffbatton.com
• Cancellations take effect at the end of your current billing cycle

**Questions?**

Reply to this email or reach me at jeff@jeffbatton.com.

This work isn't about feeling better. It's about seeing clearer. Let's get started.

— Jeff`,
};

export const ROOT_WORK_MENTORSHIP_WELCOME = {
  subject: "Welcome to Root-Work Mentorship",
  body: `Welcome to Root-Work Mentorship.

Your enrollment is confirmed. This is a 12-month container for deep pattern work—not a quick fix, not a course, not a series of tips. This is root-level transformation, and it requires your full commitment.

**What You Can Expect From Me**

• Bi-weekly 90-minute private sessions (24 sessions total over 12 months)
• Direct access via email between sessions for questions, insights, or when patterns surface
• A mirror, not a guru—I'll help you see what you can't see on your own, but the work is yours
• Ruthless clarity—I won't soften the truth to make you comfortable

**What I Expect From You**

• **Stable internet connection** — Audio/video quality matters. Test your setup before sessions.
• **24-hour cancellation notice** — Life happens, but I need advance notice. Late cancellations forfeit the session (no makeups, no refunds).
• **Notification-free environment** — Turn off phone notifications, close unnecessary tabs, and create space to be fully present. This work requires your full attention.
• **Show up ready** — Don't multitask. Don't half-listen. If you're here, be here.
• **Do the work between sessions** — Awareness doesn't happen in 90-minute increments. Pay attention to your patterns, your reactions, your stories. Bring them to our sessions.

**Session Logistics**

• Sessions are held via Zoom
• You'll schedule your first session via [scheduling link TBD]
• All sessions are recorded and available to you for the duration of your mentorship
• Payment plans: 12 monthly payments of $1,000 or 6 monthly payments of $1,500 (as selected during enrollment)

**Cancellation & Refund Policy**

• 12-month commitment—this work takes time
• No refunds after 30 days from enrollment date
• If you need to pause or exit early, email jeff@jeffbatton.com to discuss options

**What Happens Next**

1. Schedule your first session using the link above
2. Between now and then, start paying attention—what patterns are showing up? What stories are you telling yourself?
3. Show up ready to see what you haven't been able to see

**Questions?**

Reply to this email or reach me at jeff@jeffbatton.com.

This work isn't about feeling better. It's about seeing clearer. And once you see it, you can't unsee it.

Let's begin.

— Jeff`,
};

/**
 * Helper function to get the appropriate welcome letter based on product
 */
export function getWelcomeLetter(productId: string): { subject: string; body: string } | null {
  switch (productId) {
    case "practice_circle":
      return PRACTICE_CIRCLE_WELCOME;
    case "root_work_12mo":
    case "root_work_6mo":
      return ROOT_WORK_MENTORSHIP_WELCOME;
    default:
      return null;
  }
}
