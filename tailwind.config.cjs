/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        wine: {
          primary: '#5A0F14',
          secondary: '#3B0A0C',
          accent: '#C7362E',
          light: '#F5F5F5',
          muted: '#CFCFCF',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 30px rgba(0,0,0,0.25)',
        glow: '0 0 0 1px rgba(199,54,46,0.25), 0 18px 45px rgba(0,0,0,0.35)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(1000px circle at 20% -10%, rgba(199,54,46,0.35), transparent 55%), radial-gradient(900px circle at 80% 0%, rgba(255,255,255,0.08), transparent 55%), linear-gradient(135deg, rgba(90,15,20,1) 0%, rgba(59,10,12,1) 100%)',
        'card-gradient':
          'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
      },
      borderRadius: {
        xl: '1.25rem',
      },
    },
  },
  plugins: [],
}

