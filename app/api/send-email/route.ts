import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587, // Use 587 for TLS
      secure: false, // Use false for port 587, true for port 465
      auth: {
        user: process.env.GMAIL_USER as string, // Your Gmail address
        pass: process.env.GMAIL_PASS as string, // Your Gmail App Password
      },
      tls: {
        rejectUnauthorized: false, // Optional: helps with SSL issues
      },
      socketTimeout: 60000, // Increase socket timeout
    });

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`, // Shows sender's name & email correctly
      to: process.env.GMAIL_USER, // Your email address (receiver)
      subject: `Contact Form Submission from ${name}`,
      text: message, // Plain text body
      replyTo: email, // Ensures replies go to the sender
    });
    

    console.log('Message sent: %s', info.messageId);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email.', error: error.message }, { status: 500 });
  }
}
