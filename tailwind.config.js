export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "serif"],
      },
      animation: {
        stars: "stars 60s linear infinite",
      },
      keyframes: {
        stars: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "1000px 1000px" },
        },
      },
    },
  },
  plugins: [],
};
//     );