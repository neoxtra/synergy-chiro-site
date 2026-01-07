import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      industry,
      message,
      budget,
    } = data;

    // Simple server validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !industry ||
      !message
    ) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Set up Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,  // your Gmail
        pass: process.env.EMAIL_PASS,  // 16-digit App Password
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_FORM_EMAIL, // where you RECEIVE messages
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Phone: ${phone}
Industry: ${industry}
Budget: $${budget}

Message:
${message}
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Mailer Error:", error);
    return NextResponse.json(
      { error: "Email sending failed." },
      { status: 500 }
    );
  }
}
