/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    borderWidth:{
      DEFAULT:"1px",
      "0":"0",
      "2":"2px",
      "4":"4px",
      "5":"5px",
      "6":"6px",
      "8":"8px"
    },
    extend: {
      fontFamily:{
        cairo:["Cairo", "sans-serif"]
      },
      gridTemplateRows:{
        "layout": "200px minmax(900px, 1fr) 100px"
      },
    },
  },
  plugins: [],
}
