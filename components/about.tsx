"use client";

import { SectionLabel } from "@/components/ui/section-label";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/reveal";
import { projects } from "@/data/projects";
import { totalSkillsCount } from "@/data/skills";
import { motion } from "framer-motion";

const stats = [
  { value: `${projects.length}+`, label: "AI/ML Projects" },
  { value: `${totalSkillsCount}+`, label: "Technologies" },
  { value: "100%", label: "AI/ML Focus" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel accent="lime">Who I Am</SectionLabel>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display font-semibold text-4xl sm:text-5xl md:text-6xl text-ink">
            About
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal delay={0.1} className="space-y-5 text-lg sm:text-xl leading-relaxed text-ink-muted max-w-2xl">
            <p>
              I&apos;m an <span className="text-ink font-medium">AI &amp; Machine Learning
              Engineer</span> with a foundation built through a BCA and a strong,
              self-driven focus on data science, deep learning, and NLP.
            </p>
            <p>
              I focus on <span className="text-ink font-medium">building practical AI
              solutions</span> using Python, TensorFlow, PyTorch, and modern tools —
              while continuously learning advanced concepts like RAG and AI agents.
            </p>
            <p>
              My project work spans{" "}
              <span className="text-ink font-medium">
                retrieval-augmented generation, NLP applications, and computer-vision
                based deep learning models
              </span>
              , built end-to-end from data processing to deployment.
            </p>
          </Reveal>

          <RevealGroup className="grid grid-cols-2 gap-4 content-start">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={revealItem}
                className={`card-border rounded-2xl bg-base-card p-6 ${
                  i === stats.length - 1 ? "col-span-2" : ""
                }`}
              >
                <div className="font-display text-4xl font-semibold text-lime">
                  {stat.value}
                </div>
                <div className="mt-2 font-mono text-xs uppercase tracking-widest text-ink-muted">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
