/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Neue Haas Grotesk Display Pro", "Arial", "sans"], // Override the default sans-serif font
      serif: ["Georgia", "serif"], // Override the default serif font
      mono: ["Menlo", "monospace"], // Override the default monospace font
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
      fontFamily: {
        "neue-hass": ["Neue Hass", "sans"],
        "neue-hass-normal": ["Neue Hass Normal", "sans"],
        "neue-hass-bold": ["Neue Hass Bold", "sans"],
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
