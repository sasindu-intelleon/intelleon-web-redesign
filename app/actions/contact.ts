"use server";

import { Resend } from "resend";
import { getThankYouEmailTemplate } from "./mailTemplate/thankYouEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email) {
    return { success: false, error: "Please fill in required fields." };
  }

  try {
    await Promise.all([
      // 1. Admin email
      resend.emails.send({
        from: process.env.RESEND_FROM_ADMIN as string,
        to: process.env.ADMIN_EMAIL as string,
        subject: `New Inquiry from ${name}`,
        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
      }),

      // 2. User : Auto-reply email
      resend.emails.send({
        from: process.env.RESEND_FROM_USER as string,
        to: email, // user's email
        subject: "Thank you for contacting INTELLEON!",
        html: getThankYouEmailTemplate(name),
      }),
    ]);

    return { success: true };
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      success: false,
      error: "Failed to send message. Please try again.",
    };
  }
}
