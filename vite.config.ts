import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path';

const pathResolve = (pathStr: string) => {
  return path.resolve(__dirname, pathStr);
};

module.exports = defineConfig({
  server: {
    port: 8686,
  },
  plugins: [vue(), vueJsx()],
  alias: {
    '@': pathResolve('./src'),
  },
});
