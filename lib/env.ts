import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  // Resend API Key authentication
  RESEND_API_KEY: z
    .string()
    .min(1, { message: "RESEND_API_KEY is required for sending emails" }),

  // Sender metadata for admin notification emails
  RESEND_FROM_ADMIN: z
    .string()
    .min(1, { message: "RESEND_FROM_ADMIN sender header is required" }),

  // Sender metadata for client auto-reply emails
  RESEND_FROM_USER: z
    .string()
    .min(1, { message: "RESEND_FROM_USER sender header is required" }),

  // Recipient email address for internal contact form submission alerts
  ADMIN_EMAIL: z
    .string()
    .email({ message: "ADMIN_EMAIL must be a valid email address" }),

  // Absolute URL for rendering the company logo in HTML email templates
  EMAIL_LOGO_URL: z.string().url({
    message:
      "EMAIL_LOGO_URL must be a valid absolute URL (e.g., https://intelleon.com/...)",
  }),
});

// Validate process.env against the Zod schema at runtime/build-time
const _env = envSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  RESEND_FROM_ADMIN: process.env.RESEND_FROM_ADMIN,
  RESEND_FROM_USER: process.env.RESEND_FROM_USER,
  ADMIN_EMAIL: process.env.ADMIN_EMAIL,
  EMAIL_LOGO_URL: process.env.EMAIL_LOGO_URL,
});

if (!_env.success) {
  console.error(
    "❌ CRITICAL: Invalid environment variables detected. Shutting down application...",
    JSON.stringify(_env.error.format(), null, 2),
  );

  // Application Stop / Crash :
  if (typeof process !== "undefined") {
    process.exit(1);
  } else {
    throw new Error(
      "Invalid environment variables. Application execution halted.",
    );
  }
}

export const env = _env.data;
