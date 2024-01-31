<script setup lang="ts">
// Note: navigation
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

const selectedTabItem = ref<string>('Lista')
const onTabChange = (index: number) => {
  selectedTabItem.value = items[index].label
}

const greenhouseOptions = (greenhouse: Greenhouse) => [
  [{
    label: 'Zobacz szklarnię',
    icon: 'i-heroicons-arrow-right-20-solid',
    to: `/dashboard/greenhouse/${greenhouse.id}`,
    click: () => {
      console.log('Edit')
    }
  }], [{
    label: 'Edytuj szklarnie',
    icon: 'i-heroicons-pencil-square-20-solid',
    to: `/dashboard/greenhouse/${greenhouse.id}/edit`,
    click: () => {
      console.log('Edit')
    }
  }], [{
    label: 'Zarządzaj użytkownikami',
    icon: 'i-heroicons-user-group-20-solid',
    to: `/dashboard/greenhouse/${greenhouse.id}`,
    click: () => {
      console.log('Edit')
    }
  }
  ], [{
    label: 'Usuń',
    icon: 'i-heroicons-trash-20-solid',
    slot: 'delete',
    click: () => {
      deleteGreenhouse(greenhouse)
    }
  }]
]

</script>

<template>
  <div class="max-w-7xl h-full">
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
    <div v-if="selectedTabItem === 'Płytki'">
      <ListGreenhousesTiles :greenhouse-options="greenhouseOptions" />
    </div>
    <div v-else-if="selectedTabItem === 'Mapa'" class="h-[90%] rounded-xl shadow overflow-hidden relative">
      <LazyListGreenhousesMap :greenhouse-options="greenhouseOptions" />
    </div>
    <div v-else-if="selectedTabItem === 'Lista'">
      <LazyListGreenhousesTable :greenhouse-options="greenhouseOptions" />
    </div>
  </div>
</template>
