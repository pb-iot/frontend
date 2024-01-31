<script setup lang="ts">
const emit = defineEmits<{
  addDevice: [device: Device]
}>()

const devices: Device[] = [{
  id: 1,
  name: 'Gardena 999',
  brand: 'Natrysk',
  type: 'Funkcyjne',
  status: 'włączone'
}, {
  id: 2,
  name: 'AAA 999',
  brand: 'Termometr',
  type: 'Funkcyjne',
  status: 'wyłączone'
}, {
  id: 3,
  name: 'Siii',
  brand: 'Pochłaniacz dwutlenku węgla',
  type: 'Funkcyjne',
  status: 'Dziala'
}]

const items = [
  [{
    label: 'Edytuj urządzenie',
    icon: 'i-heroicons-pencil-square-20-solid',
    click: () => {
      console.log('Edit')
    }
  }], [{
    label: 'Włącz',
    icon: 'i-heroicons-power'
  }], [{
    label: 'Usuń',
    icon: 'i-heroicons-trash-20-solid'
  }]
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
              name="i-mdi-shower-head"
              class="w-12 h-12 mx-2"
            />
            Urządzenie

            <UDropdown
              :items="items"
              :popper="{ placement: 'bottom-start' }"
              class="ml-auto"
            >
              <UButton
                color="white"
                label="Opcje"
                trailing-icon="i-heroicons-chevron-down-20-solid"
              />
            </UDropdown>
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
          <div class="flex py-2 text-gray-600 dark:text-gray-400">
            Status:
            <div
              :class="{
                'font-normal text-green-600 dark:text-green-400': device.status === 'włączone',
                'font-normal text-red-600 dark:text-red-400': device.status !== 'włączone'
              }"
              class="pl-1"
            >
              {{ '  ' + device.status }}
            </div>
          </div>
        </div>
        <template #footer>
          <div class="flex-grow">
            <UButton
              class="w-full h-full justify-center "
              color="gray"
              variant="ghost"
            >
              Dziennik zdarzeń
            </UButton>
          </div>
        </template>
      </UCard>
    </div>
  </div>
</template>
