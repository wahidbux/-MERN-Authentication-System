
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// Configure Nodemailer transport for Mailtrap
export const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER, 
    pass: process.env.MAILTRAP_PASS,
  },
});

// Define sender details
export const sender = {
  name: "Wahid",
  email: "hello@example.com",
};
