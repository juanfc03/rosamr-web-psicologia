const ID_TOAST = 'form-toast';
const CLASE_MOSTRAR = 'mostrar';
const CLASE_EXITO = 'toast-exito';
const CLASE_ERROR = 'toast-error';
const DURACION_TOAST = 5000;

const MENSAJE_EXITO =
  'Gracias por tu mensaje. Te contactaré pronto para coordinar día y hora.';
const MENSAJE_ERROR =
  'Hubo un error al enviar el formulario. Inténtalo de nuevo o contacta por WhatsApp o Email.';

function inicializarFormulario() {
  const formulario = document.forms.namedItem(
    'contacto',
  ) as HTMLFormElement | null;
  const toast = document.getElementById(ID_TOAST);

  if (!formulario || !toast) return;

  let temporizadorToast: ReturnType<typeof setTimeout>;

  const mostrarToast = (mensaje: string, tipo: 'exito' | 'error') => {
    clearTimeout(temporizadorToast);
    toast.textContent = mensaje;
    toast.className = toast.className
      .replace(new RegExp(`${CLASE_EXITO}|${CLASE_ERROR}`, 'g'), '')
      .trim();
    toast.classList.add(`toast-${tipo}`, CLASE_MOSTRAR);

    temporizadorToast = setTimeout(() => {
      toast.classList.remove(CLASE_MOSTRAR);
    }, DURACION_TOAST);
  };

  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const datos = new FormData(evento.target as HTMLFormElement);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(datos as any).toString(),
    })
      .then(() => {
        formulario.reset();
        mostrarToast(MENSAJE_EXITO, 'exito');
      })
      .catch(() => {
        mostrarToast(MENSAJE_ERROR, 'error');
      });
  });
}

document.addEventListener('astro:page-load', inicializarFormulario);

export {};
