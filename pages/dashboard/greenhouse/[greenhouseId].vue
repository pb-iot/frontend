<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
const id = computed(() => route.params.greenhouseId)
const { greenhouses } = await useGreenhouses()
const greenhouse = computed(() => greenhouses.value.find(g => g.id === +id.value))

</script>

<template>
  <div class="grid grid-cols-2 gap-8">
    <pre>{{ greenhouse }}</pre>
  </div>
</template>
