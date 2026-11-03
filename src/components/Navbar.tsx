"use client";

import React, { useState, useEffect } from "react";
import { SparklesIcon } from "./Icons";

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolledPastHome, setIsScrolledPastHome] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Accurately detect distance using getBoundingClientRect
      const aboutEl = document.getElementById("about");
      const aboutTop = aboutEl
        ? aboutEl.getBoundingClientRect().top + window.scrollY
        : 800;

      // Expand navbar ONLY when scrolled past Home towards About section
      const threshold = Math.max(aboutTop - 200, 320);
      setIsScrolledPastHome(scrollPosition >= threshold);

      // ScrollSpy: if scroll is near top, always active "home"
      if (scrollPosition < 180) {
        setActiveSection("home");
        return;
      }

      // Check sections from bottom to top
      const navIds = ["contact", "experience", "projects", "about", "home"];
      for (const id of navIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition + 220 >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler with reliable getBoundingClientRect
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      return;
    }

    const target = document.getElementById(id);
    if (!target) return;

    const targetTop = target.getBoundingClientRect().top + window.scrollY;
    const navOffset = isScrolledPastHome ? 75 : 90;

    window.scrollTo({
      top: Math.max(0, targetTop - navOffset),
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none flex justify-center transition-all duration-500">
      <div
        className={`pointer-events-auto transition-all duration-500 ease-out flex items-center justify-between gap-3 sm:gap-6 ${
          isScrolledPastHome
            ? "w-full max-w-full mt-0 rounded-none border-b border-slate-200/80 bg-white/95 backdrop-blur-xl px-4 sm:px-8 lg:px-12 py-3.5 shadow-sm"
            : "w-[94%] sm:w-[90%] md:w-auto md:min-w-[700px] lg:min-w-[820px] max-w-4xl mt-4 sm:mt-5 px-4 sm:px-6 py-2.5 rounded-full border border-white/90 bg-white/85 backdrop-blur-2xl shadow-xl shadow-slate-300/40 ring-1 ring-slate-200/80"
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "home")}
          className="group flex items-center gap-2.5 text-slate-800 hover:text-sky-600 transition-colors shrink-0"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xs shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
            FR
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-slate-900 leading-tight">
              Fiza Rahmatus
            </span>
            <span className="text-[11px] font-mono text-slate-500 hidden sm:inline-block leading-tight">
              Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 p-1 bg-slate-100/70 rounded-full border border-slate-200/60">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  isActive
                    ? "text-white font-semibold bg-blue-500/80 shadow-sm shadow-slate-200/80"
                    : "text-slate-600 hover:text-sky-600 hover:bg-white/50"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Quick CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-900 text-white border-2 border-slate-900 shadow-sm transition-all duration-200 hover:bg-slate-800 hover:border-slate-800 active:scale-95"
          >
            <span>Connect</span>
          </a>

          {/* Hamburger Mobile Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 p-4 bg-white/95 backdrop-blur-2xl rounded-2xl border border-slate-200/80 shadow-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-sky-50 text-sky-600 font-semibold border-l-4 border-sky-500"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-2 border-t border-slate-100 flex gap-2">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="w-full text-center py-2.5 rounded-xl text-xs font-semibold bg-white text-slate-900 border-2 border-slate-300 hover:border-slate-900 hover:bg-slate-50 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
