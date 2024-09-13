/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      boxShadow: {
        button: '0px 0px 10px 0px rgba(0, 0, 0, 0.25);',
        card: '0px 0px 10px 4px rgba(0, 0, 0, 0.09);',
      },
      backgroundImage: {
        'gradient-quienes-somos':
          'linear-gradient(180deg, rgba(251, 251, 251, 0.15) 0%, rgba(153, 206, 66, 0.0855) 55.27%, rgba(251, 251, 251, 0.15) 100%)',
        'gradient-inicio':
          'linear-gradient(180deg, rgba(251, 251, 251, 0.15) 0%, rgba(30, 136, 229, 0.15) 55.27%, rgba(251, 251, 251, 0.15) 100%);',
        'gradient-sponsor':
          'linear-gradient(180deg, #1E88E5 0%, #0D47A1 86.01%);',
        'gradient-footer':
          'linear-gradient(180deg, #1E88E5 0%, #0D47A1 157.44%);',
      },
    },
  },
  plugins: [],
};
