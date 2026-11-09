"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [show, setShow] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("intelleon_has_visited");

    if (!hasVisited) {
      setShow(true);

      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
      }, 2000);

      const removeTimer = setTimeout(() => {
        setShow(false);
        sessionStorage.setItem("intelleon_has_visited", "true");
      }, 2500);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-black transition-opacity duration-500 ease-in-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex items-center justify-center">
        <Image
          src="/images/preloader/logo_animation.svg"
          alt="INTELLEON Loading"
          width={128} // w-32 (32 * 4px = 128px)
          height={128} // h-32 (128px)
          priority
          className="w-32 h-32 object-contain"
        />
      </div>
    </div>
  );
}
