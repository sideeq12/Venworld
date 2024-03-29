/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'workplace' : "url('/work.jpeg')",
        'woman' : "url('/black-woman.jpg')",
        'dp' : "url('/user.jpg')",
        'sideeq' : "url('/WAHEED SODIQ.jpg')"
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
