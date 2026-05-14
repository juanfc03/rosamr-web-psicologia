import { OGImageRoute } from 'astro-og-canvas';

const paginas = {
  index: {
    titulo: 'Rosa María Ruiz Cano',
    descripcion: 'Psicología general sanitaria en Granada',
    subtitulo: 'Especialista en TCA, violencia de género y terapia emocional.',
  },
  'sobre-mi': {
    titulo: 'Sobre mí',
    descripcion: 'Psicóloga colegiada Nº AO-13788',
    subtitulo: 'Comprometida con tu proceso de cambio y bienestar personal.',
  },
  servicios: {
    titulo: 'Servicios de terapia',
    descripcion: 'Atención profesional y personalizada',
    subtitulo: 'Terapia individual, de pareja y familiar en Granada y online.',
  },
  'pedir-cita': {
    titulo: 'Reserva tu cita',
    descripcion: 'Da el primer paso hacia tu bienestar',
    subtitulo: 'Consulta disponibilidad para sesiones presenciales u online.',
  },
  'preguntas-frecuentes': {
    titulo: 'Dudas frecuentes',
    descripcion: 'Información sobre el proceso terapéutico',
    subtitulo:
      'Resolvemos tus preguntas sobre tarifas, duración y metodología.',
  },
};

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'route',
  pages: paginas,

  getImageOptions: (_ruta, pagina) => ({
    title: pagina.titulo,
    description: `${pagina.descripcion} — ${pagina.subtitulo}`,
    bgGradient: [
      [245, 225, 230],
      [232, 180, 190],
      [225, 170, 180],
    ],
    logo: {
      path: './public/logo.webp',
      size: [84],
    },
    border: {
      color: [213, 159, 172],
      width: 14,
      side: 'inline-start',
    },
    padding: 72,
    font: {
      title: {
        size: 60,
        lineHeight: 1.15,
        color: [80, 45, 55],
        weight: 'Bold',
      },
      description: {
        size: 30,
        lineHeight: 1.5,
        color: [120, 75, 90],
      },
    },
  }),
});
