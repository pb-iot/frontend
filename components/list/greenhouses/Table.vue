<script setup lang="ts">
defineProps<{
  greenhouseOptions: (greenhouse: Greenhouse) => []
}>()

const columns = [{
  key: 'name',
  label: 'Nazwa'
}, {
  key: 'yourRole',
  label: 'Twoje Rola'
}, {
  key: 'cropType',
  label: 'Typ uprawy'
}, {
  key: 'location',
  label: 'Lokacja'
}, {
  key: 'authorizedUsers',
  label: 'Użytkownicy'
}, {
  key: 'actions'
}]

const greenhouses = await useGreenhouses()
const user = await useAuthenticatedUser()

const getRole = (greenhouse: Greenhouse) => {
  return greenhouse.owner.id === user?.id
    ? 'Właściciel'
    : 'Użytkownik'
}
</script>

<template>
  <div class="max-w-5xl px-10">
    <UCard>
      <div class="flex items-center font-bold text-gray-400 pb-5">
        <UIcon
          name="i-mdi-greenhouse"
          class="w-12 h-12 mx-2"
        />
        Szklarnie
      </div>
      <UCard
        :ui="{
          body: {
            padding: ''
          },
          ring: 'ring-1 ring-gray-300 dark:ring-gray-200'
        }"
      >
        <UTable
          :rows="greenhouses"
          :columns="columns"
        >
          <template #yourRole-data="{ row }">
            {{ getRole(row) }}
          </template>
          <template #location-data="{ row }">
            {{ row.location.name }}
          </template>
          <template #authorizedUsers-data="{ row }">
            <UAvatarGroup
              :max="2"
              :ui="{ margin: 'me-1 first:me-0' }"
            >
              <UTooltip
                v-for="user in row.authorizedUsers"
                :key="user.id"
                :text="user.firstName + ' ' + user.lastName"
                class="hover:cursor-help"
              >
                <UAvatar :src="useAvatar(user)" />
              </UTooltip>
            </UAvatarGroup>
          </template>
          <template #actions-data="{ row }">
            <UDropdown
              :ui="{
                width: 'w-56'
              }"
              class="pl-14 pt-2"
              :items="greenhouseOptions(row)"
            >
              <UButton
                color="gray"
                variant="ghost"
                icon="i-heroicons-ellipsis-horizontal-20-solid"
              />
            </UDropdown>
          </template>
        </UTable>
      </UCard>
    </UCard>
  </div>
</template>
