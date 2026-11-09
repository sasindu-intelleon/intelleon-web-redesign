"use client";

import { useState, useEffect } from "react";

interface HeaderProps {
  onToggleMobileMenu: () => void;
}

export default function Header({ onToggleMobileMenu }: HeaderProps) {
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      const darkPref = savedTheme === "dark";
      setIsDark(darkPref);
      if (darkPref) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // Default dark mode
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/75 backdrop-blur-md border-b border-slate-200 dark:border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Image with Theme Filter */}
        <a
          aria-label="INTELLEON Home"
          className="flex items-center gap-2 group tracking-widest"
          href="/#hero"
        >
          <img
            src="/images/img_logo_intelleon.png"
            alt="INTELLEON Logo"
            className="h-7 md:h-8 w-auto object-contain brightness-0 dark:brightness-100 transition-all duration-300"
          />
        </a>

        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Light/Dark Theme"
            className="w-9 h-9 rounded-full bg-slate-100 dark:bg-zinc-800/90 text-slate-700 dark:text-zinc-200 border border-slate-300 dark:border-zinc-700 hover:text-brandCyan hover:border-brandCyan flex items-center justify-center transition-all duration-300 shadow-sm"
          >
            <i
              className={`fa-${isDark ? "regular fa-sun" : "solid fa-moon"} text-sm`}
            ></i>
          </button>

          {/* Get in Touch Button */}
          <a
            aria-label="Get in Touch"
            className="p-2 sm:px-6 sm:py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide dark:bg-slate-900 text-white dark:bg-zinc-800/90 dark:text-zinc-200 border border-slate-900 dark:border-zinc-700 hover:bg-brandCyan hover:text-black hover:border-brandCyan hover:scale-105 shadow-sm transition-all duration-300 flex items-center justify-center"
            href="/#contact"
          >
            <i className="fa-regular fa-envelope text-sm sm:text-xs sm:mr-1.5"></i>
            <span className="hidden sm:inline">Get in Touch</span>
          </a>

          {/* Mobile Navigation Toggle Button */}
          <button
            aria-label="Toggle Navigation"
            className="lg:hidden text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white p-2 transition-colors"
            onClick={onToggleMobileMenu}
          >
            <i className="fa-solid fa-bars text-lg"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
