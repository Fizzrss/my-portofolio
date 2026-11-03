"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/src/data/portfolio";
import {
  BriefcaseIcon,
  SparklesIcon,
  CalendarIcon,
  CheckCircleIcon,
} from "./Icons";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="pt-10 pb-16 sm:pb-24">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <BriefcaseIcon className="w-3.5 h-3.5" />
          <span>Leadership & Extracurriculars</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Organizational Experience
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-3 mb-4"></div>
        <p className="max-w-2xl text-slate-600 text-sm sm:text-base leading-relaxed">
          Demonstrated organizational stewardship, large-scale event orchestration, and cross-functional leadership in collegiate scientific environments.
        </p>
      </div>

      {/* Main Experience Card */}
      <div className="p-6 sm:p-10 rounded-3xl bg-white/90 border border-slate-200/90 shadow-xl shadow-slate-200/40 backdrop-blur-md">
        {/* Organization Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
          <div className="flex items-start sm:items-center gap-4 sm:gap-5">
            {/* Organization Logo Container */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-50 border border-slate-200 p-2 shrink-0 flex items-center justify-center shadow-sm">
              <Image
                src={experience.logo}
                alt={experience.organization}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                  {experience.role}
                </span>
                <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                  <CalendarIcon className="w-3.5 h-3.5" />
                  {experience.period}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                {experience.organization}
              </h3>
              <p className="text-xs sm:text-sm font-mono font-medium text-sky-700 mt-0.5">
                {experience.division}
              </p>
            </div>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {experience.description}
            </p>
          </div>
        </div>

        {/* Symmetrical 2-Column Grid for Leadership Roles */}
        <div className="pt-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
            <SparklesIcon className="w-4 h-4 text-emerald-500" />
            <span>Key Leadership Portfolios & Event Coordination</span>
          </h4>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {experience.activities.map((act) => (
              <div
                key={act.title}
                className="group flex flex-col rounded-2xl bg-slate-50/70 border border-slate-200/90 overflow-hidden hover:bg-white hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
              >
                {/* 4:3 Aspect Ratio Photo Banner */}
                <div className="relative w-full aspect-[4/3] bg-slate-900 overflow-hidden">
                  <Image
                    src={act.image}
                    alt={act.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-75" />

                  {/* Floating Badges */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-slate-900 shadow-sm backdrop-blur-sm">
                      {act.role}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-slate-900/80 text-white border border-white/20">
                      {act.year}
                    </span>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h5 className="text-lg font-bold tracking-tight drop-shadow-md">
                      {act.title}
                    </h5>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {act.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-200/60">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Key Highlights:
                    </p>
                    <ul className="space-y-1.5">
                      {act.highlights.map((hl, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-slate-700"
                        >
                          <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ribbon: Core Leadership & Applied Skills */}
        <div className="mt-8 pt-6 border-t border-slate-100">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Core Leadership & Applied Skills:
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {experience.skillsApplied.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-medium border border-emerald-200/70 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

