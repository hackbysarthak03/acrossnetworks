import { Request, Response } from "express";
import nodemailer from "nodemailer";

export async function handleContactMail(req: Request, res: Response) {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  // Configure your SMTP transport (use environment variables in production)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `Website Contact <${process.env.SMTP_USER}>`,
      to: "vsarthak62@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "-"}\nMessage: ${message}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone || "-"}</p><p><b>Message:</b><br/>${message}</p>`
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to send email." });
  }
}
