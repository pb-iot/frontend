<script setup lang="ts">
const addingGreenhouseElementType = ref('')
const devices: Device[] = []

const users = ref([])
</script>

<template>
  <div class="flex w-full h-full px-20">
    <AddGreenhouse
      class="w-1/2"
      :users="users.map(u => u.id)"
      @open-form-to-add-new-element="addingGreenhouseElementType = $event"
    />
    <div class="pl-20 w-1/2">
      <AddUsers v-model:users="users" v-if="addingGreenhouseElementType === 'Dodaj użytkowników'" />

      <AddGreenhouseDevices
        v-else-if="addingGreenhouseElementType === 'Dodaj urządzenia szklarni'"
        @add-device="devices.push($event)"
      />

    </div>
  </div>
</template>
