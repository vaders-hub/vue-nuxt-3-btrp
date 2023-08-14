<script lang="ts" setup>
import { useQueryClient, useQuery, useMutation } from "@tanstack/vue-query";
import { fetchCafe } from "@/api/cafes";
import { useCafeStore } from "@/store/cafes";

definePageMeta({
  layout: "default",
});
const cafeStore = useCafeStore();
const search = ref("");
const page = ref(1);
const { isLoading, isError, data, error } = useQuery({
  queryKey: ["cafes", { page, search }],
  queryFn: () => fetchCafe({ page: page.value, search: search.value }),
});

const currentPage = computed(() => data?.value?.current_page);
const lastPage = computed(() => data?.value?.last_page);
const links = computed(() => data?.value?.links);
const cafeDatas = computed(() => data?.value?.data);
const containerId = ref("");
const options = computed(() =>
  new Array(lastPage.value).fill(0).map((_, idx) => idx + 1)
);
</script>
<template>
  <h1>Cafe</h1>
  <b-form>
    <b-form-group class="cafe-form-group">
      <b-form-input v-model="search" placeholder="Search"></b-form-input>
      <b-button variant="outline-primary">Search</b-button>
      <b-form-select v-model="page" :options="options"></b-form-select>
    </b-form-group>
  </b-form>
  <div v-if="isLoading">Loading...</div>
  <template v-if="!isLoading && data">
    <div v-masonry="containerId" transition-duration="0.3s" item-selector=".item">
      <common-card
        v-masonry-tile
        v-for="(item, index) in cafeDatas"
        :key="`${item.id}-${index}`"
        :cafe="item"
        class="item"
      />
    </div>
  </template>
</template>
<style lang="scss">
.cafe-form-group {
  text-align: center;
  > div {
    display: inline-flex;
    margin: 0 0 2rem 0;
    input,
    select,
    button {
      margin: 0 0.2rem;
    }

    input {
      width: 40rem;
    }
    button {
      width: 5rem;
    }

    select {
      width: 5rem;
    }
  }
}
</style>
