<script setup lang="ts">
const { greenhouses } = await useGreenhouses()
const items = [{
  label: 'Lista',
  icon: 'i-heroicons-list-bullet-solid',
  type: 'yes'
}, {
  label: 'Mapa',
  icon: 'i-heroicons-map-solid'
}, {
  label: 'Płytki',
  icon: 'i-heroicons-squares-2x2-solid'
}]

const selectedTabItem = ref('Lista')
const onTabChange = (index: number) => {
  selectedTabItem.value = items[index].label
}

</script>

<template>
  <div class="max-w-7xl">
    <div class="flex pt-10 pl-24">
      <div class="pt-2">
        Wyświetlaj jako:
      </div>
      <UTabs
        :items="items"
        @change="onTabChange"
      >
        <template #default="{ item }">
          <div class="flex items-center gap-2 relative truncate">
            <UIcon
              :name="item.icon"
              class="w-4 h-4 flex-shrink-0"
            />
          </div>
        </template>
      </UTabs>
    </div>
    <div
      v-if="selectedTabItem === 'Płytki'"
      class="grid grid-cols-2 gap-20 px-20"
    >
      <UCard
        v-for="greenhouse in greenhouses"
        :key="greenhouse.id"
        :ui="{ body: { padding: ''}}"
      >
        <template #header>
          <div class="flex items-center font-bold text-gray-400">
            <UIcon
              name="i-mdi-greenhouse"
              class="w-12 h-12 mx-2"
            />
            Szklarnia
          </div>
        </template>
        <div class="flex font-bold text-gray-400 px-7 py-10">
          Twoja rola:
          <div class="font-normal pl-2">
            Właściciel
          </div>
        </div>
        <template #footer>
          <div class="flex font-bold text-gray-400">
            Nazwa:
            <div class="font-normal pl-2">
              {{ greenhouse.name }}
            </div>
          </div>
          <div class="flex font-bold text-gray-400">
            Typ uprawy:
            <div class="font-normal pl-2">
              {{ greenhouse.plantType }}
            </div>
          </div>
          <div class="flex font-bold text-gray-400">
            Lokacja:
            <div class="font-normal pl-2">
              {{ greenhouse.location.lat }}
            </div>
          </div>
        </template>
      </UCard>
    </div>
  </div>
</template>
