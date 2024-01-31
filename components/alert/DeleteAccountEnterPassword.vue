<script setup lang="ts">
const schema = createSchema({
  password: usePasswordValidationSchema(),
  passwordConfirmation: usePasswordConfirmationValidationSchema()
})
</script>
<template>
  <AlertDeleteCard
    :actions="[{ variant: 'outline', color: 'red', label: 'Usuń moje konto' }, { variant: 'solid', color: 'red', label: 'Anuluj usunięcie konta' }]"
  >
    <template #title>
      Aby usunąć konto, podaj swoje hasło
    </template>
    <template #description>
      <Form
        :validation-schema="schema"
        @submit="submit">
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
    <template #actions />
  </AlertDeleteCard>
</template>
