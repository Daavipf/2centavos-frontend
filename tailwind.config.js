const flowbite = require('flowbite-react/tailwind')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Wix Madefor Display', 'sans-serif'],
      'klavika': ['klavika', 'sans-serif']
    }
  },
  plugins: [
    flowbite.plugin()
  ],
}

