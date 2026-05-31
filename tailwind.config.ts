import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
        'brand-lg': '16px',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #C64A2A 0%, #E8714A 40%, #F4A483 100%)',
        'gradient-hero': 'linear-gradient(135deg, #FFF5F2 0%, #FAFAFA 60%, #F0EBE8 100%)',
      },
    },
  },
  plugins: [],
}
export default config
