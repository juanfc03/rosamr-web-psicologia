const SELECTOR_BLOQUES = '#contenido-principal section, #contenido-principal section article';
const UMBRAL_OBSERVADOR = 0.15;

function inicializarAnimaciones(): void {
  if (!('IntersectionObserver' in window)) return;

  const animarBloque = (bloque: Element): void => {
    bloque.classList.remove('opacity-0');
    bloque.classList.add('animate-fade-subir');
  };

  const observar = new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        if (entrada.isIntersecting) {
          animarBloque(entrada.target);
          observar.unobserve(entrada.target);
        }
      }
    },
    { threshold: UMBRAL_OBSERVADOR },
  );

  const bloques = [
    ...document.querySelectorAll<HTMLElement>(SELECTOR_BLOQUES),
  ];

  for (const bloque of bloques) {
    bloque.classList.add('opacity-0');
    observar.observe(bloque);
  }
}

document.addEventListener('astro:page-load', inicializarAnimaciones);

export {};
