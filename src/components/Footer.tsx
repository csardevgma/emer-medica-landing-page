
import React from 'react';
import Logo from './Logo';
import { Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-emermedica-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <div className="bg-white p-2 rounded">
                <Logo />
              </div>
              <img 
                src="https://via.placeholder.com/100x40?text=AXA" 
                alt="AXA COLPATRIA" 
                className="ml-4 h-10"
              />
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-xl font-semibold mb-4">Emermédica – Porque tu salud nos mueve</p>
            
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 justify-center md:justify-end mb-6">
              <a href="mailto:info@emermedica.com.co" className="flex items-center justify-center md:justify-start hover:text-emermedica-green">
                <Mail size={18} className="mr-2" />
                info@emermedica.com.co
              </a>
              <a href="tel:+573001234567" className="flex items-center justify-center md:justify-start hover:text-emermedica-green">
                <Phone size={18} className="mr-2" />
                +57 300 123 4567
              </a>
            </div>
            
            <div className="text-sm">
              <p>© {currentYear} Emermédica. Todos los derechos reservados.</p>
              <div className="flex space-x-4 justify-center md:justify-end mt-2">
                <a href="#" className="hover:underline">Políticas de privacidad</a>
                <a href="#" className="hover:underline">Términos y condiciones</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
