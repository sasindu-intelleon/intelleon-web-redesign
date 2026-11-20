import Link from "next/link";

interface ServiceCardProps {
  slug: string;
  icon: string;
  title: string;
  desc: string;
}

export default function ServiceCard({
  slug,
  icon,
  title,
  desc,
}: ServiceCardProps) {
  return (
    <div className="group relative bg-white/90 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800/80 hover:border-slate-400 dark:hover:border-zinc-600 rounded-3xl p-7 sm:p-7 xl:p-6 2xl:p-7 flex flex-col items-center text-center transition-all duration-300 lg:hover:-translate-y-1 min-h-[300px] sm:min-h-[340px] xl:min-h-[330px] 2xl:min-h-[350px] justify-between shadow-md hover:shadow-xl dark:shadow-lg overflow-hidden">
      <div className="flex flex-col items-center w-full">
        {/* Icon Container */}
        <div className="w-14 h-14 sm:w-12 sm:h-12 2xl:w-14 2xl:h-14 flex items-center justify-center text-slate-900 dark:text-white mb-5 sm:mb-6 transition-colors duration-300">
          <i className={`${icon} text-4xl sm:text-3xl 2xl:text-4xl`}></i>
        </div>

        {/* Title */}
        <h3
          className="text-lg sm:text-base 2xl:text-lg font-semibold text-slate-900 dark:text-white mb-3 sm:mb-4 tracking-wide leading-snug transition-colors duration-300"
          dangerouslySetInnerHTML={{
            __html: title.replace(" ", "<br/>"),
          }}
        ></h3>

        {/* Description */}
        <p className="text-sm xl:text-xs 2xl:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed max-w-[300px] sm:max-w-[260px] xl:max-w-[220px] 2xl:max-w-[240px] transition-all duration-300 lg:group-hover:opacity-60 dark:lg:group-hover:opacity-40">
          {desc}
        </p>
      </div>

      {/* Action Button: always visible on touch screens, revealed on hover from lg up */}
      <div className="pt-6 sm:pt-5 w-full flex justify-center transition-all duration-300 lg:opacity-0 lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:group-focus-within:opacity-100 lg:group-focus-within:translate-y-0">
        <Link
          href={`/services/${slug}`}
          className="inline-flex items-center justify-center min-h-[44px] sm:min-h-[40px] xl:min-h-0 px-7 sm:px-6 xl:px-5 py-2.5 sm:py-2 xl:py-1.5 2xl:py-2 rounded-full text-sm xl:text-xs 2xl:text-sm font-semibold tracking-wide bg-slate-900 text-white dark:bg-black/95 dark:text-white border border-slate-900 dark:border-white/20 xl:dark:border-white/80 hover:bg-white hover:text-slate-900 dark:hover:bg-white dark:hover:text-black transition-all duration-200 shadow-sm"
        >
          Explore more
        </Link>
      </div>
    </div>
  );
}
