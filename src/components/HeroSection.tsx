import React from 'react';
import { Button } from "@/components/ui/button";
import Logo from './Logo';

const HeroSection: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-[85vh] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('https://res.cloudinary.com/dl4buqfbp/image/upload/v1745864458/banner_eczayj.png')" }}
    >
      {/* Overlay para mejor contraste */}
      <div className="absolute inset-0 bg-white/60"></div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 py-12 min-h-[85vh]">
        {/* Logo */}
        <Logo className="w-64 mb-10" />

       {/* Título principal */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#003366] leading-tight mb-4">
        Tu Salud en las Mejores Manos
      </h1>

       {/* Subtítulo */}
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold leading-relaxed mb-8">
          Emergencias médicas y consultas domiciliarias 24/7 en Colombia
        </p>

        {/* Botones */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          <Button 
            onClick={scrollToForm}
            className="bg-[#28a745] hover:bg-[#28a745]/90 text-white font-bold px-8 py-4 text-lg md:text-xl rounded-xl shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#28a745]/60 focus:ring-offset-2"
          >
            AFÍLIATE AHORA
          </Button>

          <Button
            asChild
            className="bg-[#003366] hover:bg-[#003366]/90 text-white font-bold px-8 py-4 text-lg md:text-xl rounded-xl shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#003366]/60 focus:ring-offset-2"
          >
            <a
              href="https://wa.link/3gcsyp"
              target="_blank"
              rel="noopener noreferrer"
            >
              CONTÁCTANOS
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
