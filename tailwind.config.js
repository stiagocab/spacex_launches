// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      display: ["Gilroy", "sans-serif"],
      body: ["Graphik", "sans-serif"],
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px",
    },
    extend: {
      colors: {
        primary: "#005288",
        grey: "#a7a9ac",
        black: "#000e17",
      },
      spacing: {
        "96": "24rem",
        "128": "32rem",
      },
      transitionDuration: {
        "420": "420ms",
      },
    },
  },
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  variants: {
    backgroundColor: ["responsive", "hover", "focus"],
  },
};
