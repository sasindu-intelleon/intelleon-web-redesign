export default function KnowIntelleon() {
  return (
    <section className="pt-10 scroll-mt-24" id="know-intelleon">
      {/* <!-- Section Header with Stroke/Filled Effect --> */}
      <div className="mb-10 flex items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black uppercase tracking-wider flex items-baseline gap-3">
          <span
            className="font-outline lowercase text-3xl sm:text-4xl text-transparent dark:hidden"
            style={{ WebkitTextStroke: "1.5px black" }}
          >
            know
          </span>
          <span
            className="font-outline lowercase text-3xl sm:text-4xl text-transparent hidden dark:inline"
            style={{ WebkitTextStroke: "1.5px white" }}
          >
            know
          </span>
          <span className="text-black dark:text-white">INTELLEON</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* <!-- Verbatim Editorial Content --> */}
        <div className="lg:col-span-7 space-y-6 text-gray-700  dark:text-zinc-300 text-sm sm:text-[15px] leading-relaxed font-normal">
          <p className="">
            INTELLEON is a forward-thinking, technology-driven company
            specializing in the development of future-ready digital applications
            across web, mobile, enterprise, and desktop platforms. By combining
            cutting-edge technology with a strong focus on innovation,
            scalability, performance, and industry insights, we deliver
            high-impact digital products that empower businesses to thrive in a
            rapidly evolving landscape. Our multidisciplinary team brings
            together expertise in business analytics, software engineering, data
            science, and user experience design, ensuring that every product we
            deliver is both technically sophisticated and intuitively usable. We
            embark on a consultative approach, working closely with clients to
            understand their unique, complex needs and challenges, and
            transforming them into customized and robust digital solutions that
            deliver measurable business value.
          </p>
          <p className="">
            At INTELLEON, we believe technology should be a catalyst for
            transformation. Whether you’re a growing startup or a large
            enterprise, our software systems are engineered to evolve with your
            business and help you stay ahead in an increasing digital world.
            Let’s connect in shaping the future of intelligent solutions.
          </p>
        </div>
        {/* <!-- Geometric Framed Skyscraper Visual Feature --> */}
        <div className="relative w-72 sm:w-80 aspect-square shadow-blue-200 dark:shadow-blue-600/20 bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-sm overflow-hidden p-2 group shadow-xl dark:shadow-2xl transition-colors duration-300">
          {/* Background Architecture Visual */}
          <img
            alt="Modern Glass Skyscrapers City Architecture"
            className="w-full h-full object-cover brightness-100 contrast-105 dark:brightness-90 group-hover:scale-105 transition-all duration-700"
            src="./images/img_know_intelleon.webp"
          />
        </div>
      </div>
    </section>
  );
}
