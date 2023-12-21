import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      keyframes:{
        moveUpDown:{
          '0%, 100%': { bottom: '0' },
          '50%': { bottom: '40px' }
        }
      },
      animation: {
        moveUpDown: 'moveUpDown 5s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
