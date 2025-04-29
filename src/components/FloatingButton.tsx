import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Ícono oficial de WhatsApp

interface FloatingButtonsProps {
  targetId: string;
  whatsappNumber: string; // En formato internacional, sin símbolos: 5491123456789
}

const FloatingButtons: React.FC<FloatingButtonsProps> = ({ targetId, whatsappNumber }) => {
  const scrollToTarget = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/573244208110`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Botón de Afiliación */}
      <button
        onClick={scrollToTarget}
        className="fixed bottom-4 right-4 z-50
          bg-[#28a745] hover:bg-[#218838] transition-colors
          text-white font-medium py-3 px-6
          rounded-full shadow-md
          flex items-center justify-center
          md:bottom-6 md:right-6
          md:w-auto w-auto max-w-[calc(100%-32px)] md:mx-0 mx-4
          lg:px-8 lg:py-4 lg:text-lg
          sm:text-sm sm:px-5 sm:py-2"
      >
        Afíliate Ahora 🚑
      </button>

      {/* Botón de WhatsApp */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-20 left-4 z-50
          bg-[#25D366] hover:bg-[#1ebe5b] transition-colors
          text-white py-3 px-3
          rounded-full shadow-md
          flex items-center justify-center
          md:bottom-6 md:left-6"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp className="text-2xl md:text-3xl" />
      </button>
    </>
  );
};

export default FloatingButtons;
