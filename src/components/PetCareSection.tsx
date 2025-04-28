
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
              src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&q=80&w=800" 
              alt="Mascota feliz y saludable" 
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>
          
          <div className="md:w-1/2 md:pl-10">
            <h2 className="text-3xl font-bold mb-4 text-emermedica-blue">También cuidamos de tu mejor amigo</h2>
            <p className="text-lg text-gray-700 mb-6">
              Tu mascota es parte de la familia, por eso en Emermédica también nos preocupamos por su bienestar. 
              Contamos con servicios veterinarios de emergencia y planes especiales para el cuidado integral de tus mascotas.
            </p>
            <Button 
              className="cta-button"
              onClick={scrollToForm}
            >
              Pregunta por nuestros planes para mascotas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetCareSection;
