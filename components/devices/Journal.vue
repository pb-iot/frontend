<script setup lang="ts">
const columns = [{
  key: 'date',
  label: 'Data',
  sortable: true
}, {
  key: 'time',
  label: 'Godzina',
  sortable: true
}, {
  key: 'event',
  label: 'Zdarznie',
  sortable: true
}]
const { dane } = []
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex">
        <div class="flex-1 align-middle font-semibold items-center text-gray-500 text-2xl">
          <UIcon name="i-heroicons-clipboard-document-list-solid" />
          Dziennik zdarzeń
        </div>
      </div>
    </template>
    <UTable
      :columns="columns"
      :rows="dane"
    />
    <template #footer>
      <UButton class="w-full justify-center">
        Oznacz jako przeczytane
      </UButton>
    </template>
  </UCard>
</template>
