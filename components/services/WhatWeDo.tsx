import ServiceCard from "./ServiceCard";

const servicesList = [
  {
    key: "enterprise",
    icon: "fa-regular fa-calendar-check",
    title: "Enterprise Applications",
    desc: "We deliver scalable, secure enterprise software tailored to streamline business operations.",
  },
  {
    key: "web",
    icon: "fa-solid fa-code",
    title: "Web Development",
    desc: "We build responsive web apps and websites for seamless user experiences across all devices.",
  },
  {
    key: "mobile",
    icon: "fa-solid fa-mobile-screen-button",
    title: "Mobile App Development",
    desc: "We design and develop high-performance mobile applications that deliver seamless user experiences.",
  },
  {
    key: "desktop",
    icon: "fa-solid fa-gear",
    title: "Desktop Applications",
    desc: "We provide custom desktop application development services tailored to meet specific needs.",
  },
  {
    key: "api",
    icon: "fa-solid fa-network-wired",
    title: "API Integration",
    desc: "We offer expert API integration services to help your systems communicate efficiently.",
  },
  {
    key: "uiux",
    icon: "fa-regular fa-newspaper",
    title: "UI/UX Design",
    desc: "We specialize in UI/UX engineering that transforms digital experiences into intuitive journeys.",
  },
  {
    key: "ecommerce",
    icon: "fa-solid fa-shop",
    title: "E-Commerce Platforms",
    desc: "We build powerful, scalable e-commerce platforms designed to help businesses sell smarter.",
  },
  {
    key: "saas",
    icon: "fa-solid fa-cloud",
    title: "SaaS Applications",
    desc: "We focus heavily on developing scalable, secure, and feature-rich SaaS platforms.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="pt-10 scroll-mt-24 relative" id="what-we-do">
      {/* Section Title / Header */}
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black uppercase tracking-wider flex items-baseline gap-3">
          <span className="text-slate-900 dark:text-white transition-colors duration-300">
            WHAT
          </span>
          <span className="text-transparent lowercase text-3xl sm:text-4xl [-webkit-text-stroke:1.5px_#0f172a] dark:[-webkit-text-stroke:1.5px_rgba(255,255,255,0.75)] transition-all duration-300">
            we
          </span>
          <span className="text-transparent uppercase [-webkit-text-stroke:1.5px_#0f172a] dark:[-webkit-text-stroke:1.5px_rgba(255,255,255,0.75)] transition-all duration-300">
            DO
          </span>
        </h2>
      </div>

      {/* Main Grid View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
        {servicesList.map((s) => (
          <ServiceCard
            key={s.key}
            slug={s.key}
            icon={s.icon}
            title={s.title}
            desc={s.desc}
          />
        ))}
      </div>
    </section>
  );
}
