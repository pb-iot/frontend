<script setup lang="ts">
</script>

<template>
  <UCard>
    <template #header>
        <div class="flex">
        <div class="flex-1 align-middle font-semibold items-center text-gray-500 text-xl">
          <UIcon name="i-heroicons-sun"/>
          Docelowe środowisko
        </div>
        <slot name="header"/>
        </div>
    </template>
    <slot name="content"/>
    <template #footer>
      <slot name="footer"/>
    </template>
  </UCard>
</template>