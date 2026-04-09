import './style.css'

const numeroWhatsApp = '521234567890'

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    event.preventDefault()
    const target = document.querySelector(anchor.getAttribute('href'))

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  })
})

const enlaceFlotante = document.getElementById('whatsappFloatingButton')

if (enlaceFlotante) {
  enlaceFlotante.href = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
    'Hola, quiero informacion sobre consulta nutricional con Andrea Vasquez Bravo.'
  )}`
}

const whatsappForm = document.getElementById('whatsappForm')

whatsappForm?.addEventListener('submit', (event) => {
  event.preventDefault()

  const formData = new FormData(event.currentTarget)
  const nombre = formData.get('nombre')?.toString().trim()
  const telefono = formData.get('telefono')?.toString().trim()
  const motivo = formData.get('motivo')?.toString().trim()
  const paciente = formData.get('paciente')?.toString().trim()
  const mensaje =
    formData.get('mensaje')?.toString().trim() ||
    'Quiero recibir informacion sobre una consulta nutricional.'

  if (!nombre || !telefono) {
    window.alert('Por favor completa tu nombre y telefono para continuar.')
    return
  }

  const texto = [
    'Hola, quiero informacion sobre consulta nutricional con Andrea Vasquez Bravo.',
    `Nombre: ${nombre}`,
    `Telefono: ${telefono}`,
    `Motivo de consulta: ${motivo || 'No especificado'}`,
    `Paciente: ${paciente || 'No especificado'}`,
    `Mensaje: ${mensaje}`,
  ].join('\n')

  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`
  window.open(url, '_blank', 'noopener,noreferrer')
})
