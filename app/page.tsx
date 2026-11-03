import React from "react";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Projects from "@/src/components/Projects";
import Experience from "@/src/components/Experience";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-50 text-slate-800 selection:bg-sky-500 selection:text-white">
      {/* Ambient Radial Gradient Background Accents */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Top Left Peach Glow */}
        <div className="absolute -top-32 -left-32 w-96 sm:w-[36rem] h-96 sm:h-[36rem] rounded-full bg-gradient-to-br from-amber-200/50 via-rose-200/35 to-transparent blur-3xl opacity-70" />
        {/* Top Right Sky Blue Glow */}
        <div className="absolute -top-28 -right-28 w-96 sm:w-[40rem] h-96 sm:h-[40rem] rounded-full bg-gradient-to-bl from-sky-200/60 via-indigo-200/40 to-transparent blur-3xl opacity-80" />
        {/* Center / Lower Lavender Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] sm:w-[50rem] h-[30rem] sm:h-[50rem] rounded-full bg-gradient-to-tr from-purple-200/30 via-indigo-100/30 to-transparent blur-3xl opacity-60" />
      </div>

      {/* Floating Smart Navbar */}
      <Navbar />

      {/* Sticky & Stacking Hero Section */}
      <Hero />

      {/* Stacking Glass Sheet (Main Content Sheet Menumpuk Satu Layar Penuh) */}
      <div className="relative z-10 bg-white/4 backdrop-blur-2xl rounded-t-[2.5rem] sm:rounded-t-[4rem] border-t-2 border-white/90 shadow-[0_-25px_60px_rgba(15,23,42,0.08)] pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14">
          <About />
          <Projects />
          <Experience />
          <Contact />
        </div>

        {/* Footer langsung menyentuh tanpa celah (pb-0 dan mt-0) */}
        <Footer />
      </div>
    </main>
  );
}
