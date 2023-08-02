import { defineNuxtConfig } from 'nuxt/config';
import { createLogger } from 'vite';
import path from 'path';

const logger = createLogger();
const originalWarning = logger.warn;
logger.warn = (msg, options) => {
  if (msg.includes('vite:css') && msg.includes(' is empty')) return;
  originalWarning(msg, options);
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    rootId: 'vader',
  },
  css: ['bootstrap/dist/css/bootstrap.css', 'bootstrap-vue/dist/bootstrap-vue.css'],
  components: [{ path: '~/components/common/', prefix: 'common' }, '~/components'],
  ssr: true,
  devtools: { enabled: false },
  debug: false,
  srcDir: 'src/',
  imports: {
    dirs: ['stores'],
  },
  logLevel: 'info',
  modules: [
    ['@bootstrap-vue-next/nuxt', {}],
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore'], 'acceptHMRUpdate'],
      },
    ],
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => {});
    },
  ],
  typescript: {
    shim: false,
    typeCheck: true,
  },
  devServer: {
    port: 3002,
  },
  vite: {
    customLogger: logger,
    build: {
      rollupOptions: {},
    },
    esbuild: {},
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/'),
      },
    },
  },
  // https://nitro.unjs.io/guide/community/contributing
  nitro: {
    rootDir: 'src/',
    devServer: {
      watch: [],
    },
    rollupConfig: {
      // onwarn({ code, message }) {
      //   if (code?.includes('CIRCULAR_DEPENDENCY') || code?.includes('CYCLIC_CROSS_CHUNK_REEXPORT')) {
      //     return;
      //   }
      //   console.warn(`${message}`);
      // },
    },
  },
});
