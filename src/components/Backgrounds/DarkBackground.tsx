import React from 'react';
import DarkModeParallax from '../Parallax/DarkModeParallax';

const DarkBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-dark-gradient text-white">
{/* Parallax Background */}
<div className="absolute inset-0 z-0">
        <DarkModeParallax />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default DarkBackground;
