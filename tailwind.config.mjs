/** @type {import('tailwindcss').Config} */

// Semua warna membaca CSS variable di Layout.astro (:root), jadi cukup ubah di sana.
// Format "R G B" dipakai agar modifier opasitas Tailwind (mis. bg-maroon/80) tetap jalan.
const brand = (name) => `rgb(var(--${name}-rgb) / <alpha-value>)`;

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        maroon: brand('maroon'),
        gold: brand('gold'),
        cream: brand('cream'),
        'dark-brown': brand('dark-brown'),
        brown: brand('brown'),
        caramel: brand('caramel'),
        sand: brand('sand'),
        ivory: brand('ivory'),
        tan: brand('tan'),
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '1200px',
      },
      boxShadow: {
        soft: '0 10px 30px -14px rgb(var(--dark-brown-rgb) / 0.28)',
        lift: '0 18px 40px -16px rgb(var(--dark-brown-rgb) / 0.38)',
        gold: '0 12px 28px -12px rgb(var(--gold-rgb) / 0.6)',
      },
    },
  },
  plugins: [],
};
