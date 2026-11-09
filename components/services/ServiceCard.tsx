import Link from 'next/link';

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
    <div className="group relative bg-white/90 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800/80 hover:border-slate-400 dark:hover:border-zinc-600 rounded-3xl p-6 sm:p-7 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 min-h-[340px] justify-between shadow-md hover:shadow-xl dark:shadow-lg overflow-hidden">
      <div className="flex flex-col items-center w-full">
        {/* Icon Container */}
        <div className="w-12 h-12 flex items-center justify-center text-slate-900 dark:text-white mb-6 transition-colors duration-300">
          <i className={`${icon} text-3xl`}></i>
        </div>

        {/* Title */}
        <h3
          className="text-base font-semibold text-slate-900 dark:text-white mb-4 tracking-wide transition-colors duration-300"
          dangerouslySetInnerHTML={{
            __html: title.replace(' ', '<br/>'),
          }}
        ></h3>

        {/* Description */}
        <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed max-w-[220px] transition-all duration-300 group-hover:opacity-60 dark:group-hover:opacity-40">
          {desc}
        </p>
      </div>

      {/* Hover Action Button (Link to dynamic route) */}
      <div className="pt-4 w-full flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <Link
          href={`/services/${slug}`}
          className="px-5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-slate-900 text-white dark:bg-black/95 dark:text-white border border-slate-900 dark:border-white/80 hover:bg-white hover:text-slate-900 dark:hover:bg-white dark:hover:text-black transition-all duration-200 shadow-sm inline-block"
        >
          Explore more
        </Link>
      </div>
    </div>
  );
}