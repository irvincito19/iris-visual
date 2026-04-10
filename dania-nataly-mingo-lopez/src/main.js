import './style.css'

// Dania Nataly Mingo López - Landing Page Logic

document.addEventListener('DOMContentLoaded', () => {
    const whatsappForm = document.getElementById('whatsappForm');
    
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(whatsappForm);
            const nombre = formData.get('nombre');
            const telefono = formData.get('telefono');
            const motivo = formData.get('motivo');
            const mensaje = formData.get('mensaje');
            
            const text = `Hola Dania Nataly, mi nombre es ${nombre}. Me gustaría agendar una consulta sobre ${motivo}. %0A%0A${mensaje}%0A%0AContacto: ${telefono}`;
            const whatsappUrl = `https://wa.me/5219510000000?text=${text}`; // Placeholder number
            
            window.open(whatsappUrl, '_blank');
        });
    }

    // Scroll effect for header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shadow-md', 'bg-white/90');
        } else {
            header.classList.remove('shadow-md', 'bg-white/90');
        }
    });
});
