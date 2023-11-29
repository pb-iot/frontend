<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
const id = computed(() => route.params.greenhouseId)
</script>

<template>
  <div class="my-greenhouse">
    <h1>My Greenhouse: {{ id }}</h1>
    <ProfileOptionsAndInfo />
    <ProfileChangeData />
    <ProfileChangePassword />
    <AlertDelete />
    <AlertChangePassword />
  </div>
</template>
