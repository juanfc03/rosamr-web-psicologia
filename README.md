# Rosa María Ruiz Cano — Psicóloga General Sanitaria

Web profesional de Rosa María Ruiz Cano, psicóloga general sanitaria especializada en TCA, ansiedad y violencia de género. Consulta presencial en Granada y sesiones online.

## Stack

- **Framework:** [Astro 6](https://astro.build)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`
- **Despliegue:** [Netlify](https://netlify.com)
- **Node:** ≥ 22.12.0

## Comandos

| Comando | Acción |
|---------|--------|
| `npm run dev` | Servidor de desarrollo en `localhost:4321` |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Previsualizar el build localmente |
| `npx astro check` | Verificación de tipos TypeScript |

## Estructura

```
/
├── public/           # Assets estáticos (favicon, manifest, fuentes)
├── src/
│   ├── assets/       # Imágenes y recursos procesados por Astro
│   ├── components/   # Componentes Astro reutilizables
│   │   ├── icons/    # Iconos SVG como componentes
│   │   ├── paginas-legales/  # Aviso legal, cookies, privacidad
│   │   └── utils/    # Componentes de utilidad (Badge, Pill, BannerCookies)
│   ├── data/         # Datos tipados (FAQ, cookies, navegación, servicios)
│   ├── layouts/      # Layout único (Layout.astro)
│   ├── pages/        # Rutas de la web
│   ├── scripts/      # TypeScript del lado cliente
│   └── styles/       # CSS global con tokens de Tailwind
└── astro.config.mjs  # Configuración de Astro
```

## Convenciones

- Nombrado en **español** para funciones, variables y tipos
- TypeScript estricto sin `any`
- Componentes de datos con `as const satisfies`
- Enlaces externos con `target="_blank" rel="noopener noreferrer"` y `aria-label` en español
- Foco visible: `focus-visible:ring-2 focus-visible:ring-primario`
- Secciones con `mx-auto 2xl:max-w-screen-2xl px-4 sm:px-6 md:px-8`
- Tailwind v4 con tokens personalizados en `@theme {}` dentro de `global.css`
