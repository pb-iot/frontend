<script>
const items = [
[{
    label: 'Data',
    type: 'date',
    filterKey: 'date'
  }]
]
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex items-center text-gray-500 text-3xl">
        <UIcon name="i-heroicons-chart-bar-solid" />
        <p class="text-lg font-semibold">
          Statystyki
        </p>

        <div class="ml-auto">
          <UDropdown :items="items"> <!--- DOESNT WORK -->
            <UButton
              color="white"
              label="Filtruj"
              icon="i-heroicons-funnel-solid"
            />
          </UDropdown>
        </div>
      </div>
    </template>

    <div class="flex justify-end">
      <!---TODO CHANGE TO UTABS?-->
      <UButton
        icon="i-heroicons-chart-pie-solid"
        size="sm"
        color="gray"
        square
        variant="soft"
        class="mx-3"
      />
      <UButton
        icon="i-heroicons-list-bullet"
        size="sm"
        color="gray"
        square
        variant="soft"
      />
    </div>
    <slot />
  </UCard>
</template>
