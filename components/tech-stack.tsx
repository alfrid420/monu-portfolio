"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/reveal";
import { skillCategories } from "@/data/skills";

export function TechStack() {
  return (
    <section id="skills" className="relative py-28 sm:py-36 bg-base-soft/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel accent="cyan">What I Use</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display font-semibold text-4xl sm:text-5xl md:text-6xl text-ink">
            Tech Stack
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <motion.div
              key={category.label}
              variants={revealItem}
              className="card-border rounded-2xl bg-base-card p-6 sm:p-7"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-4">
                {category.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
                      skill.highlight
                        ? "border-amber/40 bg-amber/10 text-amber"
                        : "border-base-border text-ink-muted hover:border-lime/50 hover:text-lime"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
