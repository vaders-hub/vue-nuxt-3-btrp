import { defineNuxtConfig } from 'nuxt/config';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['bootstrap/dist/css/bootstrap.css', 'bootstrap-vue/dist/bootstrap-vue.css'],
  ssr: true,
  devtools: { enabled: true },
  debug: true,
  srcDir: 'src/',
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
  // https://nitro.unjs.io/guide/community/contributing
  nitro: {
    rootDir: 'src/',
    devServer: {
      watch: [],
    },
  },
});
