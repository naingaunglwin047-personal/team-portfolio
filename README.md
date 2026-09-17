# Byte&Brush Studio — Team Portfolio

Single-page team portfolio built with Vite, React, Tailwind, and [Motion](https://motion.dev).

## Structure

```
apps/web/src/
  components/
    layout/       # Navbar, Footer
    sections/     # Hero, About, Team, Work, Contact
    ui/           # Reveal, SectionHeading
  data/           # Site content (team, projects, copy)
  lib/            # Shared motion variants
  App.tsx         # Single-page composition
```

## Develop

```bash
npm install
npm run dev
```

Open the `web` app URL from Turbo (usually `http://localhost:5173`).

## Customize

Edit `apps/web/src/data/site.ts` to update brand name, team members, and projects.

Illustration assets live in `apps/web/public/illustrations/`.
