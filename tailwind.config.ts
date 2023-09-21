import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundImage: {
      'custom-img': "url('../../src/assets/bg-hero.jpeg')",
    },
    extend: {
      colors: {
        'primary-blue': '#04BFAD',
        'secondary-blue': '#03A696',
        'tertiary-blue': '#067368',
        'primary-dark': '#070b0d',
        'secondary-dark': '#074040',
        'primary-white': '#ffffff',
        'secondary-white': '#ebf2f0'
        }        
    },
  },
  plugins: [],
}
export default config


