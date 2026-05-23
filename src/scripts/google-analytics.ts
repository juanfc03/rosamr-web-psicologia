declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

const ID_ANALITICA = 'G-JMTQFPHQY1';
const CLAVE_ALMACEN = 'consent-cookies';

function actualizarConsentimiento(): void {
  window.dataLayer.push(['consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
  }]);
  window.dataLayer.push(['js', new Date()]);
  window.dataLayer.push(['config', ID_ANALITICA]);
}

function inicializar(): void {
  if (localStorage.getItem(CLAVE_ALMACEN) === 'accepted') {
    actualizarConsentimiento();
  }

  window.addEventListener('cookie-consent', ((
    e: CustomEvent<{ accepted: boolean }>,
  ) => {
    if (e.detail.accepted) actualizarConsentimiento();
  }) as EventListener);
}

document.addEventListener('astro:page-load', inicializar);

export {};
