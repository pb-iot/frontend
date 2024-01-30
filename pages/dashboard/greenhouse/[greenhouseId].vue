<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
const greenhouse = await useGreenhouse(() => route.params.greenhouseId)
</script>

<template>
  <div class="grid grid-cols-2 gap-8">
    <pre>{{ greenhouse }}</pre>
  </div>
</template>
