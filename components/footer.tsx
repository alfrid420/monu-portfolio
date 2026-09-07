import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-base-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-ink-faint">
          {site.logo} · © 2026 {site.name}
        </span>

        <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
          {site.location}
        </span>

        <div className="flex items-center gap-4 text-ink-muted">
          <a href={`mailto:${site.email}`} aria-label="Email">
            <Mail size={16} className="hover:text-lime transition-colors" />
          </a>
          <a href={site.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={16} className="hover:text-lime transition-colors" />
          </a>
          <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={16} className="hover:text-lime transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}
