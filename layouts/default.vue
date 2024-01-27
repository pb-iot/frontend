<script setup lang="ts">
import { useColorMode } from '@vueuse/core'

const links = [{
  label: 'Moje szklarnie',
  icon: 'i-heroicons-map-pin-solid',
  to: '/dashboard'
}, {
  label: 'Moje lokalizacje',
  // placeholder bo nie wiem skad wziac ikonke szklarni
  icon: 'i-heroicons-building-storefront-solid',
  to: '/dashboard'
}, {
  label: 'Mój profil',
  icon: 'i-heroicons-user-circle-solid',
  to: '/dashboard'
}]
const links2 = [{
  label: 'Lista szklarni',
  icon: 'i-heroicons-list-bullet',
  to: '/dashboard/greenhouse'
}, {
  label: 'Dodaj szklarnię',
  icon: 'i-heroicons-plus-circle-solid',
  to: '/dashboard/greenhouse/add-new'
}
]

const colorMode = useColorMode()
const userStore = useUserStore()
</script>

<template>
  <div class="grid grid-cols-[300px,1fr] grid-rows-[auto,1fr] bg-gray-100 h-screen">
    <!-- arrow -->
    <div class="flex justify-end border-b border-gray-400 bg-white">
      <UButton
        class="mr-1 px-3"
        color="gray"
        size="lg"
        variant="ghost"
      >
        <i class="i-heroicons-arrow-left-solid text-4xl text-gray-400" />
      </UButton>
    </div>

    <!-- Semi-transparent bar at the top -->
    <div class="sticky top-0 z-10 flex items-center py-2 bg-opacity-40 backdrop-blur-xl bg-gray-100/80">
      <img
        src="~/public/logo.png"
        alt="Logo"
        class="h-16"
      >
      <UButton
        class="ml-auto"
        variant="soft"
        color="gray"
        :icon="colorMode === 'light' ? 'i-heroicons-moon' : 'i-heroicons-sun'"
        @click="colorMode = colorMode === 'light' ? 'dark' : 'light'"
      />
      <UAvatar
        class="mx-4"
        size="lg"
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        alt="Avatar"
      />
      <div class="mr-5">
        <p v-if="userStore.authorizedUser">
          {{ userStore.authorizedUser.firstName }} 
          {{ userStore.authorizedUser.lastName }}
        </p>
        <p v-else>
          Użyszkodnik
        </p>
        <UButton
          color="white"
          variant="solid"
          icon="i-heroicons-cog-8-tooth"
          size="2xs"
        >
          Edytuj konto
        </UButton>
      </div>
    </div>

    <!-- Column 1 (200px fixed width) -->
    <div class="flex flex-col bg-white h-full">
      <div class="border-b border-gray-400">
        <UVerticalNavigation
          :links="links"
          class="ml-3 w-11/12 my-1"
        />
      </div>
      <div class="ml-3 w-11/12 my-1">
        <UVerticalNavigation :links="links2" />
      </div>
    </div>

    <!-- Column 2 (1fr width, flexible) -->
    <div class="relative py-8 px-4 ">
      <NuxtPage />
    </div>
  </div>
</template>
