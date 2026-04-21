import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Shield, Headphones, TrendingUp, MapPin, Award } from 'lucide-react';

const WhyUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Clock,
      title: 'Monitoreo 24/7',
      description: 'Seguimiento en tiempo real de tus cargas en todo momento. Tecnología GPS de última generación.',
    },
    {
      icon: Shield,
      title: 'Flota de excelente estado',
      description: 'Vehículos modernos y mantenidos bajo los más altos estándares de seguridad y eficiencia.',
    },
    {
      icon: Headphones,
      title: 'Atención personalizada',
      description: 'Gestor dedicado a cada cuenta para garantizar comunicación fluida y soluciones ágiles.',
    },
    {
      icon: TrendingUp,
      title: 'Presupuestos exactos',
      description: 'Cotizaciones transparentes sin costos ocultos. Lo que ves es lo que pagas.',
    },
    {
      icon: MapPin,
      title: 'Cobertura provincial',
      description: 'Desde Mar del Plata hacia toda la provincia con tiempos garantizados. Consultar envios interprovinciales.',
    },
    {
      icon: Award,
      title: 'Experiencia comprobada',
      description: 'Más de 25 años respaldando empresas y particulares en sus necesidades logísticas.',
    },
  ];

  return (
    <section id="nosotros" ref={sectionRef} className="relative py-24 md:py-32 bg-monti-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mb-20"
          >
            <span className="text-monti-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
              Por qué elegirnos
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-loose pb-2 mb-6">
              Comprometidos con la
              <br />
              excelencia en cada envío
            </h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              Combinamos experiencia, tecnología y servicio personalizado para ofrecer
              soluciones logísticas que superan las expectativas.
            </p>
          </motion.div>

          {/* Features Grid - Asymmetric Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative">
                  {/* Icon Container */}
                  <div className="mb-6">
                    <div className="relative inline-block">
                      <div className="w-16 h-16 flex items-center justify-center border border-white/20 group-hover:border-monti-accent transition-all duration-300">
                        <feature.icon 
                          className="text-white group-hover:text-monti-accent transition-colors duration-300" 
                          size={30} 
                          strokeWidth={1.5}
                        />
                      </div>
                      {/* Hover effect background */}
                      <div className="absolute inset-0 bg-monti-accent/10 transform scale-0 group-hover:scale-110 transition-transform duration-300 -z-10" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-monti-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative line */}
                  <div className="mt-6 w-12 h-[2px] bg-white/20 group-hover:bg-monti-accent group-hover:w-20 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fleet Section */}
          <motion.div
            id="flota"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-32 grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="/src/img/camion.flota.jpeg"
                alt="Flota de camiones Transporte Monti"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-monti-black/80 to-transparent" />
              
              {/* Badge */}
              <div className="absolute bottom-8 left-8 bg-white text-monti-black px-6 py-3">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm font-medium">Años de trayectoria</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-monti-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
                Nuestra Flota
              </span>
              <h3 className="text-3xl md:text-4xl font-display font-bold leading-loose pb-2 mb-6">
                Tecnología de punta al servicio de tus cargas
              </h3>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Contamos con una flota moderna de vehículos equipados con sistemas de 
                rastreo satelital, control de temperatura y seguros de máxima cobertura.
                Cada unidad es inspeccionada y mantenida bajo los estándares más exigentes.
              </p>
              <ul className="space-y-4">
                {[
                  'Camiones con capacidad desde 3 hasta 28 toneladas',
                  'Sistema GPS en todas las unidades',
                  'Mantenimiento preventivo constante',
                  'Seguro de carga total',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center border border-monti-accent mt-1">
                      <div className="w-2 h-2 bg-monti-accent" />
                    </div>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
