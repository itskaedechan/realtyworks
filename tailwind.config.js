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
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
