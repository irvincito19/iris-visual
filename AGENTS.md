# AGENTS.md — Landing Pages Iris Visual

## 📋 Descripción del Proyecto

Monorepo con 10 landing pages estáticas (Vite + Tailwind CSS 3 + HTML/Vanilla JS).
Cada proyecto es independiente con su propio package.json, node_modules y build.
Son sitios 100% frontend (sin framework, sin backend, sin API) orientados a
generación de leads vía WhatsApp. Propiedad de Iris Visual Solutions.

## 🗂️ Estructura del Monorepo

Cada subdirectorio es un proyecto independiente:

- `iris-visual/` — Sitio principal de la agencia
- `iris-visual-solutions/` — Versión refinada del sitio agencia
- `abogado-gerardo-aragon/` — Abogado (Civil/Penal/Familiar)
- `andrea-vasquez-bravo/` — Nutricionista
- `dania-nataly-mingo-lopez/` — Nutricionista
- `dental-lorey/` — Clínica dental
- `joyeria-jireh/` — Joyería
- `mezcal-admirable/` — Marca de mezcal (original)
- `mezcal-gran-cortejal/` — Marca de mezcal (nueva)
- `temazcal-tonantzin/` — Temazcal/spiritual
- `fotos-flaviojuarez/` — ⚠️ Vacío (placeholder)

## 🛠️ Stack Tecnológico

- **Build:** Vite ^8.0.x (ES modules, type: "module")
- **CSS:** Tailwind CSS ^3.4.19 vía PostCSS (o CDN en algunos proyectos)
- **JS:** Vanilla ES modules — SIN React/Vue/Angular
- **Dependencias runtime:** CERO (estático puro)
- **Iconos:** SVGs inline (sin librerías)
- **Imágenes:** Unsplash + assets locales en public/
- **Despliegue:** Caddy Server (AWS Lightsail) con HTTPS automático

## 📄 Estructura Interna de Cada Proyecto

```
proyecto/
├── index.html           # Página única con todas las secciones
├── package.json         # scripts: dev, build, preview
├── tailwind.config.js   # Configuración de Tailwind (varía por proyecto)
├── postcss.config.js    # tailwindcss + autoprefixer
├── src/
│   ├── main.js          # Lógica JS (smooth scroll, WhatsApp, o solo import CSS)
│   └── style.css        # Directivas @tailwind + CSS variables
├── public/              # Assets estáticos (imágenes locales)
└── dist/                # Build de producción (generado)
```

## 🔄 Patrón de Lead Generation (WhatsApp)

Todas las páginas siguen este flujo:
1. Formulario HTML captura nombre, teléfono, mensaje y campos extra
2. JavaScript construye URL `https://wa.me/{numero}?text={mensaje}`
3. Abre WhatsApp en nueva pestaña con `window.open(url, '_blank')`
4. Números telefónicos son PLACEHOLDERS (ej. `+521234567890`) — siempre verificar

## 🎨 Convenciones de Código

- **HTML:** `lang="es"`, clases Tailwind, IDs en camelCase, sin comentarios
- **CSS:** Usar `@apply` solo si es necesario; preferir clases utilitarias inline
- **JS:** Funciones flecha, `const/let`, template literals, sin TypeScript
- **Formularios:** `id="whatsappForm"`, `event.preventDefault()`, `new FormData()`
- **Navegación:** Anclas con href="#seccion", scroll suave nativo
- **No comentar el código** a menos que sea absolutamente necesario

## 🚀 Comandos (ejecutar dentro de cada proyecto)

```bash
npm install        # Instalar dependencias
npm run dev        # Servidor de desarrollo Vite
npm run build      # Build producción → dist/
npm run preview    # Previsualizar build localmente
```

## ⚠️ Notas Importantes para el Agente

1. **No hay root package.json** — cada proyecto es independiente
2. **Dos enfoques de Tailwind coexisten:**
   - PostCSS build (src/style.css con directivas @tailwind)
   - CDN script (script tag cdn.tailwindcss.com en index.html)
3. **Algunos proyectos tienen JS inline** en `<script>` dentro del HTML y el
   `src/main.js` solo importa CSS; otros tienen la lógica en `src/main.js`
4. **`fotos-flaviojuarez/` está vacío** — es un proyecto sin iniciar
5. **No hay tests** — no correr `npm test`
6. **No hay i18n** — todo el contenido está en español hardcodeado
7. **No hay backend/API** — cero server-side
8. **Teléfonos WhatsApp son placeholders** — reemplazar antes de producción

## 📚 Documentación Existente

- `README.md` — Guía de despliegue (Git + Caddy + AWS Lightsail)
- `implementation_plan.md` — Plan original de los primeros 3 proyectos
