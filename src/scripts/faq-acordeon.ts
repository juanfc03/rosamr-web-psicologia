const SELECTOR_FAQ = '[aria-labelledby="preguntas-titulo"] details';
const DURACION_APERTURA = 300;
const DURACION_CIERRE = 250;
const DESPLAZAMIENTO_Y = '0.5rem';

const prefiereMovimientoReducido = window.matchMedia(
  '(prefers-reduced-motion: reduce)',
).matches;

function duracion(ms: number): number {
  return prefiereMovimientoReducido ? 0 : ms;
}

function limpiarAnimaciones(elemento: HTMLElement): void {
  elemento.getAnimations().forEach(a => a.cancel());
}

function obtenerContenido(detalle: HTMLDetailsElement): HTMLElement | null {
  return detalle.querySelector<HTMLElement>('[id^="faq-respuesta-"]');
}

function obtenerChevron(detalle: HTMLDetailsElement): HTMLElement | null {
  return detalle.querySelector<HTMLElement>('svg');
}

function estaAbierto(detalle: HTMLDetailsElement): boolean {
  return detalle.hasAttribute('open');
}

function actualizarEstadoAria(detalle: HTMLDetailsElement): void {
  const resumen = detalle.querySelector<HTMLElement>('summary');
  if (resumen) {
    resumen.setAttribute('aria-expanded', String(estaAbierto(detalle)));
  }
}

function abrirConAnimacion(detalle: HTMLDetailsElement): Promise<void> {
  return new Promise(resolve => {
    const contenido = obtenerContenido(detalle);
    const chevron = obtenerChevron(detalle);
    if (!contenido) {
      detalle.setAttribute('open', '');
      actualizarEstadoAria(detalle);
      resolve();
      return;
    }

    detalle.setAttribute('open', '');
    contenido.style.overflow = 'hidden';
    contenido.style.height = '0';
    contenido.style.opacity = '0';

    const alturaObjetivo = contenido.scrollHeight;

    limpiarAnimaciones(contenido);

    const animacionContenido = contenido.animate(
      [
        {
          height: '0px',
          opacity: 0,
          transform: `translateY(${DESPLAZAMIENTO_Y})`,
        },
        {
          height: `${alturaObjetivo}px`,
          opacity: 1,
          transform: 'translateY(0)',
        },
      ],
      {
        duration: duracion(DURACION_APERTURA),
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        fill: 'forwards',
      },
    );

    if (chevron) {
      limpiarAnimaciones(chevron);
      chevron.animate(
        [{ transform: 'rotate(0deg)' }, { transform: 'rotate(180deg)' }],
        {
          duration: duracion(DURACION_APERTURA),
          easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          fill: 'forwards',
        },
      );
    }

    animacionContenido.finished
      .then(() => {
        contenido.style.height = '';
        contenido.style.opacity = '';
        contenido.style.overflow = '';
        actualizarEstadoAria(detalle);
        resolve();
      })
      .catch(() => {
        actualizarEstadoAria(detalle);
        resolve();
      });
  });
}

function cerrarConAnimacion(detalle: HTMLDetailsElement): Promise<void> {
  return new Promise(resolve => {
    const contenido = obtenerContenido(detalle);
    const chevron = obtenerChevron(detalle);
    if (!contenido) {
      detalle.removeAttribute('open');
      resolve();
      return;
    }

    contenido.style.overflow = 'hidden';
    const alturaActual = contenido.scrollHeight;
    contenido.style.height = `${alturaActual}px`;

    limpiarAnimaciones(contenido);

    const animacionContenido = contenido.animate(
      [
        { height: `${alturaActual}px`, opacity: 1, transform: 'translateY(0)' },
        {
          height: '0px',
          opacity: 0,
          transform: `translateY(${DESPLAZAMIENTO_Y})`,
        },
      ],
      {
        duration: duracion(DURACION_CIERRE),
        easing: 'cubic-bezier(0.55, 0, 1, 0.45)',
        fill: 'forwards',
      },
    );

    if (chevron) {
      limpiarAnimaciones(chevron);
      chevron.animate(
        [{ transform: 'rotate(180deg)' }, { transform: 'rotate(0deg)' }],
        {
          duration: duracion(DURACION_CIERRE),
          easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          fill: 'forwards',
        },
      );
    }

    animacionContenido.finished
      .then(() => {
        contenido.style.height = '0';
        contenido.style.opacity = '0';
        detalle.removeAttribute('open');
        actualizarEstadoAria(detalle);
        resolve();
      })
      .catch(() => {
        detalle.removeAttribute('open');
        actualizarEstadoAria(detalle);
        resolve();
      });
  });
}

function inicializarAcordeon(): void {
  const detalles = [
    ...document.querySelectorAll<HTMLDetailsElement>(SELECTOR_FAQ),
  ];
  if (detalles.length === 0) return;

  let enAnimacion = false;

  detalles.forEach(detalle => {
    const contenido = obtenerContenido(detalle);
    if (!contenido) return;

    if (estaAbierto(detalle)) {
      actualizarEstadoAria(detalle);
      const chevron = obtenerChevron(detalle);
      if (chevron) chevron.style.transform = 'rotate(180deg)';
    } else {
      actualizarEstadoAria(detalle);
      contenido.style.height = '0';
      contenido.style.opacity = '0';
      contenido.style.overflow = 'hidden';
    }

    const resumen = detalle.querySelector('summary');
    if (!resumen) return;

    resumen.addEventListener('click', async e => {
      e.preventDefault();
      if (enAnimacion) return;

      enAnimacion = true;

      const abriendo = !estaAbierto(detalle);

      if (abriendo) {
        const otrosAbiertos = detalles.filter(
          d => d !== detalle && estaAbierto(d),
        );
        const cierres = otrosAbiertos.map(d => cerrarConAnimacion(d));
        await Promise.all(cierres);
        await abrirConAnimacion(detalle);
      } else {
        await cerrarConAnimacion(detalle);
      }

      enAnimacion = false;
    });
  });
}

document.addEventListener('astro:page-load', inicializarAcordeon);

export {};
