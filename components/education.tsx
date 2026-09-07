"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/reveal";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel accent="magenta">Journey</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display font-semibold text-4xl sm:text-5xl md:text-6xl text-ink">
            Education
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 space-y-6 max-w-3xl">
          {education.map((entry) => (
            <motion.div
              key={entry.degree}
              variants={revealItem}
              className="card-border rounded-2xl bg-base-card p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-magenta/10 text-magenta">
                    <GraduationCap size={18} />
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink">
                    {entry.degree}
                  </h3>
                </div>
                <span className="rounded-full border border-lime/30 bg-lime/10 px-3 py-1 font-mono text-xs text-lime">
                  {entry.status}
                </span>
              </div>

              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-ink-faint">
                {entry.institution} · {entry.year}
              </p>

              <ul className="mt-5 space-y-2.5">
                {entry.points.map((point) => (
                  <li key={point} className="flex gap-3 text-ink-muted leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.p
            variants={revealItem}
            className="font-mono text-xs text-ink-faint pl-1"
          >
            No professional experience listed yet — actively seeking AI/ML internship
            opportunities.
          </motion.p>
        </RevealGroup>
      </div>
    </section>
  );
}
