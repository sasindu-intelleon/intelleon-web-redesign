'use client';

import { useState } from 'react';

// Products Detail Dictionary based on provided design references
const productsData: Record<string, {
  title: string;
  subtitle: string;
  logo: string;
  intro: string;
  features: { title: string; desc: string; icon: string }[];
  outro1: string;
  outro2: string;
}> = {
  nom: {
    title: "NextOrder Manager",
    subtitle: "Hospitality & Retail POS Management System",
    logo: "./images/product/nom_logo.png",
    intro: "Meet NextOrder Manager (“NOM”) — an ultra-responsive, cloud-connected restaurant management engine designed for high-volume POS ticketing, kitchen orchestration, and multi-branch inventory tracking. Engineered for modern dining establishments, NOM eliminates kitchen friction and order chaos.",
    features: [
      {
        title: "POS Ticketing & Orders",
        desc: "Lightning-fast table side ordering and kitchen display routing.",
        icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`
      },
      {
        title: "Real-Time Inventory",
        desc: "Live stock deduction and automated supplier ingredient tracking.",
        icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>`
      },
      {
        title: "Multi-Branch Sync",
        desc: "Centralized management dashboard across multiple restaurant outlets.",
        icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>`
      },
      {
        title: "Analytics & Reports",
        desc: "Comprehensive sales metrics, peak hour analysis, and staff performance.",
        icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg>`
      }
    ],
    outro1: "NOM integrates seamlessly with receipt printers, cash drawers, and online food aggregators to ensure your daily operations run without interruption. From fast-casual cafes to multi-tier fine dining, the system scales effortlessly to meet high customer footfall.",
    outro2: "Developed by INTELLEON with a focus on speed, reliability, and user experience, NextOrder Manager is the ultimate hospitality toolkit to eliminate service delays and maximize table turnover."
  },
  organizer: {
    title: "Organizer",
    subtitle: "Streamline Your Workflow, Empower Your Team",
    logo: "./images/product/organizer_logo.png",
    intro: "“Organizer” is a powerful, all-in-one productivity solution to help companies seamlessly manage their daily operations. Designed with flexibility and ease-of-use in mind, Organizer allows teams to take control of their task management and communication processes in a centralized platform.",
    features: [
      {
        title: "Task Management & Reminders",
        desc: "Create, assign, and prioritize tasks with custom reminders and deadlines.",
        icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012-2m-6 9l2 2 4-4"/></svg>`
      },
      {
        title: "Real-Time Dashboard",
        desc: "Intuitive dashboard for tracking task progress, performance, and accountability.",
        icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>`
      },
      {
        title: "Contact Management",
        desc: "Securely store, organize, and share contacts with built-in communication tools.",
        icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>`
      },
      {
        title: "Integrated Communication",
        desc: "Reach individuals or groups via integrated email and SMS from one platform.",
        icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`
      }
    ],
    outro1: "Beyond task management, Organizer includes a comprehensive contact management system. Store, organize, and share contacts securely with team members. Communicate with individual contacts or reach out to specific groups via integrated email and SMS features. Whether you're coordinating internal teams or engaging with external stakeholders, Organizer ensures your messages are delivered quickly and efficiently.",
    outro2: "Developed by INTELLEON with a focus on enhancing productivity and team collaboration, Organizer is the ideal solution for companies seeking a smarter way to manage tasks, communication, and contacts—all in one place. Experience the difference of organized efficiency with Organizer."
  }
};

export default function OurProducts() {
  const [activeProductKey, setActiveProductKey] = useState<string | null>(null);

  const product = activeProductKey ? productsData[activeProductKey] : null;

  return (
    <section className="pt-10 scroll-mt-24 relative" id="our-products">
      {/* Section Title / Header */}
      <div className="mb-10">
        {activeProductKey && product ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setActiveProductKey(null)}
                className="w-10 h-10 rounded-full bg-slate-200 dark:bg-zinc-800 text-slate-900 dark:text-white flex items-center justify-center hover:bg-slate-300 dark:hover:bg-zinc-700 transition"
                aria-label="Back to Products"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
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
        ) : (
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black uppercase tracking-wider flex items-baseline gap-3">
            <span className="[-webkit-text-stroke:1.5px_#0f172a] dark:[-webkit-text-stroke:1.5px_rgba(255,255,255,0.75)] text-transparent lowercase text-3xl sm:text-4xl transition-all duration-300">
              our
            </span>
            <span className="text-slate-900 dark:text-white transition-colors duration-300">
              PRODUCTS
            </span>
          </h2>
        )}
      </div>

      {/* Main 2-Column Grid View */}
      {!activeProductKey && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Card 1: NextOrder Manager */}
          <div className="relative bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800/80 rounded-2xl overflow-hidden group shadow-xl dark:shadow-2xl flex flex-col min-h-[380px] justify-end transition-all duration-300">
            <img
              alt="Restaurant Modern POS Touch Terminal"
              className="absolute inset-0 w-full h-full object-cover brightness-95 dark:brightness-[0.4] group-hover:brightness-100 group-hover:dark:brightness-[0.48] group-hover:scale-105 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgdZgDsAEVltUuV9WU-jfLmFqtMq65g5MtH0p-BTqfgVt40j0x_xEr6CxwG11Fpbt2J4AuAOWjSvZm7Gj0vyzYG_zmBw03IYZFtD80D6WWnzWhOdx_zS6shogpgs8ixPP51wxrbjCXwxG6pzxfpuB1uIUWO6RsFonhxfNIOInc1qt5zZtxJqIgj2TZcsANnBxeHpxwVJq9McxCfGlJUtN9jVjw_vDTykPhgHVsVgqx"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent dark:from-black dark:via-black/60 dark:to-transparent transition-colors duration-300"></div>

            <div className="relative z-10 p-7 flex items-end justify-between gap-4">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-orange-500">
                  NextOrder Manager
                </h3>
                <p className="text-sm text-slate-200 dark:text-zinc-300">
                  Restaurant Management System
                </p>
                <div className="pt-3">
                  <button
                    onClick={() => setActiveProductKey('nom')}
                    className="px-5 py-2 rounded-full text-xs font-semibold tracking-wide bg-white/10 dark:bg-transparent text-white border border-white/80 hover:bg-white hover:text-slate-900 dark:hover:bg-white dark:hover:text-black transition duration-200 shadow-sm"
                  >
                    Explore More
                  </button>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <img
                  src="./images/product/nom_logo.png"
                  alt="NextOrder Manager Logo"
                  className="w-12 h-12 object-contain rounded-xl shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Product Card 2: Organizer */}
          <div className="relative bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800/80 rounded-2xl overflow-hidden group shadow-xl dark:shadow-2xl flex flex-col min-h-[380px] justify-end transition-all duration-300">
            <img
              alt="Collaborative Modern Digital Workspace"
              className="absolute inset-0 w-full h-full object-cover brightness-95 dark:brightness-[0.35] group-hover:brightness-100 group-hover:dark:brightness-[0.43] group-hover:scale-105 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuAwW-nJmiHxgxU6xLpdD66MDnzdmUJNYVla5smTwNVjJersioXYNJRTMh4aGvuWT5qb2OJf5fU-BUcGfCcME4-bda1IsFDX9_DkfnUX8AE8nyd3hwZsF9I8zC-r_Qi8g-UtBcfsEZJKDdzOi0D_2dv6Kl8VYWnYVn7897Hhxh1igUt6n2R4MSr6Q9ILzl0iS3c7dFfEQW6YpT-8os0QMcW8P06CeJHF__MiohuQ8B"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent dark:from-black dark:via-black/60 dark:to-transparent transition-colors duration-300"></div>

            <div className="relative z-10 p-7 flex items-end justify-between gap-4">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-amber-500">
                  Organizer
                </h3>
                <p className="text-sm text-slate-200 dark:text-zinc-300">
                  Task &amp; Contact Management System
                </p>
                <div className="pt-3">
                  <button
                    onClick={() => setActiveProductKey('organizer')}
                    className="px-5 py-2 rounded-full text-xs font-semibold tracking-wide bg-white/10 dark:bg-transparent text-white border border-white/80 hover:bg-white hover:text-slate-900 dark:hover:bg-white dark:hover:text-black transition duration-200 shadow-sm"
                  >
                    Explore More
                  </button>
                </div>
              </div>
              <div className="flex-shrink-0">
                <img
                  src="./images/product/organizer_logo.png"
                  alt="Organizer Logo"
                  className="w-12 h-12 object-contain rounded-xl shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Detail View */}
      {activeProductKey && product && (
        <div className="space-y-10 animate-fadeIn relative z-10 text-slate-700 dark:text-zinc-300 pt-2">
          {/* Intro Description */}
          <p className="text-sm sm:text-base leading-relaxed max-w-5xl font-normal">
            {product.intro}
          </p>

          {/* 4 Feature Cards Grid */}
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

          {/* Outro Paragraphs */}
          <div className="space-y-4 max-w-5xl text-sm sm:text-base leading-relaxed font-normal pt-2">
            <p>{product.outro1}</p>
            <p>{product.outro2}</p>
          </div>
        </div>
      )}
    </section>
  );
}