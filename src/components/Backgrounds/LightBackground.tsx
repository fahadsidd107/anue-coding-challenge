import React from 'react';
import LightModeParallax from '../Parallax/LightModeParallax';

const LightBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-light-gradient text-black">
     {/* Parallax Background */}
     <div className="absolute inset-0 z-0">
        <LightModeParallax />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default LightBackground;
