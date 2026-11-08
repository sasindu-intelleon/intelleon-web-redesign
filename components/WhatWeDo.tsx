'use client';

import { useState } from 'react';

// Exact Services Data Dictionary updated from reference screenshots
const servicesData: Record<string, {
  title: string;
  intro: string;
  features: { title: string; desc: string; icon: string }[];
  outro: string;
}> = {
  enterprise: {
    title: "Enterprise Application",
    intro: "At INTELLEON, we specialize in developing robust, scalable enterprise applications that drive operational efficiency and support business growth. Our solutions are tailored to the complex needs of large organizations, integrating seamlessly with existing systems and processes to streamline workflows, improve data management, and enhance decision-making. From custom ERP and CRM systems to internal portals, analytics dashboards, and workflow automation tools, we build applications designed for reliability, performance, and scalability.",
    features: [
      {
        title: "System Integration",
        desc: "Represents seamless integration with existing enterprise systems.",
        icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4a2 2 0 114 0v1a2 2 0 01-4 0V4zM4 11a2 2 0 110 4h1a2 2 0 010-4H4zm15 0a2 2 0 110 4h1a2 2 0 010-4h-1zM11 19a2 2 0 114 0v1a2 2 0 01-4 0v-1zM12 6v5m0 2v5m-5-6h10"/></svg>`,
      },
      {
        title: "Scalability & Performance",
        desc: "Conveys scalable, high-performing solutions that grow with your business.",
        icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>`,
      },
      {
        title: "Data-Driven Insights",
        desc: "Represents improved data management and actionable insights.",
        icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg>`,
      },
      {
        title: "Intelligent Automation",
        desc: "Stands for smart workflow automation and decision support.",
        icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>`,
      },
    ],
    outro: `Our team collaborates closely with stakeholders to understand organizational goals and challenges, ensuring each application delivers real business value. We leverage modern technologies, secure architectures, and industry recognized development practices to create flexible solutions that evolve with your business.<br/><br/>Whether you're looking to optimize internal operations, improve collaboration, or gain actionable insights from enterprise data, we deliver intelligent, future-ready applications that empower your teams, elevate your operations, and transform your enterprise systems into a strategic advantage.`
  },
  web: {
    title: "Web Development",
    intro: "In today's fast-paced digital world, having a strong online presence is more critical than ever. At INTELLEON, we specialize in crafting high-performance web applications and websites tailored to meet the unique needs of your business. Whether you're a startup aiming to establish your digital footprint or an enterprise looking to scale, our web development services are designed to drive growth, improve user engagement, and deliver measurable results.",
    features: [
      { title: "Digital Presence", desc: "Highlights helping businesses establish and strengthen their online presence.", icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="1.5"/><path stroke-width="1.5" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>` },
      { title: "Custom Web Solutions", desc: "Represents tailored, scalable web applications suited to each business's goals.", icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>` },
      { title: "Growth & Engagement", desc: "Stands for boosting user engagement and driving measurable business growth.", icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>` },
      { title: "Smart & Scalable Tech", desc: "Reflects engineering intelligent, future-ready solutions using modern technology.", icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>` },
    ],
    outro: "Our approach to web development combines cutting-edge technology with a deep understanding of user behavior and business goals. Our fundamental focus is to engineer smart, scalable digital solutions that solve real-world problems. From simple landing pages and marketing sites to complex web applications and enterprise-level platforms, our team has the expertise to bring your vision to life."
  },
  mobile: {
    title: "Mobile App Development",
    intro: "We design and develop high-performance mobile applications that deliver seamless user experiences across iOS and Android platforms. Whether you need a customer-facing app, an internal business tool, or a cross-platform solution, we build mobile apps that are fast, intuitive, and tailored to your unique needs.",
    features: [
      { title: "Cross-Platform Excellence", desc: "Represents seamless mobile experiences across iOS and Android.", icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>` },
      { title: "Tailored Solutions", desc: "Signifies custom mobile apps built to meet specific user or business needs.", icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>` },
      { title: "High Performance & Scalability", desc: "Emphasizes fast, secure, and scalable apps that perform in real-world use.", icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>` },
      { title: "Full-Cycle Development", desc: "Reflects end-to-end development from concept to launch and beyond.", icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>` },
    ],
    outro: "Our mobile development process combines user-centric design with cutting-edge technology to ensure every app we build is not only visually engaging but also functionally robust. From native development to cross-platform frameworks, we choose the right tools to match your project's goals and timeline.<br/><br/>We prioritize performance, security, and scalability—creating apps that not only look great but also handle real-world use with ease. From concept to launch and beyond, our team offers full-cycle development and ongoing support to help you deliver value to users and stay ahead in the mobile-first world."
  },
  desktop: {
    title: "Desktop Applications",
    intro: "Desktop applications still play a vital role in a web-based world. We provide custom desktop application development services tailored to meet the specific needs of businesses across industries. Our desktop solutions are designed for performance, reliability, and seamless integration with your existing systems—whether for Windows, macOS, Linux, or cross-platform environments.",
    features: [
      { title: "Cross Platform Desktop Apps", desc: "Represents development across Windows, macOS, Linux, and cross-platform setups.", icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>` },
      { title: "Powerful & Efficient Tools", desc: "Highlights robust, high-performance applications with rich functionality.", icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>` },
      { title: "Secure & Scalable Architecture", desc: "Emphasizes long-term reliability, scalability, and strong security.", icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>` },
      { title: "Seamless Integration & Support", desc: "Reflects integration with existing systems and commitment to ongoing support.", icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M11 4a2 2 0 114 0v1a2 2 0 01-4 0V4zM4 11a2 2 0 110 4h1a2 2 0 010-4H4zm15 0a2 2 0 110 4h1a2 2 0 010-4h-1zM11 19a2 2 0 114 0v1a2 2 0 01-4 0v-1zM12 6v5m0 2v5m-5-6h10"/></svg>` },
    ],
    outro: "We specialize in building powerful, user-friendly desktop applications that handle complex tasks, offer rich functionality, and operate with high efficiency. Whether you need enterprise-grade software, data processing tools, or offline-first solutions, our team ensures that your application is secure, scalable, and optimized for long-term use.<br/><br/>INTELLEON offers deep system-level functionality while maintaining an intuitive user interface. From the initial concept to deployment and ongoing support, we work closely with you to ensure your desktop application delivers real business value and enhances productivity across your organization."
  },
  api: {
    title: "API Integration",
    intro: "We offer expert API integration services to help your systems communicate efficiently, automate workflows, and enhance overall functionality. Whether you're looking to connect third-party platforms, enable data synchronization, or extend the capabilities of your existing software, our team delivers secure, seamless integrations tailored to your business needs.",
    features: [
      { title: "Seamless Integration", desc: "Connect systems to enable smooth, real-time communication.", icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>` },
      { title: "Workflow Automation", desc: "Automate tasks to improve speed and reduce effort.", icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>` },
      { title: "Secure & Scalable Architecture", desc: "Build reliable, secure systems ready for future growth.", icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>` },
      { title: "Versatile API Support", desc: "Integrate with CRMs, payments, cloud, and more.", icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="1.5"/><path stroke-width="1.5" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>` },
    ],
    outro: "We work with a wide range of APIs—REST, SOAP, GraphQL, and more—to integrate services such as payment gateways, CRMs, ERPs, social platforms, cloud storage, and custom internal systems. Our engineers ensure every integration is reliable, scalable, and well-documented to support future growth and adaptability.<br/><br/>From simplifying operations and improving customer experience to enabling real-time data exchange and reporting, our API solutions drive efficiency and unlock new capabilities for your digital ecosystem. With a strong focus on performance and security, INTELLEON ensures your systems work together seamlessly—so your business runs smoother, smarter, faster, and more connected."
  },
  uiux: {
    title: "UI/UX Design",
    intro: "We specialize in UI/UX engineering that transforms digital experiences into intuitive, engaging, and user-centric journeys. We believe great design is not just about aesthetics—it's about functionality, accessibility, and creating meaningful interactions that drive user satisfaction and business results.",
    features: [
      { title: "User-Centric Design", desc: "Create intuitive interfaces focused on user experience.", icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>` },
      { title: "Strategic Design Process", desc: "From wireframes to testing, every step is purposeful.", icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>` },
      { title: "Stakeholder Collaboration", desc: "Align design with goals through close team collaboration.", icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>` },
      { title: "Cross-Platform Optimization", desc: "Design responsive experiences for all screen sizes.", icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>` },
    ],
    outro: "Our team combines creativity with usability principles to design interfaces that are not only visually appealing but also easy to navigate and optimized for all devices. From wireframing and prototyping to user testing and final implementation, we take a strategic approach to every stage of the design process.<br/><br/>We collaborate closely with stakeholders to understand user behavior, business goals, and technical requirements, ensuring the final product aligns with both brand identity and user expectations. Whether you're building a web platform, mobile app, or enterprise system, our UI/UX solutions enhance engagement, reduce friction, and improve overall usability—delivering digital experiences that leave a lasting impression."
  },
  ecommerce: {
    title: "E-Commerce Platforms",
    intro: "We build powerful, scalable e-commerce platforms designed to help businesses sell smarter, grow faster, and deliver exceptional shopping experiences. Whether you're launching a new online store or upgrading an existing one, we offer end-to-end development solutions tailored to your brand, products, and customers.",
    features: [
      { title: "Custom Storefront Development", desc: "Design tailored online stores that reflect your brand.", icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>` },
      { title: "Secure Shopping Features", desc: "Enable safe payments, carts, orders, and accounts.", icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>` },
      { title: "Platform & Tech Flexibility", desc: "Work with Shopify, WooCommerce, Magento, or custom.", icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>` },
      { title: "Optimized for Growth & Performance", desc: "Deliver fast, responsive, SEO-ready shopping experiences.", icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>` },
    ],
    outro: "Our e-commerce development services cover everything from custom storefront design and shopping cart integration to secure payment gateways, inventory management, order processing, and customer account features. We work with leading technologies and platforms such as Shopify, WooCommerce, Magento, and custom frameworks to match your specific needs and growth plans.<br/><br/>With a focus on responsive design, performance optimization, and user experience, we ensure your online store works flawlessly across devices. From SEO-friendly architecture to seamless third-party integrations, we equip your platform for success in today's competitive digital marketplace. We mean turning your e-commerce vision into a high-converting, feature-rich reality."
  },
  saas: {
    title: "SaaS Applications",
    intro: "As a growing tech team, we focus heavily on developing scalable, secure, and feature-rich SaaS (Software as a Service) platforms that empower businesses to deliver value through the cloud. Whether you're building a new SaaS product from the ground up or transforming an existing solution into a cloud-based model, we provide end-to-end development tailored to your vision.",
    features: [
      { title: "End-to-End SaaS Development", desc: "Build secure, scalable platforms from idea to launch.", icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>` },
      { title: "Robust Architecture & Infrastructure", desc: "Design multi-tenant, flexible, cloud-based architectures.", icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>` },
      { title: "Full Feature Integration", desc: "Add APIs, billing, user roles, and more.", icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg>` },
      { title: "Cloud-Optimized Performance", desc: "Deploy on AWS, Azure, or Google Cloud platforms.", icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>` },
    ],
    outro: "Our team handles every aspect of SaaS development—from architecture design and multi-tenant infrastructure to front-end development, backend services, API integration, billing systems, and user management. We focus on building flexible, high-performance platforms that are easy to maintain, upgrade, and scale as your user base grows.<br/><br/>Using modern technologies and cloud platforms like AWS, Azure, and Google Cloud, we ensure your SaaS solution is reliable, secure, and future-ready. With a strong emphasis on user experience, data privacy, and operational efficiency, INTELLEON helps you bring innovative software services to market quickly and successfully."
  }
};

const servicesList = [
  { key: 'enterprise', icon: 'fa-regular fa-calendar-check', title: 'Enterprise Applications', desc: 'We deliver scalable, secure enterprise software tailored to streamline business operations.' },
  { key: 'web', icon: 'fa-solid fa-code', title: 'Web Development', desc: 'We build responsive web apps and websites for seamless user experiences across all devices.' },
  { key: 'mobile', icon: 'fa-solid fa-mobile-screen-button', title: 'Mobile App Development', desc: 'We design and develop high-performance mobile applications that deliver seamless user experiences.' },
  { key: 'desktop', icon: 'fa-solid fa-gear', title: 'Desktop Applications', desc: 'We provide custom desktop application development services tailored to meet specific needs.' },
  { key: 'api', icon: 'fa-solid fa-network-wired', title: 'API Integration', desc: 'We offer expert API integration services to help your systems communicate efficiently.' },
  { key: 'uiux', icon: 'fa-regular fa-newspaper', title: 'UI/UX Design', desc: 'We specialize in UI/UX engineering that transforms digital experiences into intuitive journeys.' },
  { key: 'ecommerce', icon: 'fa-solid fa-shop', title: 'E-Commerce Platforms', desc: 'We build powerful, scalable e-commerce platforms designed to help businesses sell smarter.' },
  { key: 'saas', icon: 'fa-solid fa-cloud', title: 'SaaS Applications', desc: 'We focus heavily on developing scalable, secure, and feature-rich SaaS platforms.' },
];

export default function WhatWeDo() {
  const [activeDetailKey, setActiveDetailKey] = useState<string | null>(null);

  const currentData = activeDetailKey ? servicesData[activeDetailKey] : null;

  return (
    <section className="pt-10 scroll-mt-24 relative" id="what-we-do">
      {/* Section Title / Header */}
      <div className="mb-12">
        {activeDetailKey ? (
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveDetailKey(null)}
              className="w-10 h-10 rounded-full bg-slate-200 dark:bg-zinc-800 text-slate-900 dark:text-white flex items-center justify-center hover:bg-slate-300 dark:hover:bg-zinc-700 transition"
              aria-label="Back to Services"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white tracking-wide">
              {currentData?.title}
            </h2>
          </div>
        ) : (
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
        )}
      </div>

      {/* Main Grid View */}
      {!activeDetailKey && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
          {servicesList.map((s) => (
            <div
              key={s.key}
              className="group relative bg-white/90 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800/80 hover:border-slate-400 dark:hover:border-zinc-600 rounded-3xl p-6 sm:p-7 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 min-h-[340px] justify-between shadow-md hover:shadow-xl dark:shadow-lg overflow-hidden"
            >
              <div className="flex flex-col items-center w-full">
                {/* Icon Container */}
                <div className="w-12 h-12 flex items-center justify-center text-slate-900 dark:text-white mb-6 transition-colors duration-300">
                  <i className={`${s.icon} text-3xl`}></i>
                </div>

                {/* Title */}
                <h3
                  className="text-base font-semibold text-slate-900 dark:text-white mb-4 tracking-wide transition-colors duration-300"
                  dangerouslySetInnerHTML={{
                    __html: s.title.replace(" ", "<br/>"),
                  }}
                ></h3>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed max-w-[220px] transition-all duration-300 group-hover:opacity-60 dark:group-hover:opacity-40">
                  {s.desc}
                </p>
              </div>

              {/* Hover Action Button */}
              <div className="pt-4 w-full flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <button
                  onClick={() => setActiveDetailKey(s.key)}
                  className="px-5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-slate-900 text-white dark:bg-black/95 dark:text-white border border-slate-900 dark:border-white/80 hover:bg-white hover:text-slate-900 dark:hover:bg-white dark:hover:text-black transition-all duration-200 shadow-sm"
                >
                  Explore more
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Detail View Container */}
      {activeDetailKey && currentData && (
        <div className="space-y-12 animate-fadeIn relative z-10 text-slate-700 dark:text-zinc-300">
          {/* Intro Paragraph */}
          <p className="text-sm sm:text-base leading-relaxed max-w-5xl font-normal">
            {currentData.intro}
          </p>

          {/* 4 Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {currentData.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center space-y-3 p-6 bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-zinc-800 rounded-2xl shadow-sm"
              >
                <div 
                  className="text-slate-900 dark:text-white mb-2 flex items-center justify-center p-3.5 rounded-xl border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-white/5"
                  dangerouslySetInnerHTML={{ __html: feat.icon }}
                ></div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-wide">{feat.title}</h4>
                <p className="text-xs text-slate-600 dark:text-neutral-400 leading-relaxed font-normal">{feat.desc}</p>
              </div>
            ))}
          </div>

          {/* Outro Paragraphs */}
          <div 
            className="text-sm sm:text-base leading-relaxed max-w-5xl space-y-4 font-normal"
            dangerouslySetInnerHTML={{ __html: currentData.outro }}
          ></div>
        </div>
      )}
    </section>
  );
}