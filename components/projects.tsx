"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/reveal";
import { projects, type Accent } from "@/data/projects";

const accentClasses: Record<Accent, { dot: string; text: string; border: string }> = {
  lime: { dot: "bg-lime", text: "text-lime", border: "hover:border-lime/50" },
  cyan: { dot: "bg-cyan", text: "text-cyan", border: "hover:border-cyan/50" },
  magenta: { dot: "bg-magenta", text: "text-magenta", border: "hover:border-magenta/50" },
  amber: { dot: "bg-amber", text: "text-amber", border: "hover:border-amber/50" },
};

export function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36 bg-base-soft/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel accent="lime">Portfolio</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display font-semibold text-4xl sm:text-5xl md:text-6xl text-ink">
            Projects
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const accent = accentClasses[project.accent];
            return (
              <motion.div
                key={project.title}
                variants={revealItem}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={`group flex flex-col card-border rounded-2xl bg-base-card p-6 sm:p-7 transition-colors ${accent.border}`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                    {project.category}
                  </span>
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full font-mono text-[10px] text-base ${accent.dot}`}
                  >
                    {project.number}
                  </span>
                </div>

                <h3 className={`mt-4 font-display text-xl font-semibold ${accent.text}`}>
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-ink-muted flex-1">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-base-border px-2.5 py-1 font-mono text-[10px] text-ink-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-base-border">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted hover:text-ink transition-colors"
                    >
                      <Github size={14} /> GitHub
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted hover:text-ink transition-colors"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
