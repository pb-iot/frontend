<script setup lang="ts">
const schema = createSchema({
  password: usePasswordValidationSchema(),
  passwordConfirmation: usePasswordConfirmationValidationSchema()
})
const submit = createSubmitHandler(schema, (values) => {
  // TODO: Send request to the backend
  console.log(values)
}) 
defineProps<{
    // TODO: Use `User` type
    user: {
        firstname: string
        lastname: string
        avatar: string
    }
}>()

const confirm = () => console.log('confirm')
const cancel = () => console.log('cancel')
</script>

<template>
  <ProfileCard
    :user="user"
    @confirm="confirm"
    @cancel="cancel"
  >
    <!-- Password change form -->
    <div class="-mx-4">
      <Form
        :validation-schema="schema"
        class="mx-5"
        @submit="submit"
      >
        <!-- Password fields without stars -->
        <div class="mb-2">
          <TextField
            class="py-1"
            name="oldPassword"
            label="Podaj stare hasło"
            type="password"
            required
          />
        </div>

        <div class="mb-2">
          <TextField
            class="py-1"
            name="password"
            label="Podaj nowe hasło"
            type="password"
            required
          />
        </div>

        <div class="mb-2">
          <TextField
            class="py-1"
            name="passwordConfirmation"
            label="Powtórz nowe hasło"
            type="password"
            required
          />
        </div>
      </Form>
    </div>
    <!-- Password change form -->
  </ProfileCard>
</template>
