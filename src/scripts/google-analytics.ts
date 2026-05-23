declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

const ID_ANALITICA = 'G-JMTQFPHQY1';
const CLAVE_ALMACEN = 'consent-cookies';

function actualizarConsentimiento(): void {
  window.dataLayer.push([
    'consent',
    'update',
    {
      analytics_storage: 'granted',
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    },
  ]);
  window.dataLayer.push(['config', ID_ANALITICA]);
}

function cargarGoogleAnalytics(): void {
  if (document.getElementById('gtag-js')) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(['js', new Date()]);
  actualizarConsentimiento();

  const script = document.createElement('script');
  script.id = 'gtag-js';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ID_ANALITICA}`;
  document.head.appendChild(script);
}

function inicializar(): void {
  if (localStorage.getItem(CLAVE_ALMACEN) === 'accepted') {
    if (document.getElementById('gtag-js')) {
      actualizarConsentimiento();
    } else {
      cargarGoogleAnalytics();
    }
  }

  window.addEventListener('cookie-consent', ((
    e: CustomEvent<{ accepted: boolean }>,
  ) => {
    if (e.detail.accepted) cargarGoogleAnalytics();
  }) as EventListener);
}

document.addEventListener('astro:page-load', inicializar);

export {};
