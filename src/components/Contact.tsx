"use client";

import React, { useState } from "react";
import { portfolioData } from "@/src/data/portfolio";
import {
  MailIcon,
  WhatsappIcon,
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  SparklesIcon,
  CopyIcon,
  CheckIcon,
  ExternalLinkIcon,
} from "./Icons";

export default function Contact() {
  const { profile } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.contacts.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="pt-10 pb-16 sm:pb-24">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/60 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <SparklesIcon className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Let&apos;s Connect & Collaborate
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full mt-3 mb-4"></div>
        <p className="max-w-2xl text-slate-600 text-sm sm:text-base leading-relaxed">
          Whether you have an upcoming project, software engineering opportunity, or wish to discuss tech - feel free to reach out directly.
        </p>
      </div>

      {/* Centered Direct Channels Card */}
      <div className="max-w-3xl mx-auto w-full p-6 sm:p-10 rounded-3xl bg-white/90 border border-slate-200/90 shadow-xl shadow-slate-200/40 backdrop-blur-md">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
            Contact Channels
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8">
            Feel free to reach out directly through any of the platforms below for rapid responses.
          </p>

          <div className="space-y-4 mb-8">
            {/* Email Card with Copy button */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3.5 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-rose-100/70 text-rose-600 shrink-0">
                  <MailIcon className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-mono text-slate-400">Email Address</p>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.contacts.email}&su=Project%20Inquiry%20/%20Collaboration`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-semibold text-slate-900 hover:text-sky-600 transition-colors truncate block"
                  >
                    {profile.contacts.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-white border-2 border-slate-300 text-slate-700 hover:text-slate-900 hover:border-slate-900 transition-colors shadow-sm cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <CheckIcon className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <CopyIcon className="w-4 h-4" />
                  )}
                </button>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.contacts.email}&su=Project%20Inquiry%20/%20Collaboration`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border-2 border-slate-300 text-slate-800 hover:text-slate-950 hover:border-slate-900 transition-colors shadow-sm cursor-pointer"
                  title="Buka langsung di Gmail"
                  aria-label="Kirim email langsung via Gmail"
                >
                  <ExternalLinkIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <a
              href={`${profile.contacts.whatsapp}?text=Halo%20Fiza,%20saya%20tertarik%20untuk%20berdiskusi%20mengenai%20project/kerjasama`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/70 hover:bg-emerald-50 hover:border-emerald-400 flex items-center justify-between gap-3 transition-colors group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-500 text-white shrink-0 shadow-sm">
                  <WhatsappIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-emerald-800">WhatsApp</p>
                  <p className="text-sm sm:text-base font-semibold text-emerald-950">
                    {profile.contacts.whatsappNumber}
                  </p>
                </div>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-emerald-700 group-hover:translate-x-1 transition-transform">
                Chat Now →
              </span>
            </a>
          </div>

          {/* Social Grid */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5">
              Professional & Social Networks
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={profile.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100 hover:border-slate-300 flex items-center justify-center gap-3 transition-colors group shadow-sm"
              >
                <GithubIcon className="w-5 h-5 text-slate-700 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-slate-800">GitHub</span>
              </a>
              <a
                href={profile.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-sky-50 hover:border-sky-300 flex items-center justify-center gap-3 transition-colors group shadow-sm"
              >
                <LinkedinIcon className="w-5 h-5 text-sky-600 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-slate-800">LinkedIn</span>
              </a>
              <a
                href={profile.contacts.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-rose-50 hover:border-rose-300 flex items-center justify-center gap-3 transition-colors group shadow-sm"
              >
                <InstagramIcon className="w-5 h-5 text-rose-500 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-slate-800">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100">
          <div className="flex items-center justify-between flex-wrap gap-2 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Available for full-time, intern, & contract roles</span>
            </div>
            <span className="font-mono text-slate-400">Response within 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}
