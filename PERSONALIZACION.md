# 🎨 Guía Rápida de Personalización

Esta guía te ayudará a personalizar rápidamente los aspectos clave de la landing page.

## 📝 Contenido Editable

### 1. Información de la Empresa

**Archivo**: `src/components/Contact.jsx` y `src/components/Footer.jsx`

```javascript
// Dirección
'F. Sanchez 349, 7600 - Mar del Plata, Argentina'

// Teléfono
'+54 223 545-8413'

// Email
'transportemonti1@gmail.com.ar'
```

### 2. WhatsApp

**Archivo**: `src/components/WhatsAppButton.jsx`

```javascript
// Línea 10 - Cambia el número (formato: código país + área + número)
const phoneNumber = '5492235458413';

// Línea 11 - Personaliza el mensaje predeterminado
const message = encodeURIComponent('Tu mensaje aquí');
```

### 3. Textos del Hero

**Archivo**: `src/components/Hero.jsx`

```javascript
// Línea 45-52 - Titular principal
<h1>Logística Premium.<br />Seguridad en cada kilómetro.</h1>

// Línea 66-69 - Subtítulo
<p>Soluciones de transporte de carga desde Mar del Plata hacia todo el país...</p>

// Línea 75-95 - Botones CTA
"Cotizar Envío"
"Nuestros Servicios"
```

### 4. Estadísticas del Hero

**Archivo**: `src/components/Hero.jsx` (líneas 107-114)

```javascript
{ value: '15+', label: 'Años de experiencia' },
{ value: '24/7', label: 'Monitoreo continuo' },
{ value: '100%', label: 'Asegurado' },
{ value: '500+', label: 'Clientes satisfechos' },
```

### 5. Servicios

**Archivo**: `src/components/Services.jsx` (líneas 8-31)

Cada servicio tiene:
- `icon`: Icono (de lucide-react)
- `title`: Título del servicio
- `description`: Descripción
- `features`: Array de características

### 6. Propuesta de Valor

**Archivo**: `src/components/WhyUs.jsx` (líneas 8-33)

Similar a servicios, edita el array `features`.

### 7. Redes Sociales

**Archivo**: `src/components/Footer.jsx` (líneas 38-58)

```javascript
// Cambia los href="#" por tus URLs reales
<a href="https://facebook.com/tupagina" ...>
<a href="https://instagram.com/tupagina" ...>
<a href="https://linkedin.com/company/tupagina" ...>
```

## 🖼️ Imágenes

### Reemplazar Placeholders

1. **Hero Background** (`src/components/Hero.jsx`, línea 17)
   ```javascript
   src="https://images.unsplash.com/photo-..."
   ```
   Reemplazar con: `src="/images/hero-background.jpg"`

2. **Flota** (`src/components/WhyUs.jsx`, línea 130)
   ```javascript
   src="https://images.unsplash.com/photo-..."
   ```
   Reemplazar con: `src="/images/flota.jpg"`

3. Coloca tus imágenes en una carpeta `public/images/`

### Optimización de Imágenes

- Formato recomendado: **WebP** o **JPEG optimizado**
- Tamaño Hero: 1920x1080px (Full HD)
- Tamaño Flota: 1200x900px
- Compresión: [TinyPNG](https://tinypng.com/) o [Squoosh](https://squoosh.app/)

## 🎨 Colores

**Archivo**: `tailwind.config.js` (líneas 8-13)

```javascript
colors: {
  'monti-black': '#0A0A0A',    // Negro principal
  'monti-gray': '#1F1F1F',     // Gris oscuro
  'monti-silver': '#C0C0C0',   // Plateado
  'monti-accent': '#1E3A8A',   // Azul de acento (botones, hover)
},
```

### Cambiar Color de Acento

Si quieres cambiar el color de acento a otro (ej. dorado, verde):

```javascript
'monti-accent': '#D4AF37',  // Dorado
'monti-accent': '#10B981',  // Verde
'monti-accent': '#8B5CF6',  // Morado
```

## 🔤 Fuentes

Las fuentes se cargan desde Google Fonts. Para cambiarlas:

1. Ve a [Google Fonts](https://fonts.google.com/)
2. Selecciona tus fuentes
3. Copia el `<link>` en `index.html`
4. Actualiza `tailwind.config.js`:

```javascript
fontFamily: {
  'display': ['Tu Fuente Display', 'sans-serif'],
  'sans': ['Tu Fuente Body', 'sans-serif'],
  'heading': ['Tu Fuente Heading', 'sans-serif'],
},
```

## 📧 Integrar Formulario

### Opción 1: EmailJS (Gratis, fácil)

1. Crea cuenta en [EmailJS](https://www.emailjs.com/)
2. Instala: `npm install @emailjs/browser`
3. En `Contact.jsx`:

```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    );
    alert('¡Mensaje enviado con éxito!');
  } catch (error) {
    alert('Error al enviar');
  } finally {
    setIsSubmitting(false);
  }
};
```

### Opción 2: Formspree (Sin código backend)

1. Crea cuenta en [Formspree](https://formspree.io/)
2. En `Contact.jsx`, cambia el form:

```javascript
<form 
  action="https://formspree.io/f/YOUR_FORM_ID" 
  method="POST"
  onSubmit={handleSubmit}
>
```

### Opción 3: Backend propio

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  const response = await fetch('https://tu-api.com/contacto', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  // Manejar respuesta...
};
```

## 🚀 Deploy Rápido

### Vercel (Recomendado - GRATIS)

1. Push tu código a GitHub
2. Ir a [Vercel](https://vercel.com)
3. "Import Project"
4. Seleccionar repositorio
5. Vercel detecta Vite automáticamente
6. Click "Deploy" ✨

### Netlify (También Gratis)

```bash
npm run build
# Arrastra carpeta 'dist' a netlify.com/drop
```

## 🔧 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build producción
npm run build

# Preview build
npm run preview

# Instalar nueva dependencia
npm install nombre-paquete

# Limpiar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
```

## ✅ Checklist Pre-Launch

- [ ] Cambiar número de WhatsApp
- [ ] Actualizar email de contacto
- [ ] Reemplazar imágenes placeholder
- [ ] Configurar formulario de contacto
- [ ] Agregar URLs de redes sociales
- [ ] Personalizar textos y servicios
- [ ] Testear en mobile
- [ ] Verificar enlaces internos
- [ ] Optimizar imágenes
- [ ] Build y test de producción

## 🆘 Problemas Comunes

### El sitio no carga
```bash
npm install
npm run dev
```

### Errores de Tailwind
```bash
npm install -D tailwindcss postcss autoprefixer
```

### Animaciones no funcionan
```bash
npm install framer-motion
```

---

¿Dudas? Revisa el `README.md` principal o la documentación de:
- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [TailwindCSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
