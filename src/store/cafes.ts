import { defineStore } from 'pinia';

export const useCafeStore = defineStore('cafe', () => {
  const list = reactive([]);

  return { list };
});
