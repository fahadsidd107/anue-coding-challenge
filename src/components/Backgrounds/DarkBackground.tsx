import React from 'react';
import DarkModeParallax from '../Parallax/DarkModeParallax';

const DarkBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-dark-gradient text-white">
    
    {children}
  <DarkModeParallax/>
    </div>
  );
};

export default DarkBackground;
