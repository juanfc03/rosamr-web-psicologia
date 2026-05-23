const ID_MAPA_IFRAME = 'mapa-iframe';
const ID_MAPA_CAPA = 'mapa-capa';
const CLAVE_ALMACEN = 'consent-cookies';

function actualizarMapa(aceptado: boolean): void {
  const iframe = document.getElementById(ID_MAPA_IFRAME) as HTMLIFrameElement | null;
  const capa = document.getElementById(ID_MAPA_CAPA);
  if (!iframe) return;

  iframe.src = aceptado ? (iframe.dataset.mapaSrc ?? '') : '';

  if (capa) capa.hidden = aceptado;
}

function inicializar(): void {
  const iframe = document.getElementById(ID_MAPA_IFRAME);
  if (!iframe) return;

  actualizarMapa(localStorage.getItem(CLAVE_ALMACEN) === 'accepted');

  window.addEventListener('cookie-consent', ((e: CustomEvent<{ accepted: boolean }>) => {
    actualizarMapa(e.detail.accepted);
  }) as EventListener);
}

document.addEventListener('astro:page-load', inicializar);

export {};
