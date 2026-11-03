"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/src/data/portfolio";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  WhatsappIcon,
  SparklesIcon,
  ArrowUpRightIcon,
  ChevronRightIcon,
  MapPinIcon,
} from "./Icons";

export default function Hero() {
  const { profile } = portfolioData;
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Fade and scale effect for sticky hero over first ~600px of scroll
      const progress = Math.min(Math.max(scrollY / 600, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = 1 - scrollProgress * 0.08;
  const opacity = 1 - scrollProgress * 0.45;
  const translateY = scrollProgress * 40;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = el.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="sticky top-0 z-0 min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-20 px-4 sm:px-6 lg:px-8 transition-transform will-change-transform"
      style={{
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity,
      }}
    >
      <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/90 shadow-sm shadow-slate-200/50 backdrop-blur-md mb-6 hover:border-sky-300 transition-colors">
          <span className="text-xs font-medium text-slate-700 tracking-wide">
            {profile.status}
          </span>
        </div>

        {/* Name Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-5">
          Hi, I&apos;m{" "}
          <span className="text-sky-600">
            {profile.name}
          </span>
        </h1>

        {/* Bio Lead */}
        <p className="max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
          {profile.bioLead}
        </p>

        {/* Location & Meta info */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
          <MapPinIcon className="w-4 h-4 text-rose-500" />
          <span>{profile.location}</span>
          <span className="text-slate-300">•</span>
          <span className="text-sky-600 font-semibold">Open to Work & Collaborations</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => scrollTo("projects")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white text-slate-900 font-semibold text-sm border-2 border-slate-300 shadow-sm hover:border-slate-900 hover:bg-slate-50 active:scale-95 transition-all duration-200"
          >
            <span>Explore Projects</span>
            <ChevronRightIcon className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white text-slate-800 font-semibold text-sm border-2 border-slate-300 shadow-sm hover:border-slate-900 hover:bg-slate-50 active:scale-95 transition-all duration-200"
          >
            <SparklesIcon className="w-4 h-4 text-sky-500" />
            <span>Get in Touch</span>
          </button>
        </div>
      </div>
    </section>
  );
}

