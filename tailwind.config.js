/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  safelist: [
    {
      pattern: /bg-\[url\(.*\)\]/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
