<script setup lang="ts">
import { useColorMode } from 'bootstrap-vue-next';

const colorMode = useColorMode();
const checked = ref(true);

watch(
  checked,
  value => {
    colorMode.value = value === true ? 'dark' : 'light';
  },
  { deep: true, immediate: true },
);
</script>

<template>
  <div class="mx-auto p-4">
    <header>
      <b-form-checkbox v-model="checked" name="check-button" switch> </b-form-checkbox>
    </header>
    <slot />
  </div>
</template>

<style lang="postcss">
body {
  @apply min-h-screen bg-white dark:bg-gray-800 dark:text-gray-200;
}
</style>
<style lang="scss" scoped>
body {
  header {
    margin: 0 0 2rem 0;
    .form-check {
      float: right;
    }
  }
}
</style>
