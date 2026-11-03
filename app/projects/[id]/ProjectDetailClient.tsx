"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project, portfolioData } from "@/src/data/portfolio";
import {
  GithubIcon,
  ExternalLinkIcon,
  CheckCircleIcon,
  SparklesIcon,
  CalendarIcon,
  CopyIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  BookOpenIcon,
} from "@/src/components/Icons";
import Footer from "@/src/components/Footer";

interface ProjectDetailClientProps {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
}

export default function ProjectDetailClient({
  project,
  prevProject,
  nextProject,
}: ProjectDetailClientProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const isPresent = project.year.toLowerCase().includes("present");

  const slides =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [
          { image: project.image, title: project.title, caption: project.subtitle },
          {
            image: project.fallbackImage || project.image,
            title: `${project.title} - Overview`,
            caption: project.summary,
          },
        ];

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800">
      {/* Ambient Radial Gradient Background Accents */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-96 sm:w-[36rem] h-96 sm:h-[36rem] rounded-full bg-gradient-to-br from-amber-200/50 via-rose-200/35 to-transparent blur-3xl opacity-70" />
        <div className="absolute -top-28 -right-28 w-96 sm:w-[40rem] h-96 sm:h-[40rem] rounded-full bg-gradient-to-bl from-sky-200/60 via-indigo-200/40 to-transparent blur-3xl opacity-80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] sm:w-[50rem] h-[30rem] sm:h-[50rem] rounded-full bg-gradient-to-tr from-purple-200/30 via-indigo-100/30 to-transparent blur-3xl opacity-60" />
      </div>

      {/* Top Floating Navigation Header */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl px-4 sm:px-8 py-3.5 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white text-slate-900 border-2 border-slate-300 hover:border-slate-900 hover:bg-slate-50 text-xs font-semibold shadow-sm transition-all active:scale-95"
          >
            <span>← Back to Projects</span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-slate-800 hover:text-sky-600 transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xs shadow-sm">
              FR
            </div>
            <span className="font-semibold text-xs sm:text-sm tracking-tight text-slate-900 hidden sm:inline">
              Fiza Rahmatus Sholikha
            </span>
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-20">
        {/* Project Header Info */}
        <div className="mb-8 sm:mb-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold tracking-wide bg-sky-500 text-white shadow-sm">
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-white text-slate-700 border border-slate-200/90 shadow-sm">
              <CalendarIcon className="w-3.5 h-3.5 text-slate-400" />
              {project.year}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-3">
            {project.title}
          </h1>
          <p className="text-base sm:text-xl font-medium text-sky-700 max-w-3xl mb-6">
            {project.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 border-2 border-slate-300 hover:border-slate-900 hover:bg-slate-50 font-semibold text-xs sm:text-sm shadow-sm transition-all active:scale-95"
            >
              <GithubIcon className="w-4 h-4 text-slate-800" />
              <span>View Source on GitHub</span>
              <ExternalLinkIcon className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>
        </div>

        {/* Showcase Section: 16:9 Carousel on Left, Stats on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-10 sm:mb-14">
          {/* Left Column: 16:9 Image Carousel Showcase */}
          <div className={`${project.stats ? "lg:col-span-7" : "lg:col-span-12"} flex flex-col`}>
            <div
              className="relative w-full aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 bg-slate-900 group select-none flex-1"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Slide Track */}
              <div
                className="w-full h-full flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {slides.map((slide, idx) => (
                  <div
                    key={slide.image + idx}
                    className="relative min-w-full h-full overflow-hidden bg-slate-900"
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title || `${project.title} showcase ${idx + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 680px"
                      className="object-cover object-top sm:object-center group-hover:scale-[1.015] transition-transform duration-500 ease-out"
                      priority={idx === 0}
                      unoptimized={slide.image.endsWith(".svg")}
                    />
                    {/* Subtle gradient overlay for readability of bottom indicators */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  </div>
                ))}
              </div>

              {/* Carousel Navigation Arrows */}
              {slides.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevSlide}
                    aria-label="Previous slide"
                    className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-slate-900 border-2 border-slate-300 hover:border-slate-900 hover:bg-slate-50 shadow-md flex items-center justify-center transition-all opacity-85 group-hover:opacity-100 active:scale-95 cursor-pointer"
                  >
                    <ChevronLeftIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-900" />
                  </button>

                  <button
                    type="button"
                    onClick={handleNextSlide}
                    aria-label="Next slide"
                    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-slate-900 border-2 border-slate-300 hover:border-slate-900 hover:bg-slate-50 shadow-md flex items-center justify-center transition-all opacity-85 group-hover:opacity-100 active:scale-95 cursor-pointer"
                  >
                    <ChevronRightIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-900" />
                  </button>
                </>
              )}

              {/* Bottom Overlay: Slide Info & Dot Indicators */}
              <div className="absolute bottom-0 inset-x-0 z-20 p-3.5 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-2.5 pointer-events-none">
                {/* Slide Counter / Caption */}
                {slides[activeSlide]?.title ? (
                  <div className="pointer-events-auto flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/15 text-white text-xs max-w-full truncate shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span className="font-medium truncate">{slides[activeSlide]?.title}</span>
                    <span className="text-slate-400 font-mono text-[11px] shrink-0">
                      ({activeSlide + 1}/{slides.length})
                    </span>
                  </div>
                ) : (
                  <div className="pointer-events-auto flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/15 text-white text-xs shadow-sm font-mono text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span>
                      {activeSlide + 1} / {slides.length}
                    </span>
                  </div>
                )}

                {/* Indicator Dots */}
                {slides.length > 1 && (
                  <div className="pointer-events-auto flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md border border-white/15 px-2.5 py-1.5 rounded-full shadow-sm">
                    {slides.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        type="button"
                        onClick={() => setActiveSlide(dotIdx)}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                        className={`transition-all duration-300 rounded-full h-1.5 cursor-pointer ${
                          activeSlide === dotIdx
                            ? "w-6 bg-sky-400 shadow-sm"
                            : "w-1.5 bg-white/40 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Stats Cards */}
          {project.stats && (
            <div className="lg:col-span-5 flex flex-col justify-between gap-3 sm:gap-4">
              {project.stats.map((st, sIdx) => {
                const themes = [
                  {
                    cardBg:
                      "bg-gradient-to-br from-sky-50 via-sky-50/70 to-blue-50/40 border-sky-200/90 hover:border-sky-300 shadow-sky-100/50",
                    dot: "bg-sky-500",
                    label: "text-sky-700",
                    value: "text-slate-900",
                  },
                  {
                    cardBg:
                      "bg-gradient-to-br from-indigo-50 via-indigo-50/70 to-purple-50/40 border-indigo-200/90 hover:border-indigo-300 shadow-indigo-100/50",
                    dot: "bg-indigo-500",
                    label: "text-indigo-700",
                    value: "text-slate-900",
                  },
                  {
                    cardBg:
                      "bg-gradient-to-br from-amber-50 via-amber-50/70 to-orange-50/40 border-amber-200/90 hover:border-amber-300 shadow-amber-100/50",
                    dot: "bg-amber-500",
                    label: "text-amber-700",
                    value: "text-slate-900",
                  },
                ];
                const theme = themes[sIdx % themes.length];

                return (
                  <div
                    key={st.label}
                    className={`flex-1 p-5 sm:p-6 rounded-2xl sm:rounded-3xl border shadow-md backdrop-blur-md flex flex-col justify-center transition-all ${theme.cardBg} group/stat`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`w-2 h-2 rounded-full ${theme.dot}`} />
                      <p
                        className={`text-xs font-mono uppercase tracking-wider font-semibold ${theme.label}`}
                      >
                        {st.label}
                      </p>
                    </div>
                    <p
                      className={`text-lg sm:text-l lg:text-xl font-semibold ${theme.value} tracking-normal`}
                    >
                      {st.value}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Row 1: Overview & Tech Stack (Equal Height 8-4 Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8 sm:mb-10">
          {/* Overview Card (lg:col-span-8) */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white/90 border border-slate-200/90 shadow-xl shadow-slate-200/40 backdrop-blur-md flex flex-col justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
                Project Overview & Background
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5">
                {project.description}
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
              <p className="text-xs sm:text-sm font-medium text-slate-600">
                <strong className="text-slate-900">Summary: </strong>
                {project.summary}
              </p>
            </div>
          </div>

          {/* Tech Stack & Tags (lg:col-span-4) */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-white/90 border border-slate-200/90 shadow-xl shadow-slate-200/40 backdrop-blur-md flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-3 py-1.5 rounded-xl bg-sky-50 text-sky-800 text-xs font-mono font-semibold border border-sky-100"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Architecture & Scope
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200/80"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Features & Deliverables Side-by-Side (Full Width Symmetrical 50/50 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-16">
          {/* Key Technical Features (50% Width) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/90 border border-slate-200/90 shadow-xl shadow-slate-200/40 backdrop-blur-md flex flex-col">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-5 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              Key Technical Features
            </h2>
            <ul className="space-y-3 flex-1 flex flex-col justify-between">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-emerald-300 transition-colors"
                >
                  <CheckCircleIcon className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables & Engineering Artifacts (50% Width) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/90 border border-slate-200/90 shadow-xl shadow-slate-200/40 backdrop-blur-md flex flex-col">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-5 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              Deliverables & Engineering Documentation
            </h2>
            <ul className="space-y-3 flex-1 flex flex-col justify-between">
              {project.deliverables.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-amber-50/40 border border-amber-200/70 hover:bg-amber-50/80 hover:border-amber-300 transition-colors"
                >
                  <SparklesIcon className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Prev / Next Project Navigation */}
        <div className="pt-8 border-t border-slate-200">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 text-center mb-6">
            Explore Other Works
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.id}`}
                className="group p-5 rounded-2xl bg-white/90 border-2 border-slate-300 hover:border-slate-900 hover:bg-white flex flex-col justify-between transition-all shadow-sm"
              >
                <span className="text-[11px] font-mono text-slate-400 group-hover:text-slate-600 mb-1">
                  ← Previous Project
                </span>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {prevProject.title}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                  {prevProject.subtitle}
                </p>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}

            {nextProject && (
              <Link
                href={`/projects/${nextProject.id}`}
                className="group p-5 rounded-2xl bg-white/90 border-2 border-slate-300 hover:border-slate-900 hover:bg-white flex flex-col justify-between text-right transition-all shadow-sm"
              >
                <span className="text-[11px] font-mono text-slate-400 group-hover:text-slate-600 mb-1">
                  Next Project →
                </span>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {nextProject.title}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                  {nextProject.subtitle}
                </p>
              </Link>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

