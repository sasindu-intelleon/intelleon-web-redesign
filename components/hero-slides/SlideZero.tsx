

export default function SlideZero(props: { currentSlide: number }) {
  return (
    <div
      className={`hero-slide w-full transition-all duration-700 absolute ${props.currentSlide === 0 ? "opacity-100 relative z-10" : "opacity-0 pointer-events-none"}`}
    >
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-center">
        <div className="xl:col-span-6 flex justify-center order-2 xl:order-1 relative py-6">
          <div className="relative w-[300px] h-[340px] sm:w-[380px] sm:h-[400px]">
            <div className="absolute right-2 top-0 w-36 sm:w-48 aspect-[0.866] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] p-0.5 bg-gradient-to-tr from-cyan-500/50 to-slate-400/40 dark:to-white/40">
              <div className="w-full h-full [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] bg-slate-100 dark:bg-zinc-900 overflow-hidden">
                <img
                  alt="Architecture"
                  className="w-full h-full object-cover grayscale-[30%]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfdKgBrXv5MW0NfoEsBbYPbPZNsgWkfBpCZuzhZ6n5sw-yj4sosdn3PahQ1nKKKbmlbUsNGF1-PnOv_eHEK8cwNg-7gGhxnk6FiA22MQnhvHDpvpYxv4cRqGpQXpNSX36C2AaYwvNE0dX4HCZZKhnsikfM9YgwbITKZw-OLADjVrOY80SAvlau4RwD8OWJLL-HNZy701ciSvCp4B14XnPDbTmoZYSxVld8QTAFkuVA"
                />
              </div>
            </div>
            <div className="absolute left-0 top-16 sm:top-20 w-40 sm:w-52 aspect-[0.866] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] p-0.5 bg-gradient-to-bl from-brandCyan to-slate-300/30 dark:to-white/30 shadow-xl dark:shadow-2xl">
              <div className="w-full h-full [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] bg-slate-100 dark:bg-zinc-900 overflow-hidden">
                <img
                  alt="Analytics"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBMYhJKo85IwzrgjQ5i761TnyMlUhvoRVZM_DPERkBLvXYoegTX44REh_bOIvZ0FZApThS4GG9xgxwsZbZ_Mz2fhxoJytVZ-2jVKED1LHhdr1yT84x_QGqvOvm_RhQtHCbsGhJbeY8E-pWIEFug4wUCpN53TN4m53Z1VZv5CHpQfTMvbGj1THC4GcIniIUVJzTVDuK1YvUedazCS2XCb-gEFxD5NlqqKB4F4u-lYrg"
                />
              </div>
            </div>
            <div className="absolute right-4 bottom-0 w-36 sm:w-48 aspect-[0.866] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] p-0.5 bg-gradient-to-br from-slate-400/40 dark:to-white/40 to-cyan-500/40">
              <div className="w-full h-full [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] bg-slate-100 dark:bg-zinc-900 overflow-hidden">
                <img
                  alt="Partnership"
                  className="w-full h-full object-cover grayscale-[20%]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1BJ9mwidqt5eEF0m1jOist4JUEgdyNu2Ggj6iViAN5NWLvV8r8z4JwVAqcFF2xryy1-_FENAkyCDlfQDLHSzm4K1A_N1SzTWdmGcekTnO5FW5zDZlP3eTjLOMSrZiptHeZe6aGjAU_496_CRWK_KW1D_ctpSUs4I_7goxY5zOkqCvh8R5jys3Kl3TUxROXzg5WYV7mtuLiYDEHK_XnLYM7A5w-fsA_OwyOobKxZc-"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-6 flex flex-col items-start gap-6 order-1 xl:order-2">
          <div className="font-tech text-cyan-600 dark:text-brandCyan text-xl sm:text-2xl font-semibold tracking-widest drop-shadow-[0_0_14px_rgba(18,184,255,0.45)]">
            Intelligence: ON_
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight md:leading-[1.2] transition-colors duration-300">
            We are about Engineering Smart, Scalable, Future-Ready Technology
            for Data Driven Ecosystems!
          </h1>
          <div className="pt-2">
            <a
              className="px-8 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide bg-slate-900 text-white dark:bg-zinc-800 dark:text-zinc-100 border border-slate-900 dark:border-zinc-700 hover:bg-slate-800 dark:hover:bg-zinc-700 hover:text-white transition duration-200 inline-block shadow-md"
              href="#know-intelleon"
            >
              Find out more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
