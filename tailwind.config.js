/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}', 'node_modules/@material-tailwind/react/**/*.js'],
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: [],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        engagement: ['Engagement', 'cursive'],
      },
      colors: {
        primary: '#0d1137',
        secondary: '#eec60f',
        tertiary: '#f5f5f5',
      },
    },
  },
  plugins: [],
};
