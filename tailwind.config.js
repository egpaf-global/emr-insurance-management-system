/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{html,ts}",
  "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          xl: "1280px",
        },
        maxWidth: {
          DEFAULT: "max-w-xl",
        },
      },
      transitionProperty: {
        height: "max-height",
      },
    },
  },
  plugins: [
  require('flowbite/plugin')
  ],
};

