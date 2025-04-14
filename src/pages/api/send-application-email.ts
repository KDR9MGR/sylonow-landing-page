import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER || 'jobs.sylonow@gmail.com',
    pass: process.env.EMAIL_PASS || 'Kalkiapplyjobww7'
  },
  tls: {
    rejectUnauthorized: false // Accept self-signed certificates
  }
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('API route called with method:', req.method);

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, selectedTeam, isAllRounder, secondaryTeam } = req.body;
    console.log('Received request body:', { name, email, selectedTeam, isAllRounder, secondaryTeam });

    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }

    const roleText = isAllRounder 
      ? 'Company All-Rounder'
      : `${selectedTeam}${secondaryTeam ? ` and ${secondaryTeam}` : ''}`;

    const mailOptions = {
      from: 'jobs.sylonow@gmail.com',
      to: email,
      subject: 'Application Received - Sylonow Talent Accelerator Program',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #333; margin-bottom: 10px;">Thank You for Applying!</h1>
            <p style="color: #666; font-size: 16px;">Your application has been successfully received.</p>
          </div>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #333; margin-bottom: 15px;">Application Details:</h2>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Selected Role(s):</strong> ${roleText}</p>
          </div>

          <div style="background-color: #fff3f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #d1416b; margin-bottom: 10px;">Next Steps:</h3>
            <p style="color: #666; line-height: 1.5;">
              Our team will review your application and get back to you within 2-3 business days with further details about the interview process.
            </p>
          </div>

          <div style="color: #666; font-size: 14px; text-align: center; margin-top: 30px;">
            <p>Best regards,<br>The Sylonow Team</p>
          </div>
        </div>
      `
    };

    console.log('Attempting to send email with options:', {
      to: mailOptions.to,
      subject: mailOptions.subject
    });

    try {
      // Verify SMTP connection configuration
      await transporter.verify();
      console.log('SMTP connection verified successfully');

      // Send mail
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);
      res.status(200).json({ message: 'Email sent successfully', messageId: info.messageId });
    } catch (smtpError) {
      console.error('SMTP Error:', smtpError);
      throw new Error(`SMTP Error: ${smtpError.message}`);
    }
  } catch (error) {
    console.error('Error in API route:', error);
    res.status(500).json({ 
      message: 'Failed to send email',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 