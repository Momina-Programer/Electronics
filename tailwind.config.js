/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        skyblue: "#BCCDE0",
        orange: "#EC3D2F",
        black: "#000000",
        white: "#FFFFFF"
      },

      fontSize: {
        para: ['24px'],
        heading: ['32px'],
        heading4: ['16px'],
        heading1: ['40'],
        heading3: ['20px'],
        para1: ['14px']
      },

    
   
    },
  },
  plugins: [],
}

