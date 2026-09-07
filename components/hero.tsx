"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { HeroBackground } from "@/components/ui/background-glow";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center pt-24 pb-16 overflow-hidden"
    >
      <HeroBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-6xl px-5 sm:px-8 w-full"
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-lime mb-8"
        >
          <span>✦</span> {site.role}
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display font-semibold leading-[0.9] tracking-tight text-[15vw] sm:text-[8.5vw] md:text-[6.5rem] lg:text-[7.5rem]"
        >
          <span className="block text-ink">{site.firstName}</span>
          <span className="block text-stroke-magenta">{site.lastName}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 font-mono text-xs sm:text-sm tracking-widest text-ink-muted uppercase max-w-xl"
        >
          {site.tagline}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-ink-muted text-base sm:text-lg leading-relaxed"
        >
          {site.shortBio}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-mono text-sm font-medium text-base transition-transform hover:scale-105 active:scale-95"
          >
            Let&apos;s talk
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-base-border px-6 py-3 font-mono text-sm text-ink hover:border-ink-muted transition-colors"
          >
            View work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
