import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Dirección',
      content: 'F. Sanchez 349',
      subcontent: '7600 - Mar del Plata, Argentina',
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+54 223 545-8413',
      subcontent: 'Lun a Vie: 8:00 - 16:00hs',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'transportemonti1@gmail.com.ar',
      subcontent: 'Respuesta en 24hs',
    },
  ];

  return (
    <section id="contacto" ref={sectionRef} className="py-24 md:py-32 bg-gray-50">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-monti-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
              Contacto
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-monti-black leading-loose pb-2 mb-6">
              Solicita tu presupuesto
              <br />
              sin compromiso
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Contactanos a través de cualquiera de nuestros canales disponibles
            </p>
          </motion.div>

          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white p-8 border border-gray-200 hover:border-monti-black transition-colors duration-0 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border-2 border-monti-black group-hover:bg-monti-black transition-colors duration-0">
                    <info.icon 
                      className="text-monti-black group-hover:text-white transition-colors duration-0" 
                      size={22} 
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-monti-black mb-2">
                      {info.title}
                    </h3>
                    <p className="text-monti-gray font-medium mb-1">
                      {info.content}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {info.subcontent}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Horarios de Atención */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white p-8 border border-gray-200 hover:border-monti-black transition-colors duration-0 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-monti-black group-hover:bg-monti-black transition-colors duration-0">
                  <Clock className="text-monti-black group-hover:text-white transition-colors duration-0" size={22} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-monti-black mb-2">
                    Horarios de Atención
                  </h3>
                  <div className="space-y-2 text-monti-black">
                    <p>Lunes a Viernes: 8:00 - 16:00hs</p>
                    <p>Sábados: 8:00 - 13:00hs</p>
                    <p className="font-medium pt-2">
                      Monitoreo de cargas 24/7
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
