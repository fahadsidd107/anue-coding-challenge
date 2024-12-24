/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // All files in src with JS/TS/JSX/TSX extensions
    "./public/index.html",        // Add this if using public HTML
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dark-gradient': "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
        'light-gradient': "radial-gradient(ellipse at bottom,#F8E975  0%,#87CEEB 100%)",
      },
      boxShadow: {
        customLight: 'rgba(0, 0, 0, 0.35) 0px 25px 35px',
        customDark: 'rgba(255, 255, 255, 0.15) 0px 25px 35px',
      },
      borderColor: {
        customLight: '#ff7eb3', // Light mode border color
        customDark: '#7eb3ff', // Dark mode border color
      },
    },
  },
  plugins: [],
};
