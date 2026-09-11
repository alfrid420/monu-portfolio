"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/data/site";
import { SectionGlow } from "@/components/ui/background-glow";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 sm:py-44 overflow-hidden">
      <SectionGlow accent="lime" side="left" />
      <SectionGlow accent="magenta" side="right" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 text-center">
        <Reveal>
          <h2 className="font-display font-semibold leading-[0.92] tracking-tight text-[14vw] sm:text-7xl md:text-8xl">
            <span className="block text-ink">LET&apos;S</span>
            <span className="block text-cyan sm:text-stroke-cyan">BUILD</span>
            <span className="block text-ink">TOGETHER</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 text-ink-muted max-w-md mx-auto">
            Open to AI/ML internships, collaborations, and interesting problems.
            Reach out — I usually reply within a day.
          </p>
        </Reveal>

        <Reveal delay={0.25} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-mono text-sm font-medium text-base transition-transform hover:scale-105 active:scale-95"
          >
            <Mail size={16} /> Email me
          </a>
          <a
            href={site.socials.resume}
            className="inline-flex items-center gap-2 rounded-full border border-magenta/40 px-6 py-3 font-mono text-sm text-magenta transition-colors hover:bg-magenta/10"
          >
            <FileText size={16} /> Resume
          </a>
        </Reveal>

        <Reveal delay={0.35} className="mt-6 flex items-center justify-center gap-6">
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-ink-muted hover:text-ink transition-colors"
          >
            <Linkedin size={14} /> LinkedIn
          </a>
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-ink-muted hover:text-ink transition-colors"
          >
            <Github size={14} /> GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}
