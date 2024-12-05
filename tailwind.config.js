/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'panel': "url('./src/assets/panel.png')", // Ajusta la ruta según tu estructura
      },
    },
  },
  plugins: [],
}