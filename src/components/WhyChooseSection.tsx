import React, { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';
import { Dialog } from '@headlessui/react';

const WhyChooseSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const benefits = [
    { text: "Cobertura nacional", highlight: "en Colombia" },
    { text: "Respuesta ágil", highlight: "y personalizada" },
    { text: "Atención por", highlight: "personal médico capacitado" },
    { text: "Acceso a tu", highlight: "historia clínica digital" },
    { text: "Planes pensados para", highlight: "familias y empresas" },
    { text: "Más de", highlight: "28 años de experiencia" },
    { text: "Respaldo de", highlight: "AXA COLPATRIA" },
    { text: "Atención domiciliaria", highlight: "las 24 horas" },
    { text: "Cobertura de urgencias", highlight: "en todo el país" },
    { text: "Tecnología de punta", highlight: "para priorizar tu salud" },
  ];

  return (
    <section className="bg-[#003366] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Imagen con popup */}
        <div className="w-full lg:w-1/2 relative group cursor-pointer" onClick={() => setIsOpen(true)}>
          <img
            src="https://res.cloudinary.com/dl4buqfbp/image/upload/v1745938565/beneficcs2_desrxw.png"
            alt="Beneficios Emermédica"
            className="rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
          />
          <p className="text-sm text-white/60 mt-2 text-center">Haz clic para ampliar</p>
        </div>

        {/* Texto y beneficios */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-5xl font-extrabold mb-5 leading-tight">
            ¿Por qué elegir <span className="text-[#28a745]">Emermédica</span>?
          </h2>
          <p className="text-lg text-white/80 mb-6">
            No solo te acompañamos en emergencias. Somos tu aliado constante en salud, con atención humana, tecnología médica y experiencia comprobada.
          </p>
          <ul className="space-y-5">
            {benefits.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#28a745] mt-1" />
                <span className="text-lg font-medium leading-snug">
                  {item.text} <span className="text-[#28a745] font-semibold">{item.highlight}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Modal de imagen ampliada */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4">
          <Dialog.Panel className="relative max-w-4xl w-full">
            <img
              src="https://res.cloudinary.com/dl4buqfbp/image/upload/v1745938565/beneficcs2_desrxw.png"
              alt="Beneficios Emermédica ampliado"
              className="rounded-2xl w-full h-auto"
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-[#28a745]"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
};

export default WhyChooseSection;
