/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inconsolata': ['Inconsolata', 'monospace'],
        'SpaceMono': ['Space Mono', 'monospace']
      }
    },
  },
  plugins: [],
}

