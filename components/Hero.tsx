"use client";

import { useState, useEffect } from "react";
import SlideZero from "./hero-slides/SlideZero";
import SlideOne from "./hero-slides/SlideOne";
import SlideTwo from "./hero-slides/SlideTwo";
import SlideThree from "./hero-slides/SlideThree";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className=" flex flex-col justify-center relative pt-8 md:pt-4 overflow-hidden">
      <div className="relative w-full min-h-[680px] md:min-h-[740px] lg:min-h-[680px] xl:min-h-[500px] flex items-center ">
        <SlideZero currentSlide={currentSlide} />
        <SlideOne currentSlide={currentSlide} />
        <SlideTwo currentSlide={currentSlide} />
        <SlideThree currentSlide={currentSlide} />
      </div>

      {/* Indicators */}
      <div className="flex items-center gap-2 pt-6 relative z-30">
        {[0, 1, 2, 3].map((idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Slide ${idx + 1}`}
            className="p-2 -m-2 focus:outline-none cursor-pointer group flex items-center justify-center"
          >
            <span
              className={`block transition-all duration-300 rounded-full ${
                currentSlide === idx
                  ? "w-11 h-1.5 bg-slate-900 dark:bg-white"
                  : "w-3 h-1.5 bg-slate-400 dark:bg-zinc-600 group-hover:bg-slate-600 dark:group-hover:bg-zinc-400"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
