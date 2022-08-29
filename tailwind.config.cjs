/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0E1012",
        primary: "#FF6358",
        balde: {
          green: "#41B883",
          blue: "#58A1FF",
          cyan: "#58F4FF",
        },
        dracula: {
          background: "	#282a36",
          currentLine: "	#44475a",
          foreground: "	#f8f8f2",
          comment: "	#6272a4",
          cyan: "	#8be9fd",
          green: "	#50fa7b",
          orange: "	#ffb86c",
          pink: "	#ff79c6",
          purple: "	#bd93f9",
          red: "	#ff5555",
          yellow: "	#f1fa8c",
        },
      },
    },
    plugins: [],
  },
};
