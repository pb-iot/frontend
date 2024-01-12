<script setup lang="ts">
const { greenhouses } = await useGreenhouses()
// Na potrzeby testowania
for (let i = 0; i < 6; ++i) {
  greenhouses.value.push(greenhouses.value[0])
}
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
const greenhouseOptions = [
  [{
    label: 'Edytuj szklarnie',
    icon: 'i-heroicons-pencil-square-20-solid',
    to: '/edit',
    click: () => {
      console.log('Edit')
    }
  }], [{
    label: 'Zarządzaj użytkownikami',
    icon: 'i-heroicons-user-group-20-solid',
    click: () => {
      console.log('Edit')
    }
  }
  ], [{
    label: 'Usuń',
    icon: 'i-heroicons-trash-20-solid',
    click: () => {
      console.log('Edit')
    }
  }]
]
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
      class="grid grid-cols-3 gap-20 px-20"
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
              class="w-12 h-12 mx-2 pt-10"
            />
            Szklarnia
            <div class="w-5">
              <div :class="greenhouse.users.length < 3 ? 'pl-16' : 'pl-10'">
                <UAvatarGroup
                  :max="2"
                  :ui="{ margin: 'me-1 first:me-0' }"
                >
                  <UTooltip
                    v-for="user in greenhouse.users"
                    :key="user.id"
                    :text="user.name + ' ' + user.surname"
                    class="hover:cursor-help"
                  >
                    <UAvatar :src="user.avatar" />
                  </UTooltip>
                </UAvatarGroup>
              </div>
              <UDropdown
                :ui="{
                  width: 'w-56'
                }"
                class="pl-14 pt-2"
                :items="greenhouseOptions"
              >
                <UButton
                  color="white"
                  label="Opcje"
                  trailing-icon="i-heroicons-chevron-down-20-solid"
                />
              </UDropdown>
            </div>
          </div>
        </template>
        <div class="flex font-bold text-gray-400 px-7 py-5">
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
