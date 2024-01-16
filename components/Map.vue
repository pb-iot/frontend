<script setup lang="ts">
defineProps<{ locations?: Location[] }>()
const isWebGLSupported = detectWebGLContext()
</script>

<template>
  <div class="bg-gray-200 rounded-md flex items-center justify-center overflow-hidden">
    <LazyUnsafeMap
      v-if="isWebGLSupported"
      :locations="locations"
    />
    <div
      v-else
      class="text-gray-600 p-8"
    >
      <UIcon
        name="i-heroicons-exclamation-circle-20-solid"
        class="text-4xl float-left mr-4 text-gray-500"
      />
      <p class="text-xs">
        Nie można wyświetlić mapy. Twoja przeglądarka nie wspiera technologii WebGL.
      </p>
    </div>
  </div>
</template>
