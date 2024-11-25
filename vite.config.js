import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import inject from '@rollup/plugin-inject';
// import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react(),

    inject({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),

  ],
  css: {
    postcss: './postcss.config.js', // Optional if you need a custom PostCSS config
  },
});