<script setup lang="ts">
const emit = defineEmits<{
  (e: 'update:users', v: []): void
}>()

const props = defineProps<{
  users: []
}>()

const { users } = await useUsers()
const { user } = await useAuthenticatedUser()

const links = computed(() => users.value!.filter(u => u!.id != user.value!.id).map((user) => ({
  label: `${user!.firstName} ${user!.lastName}`,
  assigned: assignedUsers.value.some(u => u.id == user!.id),
  avatar: useAvatar(user),
  user
})))

const assignedUsers = useVModel(props, 'users', emit)

const toggle = (user) => {
  const index = assignedUsers.value.findIndex(u => u.id === user.id)
  if (index > -1) {
    assignedUsers.value.splice(index, 1)
  } else {
    assignedUsers.value.push(user)
  }
}
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
    <div class="pl-10 py-5 font-bold text-gray-400">
      Przypisz użytkowników
    </div>
    <template #footer>
      <div class="relative">
        <UButton
          v-for="link in links"
          :key="link.user.id"
          :trailing-icon="link.assigned ? 'i-heroicons-trash-20-solid' : 'i-heroicons-plus-circle-20-solid'"
          variant="ghost"
          :color="link.assigned ? 'red' : 'gray'"
          class="w-full justify-start"
          block
          @click="toggle(link.user)"
        >
          <UAvatar :src="link.avatar" />
          {{ link.label }}
          <div class="mr-auto"></div>
        </UButton>
      </div>
    </template>
  </UCard>
</template>
