<script setup lang="ts">
const emit = defineEmits<{
  addDevice: [device: object]
}>()

const devices = [{
  id: 1,
  name: 'Gardena 999',
  brand: 'Natrysk',
  type: 'Funkcyjne'
}, {
  id: 2,
  name: 'AAA 999',
  brand: 'Termometr',
  type: 'Funkcyjne'
}, {
  id: 3,
  name: 'Siii',
  brand: 'Pochłaniacz dwutlenku węgla',
  type: 'Funkcyjne'
}
]
</script>

<template>
  <div class="w-full">
    <div
      v-for="device in devices"
      :key="device.id"
      class="py-4"
    >
      <UCard
        :ui="{ body: { padding: ''}}"
      >
        <template #header>
          <div class="flex items-center font-bold text-gray-400">
            <UIcon
              name="i-heroicons-cog-8-tooth"
              class="w-12 h-12 mx-2"
            />
            Urządzenie
          </div>
        </template>

        <div class="px-4 pt-5 sm:p-6 sm:pb-0">
          <div class="flex py-2 text-gray-600 dark:text-gray-400">
            Nazwa:<div class="font-normal text-gray-600 dark:text-gray-400 pl-1">
              {{ '  ' + device.name }}
            </div>
          </div>
          <div class="flex py-2 text-gray-600 dark:text-gray-400">
            Rodzaj:<div class="font-normal text-gray-600 dark:text-gray-400 pl-1">
              {{ '  ' + device.brand }}
            </div>
          </div>
          <div class="flex pt-2 pb-5 text-gray-600 dark:text-gray-400">
            Typ:<div class="font-normal text-gray-600 dark:text-gray-400 pl-1">
              {{ '  ' + device.type }}
            </div>
          </div>
        </div>

        <template #footer>
          <UButton
            label="Dodaj urządzenie"
            block
            @click="emit('addDevice', device)"
          />
        </template>
      </UCard>
    </div>
  </div>
</template>
