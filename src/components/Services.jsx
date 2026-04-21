import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Package, Building2, Home, TruckIcon } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Package,
      title: 'Cargas Generales',
      description: 'Transporte seguro de mercadería general con seguimiento en tiempo real y cobertura nacional.',
      features: ['Seguimiento GPS', 'Seguro incluido', 'Embalaje profesional'],
    },
    {
      icon: Building2,
      title: 'Logística Corporativa',
      description: 'Soluciones integrales para empresas con necesidades de distribución constante y programada.',
      features: ['Contratos anuales', 'Descuentos especiales', 'Gestor dedicado'],
    },
    {
      icon: Home,
      title: 'Mudanzas Premium',
      description: 'Servicio de mudanzas residenciales y corporativas con atención personalizada y profesional.',
      features: ['Embalaje completo', 'Montaje/Desmontaje', 'Almacenamiento'],
    },
    {
      icon: TruckIcon,
      title: 'Distribución',
      description: 'Red de distribución eficiente para entregas programadas en plazos exactos y horarios coordinados.',
      features: ['Entregas programadas', 'Flota moderna', 'Rutas optimizadas'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="servicios" ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-20"
        >
          <span className="text-monti-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
            Servicios
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-monti-black leading-loose pb-2 mb-6">
            Soluciones logísticas
            <br />
            a medida de tu negocio
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Ofrecemos servicios especializados con la más alta calidad y profesionalismo
            para garantizar la satisfacción de nuestros clientes.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-white border border-gray-200 hover:border-monti-black transition-all duration-300 overflow-hidden"
            >
              {/* Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-monti-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="p-8 md:p-10">
                {/* Icon */}
                <div className="mb-8">
                  <div className="w-14 h-14 flex items-center justify-center border-2 border-monti-black group-hover:bg-monti-black transition-colors duration-300">
                    <service.icon 
                      className="text-monti-black group-hover:text-white transition-colors duration-300" 
                      size={28} 
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-bold text-monti-black mb-4 group-hover:text-monti-accent transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1 h-1 bg-monti-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            ¿No encontrás lo que buscás? Consulta por servicios personalizados
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-monti-black text-white font-semibold tracking-wide hover:bg-monti-accent transition-colors duration-300"
          >
            Consultar ahora
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
