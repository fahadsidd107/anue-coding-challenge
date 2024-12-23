import React, { useState } from 'react';

const ModeButton: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleMode}
      className="px-3 py-2 bg-gray-600 text-white dark:bg-gray-300 dark:text-black rounded-md transition-all"
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ModeButton;
