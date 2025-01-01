/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url('src/images/topography.svg')",
        'death': "url('src/images/line-in-motion.svg')",
        "overlaping":"url('src/images/overlapping-circles.svg')",
        "topo":"url('src/images/bubbles.svg')",
        "todo":"url('src/images/personal goals checklist-bro.svg')"
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

