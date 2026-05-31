import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        ink: '#14130F',
        accent: '#C64A2A',
        'accent-soft': '#F6DCD5',
        'on-accent': '#FFFFFF',
        muted: '#767573',
        surface: '#FAFAFA',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        brand: '8px',
        'brand-lg': '12px',
        'brand-xl': '16px',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #C64A2A 0%, #E8763A 40%, #F6A05A 100%)',
        'hero-wash': 'radial-gradient(ellipse 80% 60% at 60% 0%, #F6DCD5 0%, #FFFFFF 70%)',
      },
    },
  },
  plugins: [],
}

export default config
