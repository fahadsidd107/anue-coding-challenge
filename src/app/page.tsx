"use client";

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import LightBackground from "../components/Backgrounds/LightBackground";
import DarkBackground from "../components/Backgrounds/DarkBackground";
import useDarkModeStore from "../hooks/useDarkModeStore"; // Zustand store

const Page: React.FC = () => {
  const { isDarkMode } = useDarkModeStore(); // Access Zustand state

  return (
    <div>
      {isDarkMode ? (
        <DarkBackground>
          <Navbar />
          <div className="p-6">
            <h1 className="text-2xl font-bold">Welcome to Dark Mode!</h1>
          </div>
        </DarkBackground>
      ) : (
        <LightBackground>
          <Navbar />
          <div className="p-6">
            <h1 className="text-2xl font-bold">Welcome to Light Mode!</h1>
          </div>
        </LightBackground>
      )}
    </div>
  );
};

export default Page;
