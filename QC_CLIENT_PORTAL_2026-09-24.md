# Private Client Portal QC — 2026-09-24

## Verdict

**FIX IT before production launch.** The client-facing preview is polished and
the portal-specific security/tests pass, but the external Calendly and Zoom
automations are not connected and the universal-insight workflow is only a
queue, not an extraction pipeline.

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
- Five portal-specific automated tests pass and all three Netlify functions
  bundle successfully.
- The current deploy preview has no browser console errors, duplicate IDs, or
  visible action links without destinations.

## Launch blockers

1. The pull request is still open; production does not contain the new portal
   or its API functions.
2. Calendly still needs a personal access token, webhook subscription,
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
8. The portal copy still says summaries are “intentionally published” by Jeff,
   which conflicts with the approved automatic, no-approval workflow.
9. Payments and receipts are still a placeholder despite Stripe already being
   connected to Calendly.
10. A real end-to-end test has not yet been run from booking through completed
    Zoom summary to the correct test client profile.

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
| 2. Value & Completeness       | FAIL        | External automation, nugget extraction, and payments are incomplete.                               |
| 3. Legal & Professional       | CONDITIONAL | Privacy/terms are strong; automatic-workflow copy and data-handling implementation need alignment. |
| 4. Independent ChatGPT Review | NOT RUN     | Run after the launch blockers are fixed.                                                           |
| 5. Gemini Review              | NOT RUN     | Run after the launch blockers are fixed.                                                           |
| 6. Perplexity/Market Review   | N/A         | This is a private service portal, not a public digital product listing.                            |

## Evidence

- Portal tests: 5/5 pass.
- Full repository tests: 21 pass, 2 fail, and 1 suite fails during setup for
  pre-existing non-portal issues.
- Production build: pass.
- Type check: fails on a pre-existing `Services.tsx` union-type error.
- Netlify preview checks: pass; pull request is clean and mergeable.
- Official Calendly docs confirm `invitee.created` and `invitee.canceled`
  webhook subscriptions and signing-key support.
- Official Zoom docs confirm `meeting.summary_completed`, the meeting-summary
  API/scopes, paid-plan and AI Companion prerequisites, Markdown summary output,
  and the account restriction that can block API retrieval.
