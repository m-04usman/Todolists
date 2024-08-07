/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        
        'radial-gradient-custom': 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
        'custom-gradient': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,46,1) 49%, rgba(0,212,255,1) 100%)',
      }
    },
  },
  plugins: [],
}


