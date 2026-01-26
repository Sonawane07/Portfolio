import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Noto Sans', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
      },
      colors: {
        ink: {
          50: '#f6f7fb',
          100: '#eef0f7',
          200: '#d9ddea',
          300: '#b7bfd6',
          400: '#8b97bb',
          500: '#66759e',
          600: '#4f5c80',
          700: '#404a67',
          800: '#353d55',
          900: '#2f3547',
          950: '#0b0d13'
        }
      }
    }
  },
  plugins: []
} satisfies Config;
