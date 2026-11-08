import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "INTELLEON | Smart, Scalable, Future-Ready Technology",
  description: "Engineering Smart, Scalable, Future-Ready Technology for Data Driven Ecosystems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&family=Inter:wght@300;400;500;600;700&family=Orbitron:wght@600;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative min-h-screen text-zinc-300 font-sans antialiased selection:bg-brandCyan selection:text-black">
        {children}
      </body>
    </html>
  );
}
