<script setup lang="ts">
</script>

<template>
  <UAlert
    class="border-b-4 border-red-500"
    :close-button="{ icon: 'i-heroicons-x-mark-20-solid', color: 'gray', variant: 'link', padded: false }"
    icon="i-heroicons-exclamation-circle-solid"
  >
    <template #title>
      <slot name="title" />
    </template>
    <template #description>
      <slot name="description" />
    </template>
    <template #actions>
      <slot name="actions" />
    </template>
  </UAlert>
</template>
