import Instagram from '@/components/icons/Instagram.astro';
import Linkedin from '@/components/icons/Linkedin.astro';

export type ElementoNavegacion =
  | { etiqueta: string; href: string }
  | { etiqueta: string; hijas: { etiqueta: string; href: string }[] };

export type EnlaceSocial = {
  href: string;
  descripcion: string;
  Icono: typeof Instagram;
};

export const navegacion = [
  {
    etiqueta: 'Inicio',
    hijas: [
      { etiqueta: 'Presentación', href: '/#presentacion' },
      { etiqueta: 'Opiniones', href: '/#opiniones' },
      { etiqueta: 'Precios', href: '/#precios' },
      { etiqueta: 'Localización', href: '/#localizacion' },
    ],
  },
  { etiqueta: 'Sobre mí', href: '/sobre-mi/' },
  {
    etiqueta: 'Servicios',
    hijas: [
      { etiqueta: 'Trastornos alimentarios', href: '/servicios/#tca' },
      { etiqueta: 'Ansiedad y estrés', href: '/servicios/#ansiedad-estres' },
      {
        etiqueta: 'Habilidades sociales y fobias',
        href: '/servicios/#habilidades-sociales-fobias',
      },
      {
        etiqueta: 'Pareja, duelo, burnout',
        href: '/servicios/#pareja-duelo-burnout',
      },
      { etiqueta: 'Violencia de género', href: '/servicios/#violencia-genero' },
    ],
  },
  { etiqueta: 'Preguntas frecuentes', href: '/preguntas-frecuentes/' },
  { etiqueta: 'Contacto', href: '/pedir-cita/' },
] as const satisfies readonly ElementoNavegacion[];

export const redes = {
  instagram: {
    href: 'https://www.instagram.com/con.agallas/',
    descripcion: 'Instagram de Rosa María Ruiz Cano',
    Icono: Instagram,
  },
  linkedin: {
    href: 'https://www.linkedin.com/in/rosa-maría-ruiz-cano/',
    descripcion: 'LinkedIn de Rosa María Ruiz Cano',
    Icono: Linkedin,
  },
} as const satisfies Record<string, EnlaceSocial>;
