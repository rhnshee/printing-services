/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // primary blue
          light: '#60a5fa',
          dark: '#1d4ed8'
        }
      },
      boxShadow: {
        card: '0 20px 40px rgba(37,99,235,0.10)',
        '3d': '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      perspective: {
        none: 'none',
        '250': '250px',
        '500': '500px',
        '750': '750px',
        '1000': '1000px',
      },
      rotate: {
        '5': '5deg',
        '10': '10deg',
        '15': '15deg',
        '-5': '-5deg',
        '-10': '-10deg',
        '-15': '-15deg',
        '1': '1deg',
        '2': '2deg',
        '-1': '-1deg',
        '-2': '-2deg',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sparkle: {
          '0%': { opacity: '0.5', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
          '100%': { opacity: '0.5', transform: 'scale(0.8)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: 0.8, transform: 'scale(0.95)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        sparkle: 'sparkle 2s ease-in-out infinite',
        marquee: 'marquee 20s linear infinite',
        pulseSlow: 'pulseSlow 2.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
