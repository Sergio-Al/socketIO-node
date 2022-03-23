module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      borderRadius: {
        "self-message": "0px 28px 28px 28px",
        "other-message": "28px 0px 28px 28px",
      },
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
