import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, city, country, organisation, message } = body;
    
    // Hardcoded email credentials for testing
    // In production, use environment variables securely
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
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
          <h2 style="color: #366A00;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>Organisation:</strong> ${organisation}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
