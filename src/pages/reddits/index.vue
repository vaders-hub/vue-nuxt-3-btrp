<script lang="ts" setup>
import { useQueryClient, useQuery, useMutation } from '@tanstack/vue-query';
import { fetchReddit } from '@/api/reddit';

const params = reactive({ limit: '5', t: 'month' });
const { isLoading, isError, data, error, suspense } = useQuery({
  queryKey: ['reddit', params],
  queryFn: () => fetchReddit(params),
});
onServerPrefetch(async () => {
  await suspense();
});
const datas = computed(() => data?.value);
const subDatas = computed(() => datas?.value?.children);
</script>
<template>
  <div v-if="isLoading">...loading</div>
  <div v-if="subDatas">
    <ul>
      <li v-for="(item, index) in subDatas" :key="index">
        <p>{{ item.data.title }}</p>
        <img :src="item.data.thumbnail" />
      </li>
    </ul>
  </div>
</template>
