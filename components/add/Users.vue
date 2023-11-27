<script setup lang="ts">
// TODO: Fetch users from the database
// NOTE: Example users
const users: User[] = [{
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

const links = users.map((user) => ({
  label: `${user.name} ${user.surname}`,
  icon: 'i-heroicons-plus-circle-20-solid',
  user
}))

const assignedUsers = reactive<User[]>([])

const dropdownItems = ({ user }: typeof links[number]) => [
  [
    {
      label: 'Dodaj jako właściciel',
      click: () => assignedUsers.push(user)
    },
    {
      label: 'Dodaj jako pracownik',
      click: () => assignedUsers.push(user)
    },
    {
      label: 'Dodaj jako obserwator',
      click: () => assignedUsers.push(user)
    }
  ]
]
</script>

<template>
  <UCard :ui="{ body: { padding: ''}}">
    <template #header>
      <div class="flex items-center font-bold text-gray-400">
        <UIcon 
          name="i-heroicons-user-group-solid"
          class="w-12 h-12 mx-2"
        />
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
        {{ user.name }} {{ user.surname }}
      </div>
    </div>
    <template #footer>
      <div class="relative">
        <UDropdown 
          v-for="link in links"
          :key="link.label"
          :items="dropdownItems(link)"
          class="w-full"
        >
          <UButton
            :trailing-icon="link.icon"
            :label="link.label"
            variant="ghost"
            color="gray"
            class="w-full justify-between"
            block
          />
        </UDropdown>
      </div>
    </template>
  </UCard>
</template>
