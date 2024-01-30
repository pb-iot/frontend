<script setup lang="ts">
const schema = createSchema({
  password: Yup.string().required('Hasło jest wymagane'),
  repeatPassword: Yup.string().required('Hasło jest wymagane')
})

const submit = createSubmitHandler(schema, (values) => {
  // TODO: Send request to the backend
  console.log(values)
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
          name="repeatPassword"
          label="Powtórz hasło"
          type="password"
          required
        />
      </Form>
    </template>
    <template #actions />
  </AlertDeleteCard>
</template>
