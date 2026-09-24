# Private Client Portal QC — 2026-09-24

## Verdict

**CONDITIONAL before production launch.** The client-facing preview, booking,
discount, package, payment-history, and portal-specific security work pass.
Production should wait until Calendly and Zoom credentials/webhooks are connected
and a real end-to-end test confirms that one completed session lands on the
correct client profile.

## What works now

- Responsive client portal layout, account setup, sign-in, password recovery,
  dated summaries, next-session display, one Zoom entrance, booking,
  rescheduling, and cancellation links.
- Netlify Identity is enabled with email confirmation.
- Unauthenticated portal API access returns `401` with private/no-store headers.
- Portal pages are no-index, deny framing, and use no-store/private caching.
- Client summaries are separated by authenticated identity/email and draft
  summaries are not returned to clients.
- Admin access uses an HTTP-only secure cookie, same-origin checks, and login
  rate limiting.
- Calendly and Zoom webhook signatures are verified in code.
- Seven portal and webhook tests pass, including Calendly payment/receipt
  ingestion and Zoom summary handling.
- Calendly's live $150 booking flow is enabled through Stripe and displays a
  receipt promise at checkout.
- Four live legacy-client codes correctly reduce a single session to $65, $95,
  $100, or $125. One code was exercised in the live checkout and calculated the
  correct final price without completing a booking.
- The live four-session package contains four one-hour coaching sessions for
  $540 ($135 each; 10%/$60 savings) with the correct cancellation terms.
- Desktop and 375-pixel mobile visual checks pass for the booking page and the
  completed client-portal example.
- Payments and receipt links are stored from Calendly/Stripe and shown in the
  client portal.
- Signed-in clients can explicitly authorize and save a card through
  Stripe-hosted Checkout. The site stores only the Stripe customer reference
  and authorization status, never card numbers.
- The current deploy preview has no browser console errors, duplicate IDs, or
  visible action links without destinations.

## Launch blockers

1. The pull request is still open; production does not contain the new portal,
   booking-page improvements, or API functions.
2. Calendly still needs a valid personal access token, webhook subscription,
   webhook signing key, and Netlify secret values.
3. Zoom still needs a Server-to-Server OAuth app, summary-read scope,
   `meeting.summary_completed` webhook, webhook secret, and Netlify secret
   values. Zoom's “Only share meeting summaries by email” restriction must be
   disabled for API retrieval.
4. The Zoom webhook handler should use the documented `meeting_uuid` and
   `meeting_topic` fields for instance-level idempotency and correct fallback
   titles.
5. Zoom now returns `summary_content` as Markdown. The portal currently escapes
   it into a paragraph instead of rendering a clean, structured client summary.
6. “Nugget mining” is not yet automatic. The code stores a private source item
   with status `ready-for-distillation`; it does not extract or redact universal
   insights, nor create Substack/blog/book drafts.
7. There is no admin view or alert for unmatched Zoom meetings, failed
   webhooks, or pending nugget sources.
8. A real end-to-end test has not yet been run from booking through completed
    Zoom summary to the correct test client profile.
9. Recurring clients can now save a card with explicit authorization, but the
   automatic day-of charge scheduler and failed-payment follow-up are not yet
   implemented. Codes still apply only to appointments booked through Calendly.

## Non-blocking cleanup

- Make the demo appointment date evergreen; the current fixed example will age
  out.
- Increase the small reschedule/cancel links to 44-pixel touch targets.
- Add a client notification when a new summary is available, or document that
  clients must revisit/refresh the portal.
- Resolve two unrelated untracked duplicate files in the local repository.
- Repair existing repository-wide test/type-check failures in welcome-email,
  auth/Stripe setup, and `Services.tsx`.
- Address existing build warnings for analytics placeholders, one unresolved
  image path, and the large main JavaScript chunk.

## Six-panel status

| Panel                         | Status      | Notes                                                                                              |
| ----------------------------- | ----------- | -------------------------------------------------------------------------------------------------- |
| 1. Voice & Brand              | PASS        | Warm, private, grounded, and visually on-brand.                                                    |
| 2. Value & Completeness       | CONDITIONAL | Booking, discounts, packages, and payment history work; external automation still needs credentials. |
| 3. Legal & Professional       | PASS        | Privacy, summary, payment, package, and cancellation language are aligned.                          |
| 4. Independent ChatGPT Review | NOT RUN     | Run after the launch blockers are fixed.                                                           |
| 5. Gemini Review              | NOT RUN     | Run after the launch blockers are fixed.                                                           |
| 6. Perplexity/Market Review   | N/A         | This is a private service portal, not a public digital product listing.                            |

## Evidence

- Portal and webhook tests: 8/8 pass.
- Full repository tests: 23 pass, 2 fail, and 1 suite fails during setup for
  pre-existing non-portal issues.
- Production build: pass.
- Type check: fails on a pre-existing `Services.tsx` union-type error.
- Netlify preview checks: pass. Essential internal and external links return
  successfully; the journal article's expected trailing-slash redirect resolves
  to 200.
- Official Calendly docs confirm `invitee.created` and `invitee.canceled`
  webhook subscriptions and signing-key support.
- Official Zoom docs confirm `meeting.summary_completed`, the meeting-summary
  API/scopes, paid-plan and AI Companion prerequisites, Markdown summary output,
  and the account restriction that can block API retrieval.
