/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#6B9B7F',
          light: '#8BAA93',
          dark: '#5A8B6F',
        },
        watercolor: {
          cream: '#F5F1E8',
          beige: '#E8DCC8',
          golden: '#D4A574',
          ochre: '#B8956A',
          emerald: '#6B9B7F',
          sage: '#8BAA93',
          blue: '#A8C5C0',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(107, 155, 127, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(107, 155, 127, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
