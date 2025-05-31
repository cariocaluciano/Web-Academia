/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: {
          50: "#B2BBC6",
          100: "#A3ADBB",
          200: "#909DAD",
          300: "#546881",
          400: "#47586E",
          500: "#3D4C5E",
          600: "#1D242D",
          "600-50": "rgba(29, 36, 45, 0.5)",
          700: "#101012",
          800: "#090B0E",
        },

        white: {
          50: "#FFFFFF",
          100: "#FCFDFD",
          200: "#F5F7F",
          300: "#FCFDFD",
          400: "#F5F7F9",
          500: "#F0F3F6",
          600: "#F9FAFB",
          700: "#F2F4F7",
          800: "#EBEEF2",
          900: "#F6F8F9",
        },

        green: {
          50: "#72942B",
        },

        red: {
          50: "#F6E6E9",
          100: "#F2D9DE",
          200: "#ff8686",
          300: "#A80022",
          400: "#97001F",
          500: "#86001B",
          600: "#7E001A",
          700: "#650014",
          800: "#4C000F",
          900: "#3B000C",
        },
      },

      fontFamily: {
        sans: ["outfit", "system-ui"],
        serif: ["outfit", "Georgia"],
        mono: ["outfit", "SFMono-Regular"],
        display: ["outfit"],
        body: ['"outfit"'],
      },
    },
  },
  plugins: [],
};
