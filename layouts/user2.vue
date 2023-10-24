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
  <div class="grid grid-cols-[300px_1fr]">
    <!-- Column 1 (200px fixed width) -->
    <div class="h-screen flex flex-col">
      <!----arrow-->
      <div class="flex justify-end border-b border-gray-400 h-16">
        <UButton
          class="mr-1 px-3"
          color="gray"
          size="l"
          variant="ghost"
        >
          <i class="i-heroicons-arrow-left-solid text-4xl text-gray-400" />
        </UButton>
      </div>
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
    <div class="bg-gray-100 h-screen relative">
      <!-- Semi-transparent bar at the top -->
      <div class="absolute flex top-0 left-0 w-full h-16 bg-opacity-40 backdrop-blur-sm">
        <img
          src="~/public/logo.png"
          alt="Logo"
          class="max-w-full max-h-full"
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
    </div>
  </div>
</template>
