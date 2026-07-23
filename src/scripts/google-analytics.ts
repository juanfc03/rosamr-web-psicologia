declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const CLAVE_ALMACEN = 'consent-cookies';
const COOKIES_GA = ['_ga', '_ga_JMTQFPHQY1'];

let oyenteRegistrado = false;

function enviarGtag(...args: unknown[]): void {
  if (typeof window.gtag === 'function') {
    window.gtag(...args);
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(args);
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
  const dominios = [dominio, `.${dominio}`, ''];
  const rutas = ['/', ''];

  for (const nombre of COOKIES_GA) {
    for (const d of dominios) {
      for (const r of rutas) {
        const sufijoDominio = d ? `;domain=${d}` : '';
        const sufijoRuta = r ? `;path=${r}` : ';path=/';
        document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 UTC${sufijoRuta}${sufijoDominio}`;
      }
    }
  }
}

function procesarNavegacion(): void {
  const consentimiento = localStorage.getItem(CLAVE_ALMACEN);

  if (consentimiento === 'accepted') {
    actualizarConsentimiento();
  } else {
    denegarConsentimiento();
  }

  enviarGtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
  });
}

function registrarOyentes(): void {
  if (oyenteRegistrado) return;
  oyenteRegistrado = true;

  window.addEventListener('cookie-consent', ((
    e: CustomEvent<{ accepted: boolean }>,
  ) => {
    if (e.detail.accepted) {
      actualizarConsentimiento();
      enviarGtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
      });
    } else {
      denegarConsentimiento();
    }
  }) as EventListener);
}

registrarOyentes();
document.addEventListener('astro:page-load', procesarNavegacion);

export {};
