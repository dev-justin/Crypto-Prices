/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Silkscreen: ["Silkscreen"],
      },
    },
    colors: {
      "brand-bg": "#f3d2c1",
      "brand-card": "#fef6e4",
      "brand-h": "#001858",
      "brand-p": "#172c66",
      "brand-a1": "#8bd3dd",
      "brand-a2": "#f582ae",
      "brand-hl": "#fef6e4",
    },
  },
  plugins: [],
};
