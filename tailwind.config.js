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
      myLigthTheme: {
        "primary": "#2CB4AE",         
        "secondary": "#cff09e",          
        "accent": "#b1e59f",          
        "neutral": "#90d698",          
        "base-100": "#9AC6C5",         
        "info": "#3abff8",          
        "success": "#94CC5D",          
        "warning": "#F3C963",          
        "error": "#D65151",
      },
      myDarkTheme: {
        "primary": "#797F7A",          
        "secondary": "#107869",          
        "accent": "#7E0202",          
        "neutral": "#47546D",          
        "base-100": "#2F5233",          
        "info": "#3abff8",          
        "success": "#94CC5D",          
        "warning": "#F3C963",          
        "error": "#D65151",
      }
          

    }],
    darktheme: "myLigthTheme",
  },
}
