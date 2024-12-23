import React from 'react';
import LightModeParallax from '../Parallax/LightModeParallax';

const LightBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-light-gradient text-black">
      {children}
      <LightModeParallax/>
    </div>
  );
};

export default LightBackground;
