<script lang="ts" setup>
const props = defineProps({
  cafe: {
    type: Object,
    default: () => {},
  },
});
</script>
<template>
  <b-card
    :title="cafe.company.name"
    :img-src="cafe.primary_image_url"
    :img-alt="cafe.company.name"
    img-top
    tag="article"
    class="mb-2 single-card"
  >
    <b-card-text>
      {{ cafe.company.description }}
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</template>
<style lang="scss" scoped>
.single-card {
  width: calc(33.3% - 6px);
  margin: 0 3px;
}
</style>
