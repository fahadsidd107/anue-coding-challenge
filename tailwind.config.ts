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
    },
  },
  plugins: [],
};
