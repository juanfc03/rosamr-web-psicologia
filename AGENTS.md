# AGENTS.md

## Stack
- **Astro v6** with TypeScript strict mode (`astro/tsconfigs/strict`)
- **Tailwind CSS v4** via `@tailwindcss/vite` Vite plugin — no `tailwind.config.js`, configure via CSS `@theme`
- **Node >= 22.12.0** (`engines` in `package.json`)
- No test runner, linter, or formatter configured yet

## Commands
- `npm run dev` — start dev server at `localhost:4321`
- `npm run build` — build to `dist/`
- `npm run preview` — preview the production build

## Project context
- Website for a psychologist based in Granada, Spain
- All page content and UI text is in **Spanish**
- User-defined code (functions, variables, components) must use **Spanish** naming — e.g. `obtenerCitas()`, `formularioContacto`, not English
- HTML `lang` attribute should be `es`

## Commit convention
- Commits use **Conventional Commits** with messages in **Spanish** (see `.opencode/commands/super-commit.md`)
- Example: `feat: añadir página de servicios`

## Tailwind v4 notes
- Global styles are in `src/styles/global.css` with `@import "tailwindcss"`
- Use CSS `@theme { ... }` to customize design tokens, not a JS config file
- Utility classes work the same as v3; the differences are in the config layer

## Key dependencies
- `jspdf` — client-side PDF generation
- `astro-og-canvas` — OG image generation via `<canvas>` in build-time endpoints
- `@astrojs/sitemap` — auto-generates `sitemap.xml`

## Directory structure
- `src/pages/` — file-based routing (`.astro`, `.md`, etc.)
- `src/layouts/` — page layout wrappers
- `src/components/` — reusable `.astro` components
- `src/styles/` — global CSS
- `public/` — static assets served at `/`
