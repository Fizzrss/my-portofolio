"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/src/data/portfolio";
import {
  GraduationCapIcon,
  CodeIcon,
  LayersIcon,
  DatabaseIcon,
  CheckCircleIcon,
  CalendarIcon,
  SparklesIcon,
  MapPinIcon,
  BriefcaseIcon,
} from "./Icons";

export default function About() {
  const { profile, education, skillCategories, toolsRibbon } = portfolioData;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <CodeIcon className="w-5 h-5 text-sky-500" />;
      case "layers":
        return <LayersIcon className="w-5 h-5 text-indigo-500" />;
      case "database":
        return <DatabaseIcon className="w-5 h-5 text-emerald-500" />;
      case "check-circle":
        return <CheckCircleIcon className="w-5 h-5 text-violet-500" />;
      default:
        return <SparklesIcon className="w-5 h-5 text-sky-500" />;
    }
  };

  return (
    <section id="about" className="pt-8 pb-16 sm:pb-24">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/60 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <SparklesIcon className="w-3.5 h-3.5" />
          <span>Profile & Background</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          About Me
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full mt-3 mb-4"></div>
        <p className="max-w-2xl text-slate-600 text-sm sm:text-base leading-relaxed">
          Get to know my academic foundation, core engineering principles, and technical proficiencies.
        </p>
      </div>

      {/* Top Row: Equal Height Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-8 sm:mb-10">
        {/* Left Column (lg:col-span-8): Educational Background & Bio */}
        <div className="lg:col-span-8 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white/90 border border-slate-200/90 shadow-xl shadow-slate-200/40 backdrop-blur-md">
          <div>
            {/* Bio Long intro */}
            <div className="mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                Engineering Philosophy & Focus
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {profile.bioLong}
              </p>
            </div>

            {/* Educational Timeline */}
            <div>
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-100">
                <div className="p-2 rounded-xl bg-sky-50 text-sky-600">
                  <GraduationCapIcon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Educational Background
                </h3>
              </div>

              <div className="space-y-6">
                {education.map((item, index) => (
                  <div
                    key={item.id}
                    className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-200"
                  >
                    {/* Circle Node */}
                    <span className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-sky-500 ring-4 ring-sky-100" />

                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h4 className="text-base font-bold text-slate-900">
                        {item.institution}
                      </h4>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200">
                        <CalendarIcon className="w-3 h-3 text-slate-400" />
                        {item.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-sm font-semibold text-sky-700">
                        {item.degree}
                      </p>
                      <span className="text-[11px] px-2 py-0.5 rounded-md bg-sky-50 text-sky-700 font-medium border border-sky-100">
                        {item.badge}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                      {item.description}
                    </p>

                    {item.courses && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.courses.map((course) => (
                          <span
                            key={course}
                            className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-50 text-slate-600 border border-slate-200/70"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (lg:col-span-4): Profile Photo Card (Equal Height) */}
        <div className="lg:col-span-4 h-full flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white/90 border border-slate-200/90 shadow-xl shadow-slate-200/40 backdrop-blur-md">
          {/* Photo Container with Medium Bust Shot Cropping */}
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner group mb-5">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              priority
            />
            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
            
            {/* Bottom floating name card inside the photo */}
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-white/80 shadow-md">
              <p className="text-xs font-bold text-slate-900 leading-tight">
                {profile.name}
              </p>
              <p className="text-[11px] text-sky-700 font-mono font-medium truncate">
                {profile.status}
              </p>
            </div>
          </div>

          {/* Profile Meta Cards */}
          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BriefcaseIcon className="w-4 h-4 text-slate-500" />
                <span className="text-xs font-semibold text-slate-700">Specialization</span>
              </div>
              <span className="text-xs font-mono font-medium text-slate-900">
                Full-Stack & QA
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-rose-500" />
                <span className="text-xs font-semibold text-slate-700">Location</span>
              </div>
              <span className="text-xs font-medium text-slate-900">
                Malang, East Java
              </span>
            </div>

            <a
              href={profile.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-white text-slate-900 border-2 border-slate-300 hover:border-slate-900 hover:bg-slate-50 font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95"
            >
              <span>View LinkedIn Profile</span>
              <span className="text-slate-900">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Row: Technical Competencies & Skills Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white/90 border border-slate-200/90 shadow-xl shadow-slate-200/40 backdrop-blur-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
              <span className="p-1.5 rounded-lg bg-sky-50 text-sky-600">
                <CodeIcon className="w-5 h-5" />
              </span>
              Technical Competencies & Skills
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Core technologies, database engines, testing frameworks, and architecture tools.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-500 px-3 py-1 bg-slate-100 rounded-full border border-slate-200 self-start sm:self-auto">
            4 Core Domains
          </span>
        </div>

        {/* 4 Column Skill Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-xl bg-white shadow-sm border border-slate-200/80 group-hover:scale-110 transition-transform">
                  {getCategoryIcon(cat.icon)}
                </div>
                <h4 className="text-sm font-bold text-slate-900">
                  {cat.category}
                </h4>
              </div>

              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between text-xs font-medium text-slate-700 bg-white/80 px-2.5 py-1.5 rounded-lg border border-slate-200/50"
                  >
                    <span>{skill.name}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 group-hover:bg-sky-600" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Ribbon Tools & Engineering Practices */}
        <div className="pt-5 border-t border-slate-100">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Tooling, Modeling & QA Artifacts:
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {toolsRibbon.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-200 text-slate-700 text-xs font-mono font-medium border border-slate-200/90 transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

