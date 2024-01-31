<script setup lang="ts">
defineProps<{
  greenhouseOptions: (greenhouse: Greenhouse) => ({
    label: string;
    icon: string;
    to: string;
    click: () => void;
  }[] | {
    label: string;
    icon: string;
    slot: string;
    click: () => void;
  }[])[]
}>()

const greenhouses = await useGreenhouses()
const { locations } = await useLocations()
const knownLocations = computed(() => locations.value.filter(location => location.greenhouseSet.length > 0))
const getGreenhouse = (locationId: string) => {
  console.log(locationId, greenhouses.value)
  return greenhouses.value.find(greenhouse => greenhouse.location.id == locationId)
}
</script>

<template>
  <Map class="h-full" :locations="knownLocations" v-slot="{ location }">
    <div v-for="greenhouse in [getGreenhouse(location.id)].filter(i => i)">
      <UCard>
        <template #header>
          <div class="flex items-center font-bold text-gray-400">
            <UIcon
              name="i-mdi-greenhouse"
              class="w-12 h-12 mx-2 pt-10"
            />
            Szklarnia
            <div class="min-w-5">
              <div :class="greenhouse.authorizedUsers.length < 3 ? 'pl-16' : 'pl-10'">
                <UAvatarGroup
                  :max="2"
                  :ui="{ margin: 'me-1 first:me-0' }"
                >
                  <UTooltip
                    v-for="user in greenhouse.authorizedUsers"
                    :key="user.id"
                    :text="user.firstName + ' ' + user.lastName"
                    class="hover:cursor-help"
                  >
                    <UAvatar :src="useAvatar(user)" />
                  </UTooltip>
                </UAvatarGroup>
              </div>
              <UDropdown
                :ui="{
                  width: 'w-56'
                }"
                class="pl-14 pt-2 font-normal"
                :items="greenhouseOptions(greenhouse)"
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
          <div class="flex font-bold text-gray-400">
            Nazwa:
            <div class="font-normal pl-2">
              {{ greenhouse.name }}
            </div>
          </div>
          <div class="flex font-bold text-gray-400">
            Typ uprawy:
            <div class="font-normal pl-2">
              {{ greenhouse.cropType }}
            </div>
          </div>
          <div class="flex font-bold text-gray-400">
            Lokacja:
            <div class="font-normal pl-2">
              {{ greenhouse.location.name }}
            </div>
          </div>
        <template #footer>
          <UButton
            block
            :to="`/dashboard/greenhouse/${greenhouse.id}`"
          >Zobacz szklarnię</UButton>
        </template>
      </UCard>
    </div>
  </Map>
</template>
