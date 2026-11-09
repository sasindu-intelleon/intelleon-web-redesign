"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import MobileNavDrawer from "@/components/MobileNavDrawer";
import Sidebar from "@/components/Sidebar";

type ProductDetail = {
  title: string;
  subtitle: string;
  logo: string;
  intro: string;
  features: { title: string; desc: string; icon: string }[];
  outro1: string;
  outro2: string;
};

const productsData: Record<string, ProductDetail> = {
  nom: {
    title: "NextOrder Manager",
    subtitle: "Hospitality & Retail POS Management System",
    logo: "../images/product/nom_logo.png",
    intro:
      "Meet NextOrder Manager (“NOM”) — an ultra-responsive, cloud-connected restaurant management engine designed for high-volume POS ticketing, kitchen orchestration, and multi-branch inventory tracking. Engineered for modern dining establishments, NOM eliminates kitchen friction and order chaos.",
    features: [
      {
        title: "POS Ticketing & Orders",
        desc: "Lightning-fast table side ordering and kitchen display routing.",
        icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
      },
      {
        title: "Real-Time Inventory",
        desc: "Live stock deduction and automated supplier ingredient tracking.",
        icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>`,
      },
      {
        title: "Multi-Branch Sync",
        desc: "Centralized management dashboard across multiple restaurant outlets.",
        icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>`,
      },
      {
        title: "Analytics & Reports",
        desc: "Comprehensive sales metrics, peak hour analysis, and staff performance.",
        icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg>`,
      },
    ],
    outro1:
      "NOM integrates seamlessly with receipt printers, cash drawers, and online food aggregators to ensure your daily operations run without interruption. From fast-casual cafes to multi-tier fine dining, the system scales effortlessly to meet high customer footfall.",
    outro2:
      "Developed by INTELLEON with a focus on speed, reliability, and user experience, NextOrder Manager is the ultimate hospitality toolkit to eliminate service delays and maximize table turnover.",
  },
  organizer: {
    title: "Organizer",
    subtitle: "Streamline Your Workflow, Empower Your Team",
    logo: "../images/product/organizer_logo.png",
    intro:
      "“Organizer” is a powerful, all-in-one productivity solution to help companies seamlessly manage their daily operations. Designed with flexibility and ease-of-use in mind, Organizer allows teams to take control of their task management and communication processes in a centralized platform.",
    features: [
      {
        title: "Task Management & Reminders",
        desc: "Create, assign, and prioritize tasks with custom reminders and deadlines.",
        icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012-2m-6 9l2 2 4-4"/></svg>`,
      },
      {
        title: "Real-Time Dashboard",
        desc: "Intuitive dashboard for tracking task progress, performance, and accountability.",
        icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>`,
      },
      {
        title: "Contact Management",
        desc: "Securely store, organize, and share contacts with built-in communication tools.",
        icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>`,
      },
      {
        title: "Integrated Communication",
        desc: "Reach individuals or groups via integrated email and SMS from one platform.",
        icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
      },
    ],
    outro1:
      "Beyond task management, Organizer includes a comprehensive contact management system. Store, organize, and share contacts securely with team members. Communicate with individual contacts or reach out to specific groups via integrated email and SMS features. Whether you're coordinating internal teams or engaging with external stakeholders, Organizer ensures your messages are delivered quickly and efficiently.",
    outro2:
      "Developed by INTELLEON with a focus on enhancing productivity and team collaboration, Organizer is the ideal solution for companies seeking a smarter way to manage tasks, communication, and contacts—all in one place. Experience the difference of organized efficiency with Organizer.",
  },
};

export default function ProductDetailClient({ slug }: { slug: string }) {
  const product = productsData[slug];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (!product) {
    return <div className="p-10 text-center text-white">Product not found</div>;
  }

  return (
    <div className="relative min-h-screen text-zinc-300 font-sans antialiased">
      <Header
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
      <MobileNavDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 flex relative">
        <Sidebar />
        <main className="w-full lg:pl-64 flex flex-col gap-10 pt-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Link
                href="/#our-products"
                className="w-10 h-10 rounded-full bg-slate-200 dark:bg-zinc-800 text-slate-900 dark:text-white flex items-center justify-center hover:bg-slate-300 dark:hover:bg-zinc-700 transition"
                aria-label="Back to Products"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </Link>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white tracking-wide">
                  {product.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 mt-0.5">
                  {product.subtitle}
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <img
                src={product.logo}
                alt={product.title}
                className="w-14 h-14 object-contain rounded-xl shadow-md border border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 p-1"
              />
            </div>
          </div>

          <div className="space-y-10 animate-fadeIn relative z-10 text-slate-700 dark:text-zinc-300">
            <p className="text-sm sm:text-base leading-relaxed max-w-5xl font-normal">
              {product.intro}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
              {product.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center space-y-3 p-6 bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-2xl shadow-sm"
                >
                  <div
                    className="text-slate-900 dark:text-white mb-2 flex items-center justify-center p-3.5 rounded-xl border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-white/5"
                    dangerouslySetInnerHTML={{ __html: feat.icon }}
                  ></div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-wide">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-neutral-400 leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-4 max-w-5xl text-sm sm:text-base leading-relaxed font-normal pt-2">
              <p>{product.outro1}</p>
              <p>{product.outro2}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
