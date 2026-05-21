# Skyward Race — website

Showcase site for the pygame-ce build of Skyward Race and the ongoing Godot 4.6 port.

## Stack

- **Astro 5** — static site generator
- **Tailwind CSS 4** — styling via the Vite plugin
- **Content Collections** — markdown-driven devlog entries

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## Build

```bash
npm run build
npm run preview
```

Static output lands in `dist/` and is ready for GitHub Pages or any static host.

## Adding a devlog entry

Create a new markdown file under `src/content/devlog/` named like `YYYY-MM-DD-slug.md` with this frontmatter:

```markdown
---
title: "Entry title"
date: 2026-05-21
status: in-progress  # planned | in-progress | done
summary: "Optional one-line summary."
---

Body in markdown.
```

The Godot port section on the home page renders entries newest first.

## Update the release link

`src/components/Hero.astro` has a `releaseUrl` constant near the top — point it at the actual `releases/latest` URL for the game repo.
