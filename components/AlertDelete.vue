<template>
  <UAlert
    class="border-b-4 border-red-500"
    :close-button="{ icon: 'i-heroicons-x-mark-20-solid', color: 'gray', variant: 'link', padded: false }"
    :actions="[{ variant: 'outline', color: 'red', label: 'Tak, chcę usunąć moje konto' }, { variant: 'solid', color: 'red', label: 'Anuluj usunięcie konta' }]"
    title="Czy na pewno chcesz usunąć swoje konto?"
    description="Spowoduje to nieodwracalną utratę danych na temat Twoich szklarni oraz lokacji."
    icon="i-heroicons-exclamation-circle-solid"
  />
</template>
