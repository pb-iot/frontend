<script setup lang="ts">
const ONE_USER_HEIGHT_REM: number = 2.25

// TODO: Fetch users from the database
// NOTE: Example users
const users = [{
  id: 1,
  name: 'Jan',
  surname: 'Kowalski',
  type: 'Właściciel'
}, {
  id: 22,
  name: 'Mikołaj',
  surname: 'Święty',
  type: 'Pracownik'
}, {
  id: 3,
  name: 'Mariusz',
  surname: 'Pudzianowski',
  type: 'Obserwator'
}]

interface UserLink {
  label: string,
  to: string | undefined,
  icon: string,
  iconClass: string,
  click: () => void
}

// NOTE: Popover open variable
const open = ref(false)
const currentBottom = ref(0)
const selectedLinkIndex = ref<number | undefined>(undefined)
const links: UserLink[] = reactive(users.map((user, index) => {
  const link = {
    label: user.name + ' ' + user.surname,
    to: undefined,
    icon: 'i-heroicons-plus-circle-20-solid',
    iconClass: 'ml-auto',
    click: () => {
      selectedLinkIndex.value = index

      // NOTE: opens popup
      open.value = true

      // NOTE: computing how far from the bottom should be popover with absolute positioning
      const remValue = ((users.length - index - 1) * ONE_USER_HEIGHT_REM) - 4.25
      console.log('dla indeksu ' + index)
      console.log('wartosc ' + remValue)
      currentBottom.value = remValue
    }
  }

  return link
}))

watch(selectedLinkIndex, () => {
  if (selectedLinkIndex.value !== undefined) links[selectedLinkIndex.value].to = '/greenhouse/add-new'
})

watch(open, () => {
  for (let i = 0; i < links.length && open.value === false; ++i) links[i].to = undefined
})
const assignedUsers: User[] = []

</script>

<template>
  <UCard
    :ui="{ body: { padding: ''}}"
    class="w-96"
  >
    <template #header>
      <div class="flex items-center font-bold text-gray-400">
        <TitleIcon icon="i-heroicons-user-group-solid" />
        Użytkownicy
      </div>
    </template>
    <div
      v-if="assignedUsers.length === 0"
      class="pl-10 py-5 font-bold text-gray-400"
    >
      Przypisz użytkowników
    </div>
    <div v-else>
      <div
        v-for="user in assignedUsers"
        :key="user.id"
      >
        {{ }}
      </div>
    </div>
    <template #footer>
      <div class="relative">
        <UPopover
          :open="open"
        >
          <div class="min-w-full">
            <UVerticalNavigation
              :links="links"
              :ui="{
                base: 'group relative flex flex-row-reverse items-center gap-2 focus:outline-none' +
                  + 'focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset' +
                  + 'focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400' +
                  + 'before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75',
                size: 'text-md',
                icon: {
                  base: 'flex-shrink-0 w-6 h-6'
                }
              }"
            />
          </div>

          <template #panel>
            <div
              class="absolute bot-10 w-48 h-[5.0rem] bg-white text-md rounded-lg shadow-lg border-1 text-gray-600 text-md"
              :style="{
                bottom: `${currentBottom}rem`
              }"
            >
              <div class="px-4 pt-1 hover:bg-gray-300 rounded-t-lg cursor-default hover:cursor-pointer">
                Dodaj jako właściciel
              </div>
              <div class="px-4 hover:bg-gray-300 cursor-default hover:cursor-pointer">
                Dodaj jako pracownik
              </div>
              <div class="px-4 pb-1 hover:bg-gray-300 rounded-b-lg cursor-default hover:cursor-pointer">
                Dodaj jako obserwator
              </div>
            </div>
          </template>
        </UPopover>
      </div>
    </template>
  </UCard>
</template>
