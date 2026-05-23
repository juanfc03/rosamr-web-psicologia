export type EnlaceFooter = {
  etiqueta: string;
  href: string;
};

export const legal = [
  { etiqueta: 'Política de Cookies', href: '/politica-de-cookies/' },
  { etiqueta: 'Política de Privacidad', href: '/politica-de-privacidad/' },
  { etiqueta: 'Aviso legal', href: '/aviso-legal/' },
] as const satisfies readonly EnlaceFooter[];

export const redes = [
  { etiqueta: 'Instagram', href: 'https://www.instagram.com/con.agallas/' },
  {
    etiqueta: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rosa-maría-ruiz-cano/',
  },
] as const satisfies readonly EnlaceFooter[];
