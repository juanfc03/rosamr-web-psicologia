# Rosa María Ruiz Cano — Psicóloga General Sanitaria

Página web profesional de Rosa María Ruiz Cano, psicóloga general sanitaria especializada en trastornos de conducta alimentaria, ansiedad y violencia de género. Consulta presencial en Granada y sesiones online. Desarrollada con enfoque en velocidad de carga, accesibilidad y diseño responsive.

## Stack

- **Framework:** [Astro 6](https://astro.build)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`
- **Despliegue:** [Netlify](https://netlify.com) (hosting, formularios y redirecciones)
- **Generación OG Images:** [astro-og-canvas](https://www.npmjs.com/package/astro-og-canvas)
- **Node:** ≥ 22.12.0

## Inicio rápido

```bash
npm install
npm run dev
```

El servidor de desarrollo arranca en `http://localhost:4321`.

## Comandos

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción a `dist/` |
| `npm run preview` | Preview del build localmente |
| `npx astro check` | Verificación de tipos TypeScript |

## Estructura

```
/
├── public/                  # Assets estáticos (favicon, manifest, logo)
├── src/
│   ├── assets/              # Imágenes procesadas por Astro (fotos, ilustraciones)
│   ├── components/          # Componentes Astro reutilizables
│   │   ├── icons/           # Iconos SVG como componentes (11 iconos)
│   │   ├── contacto/        # Formulario, beneficios y formulario legal
│   │   ├── paginas-legales/ # Aviso legal, cookies, privacidad
│   │   └── utils/           # Badge, Pill, BannerCookies
│   ├── data/                # Contenido tipado (FAQ, navegación, servicios, opiniones)
│   ├── layouts/             # Layout único (Layout.astro)
│   ├── pages/               # Rutas de la web
│   │   ├── index.astro              # Inicio
│   │   ├── servicios.astro          # Servicios
│   │   ├── sobre-mi.astro           # Sobre mí
│   │   ├── pedir-cita.astro         # Petición de cita
│   │   ├── preguntas-frecuentes.astro # FAQ
│   │   ├── aviso-legal.astro        # Aviso legal
│   │   ├── politica-de-cookies.astro  # Política de cookies
│   │   ├── politica-de-privacidad.astro # Política de privacidad
│   │   └── open-graph/             # Generación dinámica de OG images
│   ├── scripts/             # TypeScript del lado cliente (7 módulos)
│   └── styles/              # CSS global con tokens y utilidades personalizadas
├── astro.config.mjs         # Configuración de Astro
├── netlify.toml             # Configuración de Netlify
└── tsconfig.json            # Configuración de TypeScript
```

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Página principal con hero, opiniones y tarifas |
| `/servicios/` | Ansiedad, TCA, habilidades sociales, violencia de género |
| `/sobre-mi/` | Información profesional y trayectoria |
| `/pedir-cita/` | Formulario de petición de cita |
| `/preguntas-frecuentes/` | Preguntas frecuentes con acordeón |
| `/aviso-legal/` | Aviso legal |
| `/politica-de-cookies/` | Política de cookies |
| `/politica-de-privacidad/` | Política de privacidad |

## Convenciones

- Nombrado en **español** para funciones, variables, componentes y tipos
- TypeScript estricto sin `any`
- Componentes de datos con `as const satisfies`
- Enlaces externos con `target="_blank" rel="noopener noreferrer"` y `aria-label` en español
- Foco visible: `focus-visible:ring-2 focus-visible:ring-primario`
- Secciones con `mx-auto 2xl:max-w-screen-2xl px-4 sm:px-6 md:px-8`
- Tailwind v4 con tokens personalizados en `@theme {}` dentro de `global.css`
- Path alias `@/` mapeado a `src/` en Astro y TypeScript

## Tokens de diseño

Definidos en `src/styles/global.css`:

- **Color primario:** `#d59fac` (rosa)
- **Escala de grises:** `oscuro`, `cuerpo`, `atenuado`, `sutil`
- **Tipografía responsiva:** `text-tam-principal`, `text-tam-grande`, `text-tam-mayor`, `text-tam-mediano`, `text-tam-base`, `text-tam-reducido`, `text-tam-legal`
- **Fondo:** `bg-main-gradient` (degradado radial)
- **Fuente:** Onest (via Fontsource)

## Licencia

Todos los derechos reservados. Este código es público para consulta y aprendizaje, pero no tiene licencia de uso, modificación o distribución.
