import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface DarkModeState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const useDarkModeStore = create<DarkModeState>()(
  devtools(
    (set) => ({
      isDarkMode: false,
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: "Dark Mode Store" // Store name in DevTools
    }
  )
);

export default useDarkModeStore;