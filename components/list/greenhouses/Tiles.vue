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

const userStore = useUserStore()
const greenhouses = await useGreenhouses()
</script>

<template>
  <div class="grid grid-cols-3 gap-20 px-20">
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
            {{ greenhouse }}
            <div :class="greenhouse.authorizedUsers.length < 3 ? 'pl-16' : 'pl-10'">
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
</template>
