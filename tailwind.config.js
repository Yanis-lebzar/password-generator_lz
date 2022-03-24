module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        primary: "#04938F",
        secondary: "#095654",
        small_p: "#04938F",
      },
      boxShadow: {
        func_box: "0px 1px 18px -2px rgba(4, 147, 143, 0.54)",
      },
    },
  },
  plugins: [],
};
