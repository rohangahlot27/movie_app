/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'light-100': 'var(--color-light-100)',
        'light-200': 'var(--color-light-200)',
        'gray-100': 'var(--color-gray-100)',
        'dark-100': 'var(--color-dark-100)',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': 'var(--background-image-hero-pattern)',
      },
    },
  },
  plugins: [],
};

