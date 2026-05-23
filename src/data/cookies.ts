type TipoCookie = {
  nombre: string;
  duracion: string;
  proposito: string;
  intrusion: string;
};

export const cookies = [
  {
    nombre: '__Secure-1PAPISID',
    duracion: '13 meses',
    proposito:
      'Utilizada por Google Maps para fines de segmentación y publicidad',
    intrusion: 'Nivel 3',
  },
  {
    nombre: '__Secure-1PSID',
    duracion: '13 meses',
    proposito:
      'Utilizada por Google Maps para fines de segmentación y publicidad',
    intrusion: 'Nivel 3',
  },
  {
    nombre: '__Secure-1PSIDCC',
    duracion: '1 año',
    proposito: 'Seguridad y protección de la cuenta del usuario (Google Maps)',
    intrusion: 'Nivel 3',
  },
  {
    nombre: '__Secure-1PSIDTS',
    duracion: '1 año',
    proposito: 'Seguridad y protección de la cuenta del usuario (Google Maps)',
    intrusion: 'Nivel 3',
  },
  {
    nombre: '__Secure-3PAPISID',
    duracion: '13 meses',
    proposito:
      'Utilizada por Google Maps para fines de segmentación y publicidad',
    intrusion: 'Nivel 3',
  },
  {
    nombre: '__Secure-3PSID',
    duracion: '13 meses',
    proposito:
      'Utilizada por Google Maps para fines de segmentación y publicidad',
    intrusion: 'Nivel 3',
  },
  {
    nombre: '__Secure-3PSIDCC',
    duracion: '1 año',
    proposito: 'Seguridad y protección de la cuenta del usuario (Google Maps)',
    intrusion: 'Nivel 3',
  },
  {
    nombre: '__Secure-3PSIDTS',
    duracion: '1 año',
    proposito: 'Seguridad y protección de la cuenta del usuario (Google Maps)',
    intrusion: 'Nivel 3',
  },
  {
    nombre: '__Secure-BUCKET',
    duracion: '2 semanas',
    proposito: 'Utilizada por Google para pruebas A/B y segmentación',
    intrusion: 'Nivel 3',
  },
  {
    nombre: 'AEC',
    duracion: '6 meses',
    proposito: 'Cookies de seguridad de Google Maps para evitar abusos',
    intrusion: 'Nivel 3',
  },
  {
    nombre: 'APISID',
    duracion: '13 meses',
    proposito:
      'Utilizada por Google Maps para almacenar preferencias y publicidad',
    intrusion: 'Nivel 3',
  },
  {
    nombre: 'HSID',
    duracion: '13 meses',
    proposito: 'Seguridad en Google Maps: contiene registros encriptados',
    intrusion: 'Nivel 3',
  },
  {
    nombre: 'NID',
    duracion: '6 meses',
    proposito: 'Visualización de publicidad y preferencias en Google Maps',
    intrusion: 'Nivel 3',
  },
  {
    nombre: 'SAPISID',
    duracion: '13 meses',
    proposito:
      'Utilizada por Google Maps para almacenar preferencias y publicidad',
    intrusion: 'Nivel 3',
  },
  {
    nombre: 'SEARCH_SAMESITE',
    duracion: '6 meses',
    proposito: 'Correcto funcionamiento de envío de datos en Google Maps',
    intrusion: 'Nivel 3',
  },
  {
    nombre: 'SID',
    duracion: '13 meses',
    proposito: 'Seguridad en Google Maps: contiene registros encriptados',
    intrusion: 'Nivel 3',
  },
  {
    nombre: 'SIDCC',
    duracion: '1 año',
    proposito: 'Seguridad y protección de la cuenta del usuario (Google Maps)',
    intrusion: 'Nivel 3',
  },
  {
    nombre: 'SOCS',
    duracion: '10 meses',
    proposito:
      'Almacena las preferencias de consentimiento de cookies del usuario (Google)',
    intrusion: 'Nivel 3',
  },
  {
    nombre: 'SSID',
    duracion: '13 meses',
    proposito:
      'Utilizada por Google Maps para almacenar preferencias y publicidad',
    intrusion: 'Nivel 3',
  },
  {
    nombre: '_ga',
    duracion: '13 meses',
    proposito:
      'Cookie principal de Google Analytics para distinguir usuarios únicos',
    intrusion: 'Nivel 3',
  },
  {
    nombre: '_ga_JMTQFPHQY1',
    duracion: '13 meses',
    proposito:
      'Cookie de Google Analytics 4 para mantener el estado de la sesión',
    intrusion: 'Nivel 3',
  },
] as const satisfies readonly TipoCookie[];
