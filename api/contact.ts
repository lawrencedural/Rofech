import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

// Practical RFC 5322-ish email check — matches the same pattern
// browsers use for <input type="email">. No regex perfectly
// validates email syntax, so this is paired with a length cap and,
// ideally, a confirmation link/verified-sender step further down
// the line for anything beyond a simple contact form.
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

const MAX_LENGTHS = {
  name: 100,
  email: 254, // RFC 5321 max
  projectType: 100,
  budget: 100,
  message: 5000,
};

// Escapes user-supplied text before it's interpolated into the HTML
// email body, so a submission can't inject markup, links, or
// scripts into the message you receive.
function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, projectType, budget, message, website } = req.body ?? {};

  // Honeypot: a hidden field real users never see or fill in.
  // Bots that auto-fill every input will populate it — if it has
  // any value, silently accept without sending mail.
  if (typeof website === 'string' && website.trim().length > 0) {
    return res.status(200).json({ message: 'Message received' });
  }

  // Required fields present and non-empty.
  if (!isNonEmptyString(name) || !isNonEmptyString(email) || !isNonEmptyString(message)) {
    return res.status(400).json({ message: 'Name, email, and message are required.' });
  }

  // Length caps — reject oversized payloads before they reach the mailer.
  if (
    name.length > MAX_LENGTHS.name ||
    email.length > MAX_LENGTHS.email ||
    message.length > MAX_LENGTHS.message ||
    (typeof projectType === 'string' && projectType.length > MAX_LENGTHS.projectType) ||
    (typeof budget === 'string' && budget.length > MAX_LENGTHS.budget)
  ) {
    return res.status(400).json({ message: 'One or more fields exceed the allowed length.' });
  }

  // Strict email format check — the only field we also use as
  // Reply-To, so a malformed value here is a real risk, not just
  // a cosmetic one.
  const trimmedEmail = email.trim();
  if (!EMAIL_REGEX.test(trimmedEmail)) {
    return res.status(400).json({ message: 'Please enter a valid email address.' });
  }

  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Missing EMAIL_USER / EMAIL_PASSWORD environment variables.');
      return res.status(500).json({
        message: 'Server configuration error: Missing email credentials',
      });
    }

    const recipient = process.env.CONTACT_TO_EMAIL || process.env.EMAIL_USER;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.verify();

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(trimmedEmail);
    const safeProjectType = escapeHtml(
      typeof projectType === 'string' && projectType.trim() ? projectType.trim() : 'Not specified'
    );
    const safeBudget = escapeHtml(
      typeof budget === 'string' && budget.trim() ? budget.trim() : 'Not specified'
    );
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, '<br>');

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipient,
      replyTo: trimmedEmail,
      subject: `New Project Inquiry from ${safeName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Project Type:</strong> ${safeProjectType}</p>
        <p><strong>Budget:</strong> ${safeBudget}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    return res.status(200).json({
      message: 'Email sent successfully',
      messageId: info.messageId,
    });
  } catch (error: any) {
    console.error('Error sending email:', error.message);
    return res.status(500).json({
      message: 'Error sending email',
    });
  }
}
