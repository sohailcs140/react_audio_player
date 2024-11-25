
const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",          // Include the main HTML file
    "./src/**/*.{js,jsx,ts,tsx}" // Include all JavaScript and TypeScript files in `src/`
  ],
  theme: {
    extend: {
      colors: {
        primary:  "var(--color-primary)",  // Custom primary color
        secondary: "var(--color-secondary)", // Custom secondary color
        primary_1: "var(--color-primary_1)",
        primary_2: "var(--color-primary_2)",
        dim:"var(--color-text-dim)",
        "light-dim":"var(--color-text-light-dim)",
        "text-primary":"var(--color-text-primary)"
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"], // Custom sans font
      },
      boxShadow: {
        'right': '5px 0 10px -3px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'bg-music': `url('${path.resolve(__dirname, 'src/assets/images/bg_music.png')}')`,
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'), // Add this line
  ],
};
