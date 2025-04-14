import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Email templates
const getApplicantEmail = (name: string) => ({
  subject: 'Thank You for Applying to Sylonow's Talent Accelerator Program',
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #d946ef;">Thank You for Joining Our Journey!</h2>
      <p>Dear ${name},</p>
      <p>Thank you for applying to Sylonow's Talent Accelerator Program. We're excited about your interest in joining our revolutionary journey!</p>
      <p>Here's what happens next:</p>
      <ol>
        <li>Our team will review your application within 48-72 hours</li>
        <li>You'll receive an email with next steps or additional requirements if needed</li>
        <li>If selected, we'll schedule an initial discussion to understand your passion better</li>
      </ol>
      <p>Remember, at Sylonow, we value passion over qualifications. We're looking forward to potentially working with you!</p>
      <div style="margin-top: 20px; padding: 15px; background-color: #fdf2f8; border-radius: 5px;">
        <p style="margin: 0; color: #831843;">Important Note: Please add careers@sylonow.com to your contacts to ensure you don't miss any communications from us.</p>
      </div>
      <p style="margin-top: 20px;">Best regards,<br>The Sylonow Team</p>
    </div>
  `,
});

const getAdminEmail = (applicantData: any) => ({
  subject: 'New Talent Accelerator Program Application',
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #d946ef;">New Application Received</h2>
      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 5px;">
        <h3>Applicant Details:</h3>
        <p><strong>Name:</strong> ${applicantData.name}</p>
        <p><strong>Email:</strong> ${applicantData.email}</p>
        <p><strong>Phone:</strong> ${applicantData.phone}</p>
        <p><strong>Selected Team:</strong> ${applicantData.selected_team}</p>
        <p><strong>Is All-Rounder:</strong> ${applicantData.is_all_rounder ? 'Yes' : 'No'}</p>
        ${applicantData.secondary_team ? `<p><strong>Secondary Team:</strong> ${applicantData.secondary_team}</p>` : ''}
        <h3>Application Responses:</h3>
        <p><strong>Description:</strong> ${applicantData.description}</p>
        <p><strong>Passion:</strong> ${applicantData.passion}</p>
        <p><strong>Challenge Accepter:</strong> ${applicantData.challenge_accepter}</p>
        <p><strong>Weekly Hours:</strong> ${applicantData.weekly_hours}</p>
        <p><strong>Passion Meaning:</strong> ${applicantData.passion_meaning}</p>
        <p><strong>Direct Entry:</strong> ${applicantData.direct_entry ? 'Yes' : 'No'}</p>
      </div>
    </div>
  `,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const data = req.body;

    // Send email to applicant
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      to: data.email,
      ...getApplicantEmail(data.name)
    });

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.ADMIN_EMAIL,
      ...getAdminEmail(data)
    });

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ message: 'Failed to send emails' });
  }
} 