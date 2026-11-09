import Image from "next/image";

export default function SlideThree(props: { currentSlide: number }) {
  return (
    <div
      className={`hero-slide w-full transition-all duration-700 absolute ${props.currentSlide === 3 ? "opacity-100 relative z-10" : "opacity-0 pointer-events-none"}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
        <div className="lg:col-span-7 flex flex-col items-start gap-4">
          <div className="font-tech text-orange-600 dark:text-orange-500 text-xs sm:text-sm uppercase tracking-[0.25em] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>{" "}
            Hospitality &amp; Retail POS
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-slate-900 dark:text-white tracking-wider transition-colors duration-300">
              MENU?{" "}
              <span className="text-orange-600 dark:text-orange-500">
                CHECK!
              </span>
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-slate-900 dark:text-white tracking-wider transition-colors duration-300">
              ORDERS?{" "}
              <span className="text-orange-600 dark:text-orange-500">
                CHECK!
              </span>
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-orange-600 dark:text-orange-500 tracking-wider [-webkit-text-stroke:1.5px_#0f172a] dark:[-webkit-text-stroke:1.5px_rgba(255,255,255,0.75)] text-transparent">
              CHAOS?{" "}
              <span className="text-slate-900 dark:text-white transition-colors duration-300">
                CANCELLED!!
              </span>
            </div>
          </div>
          <p className="text-slate-600 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed max-w-lg transition-colors duration-300">
            Meet NextOrder Manager (“NOM”) — an ultra-responsive,
            cloud-connected restaurant management engine designed for
            high-volume POS ticketing, kitchen orchestration, and multi-branch
            inventory.
          </p>
          <div className="pt-2">
            <a
              className="px-8 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:brightness-110 transition duration-200 inline-block shadow-lg shadow-orange-500/20"
              href="#our-products"
            >
              Explore NOM
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 flex justify-center items-center py-4 relative">
          <div className="relative w-64 h-64 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-orange-500/40 bg-white dark:bg-zinc-950 p-2 shadow-xl dark:shadow-2xl flex items-center justify-center">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgdZgDsAEVltUuV9WU-jfLmFqtMq65g5MtH0p-BTqfgVt40j0x_xEr6CxwG11Fpbt2J4AuAOWjSvZm7Gj0vyzYG_zmBw03IYZFtD80D6WWnzWhOdx_zS6shogpgs8ixPP51wxrbjCXwxG6pzxfpuB1uIUWO6RsFonhxfNIOInc1qt5zZtxJqIgj2TZcsANnBxeHpxwVJq9McxCfGlJUtN9jVjw_vDTykPhgHVsVgqx"
              alt="NOM POS - Enterprise Point of Sale Software Solution by INTELLEON"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              className="object-cover rounded-xl brightness-100 dark:brightness-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
