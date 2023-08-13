import { VBToggle } from 'bootstrap-vue';
import { VBTogglePlugin } from 'bootstrap-vue';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('b-toggle', VBToggle);
  nuxtApp.vueApp.use(VBTogglePlugin);
});
