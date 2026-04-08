// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form
const form = document.querySelector('form');

form?.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const values = Object.fromEntries(data);

  if (!values.nombre || !values.correo || !values.telefono) {
    alert('Completa todos los campos');
    return;
  }

  alert('Formulario enviado (simulado)');
  form.reset();
});