import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Konfigurasi Astro dengan integrasi Tailwind CSS
export default defineConfig({
  integrations: [tailwind()],
});
