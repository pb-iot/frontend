<script setup lang="ts">
</script>
<template>
  <AlertDeleteCard
    :actions="[{ variant: 'outline', color: 'red', label: 'Tak, chcę usunąć moje konto' }, { variant: 'solid', color: 'red', label: 'Anuluj usunięcie konta' }]"
  >
    <template #title>
      Czy na pewno chcesz usunąć swoje konto?
    </template>
    <template #description>
      Spowoduje to nieodwracalną utratę danych na temat Twoich szklarni oraz lokacji.
    </template>
    <template #actions />
  </AlertDeleteCard>
</template>
