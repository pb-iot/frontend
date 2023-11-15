<script setup>
const links = [{
  label: 'Moje szklarnie',
  icon: 'i-heroicons-map-pin-solid',
  to: '/'
}, {
  label: 'Moje lokalizacje',
  // placeholder bo nie wiem skad wziac ikonke szklarni
  icon: 'i-heroicons-building-storefront-solid',
  to: '/'
}, {
  label: 'Mój profil',
  icon: 'i-heroicons-user-circle-solid',
  to: '/'
}]
const links2 = [{
  label: 'Lista szklarni',
  icon: 'i-heroicons-list-bullet'
}, {
  label: 'Dodaj szklarnię',
  icon: 'i-heroicons-plus-circle-solid'
}
]
</script>

<template>
  <div class="grid grid-cols-[300px,1fr] grid-rows-[auto,1fr] bg-gray-100 h-screen">
    <!-- arrow -->
    <div class="flex justify-end border-b border-gray-400 bg-white">
      <UButton
        class="mr-1 px-3"
        color="gray"
        size="l"
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
      <UAvatar
        class="ml-auto mr-4"
        size="lg"
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        alt="Avatar"
      />
      <div class="mr-5">
        <p>Jan Kowalski</p>
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
    <div class="flex flex-col bg-white">
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
    <div class="relative py-8 px-4">
      <NuxtPage />
    </div>
  </div>
</template>
