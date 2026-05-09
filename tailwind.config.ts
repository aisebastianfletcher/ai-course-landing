import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          900: '#1e1b4b',
        },
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 60% 0%, rgba(34,197,94,0.18) 0%, transparent 60%), radial-gradient(ellipse at 0% 80%, rgba(22,163,74,0.12) 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
}
export default config
