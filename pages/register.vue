<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

const schema = createSchema({
  email: useEmailValidationSchema(),
  name: Yup.string().required('Imię jest wymagane'),
  surname: Yup.string().required('Nazwisko jest wymagane'),
  password: usePasswordValidationSchema(),
  passwordConfirmation: usePasswordConfirmationValidationSchema()
})


const auth = useAuthStore()
const router = useRouter()

const submit = createSubmitHandler(schema, async (values) => {
  await auth.register(values)
    .then(() => router.push('/dashboard'))
    .catch((error) => {
      // TODO: Add error handling
      console.log(error)
    })
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
        leading-icon="i-heroicons-envelope"
        class="py-1"
        name="email"
        label="E-mail"
      />
      <TextField
        placeholder="Wpisz hasło"
        class="py-1"
        name="password"
        type="password"
        label="Hasło"
      />
      <TextField
        placeholder="Powtórz hasło"
        class="py-1"
        name="passwordConfirmation"
        type="password"
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
