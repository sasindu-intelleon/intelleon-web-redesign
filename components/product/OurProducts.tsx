import ProductCard from "./ProductCard";

export default function OurProducts() {
  return (
    <section className="pt-10 scroll-mt-24 relative" id="our-products">
      {/* Section Title / Header */}
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black uppercase tracking-wider flex items-baseline gap-3">
          <span className="[-webkit-text-stroke:1.5px_#0f172a] dark:[-webkit-text-stroke:1.5px_rgba(255,255,255,0.75)] text-transparent lowercase text-3xl sm:text-4xl transition-all duration-300">
            our
          </span>
          <span className="text-slate-900 dark:text-white transition-colors duration-300">
            PRODUCTS
          </span>
        </h2>
      </div>

      {/* Main 2-Column Grid View */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Card 1: NextOrder Manager */}
        <ProductCard
          title="NextOrder Manager"
          subtitle="Restaurant Management System"
          categoryColor="text-orange-500"
          imageBg="https://lh3.googleusercontent.com/aida-public/AB6AXuCgdZgDsAEVltUuV9WU-jfLmFqtMq65g5MtH0p-BTqfgVt40j0x_xEr6CxwG11Fpbt2J4AuAOWjSvZm7Gj0vyzYG_zmBw03IYZFtD80D6WWnzWhOdx_zS6shogpgs8ixPP51wxrbjCXwxG6pzxfpuB1uIUWO6RsFonhxfNIOInc1qt5zZtxJqIgj2TZcsANnBxeHpxwVJq9McxCfGlJUtN9jVjw_vDTykPhgHVsVgqx"
          logoSrc="./images/product/nom_logo.png"
          href="/products/nom"
          altText="Restaurant Modern POS Touch Terminal"
        />

        {/* Product Card 2: Organizer */}
        <ProductCard
          title="Organizer"
          subtitle="Task & Contact Management System"
          categoryColor="text-amber-500"
          imageBg="https://lh3.googleusercontent.com/aida-public/AB6AXuBuAwW-nJmiHxgxU6xLpdD66MDnzdmUJNYVla5smTwNVjJersioXYNJRTMh4aGvuWT5qb2OJf5fU-BUcGfCcME4-bda1IsFDX9_DkfnUX8AE8nyd3hwZsF9I8zC-r_Qi8g-UtBcfsEZJKDdzOi0D_2dv6Kl8VYWnYVn7897Hhxh1igUt6n2R4MSr6Q9ILzl0iS3c7dFfEQW6YpT-8os0QMcW8P06CeJHF__MiohuQ8B"
          logoSrc="./images/product/organizer_logo.png"
          href="/products/organizer"
          altText="Collaborative Modern Digital Workspace"
        />
      </div>
    </section>
  );
}
