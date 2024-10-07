/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      backgroundImage: {
        "home-background": "url('/src/images/home/hero-1.webp')",
      },
      fontFamily: {
        jura: ["Jura", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        "zen-tokyo-zoo": ["Zen Tokyo Zoo", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "0.4rem",
          lg: "2rem",
          xl: "2rem",
          "2xl": "9.5rem",
        },
      },
    },
  },
  plugins: [],
};
