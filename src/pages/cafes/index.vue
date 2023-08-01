<script lang="ts" setup>
import { useQueryClient, useQuery, useMutation } from '@tanstack/vue-query';
import { fetchCafe } from '@/api/cafes';
import { useCafeStore } from '@/store/cafes';

const cafeStore = useCafeStore();
const { isLoading, isError, data, error } = useQuery({
  queryKey: ['cafes', { page: 1 }],
  queryFn: () => fetchCafe({ page: 1 }),
});

const currentPage = computed(() => data?.value?.current_page);
const links = computed(() => data?.value?.links);
</script>
<template>
  <div>{{ currentPage }}</div>
  <div>{{ links }}</div>
</template>
