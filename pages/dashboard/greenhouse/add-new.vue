<script setup lang="ts">
definePageMeta({
  colorMode: 'light' // Temporary solution for fast toggle color mode
})
</script>

<template>
  <div class="max-w-7xl min-h-full">
    <div class="px-40">
      <UCard :ui="{ base: ''}" class="w-96">
        <template #header>
          <div>Nowa szklarnia</div>
        </template>

        <template #footer>
          <div class="flex justify-center">
            <UButton
              color="red"
              class="px-16 mr-2"
              variant="soft"
              label="Anuluj"
            />
            <UButton
              class="ml-2 px-[33.35px]"
              :ui="{ base:'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0' }"
              label="Zapisz szklarnię"
            />
          </div>
        </template>
      </UCard>
    </div>
  </div>
</template>
