/** @type {import('@tailwindcss/postcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        chrome: {
          100: "#f1f1f1",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        silver: {
          light: "#e5e5e5",
        },
        'glow-white': 'rgba(255, 255, 255, 0.95)',
      },
      dropShadow: {
        'glow': [
          '0 0 15px rgba(255, 255, 255, 0.5)',
          '0 0 30px rgba(255, 255, 255, 0.3)'
        ],
      },
    },
  },
  plugins: [],
} 