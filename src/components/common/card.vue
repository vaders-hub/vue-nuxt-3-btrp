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
    style="max-width: 20rem"
    class="mb-2"
  >
    <b-card-text>
      {{ cafe.company.description }}
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</template>
