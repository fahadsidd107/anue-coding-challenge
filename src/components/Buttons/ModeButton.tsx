"use client"

import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";

interface DarkModeToggleButtonProps {
  isDarkMode: boolean;
  onToggle: (value: boolean) => void;
}

const DarkModeToggleButton: React.FC<DarkModeToggleButtonProps> = ({
  isDarkMode,
  onToggle,
}) => {
  return (
    <DarkModeToggle
      onChange={onToggle}
      checked={isDarkMode}
      size={70} // Adjust size as needed
    />
  );
};

export default DarkModeToggleButton;
