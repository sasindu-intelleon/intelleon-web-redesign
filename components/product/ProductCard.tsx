import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  subtitle: string;
  categoryColor: string;
  imageBg: string;
  logoSrc: string;
  href: string;
  altText: string;
}

export default function ProductCard({
  title,
  subtitle,
  categoryColor,
  imageBg,
  logoSrc,
  href,
  altText,
}: ProductCardProps) {
  return (
    <div className="relative bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800/80 rounded-2xl overflow-hidden group shadow-xl dark:shadow-2xl flex flex-col min-h-[380px] justify-end transition-all duration-300">
      <Image
        src={imageBg}
        alt={altText}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover brightness-95 dark:brightness-[0.4] group-hover:brightness-100 group-hover:dark:brightness-[0.48] group-hover:scale-105 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent dark:from-black dark:via-black/60 dark:to-transparent transition-colors duration-300"></div>

      <div className="relative z-10 p-7 flex items-end justify-between gap-4">
        <div className="space-y-2">
          <h3 className={`text-xl sm:text-2xl font-bold ${categoryColor}`}>
            {title}
          </h3>
          <p className="text-sm text-slate-200 dark:text-zinc-300">
            {subtitle}
          </p>
          <div className="pt-3">
            <Link
              href={href}
              className="px-5 py-2 rounded-full text-xs font-semibold tracking-wide bg-white/10 dark:bg-transparent text-white border border-white/80 hover:bg-white hover:text-slate-900 dark:hover:bg-white dark:hover:text-black transition duration-200 shadow-sm inline-block"
            >
              Explore More
            </Link>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <Image
            src={logoSrc}
            alt={`${title} Logo`}
            width={48} // w-12 (12 * 4px = 48px)
            height={48} // h-12 (48px)
            className="w-12 h-12 object-contain rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
