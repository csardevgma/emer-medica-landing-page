
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import PetCareSection from '@/components/PetCareSection';
import LeadForm from '@/components/LeadForm';
import FloatingButton from '@/components/FloatingButton';

import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/sonner";

const Index: React.FC = () => {
  useEffect(() => {
    // Update the document title
    document.title = "Emermédica - Tu Salud en las Mejores Manos";

    // Animation on scroll logic
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // Cleanup
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Toaster position="top-center" />
      
      <FloatingButton targetId="lead-form" />
      
      <HeroSection />
      <BenefitsSection />
      <WhyChooseSection />
      <PetCareSection />
      
      <div id="lead-form">
        <LeadForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
