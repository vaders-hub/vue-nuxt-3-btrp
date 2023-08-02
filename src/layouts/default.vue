<script lang="ts" setup>
import { useColorMode } from 'bootstrap-vue-next';
const colorMode = useColorMode();
</script>

<template>
  <div class="mx-auto p-4">
    <p class="p-4 pb-2">
      <select v-model="colorMode" class="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </p>
    <slot />
  </div>
  <!-- <div class="h-screen bg-themeBackground p-5 theme-light">
    
  </div> -->
</template>

<style lang="postcss">
body {
  @apply min-h-screen bg-white dark:bg-gray-800 dark:text-gray-200;
}
</style>
