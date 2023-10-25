<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

const validationMessages = [
  'Hasło musi zawierać minimum 10 znaków',
  'Hasło musi zawierać przynajmniej jedną duzą literę',
  'Hasło musi zawierać przynajmniej jedną cyfrę'
]

const schema = createSchema({
  password: Yup.string().min(10, validationMessages[0]).matches(/[A-Z]/, validationMessages[1]).matches(/\d/, validationMessages[2]).required(),
  passwordConfirmation: Yup.string().required().oneOf([
    Yup.ref('password')
  ])
})

const submit = createSubmitHandler(schema, (values) => {
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
