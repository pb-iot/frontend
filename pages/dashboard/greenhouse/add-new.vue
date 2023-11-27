<script setup lang="ts">
const addingGreenhouseElementType = ref('')
const updateElementType = (type: string) => {
  addingGreenhouseElementType.value = type
}
</script>

<template>
  <div class="grid grid-cols-2 gap-8">
    <AddGreenhouse @open-form-to-add-new-element="updateElementType" />

    <AddUsers v-if="addingGreenhouseElementType === 'Dodaj użytkowników'" />
    <AddGreenhouseDevices v-else-if="addingGreenhouseElementType === 'Dodaj urządzenia szklarni'" />
  </div>
</template>
