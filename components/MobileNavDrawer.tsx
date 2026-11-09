"use client";

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNavDrawer({
  isOpen,
  onClose,
}: MobileNavDrawerProps) {
  return (
    <div
      className={`fixed inset-0 bg-white/95 dark:bg-black/95 z-40 flex flex-col justify-center items-center gap-8 lg:hidden transition-all duration-700 ease-in-out backdrop-blur-lg ${
        isOpen
          ? "opacity-100 pointer-events-auto visible"
          : "opacity-0 pointer-events-none invisible"
      }`}
    >
      <button
        aria-label="Close Navigation"
        className="absolute top-6 right-6 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white text-2xl transition-colors"
        onClick={onClose}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

      <nav className="flex flex-col items-center gap-6 text-lg font-medium tracking-wide">
        <a
          className="mobile-nav-link text-slate-700 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white transition-colors"
          href="#know-intelleon"
          onClick={onClose}
        >
          Know INTELLEON
        </a>
        <a
          className="mobile-nav-link text-slate-700 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white transition-colors"
          href="#what-we-do"
          onClick={onClose}
        >
          What We Do
        </a>
        <a
          className="mobile-nav-link text-slate-700 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white transition-colors"
          href="#our-products"
          onClick={onClose}
        >
          Our Products
        </a>
        <a
          className="mobile-nav-link text-slate-700 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white transition-colors"
          href="#contact"
          onClick={onClose}
        >
          Get in Touch
        </a>
      </nav>

      <div className="flex gap-6 text-slate-600 dark:text-zinc-400 mt-4">
        <a
          aria-label="LinkedIn"
          className="w-8 h-8 rounded-full border border-slate-300 dark:border-zinc-700/80 flex items-center justify-center hover:border-slate-500 hover:text-slate-900 dark:hover:border-zinc-400 dark:hover:text-white transition-colors"
          target="_blank"
          href="https://www.linkedin.com/company/intelleon-io"
        >
          <i className="fa-brands fa-linkedin-in text-xs"></i>
        </a>
        <a
          aria-label="Facebook"
          className="w-8 h-8 rounded-full border border-slate-300 dark:border-zinc-700/80 flex items-center justify-center hover:border-slate-500 hover:text-slate-900 dark:hover:border-zinc-400 dark:hover:text-white transition-colors"
          target="_blank"
          href="https://facebook.com/intelleon.io"
        >
          <i className="fa-brands fa-facebook-f text-xs"></i>
        </a>
        <a
          aria-label="X Twitter"
          className="w-8 h-8 rounded-full border border-slate-300 dark:border-zinc-700/80 flex items-center justify-center hover:border-slate-500 hover:text-slate-900 dark:hover:border-zinc-400 dark:hover:text-white transition-colors"
          target="_blank"
          href="https://x.com/intelleon"
        >
          <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </svg>
        </a>
        <a
          aria-label="Instagram"
          className="w-8 h-8 rounded-full border border-slate-300 dark:border-zinc-700/80 flex items-center justify-center hover:border-slate-500 hover:text-slate-900 dark:hover:border-zinc-400 dark:hover:text-white transition-colors"
          target="_blank"
          href="https://www.instagram.com/intelleon.io/"
        >
          <i className="fa-brands fa-instagram text-xs"></i>
        </a>
      </div>
    </div>
  );
}
