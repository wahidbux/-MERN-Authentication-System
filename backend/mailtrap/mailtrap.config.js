
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER, // from SMTP settings
    pass: process.env.MAILTRAP_PASS, // from SMTP settings
  },
});

// Send test email
const sendTestMail = async () => {
  try {
    const info = await transport.sendMail({
      from: '"Wahid" <hello@example.com>',
      to: "wahidmari2004@gmail.com",
      subject: "Mailtrap Test",
      text: "Congrats Your Mailtrap SMTP test worked!",
    });

    console.log("Email sent:", info.messageId);
  } catch (err) {
    console.error("Error sending email:", err);
  }
};

sendTestMail();
