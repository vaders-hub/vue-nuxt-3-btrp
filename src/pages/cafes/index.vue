<script lang="ts" setup>
import { useQueryClient, useQuery, useMutation } from '@tanstack/vue-query';
import { fetchCafe } from '@/api/cafes';
import { useCafeStore } from '@/store/cafes';

definePageMeta({
  layout: 'default',
});
const cafeStore = useCafeStore();
const page = ref(1);
const { isLoading, isError, data, error } = useQuery({
  queryKey: ['cafes', { page: page.value }],
  queryFn: () => fetchCafe({ page: page.value }),
});

const currentPage = computed(() => data?.value?.current_page);
const links = computed(() => data?.value?.links);
const cafeDatas = computed(() => data?.value?.data);
const containerId = ref('');
</script>
<template>
  <h1>cafe</h1>
  <div v-if="isLoading">Loading...</div>
  <template v-if="data">
    <div v-masonry="containerId" transition-duration="0.3s" item-selector=".item">
      <common-card v-for="(item, index) in cafeDatas" :key="item.id" :cafe="item" v-masonry-tile class="item" />
    </div>
  </template>
</template>
