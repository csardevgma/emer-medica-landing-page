import React from 'react';
import { Home, Monitor, Ambulance, Clock, Stethoscope, HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, icon }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className="flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
    >
      <div className="mb-6 text-[#003366] group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#003366] mb-2">{title}</h3>
      <p className="text-gray-600 text-base">{description}</p>
    </motion.div>
  );
};

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: "Atención médica domiciliaria 24/7",
      description: "Médicos especializados en tu hogar a cualquier hora del día o noche.",
      icon: <Home size={48} strokeWidth={1.2} />
    },
    {
      title: "Telemedicina inmediata",
      description: "Consultas virtuales con médicos especializados sin salir de casa.",
      icon: <Monitor size={48} strokeWidth={1.2} />
    },
    {
      title: "Ambulancias medicalizadas",
      description: "Flota equipada y personal capacitado para emergencias reales.",
      icon: <Ambulance size={48} strokeWidth={1.2} />
    },
    {
      title: "Urgencias médicas rápidas",
      description: "Respuesta inmediata en situaciones críticas de salud.",
      icon: <Clock size={48} strokeWidth={1.2} />
    },
    {
      title: "Consulta médica general",
      description: "Cuida tu salud y la de tu familia con médicos de confianza.",
      icon: <Stethoscope size={48} strokeWidth={1.2} />
    },
    {
      title: "Cuidado para mascotas",
      description: "Atención veterinaria en casa para tus compañeros más fieles.",
      icon: <HeartPulse size={48} strokeWidth={1.2} />
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="section-container text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#003366] mb-6 leading-tight">
          Servicios pensados para proteger lo más valioso: <br />tu salud y la de tu familia
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
          Estamos contigo cuando más lo necesitas, con atención médica integral, humana y oportuna.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={<div className="text-[#28a745]">{benefit.icon}</div>}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
