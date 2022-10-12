/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage:{
            "galery":" url('./src/assets/galery.jpg')",
      }
    },
  },
  plugins: [],
}
