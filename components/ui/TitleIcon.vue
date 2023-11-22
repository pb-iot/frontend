<script setup lang="ts">
defineProps<{
  icon: string
}>()

</script>

<template>
  <div class="px-2">
    <UIcon
      :name="icon"
      class="w-12 h-12"
    />
  </div>
</template>
