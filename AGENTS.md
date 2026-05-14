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

### Color tokens (all Spanish names)

| Token | Value | Utility |
|-------|-------|---------|
| `--color-primario` | `#d59fac` | `text-primario`, `bg-primario`, `ring-primario/40`, etc. |
| `--color-titulo` | `var(--color-gray-800)` | `text-titulo` |
| `--color-cuerpo` | `var(--color-gray-700)` | `text-cuerpo` |
| `--color-atenuado` | `var(--color-gray-600)` | `text-atenuado` |
| `--color-sutil` | `var(--color-gray-500)` | `text-sutil` |

### Font size utilities (scale: smallest → largest)

| Utility | Equivalent Tailwind scale |
|---------|---------------------------|
| `text-tam-legal` | 11px → 16px |
| `text-tam-reducido` | 12px → 20px |
| `text-tam-principal` | 14px → 24px |
| `text-tam-base` | 16px → 30px |
| `text-tam-mediano` | 18px → 36px |
| `text-tam-mayor` | 20px → 48px |
| `text-tam-grande` | 24px → 60px |

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

## Component conventions

### Header (`src/components/Header.astro`)
- Sticky header with desktop dropdown navigation and mobile hamburger menu
- Navigation data defined in frontmatter via `navegacion[]` array with `as const satisfies`
- Social links via `redes` object with `EnlaceSocial` type
- Active route detection with `esActivo()` using `Astro.url.pathname`
- Uses `aria-current="page"` on active links and `<summary>` elements
- Import icons from `@/components/icons/`
- Client interactivity via `src/scripts/header.ts` (dropdowns, mobile menu, focus trap, Escape)

### Footer (`src/components/Footer.astro`)
- Placed after `<main>` in `Layout.astro`
- Four-column responsive grid: Contacto, Páginas legales, Información legal, Redes
- NAP data (Name, Address, Phone) in `<address>` with `tel:` and `mailto:` links
- Legal links, social links, and copyright with dynamic year
- Year auto-updated by `src/scripts/footer-actualizar-fecha.ts` on page load
- Uses semantic HTML: `<address>`, `<dl>`, `<small>` for copyright, `<strong>` for labels
- All link classes must include `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primario/40 rounded-sm`

## Accessibility conventions
- All interactive elements (`<a>`, `<button>`, `<summary>`) must have `focus-visible` ring styles
- External links (`target="_blank"`) require `aria-label="... (se abre en una pestaña nueva)"`
- Social links use `rel="me noopener noreferrer"`
- Sections use `aria-label` for accessible names
- Decorative SVGs use `aria-hidden="true"`
- `<main>` has `id="contenido-principal"` for skip-to-content link
- Skip-to-content link at top of `<body>` in Layout

## Scripts
| File | Purpose |
|------|---------|
| `src/scripts/header.ts` | Desktop dropdown animations, mobile menu toggle, focus trap, click-outside, Escape handling |
| `src/scripts/footer-actualizar-fecha.ts` | Updates copyright year dynamically on page load |
