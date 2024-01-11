<script setup lang="ts">
// TODO: Fetch users from the database
// NOTE: Example users
const emit = defineEmits<{
  updateAssignedUsers: [id: User[]]
}>()
const users: User[] = [{
  id: 1,
  name: 'Jan',
  surname: 'Kowalski',
  type: 'Właściciel',
  avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FzidKpI6Ism4%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=31917f1bf9c1555aeb6cac71246cc6ccca965c82f0ae112d9952b83bc67a07d5&ipo=images'
}, {
  id: 22,
  name: 'Mikołaj',
  surname: 'Święty',
  type: 'Pracownik',
  avatar: 'https://images.unsplash.com/photo-1511600173735-a896042389cf?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}, {
  id: 3,
  name: 'Mariusz',
  surname: 'Pudzianowski',
  type: 'Obserwator',
  avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMGZhNzg5OWYtODU4NS00MzI0LTgwMjctNWZhMjk4MTU3MGM5XkEyXkFqcGdeQXVyMTc4MzI2NQ%40%40._V1_FMjpg_UX1000_.jpg&f=1&nofb=1&ipt=412cd966eb68eaa599a9e06569ecdf957f784b4f1038064495ea565fcf439480&ipo=images'
}]

const links = users.map((user) => ({
  label: `${user.name} ${user.surname}`,
  icon: 'i-heroicons-plus-circle-20-solid',
  user
}))

const assignedUsers = reactive<User[]>([])
const addUserToAssignedUsers = (user: User) => {
  let indexOfUserInArray = -1
  for (let i = 0; i < assignedUsers.length; ++i) {
    if (assignedUsers[i].id === user.id) {
      indexOfUserInArray = i

      // if (assignedUsers[i].type === user.type) return
      break
    }
  }

  if (indexOfUserInArray !== -1) {
    // NOTE: Jak zrobiłem assignedUsers.splice(indexOfUserInArray, 1, user), to v-for nie wykrywał update - nie wiem czy nie zgłosić tego na stronie vue
    assignedUsers.splice(indexOfUserInArray, 1)
    assignedUsers.splice(indexOfUserInArray, 0, user)
  } else {
    assignedUsers.push(user)
  }

  emit('updateAssignedUsers', assignedUsers)
}

const dropdownItems = ({ user }: typeof links[number]) => [
  [
    {
      label: 'Dodaj jako właściciel',
      click: () => {
        user.type = 'Właściciel'
        addUserToAssignedUsers(user)
      }
    },
    {
      label: 'Dodaj jako pracownik',
      click: () => {
        user.type = 'Pracownik'
        addUserToAssignedUsers(user)
        emit('updateAssignedUsers', assignedUsers)
      }
    },
    {
      label: 'Dodaj jako obserwator',
      click: () => {
        user.type = 'Obserwator'
        addUserToAssignedUsers(user)
        emit('updateAssignedUsers', assignedUsers)
      }
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
    <div
      v-else
      class="px-8 py-5 font-bold text-gray-600 dark:text-gray-400"
    >
      <div
        v-for="user in assignedUsers"
        :key="user.id"
      >
        <div class="flex">
          {{ user.name }} {{ user.surname }}
          <div class="font-normal ml-2">
            {{ user.type }}
          </div>
        </div>
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
