<script>
const schema = createSchema({
  password: usePasswordValidationSchema(),
  passwordConfirmation: usePasswordConfirmationValidationSchema()
})
</script>
<template>
  <UAlert
    class="border-b-4 border-red-500"
    :close-button="{ icon: 'i-heroicons-x-mark-20-solid', color: 'gray', variant: 'link', padded: false }"
    :actions="[{ variant: 'outline', color: 'red', label: 'Usuń moje konto' }, { variant: 'solid', color: 'red', label: 'Anuluj usunięcie konta' }]"
    title="Aby usunąć konto, podaj swoje hasło"
    icon="i-heroicons-exclamation-circle-solid"
  >
    <template #description>
      <Form>
        <TextField
          class="py-1"
          name="password"
          label="Hasło"
          type="password"
          required
        />
        <TextField
          class="py-1"
          name="passwordConfirmation"
          label="Powtórz hasło"
          type="password"
          required
        />
      </Form>
    </template>
  </UAlert>
</template>
