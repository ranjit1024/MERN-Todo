/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url('https://mern-todo-front-end.onrender.com/src/images/topography.svg')",
        'death': "url('https://mern-todo-front-end.onrender.com/src/images/line-in-motion.svg')",
        "overlaping":"url('https://mern-todo-front-end.onrender.com/src/images/overlapping-circles.svg')",
        "topo":"url('https://mern-todo-front-end.onrender.com/src/images/bubbles.svg')",
        "todo":"url('https://mern-todo-front-end.onrender.com/src/images/personal goals checklist-bro.svg')"
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

