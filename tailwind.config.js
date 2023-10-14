/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Neue Haas Grotesk Display Pro"', '"Segoe UI"', 'Roboto', 'sans-serif',],
    },
    fontWeight: {
      'normal': 400, // Normal font weight
      'medium': 500, // Medium font weight
      'bold': 700,   // Bold font weight
    },
    extend: {
      screens: {
        xs: "300px",
        mds: "450px",
        sm: "660px",
        smd: "768px",
        md: "1024px",
        lg: "1166px",
        xl: "1366px",
        xxl: "1440px",
      },
      width: {
        maxSize: "1440px",
      },
      maxWidth: {
        maxSize: "1440px",
      },
      colors: {
        primary: "#C44545",
        darkPrimary: "#292929",
        secondary: "#542800",
        "theme-black": "#100A04",
        orangeGradient: "rgba(255, 153, 59, 0.50);",
        bgSecondary: "#1F1307",
      },
      backgroundColor: {
        navItemGradient: "rgba(255, 153, 60, 0.10)",
      },
      backdropFilter: {
        none: "none",
        blur: "6px",
      },
      animation: {
        "move-y": "moveY 4s infinite",
      },
    },
  },
  plugins: [],
};
