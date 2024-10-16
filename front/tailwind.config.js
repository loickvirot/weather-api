/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/vue-tailwind-datepicker/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["IBM Plex Sans", "system-ui"]
    },
    extend: {
      colors: {
        "vtd-primary": colors.blue,
      },
    },
  },
  plugins: [],
}

