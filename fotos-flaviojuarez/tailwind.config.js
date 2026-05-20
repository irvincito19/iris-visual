export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        negro: "#050505",
        bosque: { DEFAULT: "#1a3a1a", dark: "#0f260f", light: "#2d5a27" },
        tierra: { DEFAULT: "#a67c52", dark: "#8b6540", light: "#c4a07a" },
        laurel: { DEFAULT: "#4a7c44", light: "#6b9e65" },
        crema: "#f5f0e8",
        arena: "#e8ddd0",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
