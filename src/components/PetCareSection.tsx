import React from 'react';
import { Button } from '@/components/ui/button';

const PetCareSection: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-green-50 py-20">
      <div className="section-container">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          
          {/* Texto */}
          <div className="w-full md:w-1/2 text-center md:text-left animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6 leading-tight">
              ¡Afíliate a Emermédica!
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Contamos con un equipo médico calificado disponible 24/7 para atender emergencias domiciliarias.
              Nuestras ambulancias están equipadas con tecnología de punta para brindar la mejor atención a ti y tu familia.
            </p>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <Button
                onClick={scrollToForm}
                className="bg-[#28a745] hover:bg-[#28a745]/90 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 w-full md:w-auto"
              >
                AFÍLIATE AHORA
              </Button>

              <Button
                asChild
                className="bg-[#003366] hover:bg-[#003366]/90 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 w-full md:w-auto"
              >
                <a 
                  href="https://wa.link/bu57jm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CONTÁCTANOS
                </a>
              </Button>
            </div>
          </div>

          {/* Imagen */}
          <div className="w-full md:w-1/2 animate-fade-in-up">
            <img 
              src="https://res.cloudinary.com/dl4buqfbp/image/upload/v1745878377/bend_rowpoa.png" 
              alt="Ambulancia Emermédica" 
              className="rounded-2xl shadow-2xl mx-auto max-w-full h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default PetCareSection;
