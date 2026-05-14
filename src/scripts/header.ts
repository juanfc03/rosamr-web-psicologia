const SELECTOR_DESPLEGABLES = 'details[name="navegacion-principal"]';
const ID_MENU_MOVIL = 'menu-movil';
const ID_BOTON_MOVIL = 'abrir-menu-movil';
const DURACION_APERTURA = 200;
const DURACION_CIERRE = 150;

const prefiereMovimientoReducido = window.matchMedia(
  '(prefers-reduced-motion: reduce)',
).matches;

const fotogramasApertura: Keyframe[] = [
  { opacity: 0, transform: 'translateY(-0.25rem)' },
  { opacity: 1, transform: 'translateY(0)' },
];

const fotogramasCierre: Keyframe[] = [
  { opacity: 1, transform: 'translateY(0)' },
  { opacity: 0, transform: 'translateY(-0.25rem)' },
];

function animar(elemento: HTMLElement, fotogramas: Keyframe[], duracion: number) {
  limpiarAnimaciones(elemento);
  return elemento.animate(fotogramas, {
    duration: prefiereMovimientoReducido ? 0 : duracion,
    easing: 'ease-out',
    fill: 'forwards',
  });
}

function limpiarAnimaciones(elemento: HTMLElement) {
  elemento.getAnimations().forEach(a => a.cancel());
}

function obtenerMenu(detalle: HTMLDetailsElement) {
  return detalle.querySelector<HTMLElement>('.desplegable');
}

function abrirDesplegable(menu: HTMLElement) {
  menu.classList.remove('invisible');
  animar(menu, fotogramasApertura, DURACION_APERTURA);
}

function cerrarDesplegable(detalle: HTMLDetailsElement) {
  const menu = obtenerMenu(detalle);
  if (!menu) {
    detalle.open = false;
    return;
  }

  animar(menu, fotogramasCierre, DURACION_CIERRE).finished.then(() => {
    detalle.open = false;
    menu.classList.add('invisible');
  }).catch(() => {});
}

function ocultarMenuMovil() {
  const menuMovil = document.getElementById(ID_MENU_MOVIL);
  const botonMovil = document.getElementById(ID_BOTON_MOVIL);
  if (!menuMovil || !botonMovil) return;
  if (menuMovil.classList.contains('hidden')) return;

  animar(menuMovil, fotogramasCierre, DURACION_CIERRE).finished.then(() => {
    menuMovil.classList.add('hidden');
    menuMovil.inert = true;
  }).catch(() => {});
  botonMovil.setAttribute('aria-expanded', 'false');
  botonMovil.setAttribute('aria-label', 'Abrir menú de navegación');
  botonMovil.focus();
}

function obtenerEnfocables(contenedor: HTMLElement): HTMLElement[] {
  return [
    ...contenedor.querySelectorAll<HTMLElement>(
      'a[href], button, summary, [tabindex]:not([tabindex="-1"])',
    ),
  ];
}

function trampaDeFoco(
  e: KeyboardEvent,
  elementos: HTMLElement[],
) {
  if (e.key !== 'Tab' || elementos.length === 0) return;

  const primero = elementos[0];
  const ultimo = elementos[elementos.length - 1];

  if (e.shiftKey && document.activeElement === primero) {
    e.preventDefault();
    ultimo.focus();
  } else if (!e.shiftKey && document.activeElement === ultimo) {
    e.preventDefault();
    primero.focus();
  }
}

function inicializarDesplegables() {
  const detalles = document.querySelectorAll<HTMLDetailsElement>(
    SELECTOR_DESPLEGABLES,
  );

  detalles.forEach(detalle => {
    const menu = obtenerMenu(detalle);
    if (!menu) return;

    detalle.addEventListener('toggle', () => {
      limpiarAnimaciones(menu);
      if (detalle.open) abrirDesplegable(menu);
    });

    detalle.querySelector('summary')?.addEventListener('click', e => {
      if (!detalle.open) return;
      e.preventDefault();
      cerrarDesplegable(detalle);
    });

    detalle.addEventListener('keydown', e => {
      if (e.key === 'Escape' && detalle.open) {
        e.preventDefault();
        e.stopPropagation();
        cerrarDesplegable(detalle);
      }
    });
  });
}

