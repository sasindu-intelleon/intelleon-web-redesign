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
            {isDark ? (
              // Sun Icon (Dark mode එකේදී light mode එකට මාරු වෙන්න sun එක පෙන්වයි)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                className="w-4 h-4 fill-current text-zinc-300 hover:text-white transition-colors"
              >
                <path d="M 14.984375 0.98632812 A 1.0001 1.0001 0 0 0 14 2 L 14 5 A 1.0001 1.0001 0 1 0 16 5 L 16 2 A 1.0001 1.0001 0 0 0 14.984375 0.98632812 z M 5.796875 4.7988281 A 1.0001 1.0001 0 0 0 5.1015625 6.515625 L 7.2226562 8.6367188 A 1.0001 1.0001 0 1 0 8.6367188 7.2226562 L 6.515625 5.1015625 A 1.0001 1.0001 0 0 0 5.796875 4.7988281 z M 24.171875 4.7988281 A 1.0001 1.0001 0 0 0 23.484375 5.1015625 L 21.363281 7.2226562 A 1.0001 1.0001 0 1 0 22.777344 8.6367188 L 24.898438 6.515625 A 1.0001 1.0001 0 0 0 24.171875 4.7988281 z M 15 8 A 7 7 0 0 0 8 15 A 7 7 0 0 0 15 22 A 7 7 0 0 0 22 15 A 7 7 0 0 0 15 8 z M 2 14 A 1.0001 1.0001 0 1 0 2 16 L 5 16 A 1.0001 1.0001 0 1 0 5 14 L 2 14 z M 25 14 A 1.0001 1.0001 0 1 0 25 16 L 28 16 A 1.0001 1.0001 0 1 0 28 14 L 25 14 z M 7.9101562 21.060547 A 1.0001 1.0001 0 0 0 7.2226562 21.363281 L 5.1015625 23.484375 A 1.0001 1.0001 0 1 0 6.515625 24.898438 L 8.6367188 22.777344 A 1.0001 1.0001 0 0 0 7.9101562 21.060547 z M 22.060547 21.060547 A 1.0001 1.0001 0 0 0 21.363281 22.777344 L 23.484375 24.898438 A 1.0001 1.0001 0 1 0 24.898438 23.484375 L 22.777344 21.363281 A 1.0001 1.0001 0 0 0 22.060547 21.060547 z M 14.984375 23.986328 A 1.0001 1.0001 0 0 0 14 25 L 14 28 A 1.0001 1.0001 0 1 0 16 28 L 16 25 A 1.0001 1.0001 0 0 0 14.984375 23.986328 z"></path>
              </svg>
            ) : (
              // Moon Icon
              <i className="fa-solid fa-moon text-sm text-slate-700 hover:text-slate-950"></i>
            )}
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
