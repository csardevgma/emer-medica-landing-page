
import React from 'react';
import { Ambulance, Phone, Calendar, Home, Users } from 'lucide-react';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, icon }) => {
  return (
    <div className="benefit-card">
      <div className="text-emermedica-blue mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: "Atención médica domiciliaria 24/7",
      description: "Médicos especializados en tu hogar a cualquier hora del día o noche.",
      icon: <Home size={40} strokeWidth={1.5} />
    },
    {
      title: "Telemedicina inmediata",
      description: "Consultas virtuales con médicos especializados sin salir de casa.",
      icon: <Phone size={40} strokeWidth={1.5} />
    },
    {
      title: "Ambulancias medicalizadas",
      description: "Flota de ambulancias equipadas y personal capacitado para emergencias.",
      icon: <Ambulance size={40} strokeWidth={1.5} />
    },
    {
      title: "Urgencias médicas rápidas",
      description: "Atención prioritaria en situaciones de emergencia médica.",
      icon: <Calendar size={40} strokeWidth={1.5} />
    },
    {
      title: "Consulta médica general",
      description: "Atención médica general para toda la familia cuando lo necesites.",
      icon: <Users size={40} strokeWidth={1.5} />
    },
    {
      title: "Cuidado para mascotas",
      description: "Servicios veterinarios de urgencia para tus mejores amigos.",
      icon: <Home size={40} strokeWidth={1.5} />
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="section-container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="lead-text">Cuidamos de ti y tu familia con los mejores servicios médicos domiciliarios</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
