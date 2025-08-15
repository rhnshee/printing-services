export default {
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
        '3d': '0 25px 50px -12px rgba(0, 0, 0, 0.25)' // Added for 3D effect
      },
      // Add these new extensions for 3D effects
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
      },
      // Optional: Add animation keyframes if you want more control
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sparkle: {
          '0%': { opacity: '0.5', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
          '100%': { opacity: '0.5', transform: 'scale(0.8)' },
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        sparkle: 'sparkle 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}