# Monu Mishra — AI Engineer Portfolio

A premium, dark, neon-accented portfolio built with Next.js (App Router), TypeScript,
Tailwind CSS, and Framer Motion — modeled on the visual language of the provided
reference recording (condensed display type, outlined accent word, lime/magenta/cyan
neon palette, mono micro-labels, orbit-ring background glow, staggered scroll reveals).

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to https://vercel.com/new and import the repository.
3. Framework preset: **Next.js** (auto-detected). No special build settings needed.
4. Click **Deploy**.

## Before you deploy — replace these placeholders

All placeholders are marked with `// placeholder` comments so they're easy to find.

| File | What to update |
| --- | --- |
| `data/site.ts` | Real email, phone, GitHub URL, LinkedIn URL, resume link |
| `data/projects.ts` | Real GitHub repo URLs, and `liveDemo` URLs for any deployed projects |
| `public/resume.pdf` | Add your actual resume file (referenced by `site.socials.resume`) |

Nothing else needs fabricated data — the Education section only includes the BCA
entry you provided, and no work experience was invented.

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Assembles all sections
  globals.css         Tailwind base + custom utilities (text-stroke, glows, etc.)
components/
  navbar.tsx
  hero.tsx
  about.tsx
  tech-stack.tsx
  education.tsx
  projects.tsx
  contact.tsx
  footer.tsx
  ui/
    reveal.tsx          Scroll-triggered Framer Motion wrappers
    section-label.tsx   Small mono "✦ LABEL —" heading used across sections
    background-glow.tsx Ambient radial glows + orbit ring decoration
data/
  site.ts        Name, role, bio, contact links (placeholders marked)
  skills.ts      Tech stack grouped by category
  projects.ts    Project cards data
  education.ts   Education entry (verified info only)
lib/
  utils.ts       Small `cn()` classname helper
```

## Notes

- Colors, fonts, and spacing live in `tailwind.config.ts` — adjust the `lime`,
  `magenta`, `cyan`, and `base` color tokens there to retune the palette.
- The outlined text effect (used on the surname and "BUILD") is the `.text-stroke`
  utility in `globals.css`.
- All content (projects, skills, education) lives in `data/*.ts` — edit there,
  not inside the components.
