<script setup lang="ts">
defineProps<{
  dataForTitle: string;
}>()
</script>
<template>
  <AlertDeleteCard
    :actions="[{ variant: 'outline', color: 'red', label: 'Tak, chcę usunąć' }, { variant: 'solid', color: 'red', label: 'Anuluj usunięcie' }]"
  >
    <template #title>
      Czy na pewno chcesz usunąć swoje {{dataForTitle}}?
    </template>
    <template #description>
      Spowoduje to nieodwracalną utratę danych na temat {{dataForTitle}}.
    </template>
    <template #actions />
  </AlertDeleteCard>
</template>
