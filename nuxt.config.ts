import { defineNuxtConfig } from 'nuxt/config';
import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['bootstrap/dist/css/bootstrap.css', 'bootstrap-vue/dist/bootstrap-vue.css'],
  components: [{ path: '~/components/common/', prefix: 'common' }, '~/components'],
  ssr: true,
  devtools: { enabled: true },
  debug: true,
  srcDir: 'src/',
  imports: {
    dirs: ['stores'],
  },
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
  },
});
