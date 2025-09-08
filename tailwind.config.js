/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx,html}',
    './stories/**/*.{vue,js,ts,jsx,tsx,html}',
    './.storybook/**/*.{js,ts,jsx,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        // Design Token Colors - Dynamic via CSS variables
        'token': {
          'primary': 'var(--token-color-primary)',
          'primary-light': 'var(--token-color-primary-light)',
          'primary-dark': 'var(--token-color-primary-dark)',
          'secondary': 'var(--token-color-secondary)',
          'secondary-light': 'var(--token-color-secondary-light)',
          'secondary-dark': 'var(--token-color-secondary-dark)',
          'accent': 'var(--token-color-accent)',
          'accent-light': 'var(--token-color-accent-light)',
          'accent-dark': 'var(--token-color-accent-dark)',
          'neutral': 'var(--token-color-neutral)',
          'neutral-light': 'var(--token-color-neutral-light)',
          'neutral-dark': 'var(--token-color-neutral-dark)',
          'surface': 'var(--token-color-surface)',
          'surface-elevated': 'var(--token-color-surface-elevated)',
          'background': 'var(--token-color-background)',
          'text-primary': 'var(--token-color-text-primary)',
          'text-secondary': 'var(--token-color-text-secondary)',
          'text-muted': 'var(--token-color-text-muted)',
          'border': 'var(--token-color-border)',
          'border-light': 'var(--token-color-border-light)',
          'border-strong': 'var(--token-color-border-strong)',
          'success': 'var(--token-color-success)',
          'error': 'var(--token-color-error)',
          'warning': 'var(--token-color-warning)',
          'info': 'var(--token-color-info)'
        }
      },
      fontFamily: {
        'token-primary': 'var(--token-font-family-primary)',
        'token-secondary': 'var(--token-font-family-secondary)',
        'token-mono': 'var(--token-font-family-mono)'
      },
      fontSize: {
        'token-xs': 'var(--token-text-size-xs)',
        'token-sm': 'var(--token-text-size-sm)',
        'token-base': 'var(--token-text-size-base)',
        'token-lg': 'var(--token-text-size-lg)',
        'token-xl': 'var(--token-text-size-xl)',
        'token-2xl': 'var(--token-text-size-2xl)',
        'token-3xl': 'var(--token-text-size-3xl)',
        'token-4xl': 'var(--token-text-size-4xl)',
        'token-5xl': 'var(--token-text-size-5xl)'
      },
      lineHeight: {
        'token-tight': 'var(--token-line-height-tight)',
        'token-normal': 'var(--token-line-height-normal)',
        'token-relaxed': 'var(--token-line-height-relaxed)'
      },
      spacing: {
        'token-xs': 'var(--token-space-xs)',
        'token-sm': 'var(--token-space-sm)',
        'token-md': 'var(--token-space-md)',
        'token-lg': 'var(--token-space-lg)',
        'token-xl': 'var(--token-space-xl)',
        'token-2xl': 'var(--token-space-2xl)',
        'token-3xl': 'var(--token-space-3xl)',
        'token-4xl': 'var(--token-space-4xl)'
      },
      borderRadius: {
        'token-none': 'var(--token-radius-none)',
        'token-sm': 'var(--token-radius-sm)',
        'token-base': 'var(--token-radius-base)',
        'token-md': 'var(--token-radius-md)',
        'token-lg': 'var(--token-radius-lg)',
        'token-xl': 'var(--token-radius-xl)',
        'token-full': 'var(--token-radius-full)'
      },
      borderWidth: {
        'token-thin': 'var(--token-border-width-thin)',
        'token-base': 'var(--token-border-width-base)',
        'token-thick': 'var(--token-border-width-thick)'
      },
      boxShadow: {
        'token-sm': 'var(--token-shadow-sm)',
        'token-base': 'var(--token-shadow-base)',
        'token-md': 'var(--token-shadow-md)',
        'token-lg': 'var(--token-shadow-lg)',
        'token-xl': 'var(--token-shadow-xl)'
      },
      transitionDuration: {
        'token-fast': 'var(--primitive-duration-fast)',
        'token-base': 'var(--primitive-duration-base)',
        'token-slow': 'var(--primitive-duration-slow)'
      },
      transitionTimingFunction: {
        'token-in': 'var(--token-ease-in)',
        'token-out': 'var(--token-ease-out)',
        'token-in-out': 'var(--token-ease-in-out)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  // Enable theme selection via CSS variables
  corePlugins: {
    preflight: false, // Disable Tailwind's reset for Storybook compatibility
  }
}