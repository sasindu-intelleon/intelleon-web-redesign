'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-[calc(100vh-7rem)] flex flex-col justify-center relative pt-8 md:pt-4 overflow-hidden" id="hero">
      <div className="relative w-full min-h-[460px] md:min-h-[440px] flex items-center">
        
        {/* SLIDE 0 */}
        <div className={`hero-slide w-full transition-all duration-700 absolute ${currentSlide === 0 ? 'opacity-100 relative z-10' : 'opacity-0 pointer-events-none'}`}>
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-center">
            <div className="xl:col-span-6 flex justify-center order-2 xl:order-1 relative py-6">
              <div className="relative w-[300px] h-[340px] sm:w-[380px] sm:h-[400px]">
                <div className="absolute right-2 top-0 w-36 sm:w-48 aspect-[0.866] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] p-0.5 bg-gradient-to-tr from-cyan-500/50 to-slate-400/40 dark:to-white/40">
                  <div className="w-full h-full [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] bg-slate-100 dark:bg-zinc-900 overflow-hidden">
                    <img alt="Architecture" className="w-full h-full object-cover grayscale-[30%]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfdKgBrXv5MW0NfoEsBbYPbPZNsgWkfBpCZuzhZ6n5sw-yj4sosdn3PahQ1nKKKbmlbUsNGF1-PnOv_eHEK8cwNg-7gGhxnk6FiA22MQnhvHDpvpYxv4cRqGpQXpNSX36C2AaYwvNE0dX4HCZZKhnsikfM9YgwbITKZw-OLADjVrOY80SAvlau4RwD8OWJLL-HNZy701ciSvCp4B14XnPDbTmoZYSxVld8QTAFkuVA" />
                  </div>
                </div>
                <div className="absolute left-0 top-16 sm:top-20 w-40 sm:w-52 aspect-[0.866] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] p-0.5 bg-gradient-to-bl from-brandCyan to-slate-300/30 dark:to-white/30 shadow-xl dark:shadow-2xl">
                  <div className="w-full h-full [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] bg-slate-100 dark:bg-zinc-900 overflow-hidden">
                    <img alt="Analytics" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBMYhJKo85IwzrgjQ5i761TnyMlUhvoRVZM_DPERkBLvXYoegTX44REh_bOIvZ0FZApThS4GG9xgxwsZbZ_Mz2fhxoJytVZ-2jVKED1LHhdr1yT84x_QGqvOvm_RhQtHCbsGhJbeY8E-pWIEFug4wUCpN53TN4m53Z1VZv5CHpQfTMvbGj1THC4GcIniIUVJzTVDuK1YvUedazCS2XCb-gEFxD5NlqqKB4F4u-lYrg" />
                  </div>
                </div>
                <div className="absolute right-4 bottom-0 w-36 sm:w-48 aspect-[0.866] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] p-0.5 bg-gradient-to-br from-slate-400/40 dark:to-white/40 to-cyan-500/40">
                  <div className="w-full h-full [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] bg-slate-100 dark:bg-zinc-900 overflow-hidden">
                    <img alt="Partnership" className="w-full h-full object-cover grayscale-[20%]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1BJ9mwidqt5eEF0m1jOist4JUEgdyNu2Ggj6iViAN5NWLvV8r8z4JwVAqcFF2xryy1-_FENAkyCDlfQDLHSzm4K1A_N1SzTWdmGcekTnO5FW5zDZlP3eTjLOMSrZiptHeZe6aGjAU_496_CRWK_KW1D_ctpSUs4I_7goxY5zOkqCvh8R5jys3Kl3TUxROXzg5WYV7mtuLiYDEHK_XnLYM7A5w-fsA_OwyOobKxZc-" />
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-6 flex flex-col items-start gap-6 order-1 xl:order-2">
              <div className="font-tech text-cyan-600 dark:text-brandCyan text-xl sm:text-2xl font-semibold tracking-widest drop-shadow-[0_0_14px_rgba(18,184,255,0.45)]">
                Intelligence: ON_
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight md:leading-[1.2] transition-colors duration-300">
                We are about Engineering Smart, Scalable, Future-Ready Technology for Data Driven Ecosystems!
              </h1>
              <div className="pt-2">
                <a className="px-8 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide bg-slate-900 text-white dark:bg-zinc-800 dark:text-zinc-100 border border-slate-900 dark:border-zinc-700 hover:bg-slate-800 dark:hover:bg-zinc-700 hover:text-white transition duration-200 inline-block shadow-md" href="#know-intelleon">
                  Find out more
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 1 */}
        <div className={`hero-slide w-full transition-all duration-700 absolute ${currentSlide === 1 ? 'opacity-100 relative z-10' : 'opacity-0 pointer-events-none'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
            <div className="lg:col-span-6 flex flex-col items-start gap-5">
              <div className="font-tech text-cyan-600 dark:text-brandCyan text-sm uppercase tracking-[0.25em] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-brandCyan animate-pulse"></span>
                Technology Stack &amp; Scope
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-slate-900 dark:text-white leading-tight uppercase transition-colors duration-300">
                SEAMLESS SOLUTIONS<br />
                <span className="[-webkit-text-stroke:1.5px_#0f172a] dark:[-webkit-text-stroke:1.5px_rgba(255,255,255,0.75)] text-transparent">IN EVERY</span>{" "}
                <span className="text-cyan-600 dark:text-brandCyan drop-shadow-[0_0_14px_rgba(18,184,255,0.45)]">ASPECT</span>
              </h2>
              <p className="text-slate-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg transition-colors duration-300">
                Empowering next-generation ventures with full-stack capability across modern cloud environments, cross-platform applications, and deep system architecture.
              </p>
              <div className="pt-2">
                <a className="px-8 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide bg-cyan-500/10 dark:bg-brandCyan/20 text-cyan-700 dark:text-brandCyan border border-cyan-500/30 dark:border-brandCyan/40 hover:bg-cyan-600 hover:text-white dark:hover:bg-brandCyan dark:hover:text-black transition duration-200 inline-block" href="#what-we-do">
                  Explore Capabilities
                </a>
              </div>
            </div>
            <div className="lg:col-span-6 relative flex flex-wrap items-center justify-center lg:justify-end gap-3 sm:gap-4 p-4 font-heading font-bold select-none">
              <div className="absolute inset-0 bg-cyan-500/5 dark:bg-brandCyan/5 rounded-3xl blur-2xl pointer-events-none"></div>
              <span className="text-2xl sm:text-4xl text-slate-800 dark:text-white/90 hover:text-cyan-600 dark:hover:text-brandCyan transition-colors px-4 py-2 bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-zinc-800 rounded-xl shadow-sm">MOBILE</span>
              <span className="text-3xl sm:text-5xl text-cyan-600 dark:text-brandCyan [-webkit-text-stroke:1.5px_#0f172a] dark:[-webkit-text-stroke:1.5px_rgba(255,255,255,0.75)] text-transparent px-4 py-2">UI/UX</span>
              <span className="text-xl sm:text-3xl text-slate-700 dark:text-zinc-300 px-4 py-2 bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 rounded-xl shadow-sm">ENTERPRISE</span>
              <span className="text-2xl sm:text-4xl text-slate-900 dark:text-white px-3 py-1.5 bg-gradient-to-r from-cyan-500/10 dark:from-brandCyan/20 to-transparent border border-cyan-500/20 dark:border-brandCyan/30 rounded-xl shadow-sm">DESKTOP</span>
              <span className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">WEB</span>
              <span className="text-xl sm:text-2xl text-cyan-700 dark:text-brandCyan border border-cyan-500/30 dark:border-brandCyan/40 rounded-full px-5 py-1.5 bg-cyan-500/10 dark:bg-brandCyan/10">API</span>
              <span className="text-2xl sm:text-3xl text-slate-600 dark:text-zinc-400 px-3 py-1">SAAS</span>
              <span className="text-xl sm:text-3xl text-slate-800 dark:text-white/80 border border-slate-300 dark:border-white/20 rounded-xl px-4 py-2 bg-white/50 dark:bg-transparent">E-COMMERCE</span>
            </div>
          </div>
        </div>

        {/* SLIDE 2 */}
        <div className={`hero-slide w-full transition-all duration-700 absolute ${currentSlide === 2 ? 'opacity-100 relative z-10' : 'opacity-0 pointer-events-none'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
            <div className="lg:col-span-5 flex flex-col items-center justify-center py-6">
              <div className="relative flex items-center justify-center">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl border-4 border-amber-500 rotate-45 transform bg-white dark:bg-zinc-900/90 shadow-xl dark:shadow-2xl flex items-center justify-center p-3">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-slate-900 dark:border-white rounded-xl flex items-center justify-center -rotate-45 transition-colors duration-300">
                    <i className="fa-solid fa-calendar-check text-3xl sm:text-4xl text-amber-500"></i>
                  </div>
                </div>
                <div className="absolute -bottom-6 font-heading font-extrabold text-2xl text-slate-900 dark:text-white tracking-widest uppercase transition-colors duration-300">
                  Organizer
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col items-start gap-4">
              <div className="font-tech text-amber-600 dark:text-amber-500 text-sm uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span> Featured Product
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-amber-600 dark:text-amber-500 leading-tight">
                Task &amp; Contact<br /><span className="text-slate-900 dark:text-white transition-colors duration-300">Management System</span>
              </h2>
              <p className="text-slate-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed max-w-xl transition-colors duration-300">
                “Organizer” is a powerful, all-in-one productivity solution engineered to help modern teams and fast-scaling enterprises seamlessly manage client interactions, schedule deadlines, and monitor organizational operations.
              </p>
              <div className="pt-2">
                <a className="px-8 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide bg-amber-500 text-slate-900 dark:bg-brandCyan dark:text-black hover:bg-amber-400 dark:hover:bg-white transition duration-200 inline-block shadow-lg shadow-amber-500/20 dark:shadow-brandCyan/20" href="#our-products">
                  Find out more
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 3 */}
        <div className={`hero-slide w-full transition-all duration-700 absolute ${currentSlide === 3 ? 'opacity-100 relative z-10' : 'opacity-0 pointer-events-none'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
            <div className="lg:col-span-7 flex flex-col items-start gap-4">
              <div className="font-tech text-orange-600 dark:text-orange-500 text-xs sm:text-sm uppercase tracking-[0.25em] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span> Hospitality &amp; Retail POS
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-slate-900 dark:text-white tracking-wider transition-colors duration-300">MENU? <span className="text-orange-600 dark:text-orange-500">CHECK!</span></div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-slate-900 dark:text-white tracking-wider transition-colors duration-300">ORDERS? <span className="text-orange-600 dark:text-orange-500">CHECK!</span></div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-orange-600 dark:text-orange-500 tracking-wider [-webkit-text-stroke:1.5px_#0f172a] dark:[-webkit-text-stroke:1.5px_rgba(255,255,255,0.75)] text-transparent">CHAOS? <span className="text-slate-900 dark:text-white transition-colors duration-300">CANCELLED!!</span></div>
              </div>
              <p className="text-slate-600 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed max-w-lg transition-colors duration-300">
                Meet NextOrder Manager (“NOM”) — an ultra-responsive, cloud-connected restaurant management engine designed for high-volume POS ticketing, kitchen orchestration, and multi-branch inventory.
              </p>
              <div className="pt-2">
                <a className="px-8 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:brightness-110 transition duration-200 inline-block shadow-lg shadow-orange-500/20" href="#our-products">
                  Explore NOM
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center items-center py-4 relative">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-orange-500/40 bg-white dark:bg-zinc-950 p-2 shadow-xl dark:shadow-2xl flex items-center justify-center">
                <img alt="NOM POS" className="w-full h-full object-cover rounded-xl brightness-100 dark:brightness-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgdZgDsAEVltUuV9WU-jfLmFqtMq65g5MtH0p-BTqfgVt40j0x_xEr6CxwG11Fpbt2J4AuAOWjSvZm7Gj0vyzYG_zmBw03IYZFtD80D6WWnzWhOdx_zS6shogpgs8ixPP51wxrbjCXwxG6pzxfpuB1uIUWO6RsFonhxfNIOInc1qt5zZtxJqIgj2TZcsANnBxeHpxwVJq9McxCfGlJUtN9jVjw_vDTykPhgHVsVgqx" />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Indicators */}
      <div className="flex items-center gap-2 pt-6 relative z-20">
        {[0, 1, 2, 3].map((idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`transition-all duration-300 focus:outline-none rounded-full ${currentSlide === idx ? 'w-7 h-1.5 bg-slate-900 dark:bg-white' : 'w-1.5 h-1.5 bg-slate-400 dark:bg-zinc-600 hover:bg-slate-600 dark:hover:bg-zinc-400'}`}
          ></button>
        ))}
      </div>
    </section>
  );
}