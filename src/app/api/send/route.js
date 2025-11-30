import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { email, subject, message } = await req.json();

  
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
  });

 
  const mailOptions = {
    from: email, 
    to: process.env.EMAIL_USER,
    subject: `${subject} (Portfolio Provenance)`,
    text: message, 
    html: `<p><strong>From:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`, 
  };

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email: ", error);
    return NextResponse.json({ success: false, error: "Failed to send email." });
  }
}
