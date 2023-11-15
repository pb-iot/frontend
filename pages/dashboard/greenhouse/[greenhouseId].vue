<script setup lang="ts">
const route = useRoute()
const id = computed(() => route.params.greenhouseId)
</script>

<template>
  <div class="my-greenhouse">
    <h1>My Greenhouse: {{ id }}</h1>
  </div>
</template>
