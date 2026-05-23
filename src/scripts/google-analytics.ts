declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const CLAVE_ALMACEN = 'consent-cookies';
const COOKIES_GA = ['_ga', '_ga_JMTQFPHQY1'];

function enviarGtag(...args: unknown[]): void {
  if (typeof window.gtag === 'function') {
    window.gtag(...args);
  }
}

function actualizarConsentimiento(): void {
  enviarGtag('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
  });
}

function denegarConsentimiento(): void {
  enviarGtag('consent', 'update', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });

  const dominio = window.location.hostname;
  const rutas = ['/', `;domain=${dominio}`];

  for (const nombre of COOKIES_GA) {
    for (const ruta of rutas) {
      document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${ruta}`;
    }
  }
}

function inicializar(): void {
  const consentimiento = localStorage.getItem(CLAVE_ALMACEN);

  if (consentimiento === 'accepted') {
    actualizarConsentimiento();
  } else {
    denegarConsentimiento();
  }

  window.addEventListener('cookie-consent', ((
    e: CustomEvent<{ accepted: boolean }>,
  ) => {
    if (e.detail.accepted) {
      actualizarConsentimiento();
    } else {
      denegarConsentimiento();
    }
  }) as EventListener);
}

document.addEventListener('astro:page-load', inicializar);

export {};
