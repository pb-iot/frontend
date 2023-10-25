<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

const schema = createSchema({
  email: Yup.string().required().email(),
  name: Yup.string().required(),
  surname: Yup.string().required(),
  password: Yup.string().min(10).required(),
  passwordConfirmation: Yup.string().required().oneOf([
    Yup.ref('password')
  ])
})

const submit = createSubmitHandler(schema, (values) => {
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
        placeholder="Wpisz imię"
        class="py-1"
        name="name"
        label="Imię"
      />
      <TextField
        placeholder="Wpisz nazwisko"
        class="py-1"
        name="surname"
        label="Nazwisko"
      />
      <TextField
        placeholder="you@example.com"
        icon="i-heroicons-envelope"
        class="py-1"
        name="email"
        :trailing="false"
        label="E-mail"
      />
      <TextField
        placeholder="Wpisz hasło"
        class="py-1"
        name="password"
        label="Hasło"
      />
      <TextField
        placeholder="Powtórz hasło"
        class="py-1"
        name="passwordConfirmation"
        label="Powtórz hasło"
      />
      <UButton
        type="submit"
        class="mt-20 mx-auto"
        label="Zarejestruj się"
        block
      />
    </Form>
    <UAlert
      title="Posiadasz już konto?"
      class="mt-5"
    >
      <template #description>
        <ULink
          to="/login"
          class="text-primary text-sm hover:underline"
        >
          Zaloguj się!
        </ULink>
      </template>
    </UAlert>
  </div>
</template>
