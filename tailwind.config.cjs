/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Open Sans": ['Open Sans', "sans-serif"]
      },
    },
    screens: {
      'sm': '600px',

      'md': '700px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    plugins: [],
    purge: ['./src/**/*.html', './src/**/*.js','./src/**/*.jsx'],
  },
};
