
import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="section-container">
        <h2 className="section-title">¡Conócenos en 60 segundos!</h2>
        <p className="lead-text">Descubre cómo Emermédica está transformando la atención médica en Colombia</p>
        
        <div className="max-w-3xl mx-auto mt-8">
          <div className="relative rounded-lg shadow-xl overflow-hidden aspect-video">
            {/* Placeholder for video - in a real implementation you would use the actual video file */}
            <div className="absolute inset-0 flex items-center justify-center bg-emermedica-blue/10">
              <div className="text-emermedica-blue text-lg">
                Video de bienvenida - videobienvenida.mp4
              </div>
            </div>
            {/* 
              In a real implementation, you would use:
              <video controls className="w-full">
                <source src="/videobienvenida.mp4" type="video/mp4" />
                Tu navegador no soporta videos HTML5.
              </video>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
