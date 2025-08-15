export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.js", // for Flowbite core
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // for Flowbite React
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['"Cinzel"', "serif"],
        sanspro: ['"Source Sans Pro"', "serif"],
      },
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInSlow: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        typing: "typing 3s steps(30, end) forwards",
        fadeIn: "fadeIn 2s ease-out forwards",
        fadeOut: "fadeOut 0.5s ease-out forwards",
        slideInSlow: "slideInSlow 2s ease-in-out forwards",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
