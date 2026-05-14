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

## SEO metadata conventions

Every page defines these frontmatter variables and passes them to `<Layout>`:

- `titulo` — `<title>` + OG + Twitter (max ~55 chars, primary keyword first)
- `descripcion` — `<meta name="description">` + OG + Twitter (max ~155 chars)
- `canonica` — self-referencing canonical URL (always pass; required by Layout)
- `imagenOG` — `${Astro.site}open-graph/[slug].png/` (only indexable pages)
- `robots` — default `'index, follow'`; use `'noindex, follow'` for legal pages
- `esquema` — JSON-LD schema.org object (see below)

Legal pages (`aviso-legal`, `politica-de-cookies`, `politica-de-privacidad`) must have:
- `robots = 'noindex, follow'`
- Excluded from sitemap via `serialize()` in `astro.config.mjs`
- No `imagenOG` or `esquema`

## Structured data (JSON-LD)

Injected via `<script type="application/ld+json" set:html={JSON.stringify(esquema)} />` in Layout. Schema types per page:

| Page | `@type` | Key features |
|---|---|---|
| Home | `MedicalBusiness` | address, geo, openingHours, areaServed, knowsAbout, sameAs |
| Sobre mí | `Person` | worksFor → MedicalBusiness (shared `@id`) |
| Servicios | `Service` | hasOfferCatalog with individual services |
| Pedir cita | `ContactPage` | mainEntity → MedicalBusiness |
| FAQ | `FAQPage` | mainEntity with Question/Answer pairs |
| Legal pages | — | No schema |

All schemas referencing the business use `@id: '${Astro.site}#localbusiness'` for entity linking.

## Deployment (Netlify)

- `netlify.toml` at repo root with build command, redirects, and security headers
- `pretty_urls = false` — Astro handles trailing slashes via `trailingSlash: 'always'`
- `www.` → non-www redirect via `[[redirects]]` with domain-level `from`
- `public/robots.txt` allows full crawling and points to sitemap-index.xml
