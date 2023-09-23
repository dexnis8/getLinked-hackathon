/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clash: ["Clash Display", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        unica: ["Unica One", "cursive"],
      },
    },
  },
  plugins: [],
};
