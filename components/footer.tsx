import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-base-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-ink-faint">
          MM · © {new Date().getFullYear()} Monu Mishra
        </span>

        <div className="flex flex-col items-center gap-1">
          <a 
            href="mailto:monumonukumar150@gmail.com"
            className="font-mono text-xs text-ink-muted hover:text-lime transition-colors"
          >
            monumonukumar150@gmail.com
          </a>
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
            India
          </span>
        </div>

        <div className="flex items-center gap-4 text-ink-muted">
          <a 
            href="mailto:monumonukumar150@gmail.com" 
            aria-label="Email"
            className="hover:text-lime transition-colors"
          >
            <Mail size={16} />
          </a>
          <a 
            href="https://github.com/alfrid420" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
            className="hover:text-lime transition-colors"
          >
            <Github size={16} />
          </a>
          <a 
            href="https://www.linkedin.com/in/monu-mishra-b55998357" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
            className="hover:text-lime transition-colors"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
