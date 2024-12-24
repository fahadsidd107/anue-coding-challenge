import { create } from "zustand";

interface DarkModeState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const useDarkModeStore = create<DarkModeState>((set) => ({
  isDarkMode: false, // Initial state
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export default useDarkModeStore