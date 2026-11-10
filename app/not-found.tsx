"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import "./globals.css";
import MobileNavDrawer from "@/components/MobileNavDrawer";

export default function NotFound() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <body className=" dark:text-slate-100 text-slate-900 bg-grid-dots min-h-screen flex flex-col font-sans transition-colors duration-300 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Glitch & Custom Dot Grid Styling */}
      <style jsx global>{`
        .glitch-wrapper {
          position: relative;
          display: inline-block;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          clip: rect(0, 0, 0, 0);
        }
        .glitch-text:hover::before {
          left: -2px;
          text-shadow: 2px 0 #00f2fe;
          animation: glitch-anim-1 2s infinite linear alternate-reverse;
        }
        .glitch-text:hover::after {
          left: 2px;
          text-shadow: -2px 0 #ff6a00;
          animation: glitch-anim-2 2s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim-1 {
          0% {
            clip: rect(20px, 9999px, 45px, 0);
          }
          20% {
            clip: rect(60px, 9999px, 80px, 0);
          }
          40% {
            clip: rect(10px, 9999px, 35px, 0);
          }
          60% {
            clip: rect(85px, 9999px, 120px, 0);
          }
          80% {
            clip: rect(40px, 9999px, 65px, 0);
          }
          100% {
            clip: rect(70px, 9999px, 95px, 0);
          }
        }
        @keyframes glitch-anim-2 {
          0% {
            clip: rect(75px, 9999px, 110px, 0);
          }
          20% {
            clip: rect(15px, 9999px, 40px, 0);
          }
          40% {
            clip: rect(90px, 9999px, 130px, 0);
          }
          60% {
            clip: rect(30px, 9999px, 50px, 0);
          }
          80% {
            clip: rect(110px, 9999px, 140px, 0);
          }
          100% {
            clip: rect(5px, 9999px, 30px, 0);
          }
        }
      `}</style>

      {/* TOP HEADER / NAV BAR */}
      <Header
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
      <MobileNavDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* MAIN WORKSPACE - Added pt-28 to prevent fixed header overlap */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto relative px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pb-16 lg:pb-20 ">
        {/* DESKTOP PERSISTENT LEFT SIDEBAR */}
        <aside className="hidden pt-4 lg:flex flex-col justify-between w-52 shrink-0 pr-8 border-r border-slate-200 dark:border-slate-800/60 sticky top-28 h-[calc(100vh-10rem)]">
          <div className="space-y-6">
            <div className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-ping"></span>
              <span>// STATUS: 404_OFFLINE</span>
            </div>

            <nav className="space-y-3 font-mono text-xs">
              <Link
                href="/#know-intelleon"
                className="block text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition py-1"
              >
                01. Know INTELLEON
              </Link>
              <Link
                href="/#what-we-do"
                className="block text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition py-1"
              >
                02. What We Do
              </Link>
              <Link
                href="/#our-products"
                className="block text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition py-1"
              >
                03. Our Products
              </Link>
              <Link
                href="/#contact"
                className="block text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition py-1"
              >
                04. Get in Touch
              </Link>
            </nav>
          </div>

          {/* DIAGNOSTICS WIDGET */}
          <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 font-mono text-[11px] space-y-2 text-slate-600 dark:text-slate-400">
            <div className="flex items-center justify-between text-slate-800 dark:text-slate-300">
              <span>PACKET_LOSS</span>
              <span className="text-rose-500 font-bold">100%</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-rose-500 h-full w-full"></div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500">
              <span>PORT: 8080</span>
              <span>ROUTER: ENCLAVE_9</span>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800/60 text-slate-500 dark:text-slate-400">
            <a
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full border border-slate-300 dark:border-zinc-700/80 flex items-center justify-center hover:border-slate-500 hover:text-slate-900 dark:hover:border-zinc-400 dark:hover:text-white transition"
              target="_blank"
              href="https://www.linkedin.com/company/intelleon-io"
            >
              <i className="fa-brands fa-linkedin-in text-xs"></i>
            </a>
            <a
              aria-label="Facebook"
              className="w-8 h-8 rounded-full border border-slate-300 dark:border-zinc-700/80 flex items-center justify-center hover:border-slate-500 hover:text-slate-900 dark:hover:border-zinc-400 dark:hover:text-white transition"
              target="_blank"
              href="https://facebook.com/intelleon.io"
            >
              <i className="fa-brands fa-facebook-f text-xs"></i>
            </a>
            <a
              aria-label="X Twitter"
              className="w-8 h-8 rounded-full border border-slate-300 dark:border-zinc-700/80 flex items-center justify-center hover:border-slate-500 hover:text-slate-900 dark:hover:border-zinc-400 dark:hover:text-white transition"
              target="_blank"
              href="https://x.com/intelleon"
            >
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            <a
              aria-label="Instagram"
              className="w-8 h-8 rounded-full border border-slate-300 dark:border-zinc-700/80 flex items-center justify-center hover:border-slate-500 hover:text-slate-900 dark:hover:border-zinc-400 dark:hover:text-white transition"
              target="_blank"
              href="https://www.instagram.com/intelleon.io/"
            >
              <i className="fa-brands fa-instagram text-xs"></i>
            </a>
          </div>
        </aside>

        {/* MAIN CONTENT STAGE */}
        <main className="flex-1 flex flex-col justify-center items-center text-center lg:pl-12 lg:text-left lg:items-start max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/40 border border-cyan-300 dark:border-cyan-800/50 text-cyan-700 dark:text-cyan-400 font-mono text-xs mb-6 sm:mb-8">
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            <span className="tracking-wider uppercase">
              Intelligence: DISCONNECTED_NODE
            </span>
          </div>

          <div className="glitch-wrapper mb-4">
            <h1
              className="glitch-text text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter text-slate-900 dark:text-white font-mono leading-none select-none"
              data-text="404"
            >
              404
            </h1>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 font-sans">
            Protocol Void:{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-600 dark:from-cyan-400 dark:via-sky-300 dark:to-blue-500 bg-clip-text text-transparent">
              Endpoint Not Found
            </span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-lg max-w-xl mb-8 leading-relaxed">
            The digital pathway or architectural resource you requested has
            migrated, decommissioned, or does not exist within the current
            INTELLEON cluster.
          </p>

          {/* DEBUG TERMINAL */}
          <div className="w-full max-w-2xl bg-slate-900 text-slate-100 dark:bg-[#0b0d14]/90 border border-slate-800 rounded-2xl p-4 sm:p-6 mb-8 text-left font-mono text-xs sm:text-sm shadow-2xl backdrop-blur-xl relative overflow-hidden group">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="text-slate-400 text-[11px] ml-2">
                  sys_diagnostics.log
                </span>
              </div>
              <span className="text-[10px] text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                HTTP 404 ERR
              </span>
            </div>

            <div className="space-y-1.5 text-slate-300 font-mono text-[11px] sm:text-xs">
              <p className="text-slate-500">
                // Initiating lookup query across microservices...
              </p>
              <p className="text-cyan-400">
                &gt; GET /ecosystem/target-resource [STATUS: 404_NOT_FOUND]
              </p>
              <p className="text-rose-400">
                &gt; ERR_RESOURCE_ORPHANED: No active deployment matching URI
                hash.
              </p>
              <p className="text-slate-400">
                &gt; SUGGESTED_RECOVERY: Redirect packet to primary gateway or
                rerun telemetry probe.
              </p>
            </div>

            <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500 pointer-events-none"></div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full">
            <Link
              href="/"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
              <span>Return to Central Hub</span>
            </Link>

            <Link
              href="/#what-we-do"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-200 dark:bg-slate-900/80 hover:bg-slate-300 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-600 font-medium text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg
                className="w-4 h-4 text-cyan-600 dark:text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                ></path>
              </svg>
              <span>Explore 8 Core Services</span>
            </Link>

            <Link
              href="/#contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-transparent hover:bg-slate-100 dark:hover:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-300 dark:border-slate-800/80 hover:border-slate-400 dark:hover:border-slate-700 font-medium text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg
                className="w-4 h-4 text-amber-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <span>Report Broken Route</span>
            </Link>
          </div>

          {/* QUICK DESTINATIONS PILLS */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800/60 w-full">
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
              Quick Recovery Gateways
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full font-mono text-xs">
              <Link
                href="/#what-we-do"
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-200 dark:hover:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition flex items-center gap-2"
              >
                <span className="text-cyan-500">&gt;</span> Web Dev
              </Link>
              <Link
                href="/#what-we-do"
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-200 dark:hover:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition flex items-center gap-2"
              >
                <span className="text-cyan-500">&gt;</span> Mobile Apps
              </Link>
              <Link
                href="/#our-products"
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-200 dark:hover:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition flex items-center gap-2"
              >
                <span className="text-orange-500">&gt;</span> NextOrder POS
              </Link>
              <Link
                href="/#our-products"
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-200 dark:hover:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition flex items-center gap-2"
              >
                <span className="text-cyan-500">&gt;</span> Organizer CRM
              </Link>
            </div>
          </div>
        </main>
      </div>

      {/* Copyright Footer */}
      <div className="mt-20 p-8 border-t border-slate-200 dark:border-zinc-900/90 text-center transition-colors duration-300">
        <p className="text-xs text-slate-500 dark:text-zinc-600">
          Copyright © 2026 INTELLEON. All Rights Reserved.
        </p>
      </div>
    </body>
  );
}
