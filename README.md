#  Transporte Monti - Landing Page Premium

Landing page de alta conversión para Transporte Monti, empresa de logística y transporte de cargas ubicada en Mar del Plata, Argentina.

##  Características

- **Diseño Premium**: Estilo high-end corporativo con paleta minimalista (blanco, negro, grises)
- **Totalmente Responsive**: Mobile-first design con experiencia perfecta en todos los dispositivos
- **Animaciones Suaves**: Microinteracciones con Framer Motion para sensación premium
- **Performance Optimizado**: Construido con React + Vite para carga ultra-rápida
- **SEO Ready**: Estructura semántica y metadatos optimizados

##  Stack Tecnológico

- **React 18** - Framework UI
- **Vite** - Build tool de última generación
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animaciones fluidas y profesionales
- **Lucide React** - Iconos modernos y limpios

##  Requisitos Previos

- Node.js 16+ instalado
- npm o yarn

##  Instalación y Uso

### 1. Instalar dependencias

```bash
npm install
```

### 2. Iniciar servidor de desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### 3. Build para producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

### 4. Preview del build de producción

```bash
npm run preview
```

##  Estructura del Proyecto

```
ProyectoTransporteMonti/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navegación sticky con menú mobile
│   │   ├── Hero.jsx              # Hero section de alto impacto
│   │   ├── Services.jsx          # Grid de servicios
│   │   ├── WhyUs.jsx             # Propuesta de valor + Flota
│   │   ├── Contact.jsx           # Formulario y datos de contacto
│   │   ├── Footer.jsx            # Footer con links y redes sociales
│   │   └── WhatsAppButton.jsx    # Botón flotante de WhatsApp
│   ├── App.jsx                   # Componente principal
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Estilos globales + Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

##  Personalización

### Colores

Los colores se definen en `tailwind.config.js`:

```javascript
colors: {
  'monti-black': '#0A0A0A',
  'monti-gray': '#1F1F1F',
  'monti-silver': '#C0C0C0',
  'monti-accent': '#1E3A8A',
}
```

### Tipografías

Las fuentes se cargan desde Google Fonts en `index.html`:
- **Syne** - Display (títulos grandes)
- **Montserrat** - Headings
- **Plus Jakarta Sans** - Body text


## 🎯 Optimizaciones Incluidas

- ✅ Lazy loading de imágenes
- ✅ Animaciones optimizadas con Framer Motion
- ✅ CSS purgeado en producción (TailwindCSS)
- ✅ Componentes modulares y reutilizables
- ✅ Smooth scroll nativo
- ✅ Viewport-based animations (solo anima cuando está visible)


## 📞 Contacto y Soporte

Para modificaciones o consultas sobre este proyecto, contacta al desarrollador.

## 📄 Licencia

Proyecto propietario de Transporte Monti.

---

**Desarrollado para Transporte Monti**
