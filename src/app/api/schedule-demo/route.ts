import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, contactNo, message, interestedDemo } = body;
    
    // Use the same email credentials as the contact form
    const EMAIL_USER = process.env.EMAIL_USER || 'jpjishnu21@gmail.com';
    const EMAIL_PASS = process.env.EMAIL_PASS || 'ysuz qhuc qjee oech';
    
    // Create a transporter object using SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: EMAIL_USER,
      to: EMAIL_USER, // Send to the same email address
      subject: `New Demo Request for ${interestedDemo}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
          <h2 style="color: #0F1A42;">New Demo Request</h2>
          <p><strong>Interested Demo:</strong> ${interestedDemo}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Contact Number:</strong> ${contactNo}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${message || 'No message provided'}</p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Demo request sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending demo request:', error);
    return NextResponse.json(
      { error: 'Failed to send demo request' },
      { status: 500 }
    );
  }
}
