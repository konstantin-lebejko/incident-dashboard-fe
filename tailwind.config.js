/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react';
import theme from './tailwind-nextui-theme'

export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui(theme)],
}

