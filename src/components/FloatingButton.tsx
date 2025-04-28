import React from 'react';

interface FloatingButtonProps {
  targetId: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ targetId }) => {
  const scrollToTarget = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToTarget}
      className="fixed bottom-4 right-4 z-50
        bg-[#28a745] hover:bg-[#218838] transition-colors
        text-white font-medium py-3 px-6
        rounded-full shadow-md
        flex items-center justify-center
        md:bottom-6 md:right-6
        md:w-auto w-[auto] max-w-[calc(100%-32px)] md:mx-0 mx-4
        lg:px-8 lg:py-4 lg:text-lg
        sm:text-sm sm:px-5 sm:py-2"
    >
      Afíliate Ahora 🚑
    </button>
  );
};

export default FloatingButton;
