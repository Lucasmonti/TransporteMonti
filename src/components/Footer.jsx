import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-monti-black text-white">
      {/* Main Footer */}
      <div className="section-padding py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <img
                  src="/src/img/logo.monti.png"
                  alt="Logo Transporte Monti"
                  className="w-40 h-auto brightness-0 invert"
                />
              </div>
              <p className="text-white/70 leading-relaxed mb-6 max-w-md">
                Más de 25 años brindando soluciones logísticas premium con la mayor 
                confiabilidad y profesionalismo. Tu carga en las mejores manos.
              </p>
              {/* Social Media */}
              <div className="flex gap-4">
                
                {/* <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/30 hover:border-white hover:bg-white hover:text-monti-black flex items-center justify-center transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>*/}
                <a
                  href="https://www.instagram.com/transportemonti/"
                  target="_blank"
                  rel="noopener noreferrer"

                  className="w-10 h-10 border border-white/30 hover:border-white hover:bg-white hover:text-monti-black flex items-center justify-center transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a> 
                
                <a
                  href="https://www.linkedin.com/in/nicol%C3%A1s-monti-zanier-ab922b279/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/30 hover:border-white hover:bg-white hover:text-monti-black flex items-center justify-center transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-6">Enlaces Rápidos</h3>
              <ul className="space-y-3">
                {['Servicios', 'Nosotros', 'Contacto'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-white/70 hover:text-white transition-colors duration-300 inline-block group"
                    >
                      <span className="relative">
                        {link}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-6">Contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-monti-accent mt-1 flex-shrink-0" />
                  <span className="text-white/70 text-sm">
                    F. Sanchez 349<br />
                    7600 - Mar del Plata<br />
                    Argentina
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-monti-accent flex-shrink-0" />
                  <a href="tel:+542235458413" className="text-white/70 hover:text-white text-sm transition-colors">
                    +54 223 545-8413
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-monti-accent flex-shrink-0" />
                  <a href="mailto:transportemonti1@gmail.com.ar" className="text-white/70 hover:text-white text-sm transition-colors">
                    transportemonti1@gmail.com.ar
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-padding py-6">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-white/50 text-sm">
              © {currentYear} Transporte Monti. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
