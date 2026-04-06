# Proyectos de Landing Pages - Iris Visual

Este repositorio contiene las tres landing pages desarrolladas con **Vite**, **Vanilla HTML** y **Tailwind CSS**. Están diseñadas para ser sumamente rápidas, estéticamente ricas y optimizadas para recopilar clientes a través de un formulario hacia WhatsApp.

## 📁 Estructura del Repositorio

- `mezcal-admirable/`: Landing page para la marca de Mezcal Artesanal Admirable (tonos negros y dorados).
- `temazcal-tonantzin/`: Landing page para el Temazcal Tonantzin (tonos prehispánicos, terracota, verdes).
- `iris-visual/`: Landing page para la Producción Audiovisual Iris Visual (tonos azules y naranjas).

## 💻 Desarrollo Local (Modo Dev)

Si necesitas modificar el diseño, los textos, o simplemente probar las landing pages antes de subirlas a tu servidor de producción, puedes aprovechar el servidor ultrarrápido de Vite.

1. Abre la terminal en la carpeta del proyecto que deseas inspeccionar o editar (por ejemplo, `mezcal-admirable`).
2. Asegúrate de instalar las dependencias locales primero:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre la URL local que aparecerá en tu terminal (generalmente `http://localhost:5173`) en tu navegador web. Gracias al *Hot Module Replacement* de Vite, cualquier cambio que guardes en el `index.html`, imágenes o configuraciones se verá reflejado y actualizado al instante en tu pantalla.

## 🚀 Guía de Despliegue para Producción en AWS Lightsail (VPS de 2GB RAM)

Tus landing pages deben ser servidas a través de **Caddy Web Server**, un servidor web moderno que gestiona los certificados de seguridad SSL (HTTPS) de manera automática. Hemos dividido esta guía en pasos claros para que puedas configurar todo usando Linux y subdominios personalizados.

### 1. Control de Versiones con Git

En primer lugar, asegúrate de que todo el repositorio esté subido a plataformas como GitHub o GitLab, esto facilitará el pasarlo a tu VPS.

**En tu computadora local:**
```bash
git init
git add .
git commit -m "Inicialización de landing pages"
# Enlázalo a tu repositorio (ejemplo GitHub)
git branch -M main
git remote add origin https://github.com/TU-USUARIO/landing-pages-irisvisual.git
git push -u origin main
```

**En tu Servidor VPS de AWS Lightsail:**
Conéctate por SSH a tu VPS, instala Git y clona el repositorio en una carpeta, típicamente en `/var/www/`.

```bash
sudo apt update
sudo apt install git nodejs npm -y
sudo mkdir -p /var/www/
cd /var/www/
sudo git clone https://github.com/TU-USUARIO/landing-pages-irisvisual.git
cd landing-pages-irisvisual
```

### 2. Construcción (Build)

Como tu servidor tiene 2GB de RAM, puedes realizar la compilación segura sin colapsar el sistema. Ejecuta esto dentro de **cada una** de las carpetas de los proyectos.

**Ejemplo para Mezcal Admirable:**
```bash
cd /var/www/landing-pages-irisvisual/mezcal-admirable
sudo npm install
sudo npm run build
```
*(Esto creará la carpeta `/dist/` que será la versión optimizada que se mande a producción. Repite este paso en `temazcal-tonantzin` e `iris-visual`).*

### 3. Instalación de Caddy

Instalar Caddy en Ubuntu/Debian es rápido:

```bash
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy
```

### 4. Configuración del Archivo Caddyfile

Debes apuntar hacia la carpeta de distribución (`dist`) de cada página mediante su subdominio en el archivo de configuración global de Caddy.

1. Abre el archivo de configuración en tu VPS:
   ```bash
   sudo nano /etc/caddy/Caddyfile
   ```

2. Escribe una configuración indicando a dónde irá cada dominio. Aquí damos el ejemplo reusando tu dominio principal:

   ```caddyfile
   # Subdominio para Mezcal
   mezcal.irisvisual.com {
       root * /var/www/landing-pages-irisvisual/mezcal-admirable/dist
       file_server
   }

   # Subdominio para Temazcal
   temazcal.irisvisual.com {
       root * /var/www/landing-pages-irisvisual/temazcal-tonantzin/dist
       file_server
   }

   # Dominio principal para Iris Visual (si este es el sitio primario)
   irisvisual.com, www.irisvisual.com {
       root * /var/www/landing-pages-irisvisual/iris-visual/dist
       file_server
   }
   ```

   > **Nota Importante:** Recuerda que para que los certificados HTTPS se conecten correctamente, es obligatorio que vayas al panel DNS de tu proveedor de dominio (Godaddy, Hostinger, AWS Route53) y agregues registros tipo "A" para los subdominios `mezcal`, `temazcal`, y `www`. Éstos deben apuntar a la dirección IP pública de la instancia de tu Lightsail, de lo contrario esto fallará automáticamente.

3. Reinicia y activa Caddy para aplicar todos los cambios:
   ```bash
   sudo systemctl reload caddy
   ```

¡Con eso tus sitios estarán online en cuestión de segundos, protegidos con SSL y entregados eficazmente con un nivel de rendimiento muy superior!
