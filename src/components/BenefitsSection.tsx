import React from 'react';
import { Home, Monitor, Ambulance, Clock, Stethoscope, HeartPulse } from 'lucide-react';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="mb-6 text-emermedica-blue">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[#003366] mb-3">{title}</h3>
      <p className="text-gray-600 text-base">{description}</p>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: "Atención médica domiciliaria 24/7",
      description: "Médicos especializados en tu hogar a cualquier hora del día o noche.",
      icon: <Home size={48} strokeWidth={1} className="text-[#003366]" />
    },
    {
      title: "Telemedicina inmediata",
      description: "Consultas virtuales con médicos especializados sin salir de casa.",
      icon: <Monitor size={48} strokeWidth={1} className="text-[#003366]" />
    },
    {
      title: "Ambulancias medicalizadas",
      description: "Flota de ambulancias equipadas y personal capacitado para emergencias.",
      icon: <Ambulance size={48} strokeWidth={1} className="text-[#003366]" />
    },
    {
      title: "Urgencias médicas rápidas",
      description: "Atención prioritaria en situaciones de emergencia médica.",
      icon: <Clock size={48} strokeWidth={1} className="text-[#003366]" />
    },
    {
      title: "Consulta médica general",
      description: "Atención médica general para toda la familia cuando lo necesites.",
      icon: <Stethoscope size={48} strokeWidth={1} className="text-[#003366]" />
    },
    {
      title: "Cuidado para mascotas",
      description: "Servicios veterinarios de urgencia para tus mejores amigos.",
      icon: <HeartPulse size={48} strokeWidth={1} className="text-[#003366]" /> // Mejor icono para mascotas
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="section-container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-6">Nuestros Servicios</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
          Cuidamos de ti y tu familia con los mejores servicios médicos domiciliarios.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
