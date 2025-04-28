import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

  const colombianCities = [
    "Barranquilla", "Bogotá DC", "Bucaramanga", "Cali",
    "Cartagena", "Medellín", "Neiva", "Villavicencio"
  ];

  const validateForm = () => {
    let isValid = true;
    const newErrors = { fullName: '', phone: '', email: '', city: '' };

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'El nombre es obligatorio';
      isValid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es obligatorio';
      isValid = false;
    } else if (!/^\d{7,10}$/.test(formData.phone)) {
      newErrors.phone = 'Ingresa un número de teléfono válido';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'El correo es obligatorio';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ingresa un correo electrónico válido';
      isValid = false;
    }
    if (!formData.city) {
      newErrors.city = 'La ciudad es obligatoria';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, city: value }));
    if (errors.city) {
      setErrors(prev => ({ ...prev, city: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);

      toast.success('¡Gracias por tu interés!', {
        description: 'Hemos recibido tus datos correctamente',
      });

      setFormData({ fullName: '', phone: '', email: '', city: '' });
    }
  };

  return (
    <section id="lead-form" className="bg-white py-16">
      <div className="section-container">
        <div className="max-w-lg mx-auto bg-white rounded-2xl p-10 shadow-xl border border-[#003366]/20 relative overflow-hidden animate-fade-in">
          
          {/* Línea decorativa */}
          <div className="absolute top-0 left-0 w-full h-1 bg-[#28a745]"></div>

          <h2 className="text-3xl font-bold text-[#003366] text-center mb-4">¡Afíliate a Emermédica hoy!</h2>
          <p className="text-gray-700 text-center mb-8 text-base">Completa el formulario y un asesor se pondrá en contacto contigo.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre */}
            <div>
              <Label htmlFor="fullName" className="text-[#003366] font-medium block mb-1">Nombre completo</Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="Escribe tu nombre completo"
                value={formData.fullName}
                onChange={handleChange}
                className={`h-12 rounded-lg border focus:border-[#28a745] transition ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            {/* Teléfono */}
            <div>
              <Label htmlFor="phone" className="text-[#003366] font-medium block mb-1">Teléfono de contacto</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Ej: 3001234567"
                value={formData.phone}
                onChange={handleChange}
                className={`h-12 rounded-lg border focus:border-[#28a745] transition ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Correo */}
            <div>
              <Label htmlFor="email" className="text-[#003366] font-medium block mb-1">Correo electrónico</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
                className={`h-12 rounded-lg border focus:border-[#28a745] transition ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Ciudad */}
            <div>
              <Label htmlFor="city" className="text-[#003366] font-medium block mb-1">Ciudad de residencia</Label>
              <Select value={formData.city} onValueChange={handleSelectChange}>
                <SelectTrigger
                  id="city"
                  className={`h-12 rounded-lg border focus:border-[#28a745] transition ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <SelectValue placeholder="Selecciona tu ciudad" />
                </SelectTrigger>
                <SelectContent>
                  {colombianCities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
            </div>

            {/* Botón y seguridad */}
            <div className="space-y-4 mt-6">
              <Button
                type="submit"
                className="w-full h-14 bg-[#28a745] hover:bg-[#28a745]/90 text-white font-bold rounded-xl shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"
              >
                AFÍLIATE AHORA
              </Button>

              <div className="flex items-center justify-center text-gray-600 text-sm mt-2">
                <span className="text-xl mr-2">🔒</span>
                Tus datos están 100% protegidos.
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
