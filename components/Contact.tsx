"use client";

import { useState, useTransition, useEffect } from "react";
import { submitContactForm } from "@/app/actions/contact"; // Server action import
import Image from "next/image";
import logoImg from "@/public/images/img_logo_intelleon.png";

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  // Success message eka awilla thappara 5kin auto hide wenna
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await submitContactForm(formData);
      if (result.success) {
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setErrorMessage(result.error || "Something went wrong.");
      }
    });
  };

  return (
    <section className="pt-10 scroll-mt-24" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-8">
          <div className="flex items-center gap-2 group tracking-widest">
            <Image
              src={logoImg}
              alt="INTELLEON - Custom Software Development Logo"
              className="h-7 md:h-8 w-auto object-contain brightness-0 dark:brightness-100 transition-all duration-300"
            />
          </div>

          <div className="space-y-4 pt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 transition-colors duration-300">
            <div className="flex items-center gap-4">
              <div className="w-8 flex items-center text-slate-400 dark:text-zinc-400">
                <i className="fa-regular fa-envelope text-lg"></i>
              </div>
              <a
                className="hover:text-slate-900 dark:hover:text-white transition"
                href="mailto:info@intelleon.com"
              >
                info@intelleon.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 flex items-center text-slate-400 dark:text-zinc-400">
                <i className="fa-solid fa-phone text-base"></i>
              </div>
              <a
                className="hover:text-slate-900 dark:hover:text-white transition"
                href="tel:+94777266411"
              >
                +94 777 266 411
              </a>
            </div>
          </div>

          <p className="text-xs text-slate-500 dark:text-zinc-500 leading-relaxed max-w-sm pt-2 transition-colors duration-300">
            Ready to engineer your future-ready digital ecosystem? Get in touch
            with our specialist engineering consultants today.
          </p>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {success && (
              <div className="mb-4 p-4 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-cyan-500/40 shadow-xl transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/50 flex items-center justify-center text-cyan-600 dark:text-brandCyan flex-shrink-0 mt-0.5">
                    <i className="fa-solid fa-calendar-check text-sm"></i>
                  </div>
                  <div className="space-y-1 flex-1">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wide flex items-center gap-2">
                      Message Sent Successfully!
                      <span className="text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 rounded bg-cyan-500/10 dark:bg-brandCyan/20 text-cyan-600 dark:text-brandCyan border border-cyan-500/30">
                        Delivered
                      </span>
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                      Thank you for reaching out. Our specialist engineering
                      consultants will be in touch shortly.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSuccess(false)}
                    className="text-slate-400 dark:text-zinc-500 hover:text-slate-900 dark:hover:text-white transition p-1 text-sm"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
            )}

            {errorMessage && (
              <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs">
                {errorMessage}
              </div>
            )}

            <div>
              <input
                name="name"
                className="w-full bg-slate-100 dark:bg-inputBg border border-slate-300 dark:border-zinc-800 rounded-lg px-4 py-3.5 text-sm text-slate-900 dark:text-zinc-200 placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-slate-500 dark:focus:border-zinc-500 transition shadow-sm"
                placeholder="Name *"
                required
                type="text"
              />
            </div>
            <div>
              <input
                name="phone"
                className="w-full bg-slate-100 dark:bg-inputBg border border-slate-300 dark:border-zinc-800 rounded-lg px-4 py-3.5 text-sm text-slate-900 dark:text-zinc-200 placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-slate-500 dark:focus:border-zinc-500 transition shadow-sm"
                placeholder="Mobile / Telephone"
                type="tel"
              />
            </div>
            <div>
              <input
                name="email"
                className="w-full bg-slate-100 dark:bg-inputBg border border-slate-300 dark:border-zinc-800 rounded-lg px-4 py-3.5 text-sm text-slate-900 dark:text-zinc-200 placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-slate-500 dark:focus:border-zinc-500 transition shadow-sm"
                placeholder="Email *"
                required
                type="email"
              />
            </div>
            <div>
              <textarea
                name="message"
                className="w-full bg-slate-100 dark:bg-inputBg border border-slate-300 dark:border-zinc-800 rounded-lg px-4 py-3.5 text-sm text-slate-900 dark:text-zinc-200 placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-slate-500 dark:focus:border-zinc-500 transition resize-none shadow-sm"
                placeholder="Message"
                rows={5}
              ></textarea>
            </div>
            <div className="flex justify-end pt-2">
              <button
                className="px-8 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide bg-slate-900 text-white dark:bg-zinc-800 dark:text-zinc-200 border border-slate-900 dark:border-zinc-700 hover:bg-slate-800 dark:hover:bg-zinc-700 hover:text-white transition duration-200 shadow-md disabled:opacity-50"
                type="submit"
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="mt-20 p-8 border-t border-slate-200 dark:border-zinc-900/90 text-center transition-colors duration-300">
        <p className="text-xs text-slate-500 dark:text-zinc-600">
          Copyright © 2026 INTELLEON. All Rights Reserved.
        </p>
      </div>
    </section>
  );
}
