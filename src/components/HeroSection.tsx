
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
    <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-start mb-12">
          <Logo />
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emermedica-blue mb-4">
              Tu Salud en las Mejores Manos
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Emergencias médicas y consultas domiciliarias 24/7 en Colombia
            </p>
            <Button 
              className="cta-button text-lg" 
              onClick={scrollToForm}
            >
              AFÍLIATE AHORA
            </Button>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-emermedica-blue/10 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-emermedica-green/10 rounded-full z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                alt="Servicios médicos de Emermédica" 
                className="rounded-lg shadow-xl object-cover h-96 w-full relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
