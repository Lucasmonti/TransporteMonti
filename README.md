# Transporte Monti · Landing Page

Institutional landing page for **Transporte Monti** (Mar del Plata, Argentina), built with React to showcase services, fleet, and contact information on a single page.

## Live Demo

🔗 https://transporte-monti.vercel.app/

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion
- Lucide React

## Key Features

- Responsive design (mobile-first)
- Smooth internal scroll navigation
- Sections: Hero, Services, About/Fleet, and Contact
- Floating WhatsApp button
- SEO and Open Graph metadata in `index.html`

## Requirements

- Node.js 18+ (recommended)
- npm

## Run Locally

```bash
npm install
npm run dev
```

Open at: `http://localhost:5173`

## Available Scripts

```bash
npm run dev      # development server
npm run build    # production build
npm run preview  # preview production build locally
```

## Project Structure

```txt
.
├── public/img/                # site images
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

## Deployment

The project is deployed on **Vercel** and connected to the repository.

## Screenshot (optional)

Not required, but **recommended** to give readers a quick visual without opening the link.  
To add one, save an image in `public` or `docs` and reference it like this:

```md
![Home Transporte Monti](./docs/screenshot-home.png)
```

## License

Private project for Transporte Monti.
