import React from 'react';
import { PhoneCall } from 'lucide-react'; // asegúrate de tener esto arriba
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#003366] text-white pt-6 pb-10">
      <div className="section-container">

        {/* Zona principal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-10 text-center md:text-left">

          {/* Logo + Lema */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img 
              src="https://res.cloudinary.com/dl4buqfbp/image/upload/v1745877797/emermedica-axa-logo_eudtvi.png" 
              alt="AXA COLPATRIA" 
              className="h-24 object-contain"
            />
            <p className="text-gray-300 text-sm max-w-xs">
              Emermédica — Porque tu salud nos mueve
            </p>
          </div>

          {/* Contacto y redes */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex flex-col gap-2 text-gray-300 text-sm">
              {/*
              <a href="mailto:info@emermedica.com.co" className="flex items-center justify-center md:justify-end hover:text-[#28a745] transition">
                <Mail size={18} className="mr-2" />
                info@emermedica.com.co
              </a>
              */}
              <a href="tel:+573244208110" className="flex items-center justify-center md:justify-end hover:text-[#28a745] transition">
                <Phone size={18} className="mr-2" />
                +57 324 420 8110
              </a>
            </div>

            {/* Redes sociales */}
            <div className="flex gap-4 mt-2">
              <a href="https://www.instagram.com/siempre_emermedica/" target="_blank" rel="noopener noreferrer" className="hover:text-[#28a745] transition">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/share/1BtWkGJELR/" target="_blank" rel="noopener noreferrer" className="hover:text-[#28a745] transition">
                <Facebook size={24} />
              </a>

              <a href="https://wa.link/bu57jm" target="_blank" rel="noopener noreferrer" className="hover:text-[#28a745] transition">
              <PhoneCall size={24} />
              </a>
               {/*
              <a href="https://wa.link/bu57jm" target="_blank" rel="noopener noreferrer" className="hover:text-[#28a745] transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M13 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M9 14a5 5 0 0 0 6 0" />
                </svg>
              </a>
           */}
            </div>
          </div>
        </div>

        {/* Línea divisoria + Legal */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {currentYear} Emermédica. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline hover:text-white transition">Políticas de privacidad</a>
            <a href="#" className="hover:underline hover:text-white transition">Términos y condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
