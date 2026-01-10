/**
 * Welcome email templates for each product/service
 * These are sent automatically after successful Stripe payment
 */

export interface WelcomeEmailTemplate {
  subject: string;
  body: string;
}

export const WELCOME_EMAILS: Record<string, WelcomeEmailTemplate> = {
  kit: {
    subject: "Welcome to The Kit - Your Love Wound Journey Begins",
    body: `Hey there,

Welcome to The Kit. You just took the first step toward seeing the pattern that's been running your life.

**Here's what you have access to:**

✓ The 6 Love Wounds Digital Guide
✓ Audio Walkthrough of the 'Wound → Code → Pattern' Framework
✓ The 'Pattern Hunter' Journal Prompts

**What to expect:**

This isn't a quick fix. It's a mirror. You'll start to see how your early experiences created a "code" for how love works—and how that code has been running your relationships ever since.

Take your time with the material. Let it sit. The awareness doesn't come from reading faster—it comes from sitting with what you read.

**What I expect from you:**

• Do the journal prompts. Don't skip them. The pattern reveals itself in your writing.
• Be honest. The only person you're lying to is yourself.
• Sit with discomfort. If something makes you defensive, that's where the work is.

**Next steps:**

If you want to go deeper after working through The Kit, you can book a Mirror Session with me at jeffbatton.com/services.

You don't need a guru. You need a mirror. Let's see what's there.

With gratitude,
Jeff Batton
Jeff Batton Life Coaching
jeff@jeffbatton.com`
  },

  mirror_session: {
    subject: "Your Mirror Session is Confirmed - What to Expect",
    body: `Hey there,

Your Mirror Session is confirmed. I'm looking forward to our time together.

**Session Details:**

📅 Date/Time: Check your Calendly confirmation email
⏱️ Duration: 90 minutes
🔗 Zoom Link: Included in your Calendly confirmation

**What to expect:**

This isn't a therapy session. I'm not here to validate your feelings or give you strategies. I'm here to help you *see* the pattern—the subconscious code that's been running your relationships since childhood.

We'll locate your primary Love Wound, identify the "code" it wrote, and trace how that code shows up in your adult relationships. Once you see it, you can't unsee it. That's when the shift happens.

**What I expect from you:**

• Show up on time. We only have 90 minutes, and every minute matters.
• Be honest. I can't help you see what you won't let me see.
• Take notes. You'll want to remember what comes up.
• Do the work after. Awareness is the doorway, but you have to walk through it.

**Before our session:**

Think about your relationship patterns. What keeps repeating? Who do you keep choosing? What feels like "home" even when it hurts?

You don't need to prepare anything formal—just show up ready to look in the mirror.

See you soon.

With gratitude,
Jeff Batton
Jeff Batton Life Coaching
jeff@jeffbatton.com | 404-503-2488`
  },

  teaching_clinic: {
    subject: "Your Teaching Clinic Session is Confirmed - What to Know",
    body: `Hey there,

Your Teaching Clinic session is confirmed. Thank you for being part of the training process for the next generation of Love Wound practitioners.

**Session Details:**

📅 Date/Time: Check your Calendly confirmation email
⏱️ Duration: 60 minutes
🔗 Zoom Link: Included in your Calendly confirmation
👥 Observers: 2-4 certification interns
📹 Recording: Yes (for training purposes only)

**What to expect:**

This is a full Love Wound coaching session—same depth, same methodology. The only difference is that 2-4 interns will be observing, and the session will be recorded for training.

You'll get the same quality of work at 57% off. The interns are there to learn, not to participate. Your session is about *you*.

**What I expect from you:**

• Show up ready to be seen. This isn't private, so make sure you're comfortable with observers.
• Be honest anyway. The work only works if you're willing to go there.
• Trust the process. I'll hold the container. You just have to show up.

**Privacy note:**

Your session will only be used for internal training. It will never be shared publicly without your explicit written consent.

See you soon.

With gratitude,
Jeff Batton
Jeff Batton Life Coaching
jeff@jeffbatton.com | 404-503-2488`
  },

  group_container: {
    subject: "Welcome to The Group Container - Your Community Awaits",
    body: `Hey there,

Welcome to The Group Container. You just joined a community of people doing the deepest work of their lives.

**What you signed up for:**

✓ Weekly 90-minute group processing calls
✓ Hot-seat coaching opportunities
✓ Peer witnessing and support
✓ Monthly subscription (cancel anytime)

**What to expect:**

This isn't a support group where we validate each other's stories. This is a processing group where we *see* the patterns and break them together.

Every week, we'll have hot-seat coaching where I work with 2-3 people live while the group witnesses. You'll see yourself in others' patterns, and they'll see themselves in yours. That's how the mirror works in community.

**What I expect from you:**

• Show up consistently. The work compounds. Miss a week, and you lose momentum.
• Participate when called. If I invite you into the hot seat, say yes.
• Witness others deeply. Their pattern is your pattern. Pay attention.
• Do the homework. I'll give you protocols between sessions. Do them.

**Group Guidelines:**

• What's shared in the group stays in the group (confidentiality)
• No cross-talk or advice-giving during hot seats
• Show up on time (we start exactly at 6pm EST every Tuesday)
• Camera on (this is a container, not a podcast)

**First Call:**

📅 Next Tuesday, 6pm EST
🔗 Zoom link will be sent 24 hours before

See you in the container.

With gratitude,
Jeff Batton
Jeff Batton Life Coaching
jeff@jeffbatton.com | 404-503-2488`
  },

  individual_container: {
    subject: "Welcome to The Container - Let's Begin",
    body: `Hey there,

Welcome to The Container. You just committed to 3 months of the deepest work you'll ever do.

**What you signed up for:**

✓ 12 weekly 90-minute sessions
✓ Direct Voxer access between sessions
✓ Customized homework protocols
✓ Lifetime access to The Kit

**What to expect:**

This isn't therapy. This isn't coaching in the traditional sense. This is reconstruction.

We're going to locate your Love Wound, identify the code it wrote, and then *run the play* until you can't get it wrong. We don't just talk about the pattern—we rewire it through repetition and practice.

You'll have direct access to me via Voxer between sessions. Use it. Send me voice notes when you notice the pattern showing up. I'll coach you through it in real time.

**What I expect from you:**

• Show up to every session. We only have 12 weeks. Every session matters.
• Do the homework. I'll give you protocols every week. They're not optional.
• Use Voxer. Don't wait until our next session to process something. Send it when it's hot.
• Be coachable. I'm going to challenge you. Let me.
• Trust the process. It's going to feel uncomfortable. That's where the work is.

**First Session:**

📅 Check your Calendly confirmation email for date/time
🔗 Zoom link included in Calendly confirmation

**Before our first session:**

Think about what brought you here. What pattern keeps repeating? What are you ready to finally see?

This is your container. Let's build it together.

With gratitude,
Jeff Batton
Jeff Batton Life Coaching
jeff@jeffbatton.com | 404-503-2488
Voxer: @jeffbatton`
  },

  individual_container_plan: {
    subject: "Welcome to The Container - Let's Begin",
    body: `Hey there,

Welcome to The Container. You just committed to 3 months of the deepest work you'll ever do.

**What you signed up for:**

✓ 12 weekly 90-minute sessions
✓ Direct Voxer access between sessions
✓ Customized homework protocols
✓ Lifetime access to The Kit
✓ Payment plan: 4 monthly installments

**What to expect:**

This isn't therapy. This isn't coaching in the traditional sense. This is reconstruction.

We're going to locate your Love Wound, identify the code it wrote, and then *run the play* until you can't get it wrong. We don't just talk about the pattern—we rewire it through repetition and practice.

You'll have direct access to me via Voxer between sessions. Use it. Send me voice notes when you notice the pattern showing up. I'll coach you through it in real time.

**What I expect from you:**

• Show up to every session. We only have 12 weeks. Every session matters.
• Do the homework. I'll give you protocols every week. They're not optional.
• Use Voxer. Don't wait until our next session to process something. Send it when it's hot.
• Be coachable. I'm going to challenge you. Let me.
• Trust the process. It's going to feel uncomfortable. That's where the work is.

**First Session:**

📅 Check your Calendly confirmation email for date/time
🔗 Zoom link included in Calendly confirmation

**Before our first session:**

Think about what brought you here. What pattern keeps repeating? What are you ready to finally see?

This is your container. Let's build it together.

With gratitude,
Jeff Batton
Jeff Batton Life Coaching
jeff@jeffbatton.com | 404-503-2488
Voxer: @jeffbatton`
  },

  couples_container: {
    subject: "Welcome to The Couples Container - Let's Rebuild Together",
    body: `Hey there,

Welcome to The Couples Container. You just committed to 3 months of relationship reconstruction.

**What you signed up for:**

✓ 12 weekly 90-minute sessions (joint & individual)
✓ Joint & individual Voxer support
✓ Conflict protocol training
✓ Flexibility for individual breakout sessions

**What to expect:**

This isn't marriage counseling. We're not here to validate your feelings or mediate your arguments. We're here to see the *patterns*—the Love Wounds you each brought into the relationship—and learn how to stop triggering each other's code.

Some sessions will be joint. Some will be individual breakouts. I'll decide based on what the work needs. Trust me to hold the container.

**What I expect from you (both of you):**

• Show up to every session. All 12. No exceptions unless it's an emergency.
• Do the homework together. I'll give you protocols to practice between sessions.
• Use Voxer when you're stuck. Don't let a conflict spiral. Send me a voice note and I'll coach you through it.
• Be willing to see your own pattern. This only works if you stop blaming your partner and start seeing your own code.
• Practice the protocols. We're rewiring the dance. That takes reps.

**First Session:**

📅 Check your Calendly confirmation email for date/time
🔗 Zoom link included in Calendly confirmation

**Before our first session:**

Each of you, independently, answer this question: *What pattern do I keep bringing into this relationship?*

Don't share your answers with each other yet. We'll start there.

Let's rebuild the foundation while you're still living in the house.

With gratitude,
Jeff Batton
Jeff Batton Life Coaching
jeff@jeffbatton.com | 404-503-2488
Voxer: @jeffbatton`
  },

  couples_container_plan: {
    subject: "Welcome to The Couples Container - Let's Rebuild Together",
    body: `Hey there,

Welcome to The Couples Container. You just committed to 3 months of relationship reconstruction.

**What you signed up for:**

✓ 12 weekly 90-minute sessions (joint & individual)
✓ Joint & individual Voxer support
✓ Conflict protocol training
✓ Flexibility for individual breakout sessions
✓ Payment plan: 4 monthly installments

**What to expect:**

This isn't marriage counseling. We're not here to validate your feelings or mediate your arguments. We're here to see the *patterns*—the Love Wounds you each brought into the relationship—and learn how to stop triggering each other's code.

Some sessions will be joint. Some will be individual breakouts. I'll decide based on what the work needs. Trust me to hold the container.

**What I expect from you (both of you):**

• Show up to every session. All 12. No exceptions unless it's an emergency.
• Do the homework together. I'll give you protocols to practice between sessions.
• Use Voxer when you're stuck. Don't let a conflict spiral. Send me a voice note and I'll coach you through it.
• Be willing to see your own pattern. This only works if you stop blaming your partner and start seeing your own code.
• Practice the protocols. We're rewiring the dance. That takes reps.

**First Session:**

📅 Check your Calendly confirmation email for date/time
🔗 Zoom link included in Calendly confirmation

**Before our first session:**

Each of you, independently, answer this question: *What pattern do I keep bringing into this relationship?*

Don't share your answers with each other yet. We'll start there.

Let's rebuild the foundation while you're still living in the house.

With gratitude,
Jeff Batton
Jeff Batton Life Coaching
jeff@jeffbatton.com | 404-503-2488
Voxer: @jeffbatton`
  },

  retreat: {
    subject: "Your Bespoke Retreat is Confirmed - Prepare for Immersion",
    body: `Hey there,

Your Bespoke Retreat is confirmed. This is going to be unlike anything you've experienced.

**Retreat Details:**

📅 Dates: Custom scheduled (I'll reach out within 48 hours to coordinate)
📍 Location: Private destination (details will be sent separately)
⏱️ Duration: 2.5 days of immersive work

**What to expect:**

This isn't a vacation. This is deep, uninterrupted immersion. We're going to spend 2.5 days doing nothing but the work—no distractions, no interruptions, no escape routes.

You'll have curated culinary experiences, a private environment, and my undivided attention. We'll locate the pattern, trace it back to the root, and begin the reconstruction process.

**What I expect from you:**

• Clear your calendar completely. No work emails. No phone calls. No distractions.
• Come ready to go deep. This isn't surface-level work. We're going to the root.
• Trust the container. I've designed this experience intentionally. Let me guide it.
• Do the integration work after. The retreat is the beginning, not the end.

**Pre-Retreat Preparation:**

I'll send you a detailed preparation guide 2 weeks before the retreat. It will include:

• Pre-work assignments
• What to pack
• Travel logistics
• Dietary preferences form

**Post-Retreat Integration:**

You'll have 4 weeks of Voxer support after the retreat to help you integrate what came up. Use it.

This is the pinnacle experience. Let's make it count.

With gratitude,
Jeff Batton
Jeff Batton Life Coaching
jeff@jeffbatton.com | 404-503-2488
    Voxer: @jeffbatton`
  },

  inner_circle: {
    subject: "Welcome to The Inner Circle - First Session Details",
    body: `Hey there,

Welcome to The Inner Circle. You just joined a small group of people who are done chasing fruit and ready to lay the axe at the root.

**What you signed up for:**

✓ 2 live group sessions per month (1st & 3rd Tuesday, 5pm EST, 90 min)
✓ Text access via Voxer (daily support when you're stuck)
✓ Discounted 1-on-1 sessions ($250 vs $350 regular price)
✓ Curated video library (YouTube + exclusive content)
✓ Max 12 members per group (intimate, everyone gets seen)

**What to expect:**

This isn't a support group where we validate each other's stories. This is pattern hunting in real time. I'll coach 3-4 people per session while the group witnesses. You'll see yourself in their patterns, and they'll see themselves in yours. That's how the mirror works in community.

**What I expect from you:**

• Show up consistently. The work compounds. Miss sessions, lose momentum.
• Camera on. This is a container, not a podcast.
• Stable WiFi, desktop/laptop, quiet space. No driving, no distractions.
• Arrive 5 minutes early. Meeting closes 5 minutes after start time.
• No advice-giving. No "you should" statements. We help people see, not tell them what to do.
• What's shared in the group stays in the group (confidentiality matters).

**Your Zoom Link:**

[You'll need to add your recurring Zoom link here]

Save this link—it's the same for every session.

**Text Access via Voxer:**

Download Voxer and add me: @jeffbatton

Use it when you're stuck in a pattern. Don't wait until the next session to process something. Send it when it's hot.

**Discounted 1-on-1 Sessions:**

Members get Mirror Sessions at $250 (vs $350 regular price).
Use code: MEMBER250 at checkout.
Book here: https://jeffbatton.com/work-with-me

**Video Library:**

Access to "The Recovering Evangelical" YouTube channel plus exclusive member-only teachings.

**First Session:**

📅 Check the calendar invite I'll send you
⏰ 5:00 PM EST (1st & 3rd Tuesday of each month)
🔗 Same Zoom link every time

I'll add you to the recurring Google Calendar event so you get automatic reminders.

**Questions?**

Reply to this email or text me on Voxer.

See you in the circle.

With gratitude,
Jeff Batton
Jeff Batton Life Coaching
jeff@jeffbatton.com | 404-503-2488
Voxer: @jeffbatton

---

P.S. You can't plant enough tomato seeds to get corn. To change the harvest, we have to change the seed. Let's find the root.`
  }
};

export function getWelcomeEmail(productId: string): WelcomeEmailTemplate | null {
  return WELCOME_EMAILS[productId] || null;
}
