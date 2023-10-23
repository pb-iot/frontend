<script setup>
const isOpen = ref(true)
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
</script>
<template>
  <div>
    <UButton
      class="my-1"
      color="gray"
      size="xl"
      icon="i-heroicons-arrow-right-20-solid"
      variant="ghost"
      @click="isOpen = true"
    />
    <div class="relative">
      <div class="absolute -top-9 right-0">
        <UAvatar
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="Avatar"
        />
      </div>
    </div>
    <USlideover
      v-model="isOpen"
      prevent-close
      side="left"
      :overlay="false"
    >
      <UCard
        class="flex flex-col flex-1"
        :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }"
      >
        <template #header>
          <div class="flex items-center justify-end">
            <UButton
              color="gray"
              size="xl"
              variant="ghost"
              icon="i-heroicons-arrow-left-20-solid"
              class="-my-4"
              @click="isOpen = false"
            />
          </div>
        </template>
        <div class="border-b border-gray-500 -mt-4 -mx-4">
          <UVerticalNavigation
            class="mx-4"
            :links="links"
          />
        </div>

        <div class="mt-1 text-gray-700 font-medium px-3 py-1.5">
          <p>
            <UIcon
              name="i-heroicons-list-bullet"
              class="mr-1"
            />
            Lista szklarni
          </p>
          <UButton
            color="gray"
            class="-ml-3"
            icon="i-heroicons-plus-circle-solid"
            variant="ghost"
          >
            Dodaj szklarnię
          </UButton>
        </div>
      </UCard>
    </USlideover>
  </div>
</template>
