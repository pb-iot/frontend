<script setup lang="ts">
// TODO: Fetch users from the database
// NOTE: Example users
const emit = defineEmits<{
  updateAssignedUsers: [id: User[]]
}>()

const props = defineProps<{
  users: AuthenticatedUser[]
}>()

const users = toRef(props, 'users')
const links = users.value.map((user) => ({
  label: `${user.firstName} ${user.lastName}`,
  icon: 'i-heroicons-plus-circle-20-solid',
  user
}))

const assignedUsers = reactive([])
const addUserToAssignedUsers = (user) => {
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
          {{ user.firstName }} {{ user.lastName }}
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
