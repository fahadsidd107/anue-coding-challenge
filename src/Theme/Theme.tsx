"use client";

import React from "react";
import DarkModeParallax from "../components/Parallax/DarkModeParallax";
import LightModeParallax from "../components/Parallax/LightModeParallax";
import useDarkModeStore from "../hooks/useDarkModeStore";

const Theme: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isDarkMode = useDarkModeStore((state) => state.isDarkMode);
  return (
    <div
      className={`min-h-screen ${
        isDarkMode
          ? "bg-dark-gradient text-white"
          : "bg-light-gradient text-black"
      }`}
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        {isDarkMode ? <DarkModeParallax /> : <LightModeParallax />}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Theme;
