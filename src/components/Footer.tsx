
import React from 'react';
import Logo from './Logo';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-emermedica-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <div className="bg-white p-2 rounded">
                <Logo />
              </div>
              <img 
                src="https://res.cloudinary.com/dl4buqfbp/image/upload/v1745864458/logo_axxa_colpatria_vm1yji.png" 
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
            
            <div className="flex justify-center md:justify-end space-x-4 mb-6">
              <a href="https://www.instagram.com/siempre_emermedica/" target="_blank" rel="noopener noreferrer" className="hover:text-emermedica-green">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/share/1BtWkGJELR/" target="_blank" rel="noopener noreferrer" className="hover:text-emermedica-green">
                <Facebook size={24} />
              </a>
              <a href="https://wa.link/3gcsyp" target="_blank" rel="noopener noreferrer" className="hover:text-emermedica-green">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M13 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M9 14a5 5 0 0 0 6 0" />
                </svg>
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
        
        <div className="text-center">
          <a 
            href="https://wa.link/3gcsyp"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-flex items-center"
          >
            ¡AFÍLIATE AHORA!
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
