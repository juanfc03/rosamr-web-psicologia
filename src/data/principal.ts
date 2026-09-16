export type Opinion = {
  texto: string;
  tipoPaciente: string;
  puntuacion: number;
};

export const opiniones = [
  {
    texto:
      'Desde el primer momento, Rosa transmitió cercanía y confianza. Llevaba tiempo arrastrando ciertas emociones y, en poco tiempo, noté una mejoría significativa. Me siento más fuerte y acompañada. Su trato cálido y respetuoso hace que una se sienta cómoda y comprendida. Ha sido un apoyo esencial y una guía fundamental.',
    tipoPaciente: 'Paciente con problemas de imagen corporal',
    puntuacion: 5,
  },
  {
    texto:
      'Rosa es una profesional excepcional, cercana y muy implicada. Ofrece el tratamiento más adecuado y hace que el proceso resulte más llevadero. Valoro especialmente su dominio de las técnicas terapéuticas y la claridad con la que me enseñó a aplicarlas.',
    tipoPaciente: 'Consultante con inseguridad en contextos sociales',
    puntuacion: 5,
  },
  {
    texto:
      'Rosa es una gran profesional. Su cercanía y asertividad facilitan cada sesión y ayudan a avanzar hacia los objetivos terapéuticos. En mi caso, me está proporcionando herramientas muy útiles para trabajar los aspectos que más me afectan en el día a día. Muy recomendable.',
    tipoPaciente: 'Usuario atravesando conflictos de pareja',
    puntuacion: 5,
  },
] as const satisfies readonly Opinion[];

export type Tarifa = {
  titulo: string;
  descripcion: string;
  precio: string;
  duracion: string;
};

export const tarifas = [
  {
    titulo: 'Sesión presencial',
    descripcion: 'Consulta en el Centro de Psicología Ángela Medina.',
    precio: '60 €',
    duracion: '/ 60 minutos',
  },
  {
    titulo: 'Sesión online',
    descripcion:
      'Atención psicológica por videollamada, con la misma duración y estructura.',
    precio: '60 €',
    duracion: '/ 60 minutos',
  },
] as const satisfies readonly Tarifa[];

export const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50857.418629278916!2d-3.692028522491476!3d37.18624524754513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fd1c057c8c2f%3A0xddcd044d7db0ec8a!2sRosa%20M%20Ruiz%20psic%C3%B3loga!5e0!3m2!1ses!2ses!4v1789563681667!5m2!1ses!2ses';

export const obtenerEstrellas = (n: number): boolean[] =>
  Array.from({ length: 5 }, (_, i) => i < n);
