/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#19171D',
        form: '#222529',
        'form-border': '#565856',
        title: '#ADAEAF',
        button: '#35373B',
        content: '#1A1D21',
        hover: '#27242C',
        active: '#1965A1'
      }
    },
  },
  plugins: [],
}
