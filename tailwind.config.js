/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px', // 320px width
        'sm': '375px', // 375px width
        'semi-sm': '425px', // 425px width
      },
    },
    fontFamily: {
      lora: ['Lora', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      cinzel: ['Cinzel', 'sans-serif'],
    },
  },
  plugins: [require("daisyui")],
}

