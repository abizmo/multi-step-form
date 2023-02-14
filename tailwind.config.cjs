// @type {import('tailwindcss').Config}

// eslint-disable-next-line import/no-extraneous-dependencies
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'marine-blue': 'hsl(213, 96%, 18%)',
      'purplish-blue': 'hsl(243, 100%, 62%)',
      'pastel-blue': 'hsl(228, 100%, 84%)',
      'light-blue': 'hsl(206, 94%, 87%)',
      'strawberry-red': 'hsl(354, 84%, 57%)',
      'cool-gray': 'hsl(231, 11%, 63%)',
      'light-gray': 'hsl(229, 24%, 87%)',
      magnolia: 'hsl(217, 100%, 97%)',
      alabaster: 'hsl(231, 100%, 99%)',
      white: 'hsl(0, 0%, 100%)',
    },
    container: {
      center: true,
    },
    fontSize: {
      '2xs': ['.6875rem', '1'],
      xs: ['.75rem', '1'],
      s: ['.8125rem', '1'],
      sm: ['.875rem', '1'],
      m: ['.9375rem', '1'],
      base: ['1rem', '1'],
      lg: ['1.25rem', '1'],
      xl: ['1.5rem', '1.1'],
      '2xl': ['2rem', '1.1'],
    },
    letterSpacing: {
      tight: '-0.05em',
      normal: '0em',
      wide: '0.07em',
    },
    screens: {
      lg: '940px',
    },
    extend: {
      backgroundImage: {
        mobile: 'url("/images/bg-sidebar-mobile.svg")',
        desktop: 'url("/images/bg-sidebar-desktop.svg")',
      },
      fontFamily: {
        sans: ['Ubuntu', ...fontFamily.sans],
      },
      gridTemplateRows: {
        abi: '1fr min-content',
      },
      outlineColor: {
        transparent: 'transparent',
      },
      spacing: {
        21: '5.25rem',
      },
    },
  },
  plugins: [],
};
