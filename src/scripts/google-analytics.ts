declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

const ID_ANALITICA = 'G-JMTQFPHQY1';
const CLAVE_ALMACEN = 'consent-cookies';

function cargarGoogleAnalytics(): void {
  if (document.getElementById('gtag-js')) return;

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    (window.dataLayer as unknown[]).push(args);
  }

  const script = document.createElement('script');
  script.id = 'gtag-js';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ID_ANALITICA}`;
  document.head.appendChild(script);

  gtag('js', new Date());
  gtag('consent', 'update', { analytics_storage: 'granted' });
  gtag('config', ID_ANALITICA);
}

function inicializar(): void {
  if (localStorage.getItem(CLAVE_ALMACEN) === 'accepted') {
    cargarGoogleAnalytics();
  }

  window.addEventListener('cookie-consent', ((
    e: CustomEvent<{ accepted: boolean }>,
  ) => {
    if (e.detail.accepted) cargarGoogleAnalytics();
  }) as EventListener);
}

document.addEventListener('astro:page-load', inicializar);

export {};
