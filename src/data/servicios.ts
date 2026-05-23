export type BloqueServicio = {
  titulo: string;
  id: string;
  descripcion: string;
  bullets: readonly string[];
};

export const bloquesServicios = [
  {
    titulo: 'Ansiedad y estrés',
    id: 'ansiedad-estres',
    descripcion:
      'Trabajo la ansiedad y el estrés mediante intervenciones basadas en la evidencia, centradas en identificar desencadenantes, regular la activación y modificar patrones de pensamiento y conducta. El objetivo es reducir la sintomatología, mejorar el afrontamiento diario y recuperar un mayor equilibrio emocional. Trabajo las ansiedades y estrés mantenido y dificultad para desconectar.',
    bullets: [
      'Ansiedad generalizada, ataques de pánico, estrés mantenido y dificultad para desconectar.',
    ],
  },
  {
    titulo: 'Habilidades sociales y fobias',
    id: 'habilidades-sociales-fobias',
    descripcion:
      'Trabajo las dificultades de interacción social, la gestión del miedo al rechazo y la inseguridad en contextos sociales. Abordo fobias y ansiedades específicas mediante intervención basada en la evidencia —como la exposición gradual y el entrenamiento en habilidades sociales— con el objetivo de fortalecer la confianza y mejorar el bienestar en la vida cotidiana.',
    bullets: [
      'Dificultad para poner límites, decir que no, manejar el miedo al rechazo y miedos concretos.',
    ],
  },
  {
    titulo: 'Problemas de pareja, duelo y burnout',
    id: 'pareja-duelo-burnout',
    descripcion:
      'Hay momentos en los que el cuerpo y las emociones señalan una sobrecarga. Dificultades de pareja, duelos o un desgaste emocional provocado por el trabajo pueden afectar al bienestar. La terapia ofrece un espacio para comprender lo que sucede, regular el impacto emocional y recuperar una sensación de dirección y cuidado personal.',
    bullets: [
      'Conflictos de pareja, pérdidas importantes y cansancio extremo asociado al trabajo u otros cuidados.',
    ],
  },
  {
    titulo: 'Acompañamiento a víctimas de violencia de género',
    id: 'violencia-genero',
    descripcion:
      'Ofrezco un espacio seguro y confidencial para mujeres que han vivido situaciones de violencia de género. Trabajo en la estabilización emocional, el fortalecimiento de la autoestima y la recuperación de la seguridad personal, acompañando cada proceso con intervenciones basadas en la evidencia y adaptadas al momento de cada mujer.',
    bullets: [
      'Trabajo centrado en la estabilización emocional y la recuperación de la seguridad personal.',
    ],
  },
] as const satisfies readonly BloqueServicio[];

export type ProblemaComida = {
  titulo: string;
  texto: string;
};

export const problemasRelacionComida = [
  {
    titulo: 'Problemas de imagen corporal',
    texto:
      'Cuando la relación con el cuerpo está atravesada por la vergüenza, la comparación constante o la necesidad de control, la vida se llena de evitaciones. En terapia exploramos de dónde viene esa relación y cómo construir una mirada más respetuosa hacia ti.',
  },
  {
    titulo: 'Autoestima ligada al cuerpo',
    texto:
      'Muchas veces el valor personal queda atrapado casi únicamente en el aspecto físico o en el peso. El trabajo aquí pasa por ampliar esa mirada y conectar con otras áreas valiosas de tu vida, más allá de la báscula o el espejo.',
  },
  {
    titulo: 'Anorexia nerviosa',
    texto:
      'Acompañamiento especializado en procesos donde la restricción, el control y el miedo intenso a engordar están muy presentes. Siempre desde la seguridad, la coordinación con otros profesionales y el respeto a tu ritmo.',
  },
  {
    titulo: 'Bulimia nerviosa',
    texto:
      'Trabajo con los ciclos de atracones y compensaciones, la culpa y la sensación de pérdida de control. Buscamos comprender la función de estos episodios y generar alternativas más seguras y sostenibles.',
  },
  {
    titulo: 'Trastorno por atracón',
    texto:
      'Cuando los atracones aparecen como una forma de manejar emociones muy difíciles, es importante entender qué estás intentando aliviar. En terapia iremos poniendo nombre a lo que hay detrás y construyendo nuevas herramientas.',
  },
  {
    titulo: 'Ortorexia',
    texto:
      'Enfocada en los casos donde la búsqueda de "comer sano" se vuelve rígida, angustiante y limitante. Trabajamos la flexibilidad, el miedo a determinados alimentos y la presión por hacerlo todo "perfecto".',
  },
  {
    titulo: 'Vigorexia',
    texto:
      'Acompañamiento cuando el ejercicio, el gimnasio o el control del cuerpo ocupan casi todo el espacio, generando malestar si no se cumplen ciertas rutinas. El objetivo es recuperar equilibrio y bienestar.',
  },
] as const satisfies readonly ProblemaComida[];
