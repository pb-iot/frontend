<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

const schema = createSchema({
  email: useEmailValidationSchema(),
  password: Yup.string().required('Hasło jest wymagane')
})

const submit = createSubmitHandler(schema, (values) => {
  // TODO: Wysłanie zapytania do backendu
  console.log(values)
})

</script>

<template>
  <div class="min-w-[450px] mx-auto">
    <Form
      :validation-schema="schema"
      @submit="submit"
    >
      <TextField
        placeholder="Wpisz E-mail"
        leading-icon="i-heroicons-envelope"
        class="py-1"
        name="email"
        label="E-mail"
      />
      <div>
        <TextField
          placeholder="Wpisz hasło"
          class="py-1"
          name="password"
          type="password"
          label="Hasło"
        />
        <ULink
          to="/reset-password"
          class="mt-2 text-primary text-sm hover:underline"
        >
          Nie pamiętasz hasła?
        </ULink>
      </div>
      <UButton
        type="submit"
        class="mt-20 mx-auto"
        label="Zaloguj się"
        block
      />
    </Form>
    <UAlert
      title="Nie posiadasz konta?"
      class="mt-5"
    >
      <template #description>
        <ULink
          to="/register"
          class="text-primary text-sm hover:underline"
        >
          Zarejestruj się!
        </ULink>
      </template>
    </UAlert>
  </div>
</template>
