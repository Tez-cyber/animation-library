/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "jumbo1": "url('./assets/img-2.jpg')"
      }
    },
  },
  plugins: [],
}