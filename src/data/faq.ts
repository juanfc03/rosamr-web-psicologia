export type ElementoFAQ = {
  pregunta: string;
  respuesta: string;
};

export const preguntas = [
  {
    pregunta: '¿Cuánto cuesta una sesión y cómo puedo pagar?',
    respuesta: `
      <p>La sesión tiene un precio de 60 € por 60 minutos.</p>
      <p>Normalmente puede hacerse por transferencia, Bizum u otros métodos.</p>
    `,
  },
  {
    pregunta: '¿Trabajas con ansiedad, ataques de pánico o estrés intenso?',
    respuesta: `
      <p>Sí, atiendo casos de ansiedad generalizada, ataques de pánico y estrés mantenido.</p>
      <p>En la primera sesión valoramos tu situación, tus síntomas y qué necesitas en este momento. A partir de ahí elaboramos un plan terapéutico adaptado.</p>
    `,
  },
  {
    pregunta: '¿Puedo empezar directamente con terapia online?',
    respuesta: `
      <p>Sí, puedes empezar directamente online sin necesidad de acudir a consulta presencial.</p>
      <p>La terapia online funciona igual que la presencial y suele ser muy cómoda si tienes horarios complicados o vives fuera. Valoramos juntos si es el formato adecuado para ti.</p>
    `,
  },
  {
    pregunta: '¿Cuántas sesiones suelen ser necesarias?',
    respuesta: `
      <p>No hay un número fijo de sesiones, depende de tu caso y tus objetivos.</p>
      <p>En la primera conversación revisamos qué necesitas y te doy una estimación orientativa del proceso para que puedas organizarte.</p>
    `,
  },
  {
    pregunta: '¿Qué pasa si no sé explicar bien lo que me ocurre?',
    respuesta: `
      <p>No pasa nada: ayudarte a poner palabras a lo que sientes también forma parte de la terapia.</p>
      <p>Podemos empezar por lo que sí tienes claro, aunque sea muy poco, y construir a partir de ahí.</p>
    `,
  },
] as const satisfies readonly ElementoFAQ[];
