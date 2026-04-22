# Transporte Monti · Landing Page

Landing page institucional de **Transporte Monti** (Mar del Plata, Argentina), desarrollada en React para presentar servicios, flota y canales de contacto en una única página.

## Demo online

🔗 https://transporte-monti.vercel.app/

## Tecnologías

- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion
- Lucide React

## Características principales

- Diseño responsive (mobile-first)
- Navegación interna con scroll suave
- Secciones: Hero, Servicios, Nosotros/Flota y Contacto
- Botón flotante de WhatsApp
- Metadatos SEO y Open Graph en `index.html`

## Requisitos

- Node.js 18+ (recomendado)
- npm

## Ejecutar en local

```bash
npm install
npm run dev
```

Abrir en: `http://localhost:5173`

## Scripts disponibles

```bash
npm run dev      # entorno de desarrollo
npm run build    # build de producción
npm run preview  # previsualizar build local
```

## Estructura del proyecto

```txt
.
├── public/img/                # imágenes del sitio
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── WhyUs.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
└── vite.config.js
```

## Despliegue

El proyecto está desplegado en **Vercel** y conectado al repositorio.

## Captura de pantalla (opcional)

No es obligatoria, pero **sí recomendable** para que el README se entienda rápido sin abrir el link.  
Si querés agregarla, podés guardar una imagen en `public` o `docs` y referenciarla así:

```md
![Home Transporte Monti](./docs/screenshot-home.png)
```

## Licencia

Proyecto de uso privado para Transporte Monti.
