<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

const schema = createSchema({
  email: Yup.string().required('E-mail jest wymagany').email('Niepoprawny adres e-mail')
})

const submit = createSubmitHandler(schema, (values) => {
  // TODO: Wysłanie zapytania do backendu
  console.log(values)
})
</script>

<template>
  <div class="min-w-[450px] mx-auto">
    <UAlert
      title="Podaj adres e-mail, którego użyto do założenia konta w naszym serwisie. Po zatwierdzeniu formularza wyślemy na niego wiadomość z linkiem do zmiany hasła."
      color="primary"
      variant="soft"
      class="text-center"
    />
    <Form
      :validation-schema="schema"
      @submit="submit"
    >
      <TextField
        label="E-mail"
        icon="i-heroicons-envelope"
        :trailing="false"
        placeholder="you@example.com"
        name="email"
        class="mt-4"
      />
      <div class="grid grid-cols-2 gap-x-4 mt-[4.75rem] mx-auto">
        <UButton
          to="/login"
          label="Confij"
          block
        />
        <!-- TODO: Gdy walidacja jest zła nie powinno przechodzić do następnego widoku -->
        <UButton
          to="/reset-password-message"
          label="Resetuj hasło"
          type="submit"
          block
        />
      </div>
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
