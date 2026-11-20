import Image from "next/image";

export default function SlideTwo(props: { currentSlide: number }) {
  return (
    <div
      aria-hidden={props.currentSlide !== 2}
      className={`hero-slide col-start-1 row-start-1 w-full flex items-start lg:items-center transition-[opacity,visibility] duration-700 ${props.currentSlide === 2 ? "opacity-100 visible z-10" : "opacity-0 invisible pointer-events-none"}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
        {/* Image: below the text on mobile/tablet, left column from lg up */}
        <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col items-center justify-center py-4 sm:py-5 xl:py-2 2xl:py-6">
          <div className="relative flex flex-col items-center justify-center pb-6 sm:pb-8">
            <Image
              src="/images/product/organizer_logo.png"
              alt="Organizer - Enterprise Product Logo by INTELLEON"
              width={260} // max rendered size: 260px (md / xl)
              height={260}
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-[220px] md:h-[220px] lg:w-44 lg:h-44 xl:w-[210px] xl:h-[210px] 2xl:w-[260px] 2xl:h-[260px] object-contain"
            />
            <div className="absolute bottom-0 font-heading font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-widest uppercase transition-colors duration-300">
              Organizer
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start gap-3.5 xl:gap-4 2xl:gap-4">
          <div className="font-tech h-7 lg:h-auto text-amber-600 dark:text-amber-500 text-xs sm:text-sm uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span> Featured
            Product
          </div>
          <h2 className="text-2xl sm:text-4xl xl:text-4xl 2xl:text-5xl font-heading font-bold text-amber-600 dark:text-amber-500 leading-tight">
            Task &amp; Contact
            <br />
            <span className="text-slate-900 dark:text-white transition-colors duration-300">
              Management System
            </span>
          </h2>
          <p className="text-slate-600 dark:text-zinc-300 text-xs sm:text-sm xl:text-sm 2xl:text-base leading-relaxed max-w-xl transition-colors duration-300">
            “Organizer” is a powerful, all-in-one productivity solution
            engineered to help modern teams and fast-scaling enterprises
            seamlessly manage client interactions, schedule deadlines, and
            monitor organizational operations.
          </p>
          <div className="pt-1 sm:pt-2">
            <a
              className="px-6 py-2 sm:px-8 sm:py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide bg-amber-500 text-slate-900 dark:bg-brandCyan dark:text-black hover:bg-amber-400 dark:hover:bg-white transition duration-200 inline-block shadow-lg shadow-amber-500/20 dark:shadow-brandCyan/20"
              href="#our-products"
            >
              Find out more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
