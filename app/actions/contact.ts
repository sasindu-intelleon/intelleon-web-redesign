"use server";

import { Resend } from "resend";
import { getThankYouEmailTemplate } from "./mailTemplate/thankYouEmail";
import { env } from "@/lib/env";

const resend = new Resend(env.RESEND_API_KEY);
const email_logo_url = env.EMAIL_LOGO_URL;

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
        from: env.RESEND_FROM_ADMIN as string,
        to: env.ADMIN_EMAIL as string,
        subject: `New Inquiry from ${name}`,
        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
      }),

      // 2. User : Auto-reply email
      resend.emails.send({
        from: env.RESEND_FROM_USER as string,
        to: email, // user's email
        subject: "Thank you for contacting INTELLEON!",
        html: getThankYouEmailTemplate(name, email_logo_url),
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
