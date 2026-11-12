"use client";

import { useState } from "react";
import Header from "@/components/Header";
import MobileNavDrawer from "@/components/MobileNavDrawer";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import KnowIntelleon from "@/components/KnowIntelleon";
import WhatWeDo from "@/components/services/WhatWeDo";
import OurProducts from "@/components/product/OurProducts";
import Contact from "@/components/Contact";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-zinc-300 font-sans antialiased">
      <Header
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
      <MobileNavDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <div
        className="max-w-7xl mx-auto px-6 pt-24 pb-16 flex relative"
        id="hero"
      >
        <Sidebar />
        <main className="w-full lg:pl-64 flex flex-col gap-10 md:gap-12">
          <Hero />
          <KnowIntelleon />
          <WhatWeDo />
          <OurProducts />
          <Contact />
        </main>
      </div>
    </div>
  );
}