function inicializarMenuMovil() {
  const boton = document.getElementById(ID_BOTON_MOVIL);
  const menu = document.getElementById(ID_MENU_MOVIL);
  if (!boton || !menu) return;

  function actualizarAria(visible: boolean) {
    boton!.setAttribute('aria-expanded', String(visible));
    boton!.setAttribute(
      'aria-label',
      visible ? 'Cerrar menú de navegación' : 'Abrir menú de navegación',
    );
  }

  function mostrarMenu() {
    menu!.classList.remove('hidden');
    menu!.inert = false;
    animar(menu!, fotogramasApertura, DURACION_APERTURA);

    const enfocables = obtenerEnfocables(menu!);
    if (enfocables.length > 0) {
      enfocables[0].focus();
    }

    actualizarAria(true);
  }

  function estaVisible() {
    return !menu!.classList.contains('hidden');
  }

  boton.addEventListener('click', () => {
    estaVisible() ? ocultarMenuMovil() : mostrarMenu();
  });

  menu.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      ocultarMenuMovil();
      return;
    }
    const enfocables = obtenerEnfocables(menu);
    trampaDeFoco(e, enfocables);
  });

  const detallesMovil = [
    ...menu.querySelectorAll<HTMLDetailsElement>(
      '.desplegable-movil-detalle',
    ),
  ];

  detallesMovil.forEach(detalle => {
    const subMenu = obtenerMenu(detalle);
    if (!subMenu) return;

    detalle.addEventListener('toggle', () => {
      limpiarAnimaciones(subMenu);
      if (!detalle.open) return;
      abrirDesplegable(subMenu);
      detallesMovil.forEach(otro => {
        if (otro !== detalle && otro.open) cerrarDesplegable(otro);
      });
    });

    detalle.querySelector('summary')?.addEventListener('click', e => {
      if (!detalle.open) return;
      e.preventDefault();
      cerrarDesplegable(detalle);
    });

    detalle.addEventListener('keydown', e => {
      if (e.key === 'Escape' && detalle.open) {
        e.preventDefault();
        e.stopPropagation();
        cerrarDesplegable(detalle);
      }
    });
  });

  menu.querySelectorAll('a').forEach(enlace => {
    enlace.addEventListener('click', () => {
      if (estaVisible()) ocultarMenuMovil();
    });
  });
}

let oyenteRegistrado = false;

function registrarClickFuera() {
  if (oyenteRegistrado) return;
  oyenteRegistrado = true;

  document.addEventListener('click', e => {
    const objetivo = e.target as Node;

    const desplegablesAbiertos =
      document.querySelectorAll<HTMLDetailsElement>(
        `${SELECTOR_DESPLEGABLES}[open]`,
      );
    desplegablesAbiertos.forEach(detalle => {
      if (!detalle.contains(objetivo)) cerrarDesplegable(detalle);
    });

    const menuMovil = document.getElementById(ID_MENU_MOVIL);
    const botonMovil = document.getElementById(ID_BOTON_MOVIL);
    if (
      menuMovil &&
      botonMovil &&
      !menuMovil.classList.contains('hidden') &&
      !menuMovil.contains(objetivo) &&
      !botonMovil.contains(objetivo)
    ) {
      ocultarMenuMovil();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;

    const desplegablesAbiertos =
      document.querySelectorAll<HTMLDetailsElement>(
        `${SELECTOR_DESPLEGABLES}[open]`,
      );
    if (desplegablesAbiertos.length > 0) {
      cerrarDesplegable(desplegablesAbiertos[desplegablesAbiertos.length - 1]);
      return;
    }

    const menuMovil = document.getElementById(ID_MENU_MOVIL);
    if (menuMovil && !menuMovil.classList.contains('hidden')) {
      ocultarMenuMovil();
    }
  });
}

document.addEventListener('astro:page-load', () => {
  inicializarDesplegables();
  inicializarMenuMovil();
  registrarClickFuera();
});

export {};
