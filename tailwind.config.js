/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sx: {
          bg: 'var(--sx-bg)',
          'bg-soft': 'var(--sx-bg-soft)',
          surface: 'var(--sx-surface)',
          'surface-2': 'var(--sx-surface-2)',
          'surface-3': 'var(--sx-surface-3)',
          'surface-hover': 'var(--sx-surface-hover)',
          border: 'var(--sx-border)',
          'border-soft': 'var(--sx-border-soft)',
          'border-strong': 'var(--sx-border-strong)',
          text: 'var(--sx-text)',
          'text-muted': 'var(--sx-text-muted)',
          muted: 'var(--sx-muted)',
          'muted-soft': 'var(--sx-muted-soft)',
          primary: 'var(--sx-primary)',
          'primary-bright': 'var(--sx-primary-bright)',
          'primary-glow': 'var(--sx-primary-glow)',
          accent: 'var(--sx-accent)',
          success: 'var(--sx-success)',
        },
      },
      borderRadius: {
        xs: 'var(--sx-r-xs)',
        sm: 'var(--sx-r-sm)',
        md: 'var(--sx-r-md)',
        lg: 'var(--sx-r-lg)',
      },
      maxWidth: {
        container: 'var(--sx-container)',
        'container-tight': 'var(--sx-container-tight)',
      },
      boxShadow: {
        'sx-sm': 'var(--sx-shadow-sm)',
        'sx-md': 'var(--sx-shadow-md)',
        'sx-lg': 'var(--sx-shadow-lg)',
        'sx-glow': 'var(--sx-shadow-glow)',
      },
      transitionTimingFunction: {
        sx: 'cubic-bezier(0.22, 1, 0.36, 1)',
        'sx-soft': 'cubic-bezier(0.32, 0.72, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
