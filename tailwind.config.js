/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../src/assets/images/containerImag.png')",
      },
    },
  },
  plugins: [],
}

