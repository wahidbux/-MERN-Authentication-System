
import { VERIFICATION_EMAIL_TEMPLATE ,PASSWORD_RESET_REQUEST_TEMPLATE,
         PASSWORD_RESET_SUCCESS_TEMPLATE
} from "./emailTemplates.js";
import { transport, sender } from "./mailtrap.config.js";

// Function to send verification email
export const sendVerificationEmail = async (email, verificationToken) => {
  try {
    const info = await transport.sendMail({
      from: `"${sender.name}" <${sender.email}>`,
      to: email,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
    });

    console.log("Email sent successfully:", info.messageId);
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw new Error(`Error sending verification email: ${error.message}`);
  }
};

// Function to send welcome email
export const sendWelcomeEmail = async (email, name) => {
  try {
    const info = await transport.sendMail({
      from: `"${sender.name}" <${sender.email}>`,
      to: email,
      subject: "Welcome to Our App ",
      html: `
        <h1>Welcome, ${name}!</h1>
        <p>Your email has been successfully verified </p>
        <p>You can now log in and start using our app </p>
        <br/>
        <p>– ${sender.name}</p>
      `,
    });

    console.log("Welcome email sent successfully:", info.messageId);
  } catch (error) {
    console.error("Error sending welcome email:", error);
    throw new Error(`Error sending welcome email: ${error.message}`);
  }
};


export const sendPasswordResetEmail = async (email, resetURL) => {
  try {
    const response = await transport.sendMail({
      from: `"${sender.name}" <${sender.email}>`,
      to: email,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
    });

    return response; // return response so you can log it if needed
  } catch (error) {
    console.error(`Error sending password reset email`, error);
    throw new Error(`Error sending password reset email: ${error}`);
  }
};

export const sendResetSuccessEmail = async (email) => {
  try {
    const response = await transport.sendMail({
      from: `"${sender.name}" <${sender.email}>`,
      to: email,
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    });

    console.log("Password reset email sent successfully:", response.messageId);
    return response;
  } catch (error) {
    console.error(`Error sending password reset success email`, error);
    throw new Error(`Error sending password reset success email: ${error.message}`);
  }
};