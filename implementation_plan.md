# Plan de Implementación: Landing Pages y Despliegue con Caddy

Este plan detalla la creación de las tres landing pages utilizando Vite + Vanilla HTML + Tailwind CSS (para máxima velocidad y simplicidad) y las instrucciones de despliegue en tu VPS de 2GB usando Caddy para los subdominios.

## Resumen de la Estructura del Proyecto

Crearé un repositorio base dentro de la carpeta actual que contenga 3 proyectos distintos y un archivo README principal:

`/landing-pages-irisvisual`
  ├── `mezcal-admirable/` (Landing Page Mezcal)
  ├── `temazcal-tonantzin/` (Landing Page Temazcal)
  ├── `iris-visual/` (Landing Page Producción Audiovisual)
  └── `README.md` (Instrucciones de Git, Caddy y Despliegue)

## Detalles de las Landing Pages

Cada landing page tendrá un formulario de contacto cuyo único propósito es recopilar los datos y redirigir al usuario al WhatsApp de la empresa (generando el mensaje predefinido con los datos ingresados). Todo el código HTML, comentarios y variables estarán en **español** para facilitar su futura modificación.

### 1. Mezcal Artesanal Admirable
- **Colores:** Negros y dorados.
- **Secciones:** Inicio (Héroe), Proceso de Elaboración Artesanal, Productos/Formato y Formulario de WhatsApp para pedidos.
- **Estilo:** Elegante, oscuro (dark mode natural), destacando el dorado para un aspecto premium.

### 2. Temazcal Tonantzin (Miahuatlán, Oaxaca)
- **Colores:** Prehispánicos (terracotas, adobe, ocres, verdes oscuros/naturaleza).
- **Secciones:** Inicio (Héroe relajante), Significado/Historia del Temazcal, Beneficios, y Formulario de WhatsApp para reservas.
- **Estilo:** Orgánico, terrenal, relajante y espiritual.

### 3. Iris Visual (Producción Audiovisual)
- **Colores:** Azules (tecnología/confianza) y Naranja (creatividad/energía).
- **Secciones:** Inicio (Héroe con llamado a la acción), Servicios (Spots, Fotografía, Manejo de Redes), Portafolio/Demostración y Formulario de WhatsApp para contrataciones.
- **Estilo:** Moderno, dinámico, con un alto contraste entre el azul y el naranja para resaltar la creatividad.

## Despliegue (VPS 2GB + Caddy + Git)

El archivo `README.md` incluirá un paso a paso claro (en español) sobre:
1. **Control de Versiones (Git):** Cómo subir tu proyecto a GitHub/GitLab y cómo clonarlo en tu VPS de Lightsail.
2. **Caddy Web Server:** Cómo instalar Caddy en tu VPS, y cómo crear el archivo `Caddyfile` para configurar los subdominios (ej. `mezcal.irisvisual.com`, `temazcal.irisvisual.com`, `irisvisual.com`) con HTTPS automático usando Let's Encrypt.
3. **Flujo de Producción:** Dado que tienes 2GB de RAM, puedes compilar los sitios usando `npm run build` directamente en el VPS de manera segura (Vite + Tailwind usa poca memoria), o de manera opcional compilar localmente y sólo copiar las carpetas `dist`. Detallaré como compilar en el VPS tras un git pull por comodidad.

> [!IMPORTANT]
> **Revisión del Usuario Requerida**
> 1. ¿Estás de acuerdo en usar un entorno de **Vite con Vanilla HTML y Tailwind CSS**? (Es la manera moderna pero más simple, permite modificar directamente el HTML y aprovecha Tailwind al máximo).
> 2. Respecto a los enlaces a WhatsApp: usaré una lógica de JavaScript simple para abrir la URL de `wa.me/NUMERO?text=...` recabando la info del formulario, ¿tienes algún número provisional para poner, o dejo marcadores genéricos (ej. `+521234567890`)?
> 3. ¿El dominio `irisvisual.com` ya apunta a la IP de tu servidor Lightsail en los registros DNS de tu proveedor?

## Plan de Ejecución
1. Escribir instrucción de despliegue completa en el archivo `README.md` en el directorio principal.
2. Crear carpeta `mezcal-admirable` y configurar Vite + Tailwind.
3. Crear carpeta `temazcal-tonantzin` y configurar Vite + Tailwind.
4. Crear carpeta `iris-visual` y configurar Vite + Tailwind.
5. Desarrollar diseño, contenido y lógica de WhatsApp para cada página.
6. Probar compilación (`build`) de cada proyecto.
