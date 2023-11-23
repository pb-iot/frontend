<script setup lang="ts">
definePageMeta({
  colorMode: 'light' // Temporary solution for fast toggle color mode
})

const addingGreenhouseElementType = ref('')
const updateElementType = (type: string) => {
  addingGreenhouseElementType.value = type
}
</script>

<template>
  <div class="max-w-7xl min-h-full">
    <div class="grid grid-cols-2 px-40">
      <AddGreenhouse @open-form-to-add-new-element="updateElementType" />
      <div class="py-20">
        <AddUsers
          v-if="addingGreenhouseElementType === 'Dodaj użytkowników'"
        />
        <AddGreenhouseDevices v-if="addingGreenhouseElementType === 'Dodaj urządzenia szklarni'" />
      </div>
    </div>
  </div>
</template>
