<script lang="ts" setup>
import { fetchReddit } from '@/api/reddit';

definePageMeta({
  layout: 'default',
});

fetchReddit();
</script>
<template>
  start
  <b-form-input id="input-1" type="email" placeholder="Enter email" required></b-form-input>
</template>
