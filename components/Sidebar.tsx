"use client";

import { useEffect, useState } from "react";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("know-intelleon");

  useEffect(() => {
    const sections = [
      "know-intelleon",
      "what-we-do",
      "our-products",
      "contact",
    ];
    const handleScroll = () => {
      let current = "know-intelleon";
      const scrollPos = window.scrollY + 250;
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "know-intelleon", label: "Know INTELLEON" },
    { id: "what-we-do", label: "What We Do" },
    { id: "our-products", label: "Our Products" },
    { id: "contact", label: "Get in Touch" },
  ];

  return (
    <aside className="hidden lg:flex fixed left-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] top-24 bottom-12 w-52 flex-col justify-between z-30 pointer-events-none py-10">
      <nav
        aria-label="Section Navigation"
        className="pointer-events-auto flex flex-col gap-8 my-auto"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              className="nav-tab group flex flex-col items-start text-sm tracking-wide text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
              href={`#${item.id}`}
            >
              <span
                className={`tab-label font-medium transition-colors ${isActive ? "text-slate-900 dark:text-white font-semibold" : "text-slate-500 dark:text-zinc-400"}`}
              >
                {item.label}
              </span>
              <span
                className={`tab-indicator h-[2px] mt-1 transition-all duration-300 ${isActive ? "w-8 bg-slate-900 dark:bg-white" : "w-0 bg-slate-900 dark:bg-white group-hover:w-8"}`}
              ></span>
            </a>
          );
        })}
      </nav>

      <div className="pointer-events-auto flex items-center gap-4 text-slate-500 dark:text-zinc-400 text-sm">
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
  );
}
