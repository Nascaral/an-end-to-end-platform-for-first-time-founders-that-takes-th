import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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
    },
  },
  plugins: [],
}

export default config
