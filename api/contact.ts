import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, projectType, budget, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Missing environment variables!');
      console.error('EMAIL_USER:', process.env.EMAIL_USER ? 'Set' : 'NOT SET');
      console.error('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD ? 'Set' : 'NOT SET');
      return res.status(500).json({ 
        message: 'Server configuration error: Missing email credentials',
        error: 'Environment variables not configured'
      });
    }

    console.log('Attempting to send email...');
    console.log('From:', process.env.EMAIL_USER);
    console.log('To: duralmacky@gmail.com');

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Verify transporter connection
    await transporter.verify();
    console.log('SMTP connection verified successfully');

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'duralmacky@gmail.com',
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
        <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!', info.messageId);

    return res.status(200).json({ 
      message: 'Email sent successfully',
      messageId: info.messageId 
    });
  } catch (error: any) {
    console.error('Detailed error sending email:', error);
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    
    return res.status(500).json({ 
      message: 'Error sending email',
      error: error.message,
      code: error.code
    });
  }
}

