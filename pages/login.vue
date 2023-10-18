<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

const schema = createSchema({
  email: Yup.string().required().email(),
  password: Yup.string().min(10).required()
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
        placeholder="Wpisz E-mail"
        class="py-1"
        name="email"
        label="E-mail"
       />
      <div>
        <TextField
          placeholder="Wpisz hasło"
          class="py-1"
          name="password"
          label="Hasło"
         />
        <ULink to="/reset-password" class="mt-2 text-primary text-sm hover:underline">
          Nie pamiętasz hasła?
        </ULink>
      </div>
      <UButton type="submit" class="mt-20 mx-auto" block>
        Zaloguj się
      </UButton>
    </Form>
    <!-- <UFormGroup label="E-mail" required name="email" class="mb-1">
      <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
    </UFormGroup>
    <UFormGroup label="Hasło" required name="password" class="mb-1">
      <UInput type="password" />
    </UFormGroup> -->
    <UAlert title="Nie posiadasz konta?" class="mt-5">
      <template #description>
        <ULink to="/register" class="text-primary text-sm hover:underline">
          Zarejestruj się!
        </ULink>
      </template>
    </UAlert>
  </div>
</template>