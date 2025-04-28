
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
    <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="https://res.cloudinary.com/dl4buqfbp/image/upload/v1745864459/ambu_zuqecg.png" 
              alt="Ambulancia Emermédica" 
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>
          
          <div className="md:w-1/2 md:pl-10">
            <h2 className="text-3xl font-bold mb-4 text-emermedica-blue">¡Afíliate a Emermédica!</h2>
            <p className="text-lg text-gray-700 mb-6">
              Contamos con un equipo médico calificado disponible 24/7 para atender emergencias domiciliarias.
              Nuestras ambulancias están equipadas con tecnología de punta para brindar la mejor atención.
            </p>
            <a 
              href="https://wa.link/3gcsyp"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button inline-flex items-center"
            >
              ¡AFÍLIATE AHORA!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetCareSection;
