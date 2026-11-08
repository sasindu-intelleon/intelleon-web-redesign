'use client';

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNavDrawer({ isOpen, onClose }: MobileNavDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-40 flex flex-col justify-center items-center gap-8 lg:hidden transition-all duration-300 backdrop-blur-lg">
      <button
        aria-label="Close Navigation"
        className="absolute top-6 right-6 text-zinc-400 hover:text-white text-2xl"
        onClick={onClose}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
      <nav className="flex flex-col items-center gap-6 text-lg font-medium tracking-wide">
        <a className="mobile-nav-link text-zinc-300 hover:text-white transition" href="#know-intelleon" onClick={onClose}>
          Know INTELLEON
        </a>
        <a className="mobile-nav-link text-zinc-300 hover:text-white transition" href="#what-we-do" onClick={onClose}>
          What We Do
        </a>
        <a className="mobile-nav-link text-zinc-300 hover:text-white transition" href="#our-products" onClick={onClose}>
          Our Products
        </a>
        <a className="mobile-nav-link text-zinc-300 hover:text-white transition" href="#contact" onClick={onClose}>
          Get in Touch
        </a>
      </nav>
      <div className="flex gap-6 text-zinc-400 mt-4">
        <a className="hover:text-white transition text-lg" href="#"><i className="fa-brands fa-linkedin-in"></i></a>
        <a className="hover:text-white transition text-lg" href="#"><i className="fa-brands fa-facebook-f"></i></a>
        <a className="hover:text-white transition text-lg" href="#"><i className="fa-brands fa-x-twitter"></i></a>
        <a className="hover:text-white transition text-lg" href="#"><i className="fa-brands fa-instagram"></i></a>
      </div>
    </div>
  );
}
