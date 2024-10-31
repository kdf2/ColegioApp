/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
       'custom-primary':'#676078', 
       'custom-segundary':'#2B2738',
      },
    },
  },
  plugins: [],
}

