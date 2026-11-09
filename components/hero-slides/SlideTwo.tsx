export default function SlideTwo(props: { currentSlide: number }) {
  return (
    <div
      className={`hero-slide w-full transition-all duration-700 absolute ${props.currentSlide === 2 ? "opacity-100 relative z-10" : "opacity-0 pointer-events-none"}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
        <div className="lg:col-span-5 flex flex-col items-center justify-center py-6">
          <div className="relative flex items-center justify-center">
            <img
              src="./images/product/organizer_logo.png"
              alt="Organizer Logo"
              className="w-36 h-36 md:w-65 md:h-auto sm:w-44 sm:h-44 object-contain"
            />
            <div className="absolute -bottom-6 font-heading font-extrabold text-2xl text-slate-900 dark:text-white tracking-widest uppercase transition-colors duration-300">
              Organizer
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 flex flex-col items-start gap-4">
          <div className="font-tech text-amber-600 dark:text-amber-500 text-sm uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span> Featured
            Product
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-amber-600 dark:text-amber-500 leading-tight">
            Task &amp; Contact
            <br />
            <span className="text-slate-900 dark:text-white transition-colors duration-300">
              Management System
            </span>
          </h2>
          <p className="text-slate-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed max-w-xl transition-colors duration-300">
            “Organizer” is a powerful, all-in-one productivity solution
            engineered to help modern teams and fast-scaling enterprises
            seamlessly manage client interactions, schedule deadlines, and
            monitor organizational operations.
          </p>
          <div className="pt-2">
            <a
              className="px-8 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide bg-amber-500 text-slate-900 dark:bg-brandCyan dark:text-black hover:bg-amber-400 dark:hover:bg-white transition duration-200 inline-block shadow-lg shadow-amber-500/20 dark:shadow-brandCyan/20"
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
