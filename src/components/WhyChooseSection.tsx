import React from 'react';
import { CheckCircle } from 'lucide-react';

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
    <section className="bg-[#003366] text-white py-20">
      <div className="section-container">
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 leading-tight">
          ¿Por qué elegir <span className="text-[#28a745]">Emermédica</span>?
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Imagen */}
          <div className="w-full md:w-1/2 animate-fade-in">
            <img 
              src="https://res.cloudinary.com/dl4buqfbp/image/upload/v1745878238/1_znknrr.jpg" 
              alt="Equipo médico de Emermédica" 
              className="rounded-2xl shadow-2xl mx-auto max-w-full h-auto"
            />
          </div>

          {/* Lista de razones */}
          <div className="w-full md:w-1/2 animate-fade-in-up">
            <ul className="space-y-6">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle size={32} className="text-[#28a745] flex-shrink-0 mt-1" />
                  <span className="text-lg md:text-xl font-medium">{reason}</span>
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
