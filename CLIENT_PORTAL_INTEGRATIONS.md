# Client portal integrations

The portal is designed around one email address per client. A Calendly booking
creates or updates the matching profile, and a completed Zoom summary is posted
to that profile automatically. The client does not approve each summary.

## Calendly

Set the coaching event to 60 minutes and configure the desired before/after
buffer in Calendly. Connect the event type to Zoom so each booking receives its
own meeting link.

Configure a Calendly webhook for:

- `invitee.created`
- `invitee.canceled`

Webhook URL: `https://jeffbatton.com/api/calendly-webhook`

Required secret environment variables:

- `CALENDLY_ACCESS_TOKEN`
- `CALENDLY_WEBHOOK_SIGNING_KEY`

## Zoom

Enable Meeting Summary with AI Companion and create a Server-to-Server OAuth
app with permission to read meeting summaries. Subscribe the app to
`meeting.summary_completed`.

Webhook URL: `https://jeffbatton.com/api/zoom-webhook`

Required secret environment variables:

- `ZOOM_ACCOUNT_ID`
- `ZOOM_CLIENT_ID`
- `ZOOM_CLIENT_SECRET`
- `ZOOM_WEBHOOK_SECRET`

## Automatic workflow

1. Calendly matches the invitee email to a client profile and stores the date,
   private Zoom link, and cancel/reschedule links.
2. The next appointment appears in the password-protected portal.
3. After Zoom finishes its meeting summary, the summary is published to the
   matched client profile by meeting ID.
4. The same completed session is placed in a private universal-insight queue
   for Substack, blog, and book development. The queue explicitly prohibits
   case studies, client narratives, names, identifying details, or
   reconstructable circumstances.
5. If a Zoom meeting cannot be matched, it is held in an internal unmatched
   queue and is never exposed in a client portal.
