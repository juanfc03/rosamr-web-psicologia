# AGENTS.md

## Commands

- `npm run dev` — dev server (localhost:4321)
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build locally
- `npx astro check` — type check (no `npm` script; run manually)
- No lint or test scripts. Add new commands to `package.json` `scripts` if needed.

## Tech Stack

- Astro 7 + Tailwind CSS v4 (via `@tailwindcss/vite`, **not** the Astro integration)
- Deployed to Netlify (`netlify.toml` at root)
- Node >= 22.12.0
- Onest font via Fontsource (`fontProviders.fontsource()` in `astro.config.mjs`)
- Dynamic OG images via `astro-og-canvas` (see `src/pages/open-graph/[...route].ts`)
- All page content and UI text is in **Spanish**
- User-defined code (functions, variables, components) must use **Spanish** naming — e.g. `obtenerCitas()`, `formularioContacto`

## Path Aliases

`@/` maps to `src/` (configured in both `astro.config.mjs` and `tsconfig.json`).

## Architecture

- `src/layouts/Layout.astro` — single layout. Required props: `titulo`, `descripcion`, `canonica`. Optional: `autor`, `robots`, `imagenOG`, `altImagenOG`, `esquema` (JSON-LD). Renders `<ClientRouter />` from `astro:transitions`, gtag boilerplate, skip-to-content link, and `<BannerCookies />`.
- `src/pages/` — one `.astro` file per route. Only non-page file is `open-graph/[...route].ts` (OG image generation). **No API endpoints.**
- `src/components/` — subfolders: `icons/` (SVG), `contacto/`, `paginas-legales/`, `utils/`.
- `src/data/` — typed content as `as const satisfies` arrays/records (`navegacion`, `preguntas`, `servicios`, `principal`, `pie`, `cookies`).
- `src/scripts/` — client-side TS loaded via `<script src="...">` from components (not ES-module imports).
- `src/styles/global.css` — Tailwind import + `@theme` tokens + `@utility` definitions. **The only file allowed to define `@utility`.**
- `public/` — favicons, `robots.txt`, `site.webmanifest`, OG-image logo.
- `.astro/` — auto-generated types, gitignored.

## Netlify Quirks

- Contact form posts to Netlify Forms (`data-netlify="true"` + `netlify-honeypot="bot-field"` in `src/components/contacto/Form.astro`). No backend, no API route.
- `netlify.toml` sets `pretty_urls = false` and 301-redirects `www.*` → apex.
- Google Analytics: `G-JMTQFPHQY1`. Consent stored in `localStorage` under `consent-cookies` (`accepted` | `denied`).

## Tailwind v4 Conventions

This project uses Tailwind v4 syntax, not v3:

- Theme customization uses `@theme {}` in CSS, no `tailwind.config.js`.
- Custom utilities use `@utility name { ... }` in CSS, not the plugin API. **Only allowed in `src/styles/global.css`** (the file that imports `tailwindcss`).
- Import is `@import 'tailwindcss'`, not `@tailwind base/components/utilities`.
- Component-specific styles go in the component's `<style>` block. Add `@reference "@/styles/global.css";` at the top to access project tokens/utilities without duplicating CSS. `@apply` works in these blocks; `@utility` does not.
- No `@layer base/components/utilities` — Tailwind v4 uses native CSS cascade layers.
- All page sections use `mx-auto 2xl:max-w-screen-2xl px-4 sm:px-6 md:px-8` for consistent width control. **Do not** use `xl:max-w-5/6` — it causes a ~148px jump at the xl breakpoint.

## Custom Design Tokens

Defined in `src/styles/global.css`:

- Colors: `primario` (#d59fac), `oscuro`, `cuerpo`, `atenuado`, `sutil` (aliases for `gray-800/700/600/500`).
- Responsive text sizes: `text-tam-principal`, `text-tam-grande`, `text-tam-mayor`, `text-tam-mediano`, `text-tam-base`, `text-tam-reducido`, `text-tam-legal`.
- Background: `bg-main-gradient`.

## Style Rules

- All pages MUST be responsive (mobile-first).
- Breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px).
- Prettier: single quotes, no parens on single arrow params.
- External links: `target="_blank" rel="noopener noreferrer"` with Spanish `aria-label` noting new tab, e.g. `"X (se abre en una nueva pestaña)"`.
- Accessibility: skip-to-content link, `aria-label` on icon-only buttons, `aria-current="page"` on active nav links (not on `<summary>`), `aria-expanded` on FAQ `<summary>`, `prefers-reduced-motion` respected.
- Focus: `focus-visible:ring-2 focus-visible:ring-primario` throughout. The user explicitly chose `primario` for focus rings — do not switch to `ring-oscuro`.

## TypeScript Conventions

- Strict (extends `astro/tsconfigs/strict`). No `any`; prefer explicit types over inference when unclear.
- Define local types in frontmatter (e.g. `type ElementoNavegacion = ...`).
- Use `as const satisfies Type` for typed readonly data arrays/objects (see `src/data/`).
- Derive component types with `typeof` (e.g. `Icono: typeof Instagram` in `src/data/navegacion.ts`).
- Reference: `src/components/Header.astro` frontmatter.

## Astro Config Quirks

- `trailingSlash: 'always'` — all internal links must end with `/` (e.g. `/sobre-mi/`, not `/sobre-mi`).
- `build.inlineStylesheets: 'always'` — all CSS inlined into HTML; no separate stylesheet links.
- Sitemap excludes `aviso-legal`, `politica-de-cookies`, `politica-de-privacidad` (see `serialize` in `astro.config.mjs`).

## SVG Icon Pattern

In `src/components/icons/`: `const { class: className = '' } = Astro.props` → `class={className}` + `aria-hidden="true"`. Inherit color via `currentColor`. See `Instagram.astro` as the reference.

## Two-column Sticky with CSS Grid

For `position: sticky` to work on a grid item, add `self-start` to the item — `align-items: stretch` otherwise stretches it to full row height, breaking sticky. E.g. `lg:self-start lg:sticky lg:top-36`.

## Skills

When a task matches, load the matching skill from `.opencode/skills/`:

- `accessibility` — WCAG audits and fixes
- `frontend-design` — UI design and polish
- `seo` — search optimization
- `tailwind-css-patterns` — Tailwind styling patterns
- `typescript-advanced-types` — complex type work
- `web-quality-audit` — comprehensive quality review
- `core-web-vitals` — LCP/INP/CLS optimization
- `performance` — speed/load optimization
- `best-practices` — security/compatibility review

## Verification

Use `Astro_docs_search_astro_docs` to verify framework APIs and config options instead of guessing Astro-specific syntax.
