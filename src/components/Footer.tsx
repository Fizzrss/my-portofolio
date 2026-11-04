"use client";

import React from "react";
import { portfolioData } from "@/src/data/portfolio";
import { GithubIcon, LinkedinIcon, WhatsappIcon, MailIcon } from "./Icons";

export default function Footer() {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-0 border-t border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              <span className="font-bold text-base text-slate-900 tracking-tight">
                {profile.name}
              </span>
            </div>
            <p className="text-xs text-slate-500 font-mono">
              Business Information Systems Student • Politeknik Negeri Malang
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={profile.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-sky-700 hover:text-sky-800 hover:bg-sky-50 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
            >
              <WhatsappIcon className="w-4 h-4" />
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.contacts.email}&su=Project%20Inquiry%20/%20Collaboration`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              title="Kirim email via Gmail"
              className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-rose-600 hover:text-rose-700 hover:bg-rose-50 transition-colors"
            >
              <MailIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <div className="flex items-center gap-4">
            <p className="text-xs text-slate-400 font-mono">
              © 2025 Fiza Rahmatus Sholikha. All Rights Reserved.
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white text-slate-900 border-2 border-slate-300 hover:border-slate-900 hover:bg-slate-50 transition-colors shadow-sm text-xs font-semibold flex items-center gap-1.5"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
