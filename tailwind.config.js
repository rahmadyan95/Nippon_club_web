/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Sesuaikan path file Anda
  theme: {
    extend: {
      fontFamily: {
        boxed: ['BoxedRound', 'sans-serif'], // Tambahkan nama font lokal
      },
    },
  },
  plugins: [],
};
