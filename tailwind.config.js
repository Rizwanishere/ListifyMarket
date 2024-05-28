/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary' : '#0e7490',
        'secondary' : '#0c6280',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '::selection': {
          backgroundColor: '#0e7490',
          color: '#ffffff',
        },
        '::-moz-selection': {
          backgroundColor: '#0e7490',
          color: '#ffffff',
        },
      });
    },
  ],
}
