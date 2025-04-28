
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
  });
  
  const [errors, setErrors] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      fullName: '',
      phone: '',
      email: '',
      city: '',
    };

    // Validate name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'El nombre es obligatorio';
      isValid = false;
    }

    // Validate phone
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es obligatorio';
      isValid = false;
    } else if (!/^\d{7,10}$/.test(formData.phone)) {
      newErrors.phone = 'Ingresa un número de teléfono válido';
      isValid = false;
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'El correo es obligatorio';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ingresa un correo electrónico válido';
      isValid = false;
    }

    // Validate city
    if (!formData.city.trim()) {
      newErrors.city = 'La ciudad es obligatoria';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would normally send the data to a backend
      console.log('Form submitted with data:', formData);
      
      // Show success message
      toast.success('¡Gracias por tu interés! Pronto nos comunicaremos contigo', {
        description: 'Hemos recibido tus datos correctamente',
      });
      
      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        city: '',
      });
    }
  };

  return (
    <section className="bg-white py-16" id="lead-form">
      <div className="section-container">
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-emermedica-blue text-center">
            ¡Afíliate a Emermédica hoy!
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Completa el formulario y un asesor se pondrá en contacto contigo para brindarte toda la información sobre nuestros planes.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="fullName">Nombre completo</Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="Escribe tu nombre completo"
                value={formData.fullName}
                onChange={handleChange}
                className={`form-input ${errors.fullName ? 'border-emermedica-red' : ''}`}
              />
              {errors.fullName && <p className="text-emermedica-red text-sm mt-1">{errors.fullName}</p>}
            </div>
            
            <div>
              <Label htmlFor="phone">Teléfono de contacto</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Ej: 3001234567"
                value={formData.phone}
                onChange={handleChange}
                className={`form-input ${errors.phone ? 'border-emermedica-red' : ''}`}
              />
              {errors.phone && <p className="text-emermedica-red text-sm mt-1">{errors.phone}</p>}
            </div>
            
            <div>
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? 'border-emermedica-red' : ''}`}
              />
              {errors.email && <p className="text-emermedica-red text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <Label htmlFor="city">Ciudad de residencia</Label>
              <Input
                id="city"
                name="city"
                placeholder="Ej: Bogotá"
                value={formData.city}
                onChange={handleChange}
                className={`form-input ${errors.city ? 'border-emermedica-red' : ''}`}
              />
              {errors.city && <p className="text-emermedica-red text-sm mt-1">{errors.city}</p>}
            </div>
            
            <Button type="submit" className="w-full cta-button">
              AFÍLIATE AHORA
            </Button>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              Al enviar este formulario, aceptas nuestra política de privacidad y el tratamiento de tus datos personales.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
