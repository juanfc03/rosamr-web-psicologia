const ID_BANNER = 'aviso-cookies';
const ID_ACEPTAR = 'cookies-aceptar';
const ID_RECHAZAR = 'cookies-rechazar';
const CLAVE_ALMACEN = 'consent-cookies';

function establecer(valor: string): void {
  localStorage.setItem(CLAVE_ALMACEN, valor);

  const banner = document.getElementById(ID_BANNER);
  banner?.classList.add('hidden');

  window.dispatchEvent(
    new CustomEvent('cookie-consent', {
      detail: { accepted: valor === 'accepted' },
    }),
  );
}

function inicializar(): void {
  const banner = document.getElementById(ID_BANNER);
  if (!banner) return;

  const consentimiento = localStorage.getItem(CLAVE_ALMACEN);

  if (!consentimiento) {
    banner.classList.remove('hidden');
  }

  document
    .getElementById(ID_ACEPTAR)
    ?.addEventListener('click', () => establecer('accepted'));

  document
    .getElementById(ID_RECHAZAR)
    ?.addEventListener('click', () => establecer('rejected'));
}

document.addEventListener('astro:page-load', inicializar);

export {};
