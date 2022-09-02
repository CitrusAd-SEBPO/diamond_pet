/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}", "public/index.html"],
  theme: {
    screens: {
      xs: '100px'
    },
    colors: ({ colors }) => ({
      'custom-pov1': '#5796B2',
      'custom-pov2': '#7E6144',
      'custom-pov3': '#859B91',
      'custom-blue': '#00205B'
    }),
    extend: {},
  },
  plugins: [],
}
