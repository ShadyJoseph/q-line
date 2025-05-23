import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create a Nodemailer transporter with Hostinger SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 587,
      secure: false, // Use TLS for port 587
      auth: {
        user: process.env.EMAIL_USER, // e.g., info@qline-eg.com
        pass: process.env.EMAIL_PASS, // Your Hostinger email password
      },
    });

    // Define email options
    const mailOptions = {
      from: `"Info Qline" <${process.env.EMAIL_USER}>`, // Sender (e.g., "Info Qline" <info@qline-eg.com>)
      to: "emad.hanna@qline-eg.com", // Recipient
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, data: info });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}