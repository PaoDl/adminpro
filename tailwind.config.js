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
        "base-100": "#4E6455",          
        "info": "#3abff8",          
        "success": "#94CC5D",          
        "warning": "#F3C963",          
        "error": "#D65151",
      },
      myLigthTheme: {
        "primary": "#C7D4CE",         
        "secondary": "#d926a9",          
        "accent": "#1fb2a6",          
        "neutral": "#59949E",          
        "base-100": "#EDF7F7",          
        "info": "#3abff8",          
        "success": "#94CC5D",          
        "warning": "#F3C963",          
        "error": "#D65151",
      }      

    }],
    darktheme: "myDarkTheme",
  },
}
