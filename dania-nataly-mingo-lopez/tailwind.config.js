export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        verde: {
          bosque: '#2d5a27',
          suave: '#4a7c44',
        },
        naranja: {
          principal: '#e67e22',
          claro: '#f39c12',
        },
      }
    }
  },
  plugins: []
}
