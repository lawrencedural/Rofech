# Contact Form — Setup & Security Notes

## Where a submission goes

The form on `/contact` posts to `/api/contact`, a Vercel serverless
function (`api/contact.ts`). It sends an email via Gmail SMTP using
`nodemailer`. This only works once deployed to Vercel (or another
platform that runs the `api/` function) with the environment
variables below configured — it does nothing in local `npm run dev`.

## Required environment variables (set in Vercel → Project → Settings → Environment Variables)

- `EMAIL_USER` — the Gmail address the form sends *from*.
- `EMAIL_PASSWORD` — a Gmail **App Password** for that account (not
  the regular account password — enable 2-Step Verification on the
  Gmail account, then generate an App Password for this).
- `CONTACT_TO_EMAIL` *(optional)* — the address inquiries should be
  delivered *to*. If not set, it falls back to `EMAIL_USER`, so the
  form sends to and from the same inbox.

Previously the recipient address was hardcoded directly in the
source file. It's now controlled by `CONTACT_TO_EMAIL` so it isn't
tied to a specific person's inbox in the codebase.

## Validation & security added

- **Strict email format check**, both in the browser (before a
  request is even sent) and again on the server (never trust the
  client — a request can always bypass the browser).
- **HTML escaping** of every submitted field before it's inserted
  into the notification email, so a submission can't inject markup
  or scripts into the email you receive.
- **Length limits** on every field, rejected server-side, to block
  oversized spam payloads.
- **Honeypot field** (`website`) — invisible to real users; if a bot
  fills it in, the submission is silently discarded without sending
  mail or tipping the bot off.
- Inline, per-field error messages in the form instead of a generic
  browser `alert()`.

## Not included (worth adding if spam becomes a problem)

- **Rate limiting** — nothing currently stops the same IP from
  submitting repeatedly. Doing this properly needs shared state
  across requests (e.g. Vercel KV / Upstash Redis), which is outside
  what a static contact-form endpoint can do on its own.
- **CAPTCHA / bot challenge** (e.g. hCaptcha, Cloudflare Turnstile) —
  a stronger layer than the honeypot if spam gets past it.
- **Email verification** — the form currently trusts that the
  submitted address is real; nothing sends a confirmation link to
  verify ownership of that inbox.
