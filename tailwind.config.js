/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      titulo: '#DB9953',
      subtitulo: '#316f95',
      paragrafo: '#755f57',
      frase:'#eeeeee',
      background: '#E2D8CE',
      backgroundGray: '#1c1c1c',
      backgroundMenu800: 'rgb(31 41 55)',
      backgroundMenu700: 'rgb(55 65 81)',
      textMenu400: 'rgb(156 163 175)',
      hoverTitulo: '#ffd7ba',
      textWhite: '#fff',
    },
  },
  plugins: [],
}

