# AGENTS.md

## Commands

- `npm run dev` — dev server (localhost:4321)
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build locally
- No lint, typecheck, or test scripts exist. Run `npx astro check` manually if needed.

## Tech Stack

- Astro 6 + Tailwind CSS v4 (via `@tailwindcss/vite`, not the Astro integration)
- Deployed to Netlify (`netlify.toml` at root)
- Node >= 22.12.0
- Website for a psychologist based in Granada, Spain
- All page content and UI text is in **Spanish**
- User-defined code (functions, variables, components) must use **Spanish** naming — e.g. `obtenerCitas()`, `formularioContacto`, not English

## Path Aliases

`@/` maps to `src/` (configured in both `astro.config.mjs` and `tsconfig.json`).

## Architecture

- `src/layouts/Layout.astro` — single layout, wraps all pages. Props: `titulo`, `descripcion`, `canonica`, `imagenOG`, `esquema`, `robots`, `autor`.
- `src/pages/` — one `.astro` file per route. No dynamic routes or API endpoints.
- `src/components/` — reusable Astro components. `icons/` subfolder for SVG icon components.
- `src/data/faq.ts` — FAQ content as typed array (`preguntas`). Data files use `as const satisfies` pattern.
- `src/scripts/` — client-side TS scripts loaded via `<script src="...">` in components.
- `src/styles/global.css` — Tailwind import + custom `@theme` tokens + custom `@utility` definitions.

## Tailwind v4 Conventions

This project uses Tailwind CSS v4 syntax, not v3:

- Theme customization uses `@theme {}` block in CSS, not `tailwind.config.js`.
- Custom utilities use `@utility name { ... }` syntax in CSS, not the plugin API.
- Import is `@import 'tailwindcss'`, not `@tailwind base/components/utilities`.
- No `tailwind.config.js` file exists — all config lives in `global.css`.

## Custom Design Tokens

Defined in `src/styles/global.css`:

- Colors: `primario` (#d59fac), `oscuro`, `cuerpo`, `atenuado`, `sutil` (gray scale aliases)
- Responsive text sizes: `text-tam-principal`, `text-tam-grande`, `text-tam-mayor`, `text-tam-mediano`, `text-tam-base`, `text-tam-reducido`, `text-tam-legal`
- Background: `bg-main-gradient`

## Style Rules

- All pages MUST be responsive (mobile-first)
- Use Tailwind breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px)
- No `@layer base/components/utilities` — Tailwind v4 uses native CSS cascade layers
- Prettier config: single quotes, no parens on single arrow params
- All external links use `target="_blank" rel="noopener noreferrer"` with Spanish aria-labels noting new tab
- Accessibility: skip-to-content link, `aria-label` on icon-only buttons, `aria-current="page"` on active nav links (not on `<summary>`), `aria-expanded` on FAQ `<summary>`, `prefers-reduced-motion` respected
- Focus styles: `focus-visible:ring-2 focus-visible:ring-oscuro` pattern throughout

## TypeScript Conventions

- Strict typing is required — no `any`, prefer explicit types over inference when unclear
- Define local types in frontmatter (e.g. `type ElementoNavegacion = ...`)
- Use `as const satisfies` for typed readonly data arrays and objects
- Derive component types with `typeof` (e.g. `Icono: typeof Instagram`)
- See `src/components/Header.astro` frontmatter for reference patterns

## Astro Config Quirks

- `trailingSlash: 'always'` — all internal links must end with `/`
- `build.inlineStylesheets: 'always'` — all CSS inlined into HTML
- Sitemap excludes legal pages (`aviso-legal`, `politica-de-cookies`, `politica-de-privacidad`)
- `ClientRouter` enabled for view transitions (from `astro:transitions`)

## Skills

Use the skill tool when a task matches one of the available skills in `.opencode/skills/`:

- `accessibility` — WCAG audits and fixes
- `frontend-design` — UI design and polish
- `seo` — search optimization
- `tailwind-css-patterns` — Tailwind styling patterns
- `typescript-advanced-types` — complex type work

## Verification

Use the Astro docs MCP to verify framework APIs and config options instead of guessing. Prefer `Astro_docs_search_astro_docs` over inventing Astro-specific syntax.

**Always verify browser support and API status before flagging issues.** Do not assume a feature is experimental or unsupported without checking current data (e.g. caniuse, MDN). Outdated assumptions lead to false positives. When in doubt, check the latest compatibility tables.
