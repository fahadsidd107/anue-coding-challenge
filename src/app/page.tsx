"use client"

import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import LightBackground from '../components/Backgrounds/LightBackground';
import DarkBackground from '../components/Backgrounds/DarkBackground';

const Page: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => setIsDarkMode((prev) => !prev);

  return (
    <div>
      {isDarkMode ? (
        <DarkBackground>
          <Navbar onToggleDarkMode={handleToggle} isDarkMode={isDarkMode} />
          {/* Main Content */}
          <div className="p-6">
            <h1 className="text-2xl font-bold">Welcome to Dark Mode!</h1>
          </div>
        </DarkBackground>
      ) : (
        <LightBackground>
          <Navbar onToggleDarkMode={handleToggle} isDarkMode={isDarkMode} />
          {/* Main Content */}
          <div className="p-6">
            <h1 className="text-2xl font-bold">Welcome to Light Mode!</h1>
          </div>
        </LightBackground>
      )}
    </div>
  );
};

export default Page;
