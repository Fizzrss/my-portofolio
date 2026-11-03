"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Project } from "@/src/data/portfolio";
import {
  CloseIcon,
  GithubIcon,
  ExternalLinkIcon,
  CheckCircleIcon,
  SparklesIcon,
  CalendarIcon,
  LayersIcon,
} from "./Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [imgSrc, setImgSrc] = useState<string>("");

  useEffect(() => {
    if (project) {
      setImgSrc(project.image);
    }
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Dialog Content */}
      <div
        className="relative w-full max-w-3xl my-8 bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-250"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white text-slate-900 border-2 border-slate-300 hover:border-slate-900 backdrop-blur-md shadow-lg transition-transform hover:scale-105 active:scale-95"
          aria-label="Close project modal"
        >
          <CloseIcon className="w-5 h-5" />
        </button>

        {/* Banner Image Container */}
        <div className="relative w-full h-56 sm:h-72 bg-slate-900 shrink-0 overflow-hidden">
          <Image
            src={imgSrc || project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
            onError={() => {
              if (project.fallbackImage && imgSrc !== project.fallbackImage) {
                setImgSrc(project.fallbackImage);
              }
            }}
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

          {/* Floating Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-500 text-white shadow-md">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-black/60 text-white backdrop-blur-md border border-white/20">
              {project.year}
            </span>
          </div>

          {/* Bottom Title inside Banner */}
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <h3
              id="modal-headline"
              className="text-2xl sm:text-3xl font-extrabold tracking-tight drop-shadow-sm"
            >
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 font-medium line-clamp-1 drop-shadow-sm">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Overview Section */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Project Overview
            </h4>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Stats Bar */}
          {project.stats && (
            <div className="grid grid-cols-3 gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
              {project.stats.map((st) => (
                <div key={st.label} className="text-center">
                  <p className="text-[11px] font-mono text-slate-500 uppercase">
                    {st.label}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                    {st.value}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="px-3 py-1 rounded-xl bg-sky-50 text-sky-800 text-xs font-mono font-semibold border border-sky-100"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Technical Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Key Technical Features
            </h4>
            <ul className="space-y-2.5">
              {project.features.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                >
                  <CheckCircleIcon className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables & Engineering Artifacts */}
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/70">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2 flex items-center gap-1.5">
              <SparklesIcon className="w-3.5 h-3.5 text-amber-600" />
              <span>Deliverables & Engineering Documentation</span>
            </h4>
            <ul className="space-y-1.5">
              {project.deliverables.map((deliv, idx) => (
                <li
                  key={idx}
                  className="text-xs text-amber-950 font-medium flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                  <span>{deliv}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border-2 border-slate-300 text-slate-800 hover:border-slate-900 hover:bg-white text-xs font-semibold transition-colors"
          >
            Close
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 border-2 border-slate-300 hover:border-slate-900 hover:bg-slate-50 text-xs font-semibold shadow-sm transition-all active:scale-95"
          >
            <GithubIcon className="w-4 h-4 text-slate-800" />
            <span>View Source on GitHub</span>
            <ExternalLinkIcon className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>
      </div>
    </div>
  );
}

