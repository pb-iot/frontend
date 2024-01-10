<script setup lang="ts">
const addingGreenhouseElementType = ref('')
const targetGreenhouseEnvironment = ref()
const devices: Device[] = []
</script>

<template>
  <div class="flex w-full h-full px-20">
    <AddGreenhouse
      class="w-1/2"
      @open-form-to-add-new-element="addingGreenhouseElementType = $event"
    />
    <div class="pl-20 w-1/2">
      <AddUsers v-if="addingGreenhouseElementType === 'Dodaj użytkowników'" />
      <AddGreenhouseDevices
        v-else-if="addingGreenhouseElementType === 'Dodaj urządzenia szklarni'"
        @add-device="devices.push($event)"
      />
      <AddTargetGreenhouseEnvironment
        v-else-if="addingGreenhouseElementType === 'Docelowe środowisko szklarni'"
        @update-greenhouse-environment="targetGreenhouseEnvironment = $event"
      />
    </div>
  </div>
</template>
