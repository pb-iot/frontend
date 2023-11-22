<script setup lang="ts">

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

const links = users.map((user) => {
  const link = {
    label: user.name + ' ' + user.surname,
    to: undefined,
    icon: 'i-heroicons-plus-circle-20-solid',
    iconClass: 'ml-auto'
  }

  return link
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
    </template>
  </UCard>
</template>
