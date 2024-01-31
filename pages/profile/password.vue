<script setup lang="ts">
const { user, refresh } = await useAuthenticatedUser()

const schema = createSchema({
  oldPassword: Yup.string().required('Hasło jest wymagane'),
  password: usePasswordValidationSchema(),
  passwordConfirmation: usePasswordConfirmationValidationSchema()
})

const router = useRouter()
const { submit, loading } = createSubmitHandler(schema, async (values, actions) => {
  if (!user.value) return

  try {
    await GqlUpdatePassword({
      id: +user.value.id,
      ...values
    })
  } catch (err) {
    const { gqlErrors } = err
    if (!gqlErrors) throw err

    const incorrectOldPassword = gqlErrors.find((err) => err.message === 'Incorrect old password')
    const samePassword = gqlErrors.find((err) => err.message === 'You must enter a new password')

    if (incorrectOldPassword) {
      actions.setErrors({
        oldPassword: 'Podane hasło jest nieprawidłowe'
      })
    }

    if (samePassword) {
      actions.setErrors({
        password: 'Nowe hasło nie może być takie samo jak stare'
      })
    }
    return
  }

  await refresh()
  return router.push('/profile')
})

const cancel = () => router.push('/profile')
</script>

<template>
  <Form
    :validation-schema="schema"
    @submit="submit"
  >
    <ProfileCard
      v-if="user"
      :user="user"
      :loading="loading"
      @confirm="true"
      @cancel="cancel"
    >
      <!-- Password change form -->
      <div class="mx-1">
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
      </div>
      <!-- Password change form -->
    </ProfileCard>
  </Form>
</template>
