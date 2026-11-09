export default function SlideOne(props: { currentSlide: number }) {
  return (
    <div
      className={`hero-slide w-full transition-all duration-700 absolute ${props.currentSlide === 1 ? "opacity-100 relative z-10" : "opacity-0 pointer-events-none"}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
        <div className="lg:col-span-6 flex flex-col items-start gap-5">
          <div className="font-tech text-cyan-600 dark:text-brandCyan text-sm uppercase tracking-[0.25em] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-brandCyan animate-pulse"></span>
            Technology Stack &amp; Scope
          </div>
          <h2 className="text-1xl sm:text-4xl md:text-5xl font-heading font-black text-slate-900 dark:text-white leading-tight uppercase transition-colors duration-300">
            SEAMLESS SOLUTIONS
            <br />
            <span className="[-webkit-text-stroke:1.5px_#0f172a] dark:[-webkit-text-stroke:1.5px_rgba(255,255,255,0.75)] text-transparent">
              IN EVERY
            </span>{" "}
            <span className="text-cyan-600 dark:text-brandCyan drop-shadow-[0_0_14px_rgba(18,184,255,0.45)]">
              ASPECT
            </span>
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg transition-colors duration-300">
            Empowering next-generation ventures with full-stack capability
            across modern cloud environments, cross-platform applications, and
            deep system architecture.
          </p>
          <div className="pt-2">
            <a
              className="px-8 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide bg-cyan-500/10 dark:bg-brandCyan/20 text-cyan-700 dark:text-brandCyan border border-cyan-500/30 dark:border-brandCyan/40 hover:bg-cyan-600 hover:text-white dark:hover:bg-brandCyan dark:hover:text-black transition duration-200 inline-block"
              href="#what-we-do"
            >
              Explore Capabilities
            </a>
          </div>
        </div>
        <div className="lg:col-span-6 relative flex flex-wrap items-center justify-center lg:justify-end gap-3 sm:gap-4 p-4 font-heading font-bold select-none">
          <div className="absolute inset-0 bg-cyan-500/5 dark:bg-brandCyan/5 rounded-3xl blur-2xl pointer-events-none"></div>
          <span className="text-1xl sm:text-4xl text-slate-800 dark:text-white/90 hover:text-cyan-600 dark:hover:text-brandCyan transition-colors px-4 py-2 bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-zinc-800 rounded-xl shadow-sm">
            MOBILE
          </span>
          <span className="text-2xl sm:text-5xl text-cyan-600 dark:text-brandCyan [-webkit-text-stroke:1.5px_#0f172a] dark:[-webkit-text-stroke:1.5px_rgba(255,255,255,0.75)] text-transparent px-4 py-2">
            UI/UX
          </span>
          <span className="text-md sm:text-3xl text-slate-700 dark:text-zinc-300 px-4 py-2 bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 rounded-xl shadow-sm">
            ENTERPRISE
          </span>
          <span className="text-1xl sm:text-4xl text-slate-900 dark:text-white px-3 py-1.5 bg-gradient-to-r from-cyan-500/10 dark:from-brandCyan/20 to-transparent border border-cyan-500/20 dark:border-brandCyan/30 rounded-xl shadow-sm">
            DESKTOP
          </span>
          <span className="text2xl sm:text-5xl font-black text-slate-900 dark:text-white">
            WEB
          </span>
          <span className="text-md sm:text-2xl text-cyan-700 dark:text-brandCyan border border-cyan-500/30 dark:border-brandCyan/40 rounded-full px-5 py-1.5 bg-cyan-500/10 dark:bg-brandCyan/10">
            API
          </span>
          <span className="text-md sm:text-3xl text-slate-600 dark:text-zinc-400 px-3 py-1">
            SAAS
          </span>
          <span className="text-md sm:text-3xl text-slate-800 dark:text-white/80 border border-slate-300 dark:border-white/20 rounded-xl px-4 py-2 bg-white/50 dark:bg-transparent">
            E-COMMERCE
          </span>
        </div>
      </div>
    </div>
  );
}
