
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
            <div className="flex flex-wrap gap-4">
              <Button 
                className="cta-button text-lg" 
                onClick={scrollToForm}
              >
                AFÍLIATE AHORA
              </Button>
              <a 
                href="https://wa.link/3gcsyp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emermedica-blue text-white font-medium py-3 px-8 rounded-lg shadow-md hover:bg-emermedica-blue/90 transition duration-300 text-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M13 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M9 14a5 5 0 0 0 6 0" />
                </svg>
                CONTÁCTANOS
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-emermedica-blue/10 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-emermedica-green/10 rounded-full z-0"></div>
              <img 
                src="/emermedica-family.png" 
                alt="Familia protegida por Emermédica" 
                className="rounded-lg shadow-xl object-cover w-full relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
