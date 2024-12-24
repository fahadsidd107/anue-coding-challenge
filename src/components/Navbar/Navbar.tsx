// Navbar.tsx
import React, { useEffect, useState } from "react";
import DarkModeToggleButton from "../Buttons/ModeButton"; // Adjust path as needed
import { useTaskStore } from "@/hooks/useTaskStore";

interface NavbarProps {
  onToggleDarkMode: (value: boolean) => void;
  isDarkMode: boolean;
}
const Navbar: React.FC<NavbarProps> = ({ onToggleDarkMode, isDarkMode }) => {

    const { tasks, fetchTasks } = useTaskStore();

    useEffect(() => {
      // Fetch tasks when the page loads
      fetchTasks().catch((err) => console.error("Error fetching tasks:", err));
    }, [fetchTasks]);
  return (
    <nav className="flex justify-between items-center p-4 bg-opacity-70 backdrop-blur-lg">
      {/* Left: Task count */}
      <div className="text-sm font-medium">
        Number of Tasks: <span className="font-bold">{tasks.length || 0}</span> {/* Replace 5 with actual task count */}
      </div>

      {/* Center: Title */}
      <h1 className="text-xl font-semibold">Your Todos</h1>

      {/* Right: Dark mode toggle button */}
      <DarkModeToggleButton
        isDarkMode={isDarkMode}
        onToggle={onToggleDarkMode}
      />
    </nav>
  );
};

export default Navbar;
