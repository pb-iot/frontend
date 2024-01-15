<script setup lang="ts">
import type { UButton } from '#ui-colors/components';
import { useRoute } from 'vue-router'
const route = useRoute()
const id = computed(() => route.params.greenhouseId)

const user = {
  firstname: 'Ola',
  lastname: 'Wrobel',
  avatar: 'https://avatars.githubusercontent.com/u/739984?v=4'
}
</script>

<template>
  <div class="grid grid-cols-2 gap-8">
    <div>
      <h1>My Greenhouse: {{ id }}</h1>
      <ProfileOptionsAndInfo :user="user"/>
      </div>
  </div>
</template>
