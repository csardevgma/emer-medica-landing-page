
import React from 'react';
import { Check } from 'lucide-react';

const WhyChooseSection: React.FC = () => {
  const reasons = [
    "Cobertura nacional en Colombia",
    "Respuesta ágil y personalizada",
    "Personal médico capacitado",
    "Historia clínica digital",
    "Planes para familias y empresas",
    "Más de 28 años de experiencia",
    "Alianzas con AXA COLPATRIA"
  ];

  return (
    <section className="bg-emermedica-blue text-white py-16">
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-8 text-center">¿Por qué elegir Emermédica?</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9326?auto=format&fit=crop&q=80&w=800" 
              alt="Equipo médico de Emermédica" 
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>
          
          <div className="md:w-1/2 md:pl-10">
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-1 bg-emermedica-green rounded-full p-1">
                    <Check size={16} strokeWidth={3} />
                  </span>
                  <span className="text-lg">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
