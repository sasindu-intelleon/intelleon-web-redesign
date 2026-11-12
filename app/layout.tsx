import type { Metadata } from "next";
import "./globals.css";
import Preloader from "@/components/Preloader";
import StructuredData from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: {
    default: "INTELLEON | Software Development Company",
    template: "%s | INTELLEON",
  },
  description:
    "INTELLEON specializes in custom software development, delivering web, mobile, and enterprise solutions for your business.",
  keywords: [
    "custom software development",
    "enterprise solutions",
    "web applications",
    "mobile app development",
    "desktop applications",
    "software engineering company",
    "INTELLEON",
  ],
  authors: [{ name: "INTELLEON", url: "https://www.intelleon.com" }],
  creator: "INTELLEON",
  publisher: "INTELLEON",
  alternates: {
    canonical: "https://www.intelleon.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.intelleon.com",
    title: "INTELLEON | Custom Software Development Company",
    description:
      "INTELLEON specializes in custom software development, delivering web, mobile, and enterprise solutions for your business.",
    siteName: "INTELLEON",
    images: [
      {
        url: "https://www.intelleon.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "INTELLEON - Custom Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INTELLEON | Custom Software Development Company",
    description:
      "INTELLEON specializes in custom software development, delivering web, mobile, and enterprise solutions for your business.",
    creator: "@intelleon",
    images: ["https://www.intelleon.com/og-image.jpg"],
  },
  icons: {
    icon: [
      // 1. Light Mode සඳහා (කළු පාට Icons)
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon-black-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon-black-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon-black.ico",
        sizes: "any",
      },

      // 2. Dark Mode සඳහා (ඔයාගේ දැන් තියෙන සුදු පාට Icons)
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        {/* Schema JSON-LD Script */}
        <StructuredData />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&family=Inter:wght@300;400;500;600;700&family=Orbitron:wght@600;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative min-h-screen text-zinc-300 font-sans antialiased selection:bg-brandCyan selection:text-black">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
