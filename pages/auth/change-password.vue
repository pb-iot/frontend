<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

const schema = createSchema({
  password: usePasswordValidationSchema(),
  passwordConfirmation: usePasswordConfirmationValidationSchema()
})

const { submit, loading } = createSubmitHandler(schema, async (values) => {
  // TODO: Wysłanie zapytania do backendu
  console.log(values)
})

</script>

<template>
  <div>
    <UAlert
      title="Wprowadź nowe hasło"
      description="Ustal swoje nowe hasło do logowania się w Greenhouse Manager"
      color="primary"
      variant="soft"
      class="text-justify mb-1"
    />

    <div class="min-w-[450px] mx-auto">
      <Form
        :validation-schema="schema"
        @submit="submit"
      >
        <TextField
          placeholder="Wpisz hasło"
          class="py-1"
          name="password"
          label="Hasło"
          type="password"
        />
        <TextField
          placeholder="Powtórz hasło"
          class="py-1"
          name="passwordConfirmation"
          label="Powtórz hasło"
          type="password"
        />
        <UButton
          type="submit"
          :loading="loading"
          class="mt-20 mx-auto"
          label="Zmień hasło"
          block
        />
      </Form>
    </div>

    <UAlert
      title="Hasło powinno zawierać minimum:"
      class="mt-5"
    >
      <template #description>
        <div>
          <div style="display: flex;">
            <div style="flex: 1;">
              <i class="i-heroicons-command-line" />
              10 znaków
            </div>
            <div style="flex: 1;">
              <i class="i-heroicons-command-line" />
              1 dużą literę
            </div>
          </div>
          <div style="display: flex;">
            <div style="flex: 1;">
              <i class="i-heroicons-command-line" />
              1 cyfrę
            </div>
            <div style="flex: 1;">
              <i class="i-heroicons-command-line" />
              1 znak specjalny
            </div>
          </div>
        </div>
      </template>
    </UAlert>
  </div>
</template>
