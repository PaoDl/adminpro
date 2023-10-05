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
        "primary": "#C7D4CE",         
        "secondary": "#d926a9",          
        "accent": "#1fb2a6",          
        "neutral": "#59949E",          
        "base-100": "#EDF7F7",          
        "info": "#3abff8",          
        "success": "#94CC5D",          
        "warning": "#F3C963",          
        "error": "#D65151",
      },
      myDarkTheme: {
        "primary": "#8290A1",          
        "secondary": "#9B85B6",          
        "accent": "#547594",          
        "neutral": "#488BA3",          
        "base-100": "#65979C",          
        "info": "#3abff8",          
        "success": "#94CC5D",          
        "warning": "#F3C963",          
        "error": "#D65151",
      }

    }],
    darktheme: "myLigthTheme",
  },
}
