// src/api/send/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { formData } = await request.json();
    const { name, email, message } = formData;
    
    console.log('Received form submission:', { name, email, message });

    try {
      // Send notification to site owner
      const notificationEmail = await resend.emails.send({
        from: 'contact@hita.energy',
        to: 'hello@hita.energy', 
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      });
      console.log('Notification email sent:', notificationEmail);

      // Send confirmation to sender
      const confirmationEmail = await resend.emails.send({
        from: 'hello@hita.energy',
        to: email,
        subject: 'We received your message',
        html: `
          <h2>Thank you for contacting us, ${name}!</h2>
          <p>We've received your message and will get back to you soon.</p>
          <p>For reference, here's what you sent us:</p>
          <p>${message}</p>
        `
      });
      console.log('Confirmation email sent:', confirmationEmail);

      return NextResponse.json({ success: true });
    } catch (emailError) {
      console.error('Error sending emails:', emailError);
      return NextResponse.json(
        { error: 'Failed to send emails', details: emailError },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Error processing request', details: error },
      { status: 500 }
    );
  }
}