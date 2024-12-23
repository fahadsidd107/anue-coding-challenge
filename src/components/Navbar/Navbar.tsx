import React from 'react';

interface NavbarProps {
  onToggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleDarkMode, isDarkMode }) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-opacity-70 backdrop-blur-lg">
      {/* Left: Task count */}
      <div className="text-sm font-medium">
        Number of Tasks: <span className="font-bold">5</span> {/* Replace 5 with actual task count */}
      </div>

      {/* Center: Title */}
      <h1 className="text-xl font-semibold">Your Todos</h1>

      {/* Right: Dark mode toggle button */}
      <button
        onClick={onToggleDarkMode}
        className={`px-4 py-2 rounded ${
          isDarkMode
            ? 'bg-gray-600 text-white hover:bg-gray-700'
            : 'bg-gray-200 text-black hover:bg-gray-300'
        }`}
      >
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
