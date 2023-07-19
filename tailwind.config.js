/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        secondary: "#1E293B",
        terciary: "#38BDF8",
        grey: "#D7DDE6",
        greydark: "#8B99AE",
      },
      backgroundImage: {
        Hero: "url('assets/Hero.png')",
      },
    },
  },
  plugins: [],
}

