// Navbar.tsx
import React, { useEffect } from "react";
import DarkModeToggleButton from "../Buttons/ModeButton"; 
import { useTaskStore } from "@/hooks/useTaskStore";
import useDarkModeStore from "../../hooks/useDarkModeStore";

const Navbar: React.FC = () => {
  const { tasks, fetchTasks } = useTaskStore();
  const { isDarkMode, toggleDarkMode } = useDarkModeStore(); 

  useEffect(() => {
    // Fetch tasks when the page loads
    fetchTasks().catch((err) => console.error("Error fetching tasks:", err));
  }, [fetchTasks]);

  return (
    <nav className="flex justify-between items-center p-4 bg-opacity-70 backdrop-blur-lg">
      {/* Left: Task count */}
      <div className="text-sm font-medium">
        Number of Tasks: <span className="font-bold">{tasks.length || 0}</span>
      </div>

      {/* Center: Title */}
      <h1 className="text-xl font-semibold">Your Todos</h1>

      {/* Right: Dark mode toggle button */}
      <DarkModeToggleButton
        isDarkMode={isDarkMode}
        onToggle={toggleDarkMode}
      />
    </nav>
  );
};

export default Navbar;
