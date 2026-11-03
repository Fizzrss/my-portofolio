"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/src/data/portfolio";
import {
  GithubIcon,
  ChevronRightIcon,
  LayersIcon,
} from "./Icons";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="pt-10 pb-16 sm:pb-24">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <LayersIcon className="w-3.5 h-3.5" />
          <span>Featured Works</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Projects Showcase
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-sky-500 rounded-full mt-3 mb-4"></div>
        <p className="max-w-2xl text-slate-600 text-sm sm:text-base leading-relaxed">
          Production-grade applications spanning full-stack web architectures, cross-platform mobile apps, and systematic quality assurance.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col rounded-3xl bg-white/90 border border-slate-200/90 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:border-sky-300 transition-all duration-300 overflow-hidden backdrop-blur-md"
          >
            {/* Project Wide Banner Container (h-52 sm:h-56) */}
            <Link
              href={`/projects/${project.id}`}
              className="relative w-full h-52 sm:h-56 bg-slate-900 overflow-hidden block"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Floating Badges in Top Corners */}
              <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide bg-white/95 text-slate-900 shadow-md backdrop-blur-sm">
                  {project.category}
                </span>
              </div>
              <div className="absolute top-3.5 right-3.5">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-900/80 text-white border border-white/20 backdrop-blur-sm">
                  {project.year}
                </span>
              </div>

              {/* Quick Title overlay at bottom of banner */}
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <h3 className="text-xl font-bold tracking-tight drop-shadow-md group-hover:text-sky-300 transition-colors">
                  {project.title}
                </h3>
              </div>
            </Link>

            {/* Card Body */}
            <div className="flex-1 flex flex-col justify-between p-6">
              <div>
                <Link href={`/projects/${project.id}`}>
                  <p className="text-xs font-semibold text-sky-700 uppercase tracking-wider mb-2 hover:underline">
                    {project.subtitle}
                  </p>
                </Link>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
                  {project.summary}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <Link
                  href={`/projects/${project.id}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-slate-900 border-2 border-slate-300 hover:border-slate-900 hover:bg-slate-50 text-xs font-semibold shadow-sm transition-all active:scale-95"
                >
                  <span>View Details</span>
                  <ChevronRightIcon className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border-2 border-slate-300 text-slate-700 hover:text-slate-900 hover:border-slate-900 hover:bg-slate-50 transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
