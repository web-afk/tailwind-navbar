module.exports = {
  content: [
    "./public/index.html",
    "./public/app.js",
  ],
  theme: {
    extend: {
      transformOrigin:{
        "line-1" : "3px 1px",
        "line-3" : "8px 1px",
      },
      spacing:{
        "3px" : "3px",
      },
    },
  },
  plugins: [
    require("tailwindcss"),
  ],
}
