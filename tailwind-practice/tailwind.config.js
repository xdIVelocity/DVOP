/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    
    extend: {colors:{
      primary: '#FF4800',
      accert: '#4E4E91',
      dark_text: "#1A1A3F",
      light_text: "#555555"
    }},
  },
  plugins: [],
}

