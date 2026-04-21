import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Número de WhatsApp (reemplazar con el número real)
  const phoneNumber = '5492235458413'; // Formato: código país + código área + número
  const message = encodeURIComponent('Hola, me gustaría solicitar información sobre sus servicios de transporte.');

  useEffect(() => {
    // Mostrar el botón después de un breve delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Mostrar el tooltip automáticamente después de 3 segundos
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
      // Ocultar el tooltip después de 5 segundos
      setTimeout(() => {
        setShowTooltip(false);
      }, 5000);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-20 right-0 mb-2"
              >
                <div className="relative bg-white px-6 py-4 rounded-lg shadow-2xl border border-gray-200 max-w-xs">
                  <p className="text-sm font-medium text-monti-black mb-1">
                    ¿Necesitás ayuda?
                  </p>
                  <p className="text-xs text-gray-600">
                    Chateá con nosotros por WhatsApp
                  </p>
                  {/* Arrow */}
                  <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 260, damping: 20 }}
            onClick={handleClick}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center"
            aria-label="Contactar por WhatsApp"
          >
            {/* Icon */}
            <MessageCircle size={28} strokeWidth={2} />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
