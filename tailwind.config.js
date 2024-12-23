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

