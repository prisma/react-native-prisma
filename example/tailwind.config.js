/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**.*{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        prisma: '#151718',
      },
    },
  },
  plugins: [],
};
