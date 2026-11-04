"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/src/data/portfolio";
import {
  SparklesIcon,
  MapPinIcon,
} from "./Icons";

export default function Hero() {
  const { profile } = portfolioData;
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Progress from 0 to 1 as user scrolls down the first 75% of hero height
          const threshold = (window.innerHeight || 800) * 0.75;
          const current = Math.min(Math.max(window.scrollY / threshold, 0), 1);
          setScrollProgress(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Zoom out calculation: scales down smoothly from 1.0 down to 0.80
  const mainScale = 1 - scrollProgress * 0.2;
  const mainOpacity = Math.max(0, 1 - scrollProgress * 0.95);
  const bottomOpacity = Math.max(0, 1 - scrollProgress * 2.0);

  // Custom cinematic smooth scroll with organic easeInOutCubic curve
  const smoothScrollTo = (targetPosition: number) => {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    if (Math.abs(distance) < 5) return;

    // Fluid duration based on distance (700ms - 950ms)
    const duration = Math.min(Math.max(Math.abs(distance) * 0.55, 700), 950);

    let startTime: number | null = null;
    let isCancelled = false;

    const cancelScroll = () => {
      isCancelled = true;
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener("wheel", cancelScroll);
      window.removeEventListener("touchmove", cancelScroll);
    };

    window.addEventListener("wheel", cancelScroll, { passive: true, once: true });
    window.addEventListener("touchmove", cancelScroll, { passive: true, once: true });

    // Smooth cubic bezier easing
    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const step = (currentTime: number) => {
      if (isCancelled) return;
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        cleanup();
      }
    };

    requestAnimationFrame(step);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 75;
    const targetTop = el.getBoundingClientRect().top + window.scrollY;
    smoothScrollTo(Math.max(0, targetTop - offset));
  };

  return (
    <section
      id="home"
      className="fixed top-0 inset-x-0 h-screen w-full flex flex-col justify-between overflow-hidden z-0"
    >
      {/* Background Image: Scenic Mountain Meadow (bg-hero(1)) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/bg-hero(1).jpg"
          alt="Scenic Meadow & Mountains Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] select-none scale-105"
        />
        {/* Cinematic Atmospheric Overlay: Balanced Vignette for Centered Focus */}
        <div className="absolute inset-0 bg-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/65 via-slate-950/30 to-slate-950/80" />
      </div>

      {/* Main Hero Content (Center Layout) - Zoom out on scroll */}
      <div
        style={{
          transform: `scale(${mainScale})`,
          opacity: mainOpacity,
          transformOrigin: "center center",
          willChange: "transform, opacity",
        }}
        className="relative z-10 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 flex-1 flex flex-col justify-center items-center text-center transition-transform duration-75 ease-out"
      >
        <div className="max-w-3xl lg:max-w-4xl mx-auto flex flex-col items-center text-center -translate-y-3 sm:-translate-y-6 lg:-translate-y-8">
          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 drop-shadow-md">
            Hi, I&apos;m{" "}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-sky-200">
              {profile.name}
            </span>
          </h1>

          {/* Description Paragraph */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed font-normal mb-8 drop-shadow-sm">
            {profile.bioLead}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-slate-900 font-semibold text-sm shadow-xl shadow-slate-950/30 hover:bg-slate-100 hover:shadow-2xl transition-all duration-200 active:scale-95 group cursor-pointer"
            >
              <span>Explore Projects</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>

            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/20 backdrop-blur-md text-white font-medium text-sm border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-200 active:scale-95 cursor-pointer shadow-lg"
            >
              <SparklesIcon className="w-4 h-4 text-sky-200" />
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Subtle Status & Scroll Indicator */}
      <div
        style={{
          opacity: bottomOpacity,
          willChange: "opacity",
        }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-4 flex items-center justify-center text-xs text-white/75"
      >
        <div className="flex items-center justify-center gap-2 text-center">
          <MapPinIcon className="w-3.5 h-3.5 text-rose-400" />
          <span className="font-medium text-white/85">{profile.location}</span>
          <span className="text-white/40">•</span>
          <span className="text-sky-300 font-medium">Open to Work & Collaborations</span>
        </div>
      </div>
    </section>
  );
}
