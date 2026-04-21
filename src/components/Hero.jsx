import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/img/camion.fondo.jpeg"
          alt="Camión de transporte en carretera"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        
        {/* Animated gradient overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-gradient-to-r from-monti-accent/20 to-transparent"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding w-full pt-32 md:pt-40">
        <div className="max-w-5xl mx-auto text-center">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 text-xs md:text-sm font-medium tracking-widest uppercase">
              Mar del Plata • Argentina
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-16"
          >
            Logística Premium.
            <br />
            Seguridad en cada kilómetro.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            <br className="hidden md:block" />
            Confianza, puntualidad y tecnología.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
          >
            {/* Primary CTA */}
            <a
              href="#contacto"
              onClick={(e) => scrollToSection(e, '#contacto')}
              className="group px-10 py-5 border-2 border-white bg-white/10 backdrop-blur-sm text-white font-semibold text-base md:text-lg tracking-wide w-full sm:w-auto flex items-center justify-center gap-3 transition-all duration-300 hover:bg-white/5"
            >
              Cotizar Envío
              <ChevronDown className="transition-transform duration-300 group-hover:translate-x-1" size={20} />
            </a>

            {/* Secondary CTA */}
            <a
              href="#servicios"
              onClick={(e) => scrollToSection(e, '#servicios')}
              className="group px-10 py-5 border-2 border-white bg-white/10 backdrop-blur-sm text-white font-semibold text-base md:text-lg tracking-wide w-full sm:w-auto flex items-center justify-center gap-3 transition-all duration-300 hover:bg-white/5"
            >
              Nuestros Servicios
              <ChevronDown className="transition-transform duration-300 group-hover:translate-y-1" size={20} />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-20 mb-32 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { value: '25+', label: 'Años de experiencia' },
              { value: '24/7', label: 'Monitoreo continuo' },
              { value: '100%', label: 'Asegurado' },
              { value: '200+', label: 'Clientes satisfechos' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-white/70 font-light">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
