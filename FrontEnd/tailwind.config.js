/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url('./src/images/topography.svg')",
        'death': "url('./src/images/line-in-motion.svg')",
        "overlaping":"url('./src/images/overlapping-circles.svg')",
        "topo":"url('./src/images/bubbles.svg')",
        "todo":"url('https://mern-todo-59u7.onrender.com/images/main.svg')"
      },
      fontFamily:{
        "poppins":'Poppins'
      },
      backgroundColor:{
        "customCololr":'#D0E9BC'
      },
      
    },
  },
  plugins: [],
}

