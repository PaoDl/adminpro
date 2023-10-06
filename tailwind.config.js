/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [{
      myDarkTheme: {
        "primary": "#797F7A",          
        "secondary": "#6A896E",          
        "accent": "#CF780A",          
        "neutral": "#47546D",          
        "base-100": "#4E705A",          
        "info": "#3abff8",          
        "success": "#94CC5D",          
        "warning": "#F3C963",          
        "error": "#D65151",
      },
      myLigthTheme: {
        "primary": "#feff96",         
        "secondary": "#cff09e",          
        "accent": "#b1e59f",          
        "neutral": "#90d698",          
        "base-100": "#76c59d",          
        "info": "#3abff8",          
        "success": "#94CC5D",          
        "warning": "#F3C963",          
        "error": "#D65151",
      }      

    }],
    darktheme: "myDarkTheme",
  },
}
