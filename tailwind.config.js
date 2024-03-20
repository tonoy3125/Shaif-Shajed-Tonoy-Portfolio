/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      lora: ['Lora', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      cinzel: ['Cinzel', 'sans-serif'],
    },
  },
  plugins: [require("daisyui")],
}

