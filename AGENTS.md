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

## Responsive design
- All pages MUST be responsive (mobile-first)
- Use Tailwind breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px)

## Tailwind v4 notes
- Global styles are in `src/styles/global.css` with `@import "tailwindcss"`
- Use CSS `@theme { ... }` to define design tokens (replaces `tailwind.config.js`)
- Use `@utility nombre { ... }` for custom utilities that support variants (`hover:`, `lg:`, etc.)
- `@apply` is available inside `@utility` blocks and custom CSS rules
- No `@layer base/components/utilities` — Tailwind v4 uses native CSS cascade layers
- Utility classes in HTML templates (`flex`, `p-4`, etc.) work the same as v3

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
