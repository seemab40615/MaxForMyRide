/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
    sans: ["IBM Plex Mono", "monospace"],
    serif: ["Gridular", "sans-serif"],
    lato: ["Lato", "sans-serif"],
  },
    extend: {
      screens: {
        xs: '300px',
        mds: '450px',
        sm: '660px',
        smd: '768px',
        md: '1024px',
        lg: '1166px',
        xl: '1366px',
        xxl: "1440px",
      },
      width: {
        maxSize: "1440px",},
      maxWidth: {
        maxSize: "1440px",
      },
      colors: {
        primary: "#FF993C",
        darkPrimary: '#FF993B',
        secondary: "#542800",
        'theme-black': "#100A04",
        orangeGradient : 'rgba(255, 153, 59, 0.50);',
        bgSecondary : '#1F1307'
        
      },
      fontFamily: {
        gridular: ["Gridular", "sans-serif"],
        sfPro : ["SF Pro Regular"],
        "plex-mono": ["IBM Plex Mono", "monospace"],
        lato: ["Lato", "sans-serif"],
      },
      backgroundColor: {
        navItemGradient: 'rgba(255, 153, 60, 0.10)',
      },
      backdropFilter: {
        'none': 'none',
        'blur': '6px',
      },
      animation: {
        'move-y': 'moveY 4s infinite',
      }
    },
  },
  plugins: [],
};
