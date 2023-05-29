import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

process.env.VITE_APP_VERSION = require('./package.json').version;

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 1200,
  },

  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
      inject: 'body-last',
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
