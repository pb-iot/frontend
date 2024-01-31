<script setup lang="ts">
const { user, refresh } = await useAuthenticatedUser()

const initial = {
  firstName: user.value?.firstName ?? '',
  lastName: user.value?.lastName ?? '',
}

const schema = createSchema({
  firstName: Yup.string().required('Imię jest wymagane'),
  lastName: Yup.string().required('Nazwisko jest wymagane'),
})

const router = useRouter()
const { submit, loading } = createSubmitHandler(schema, async (values) => {
  if (!user.value) return
  await GqlUpdateUser({
    id: +user.value.id,
    ...values
  })

  await refresh()
  return router.push('/profile')
})

const cancel = () => router.push('/profile')
</script>

<template>
  <Form
    :validation-schema="schema"
    :initial-values="initial"
    @submit="submit"
  >
    <ProfileCard
      v-if="user"
      :user="user"
      :loading="loading"
      @confirm="true"
      @cancel="cancel"
    >
      <!-- Data change form -->
      <div class="mx-1">
        <UFormGroup
          label="Email"
          description="Nie możesz zmienić swojego e-maila."
        >
          <div class="mb-2">
            <UInput
              placeholder="kowalski.jan123@gmail.com"
              icon="i-heroicons-envelope"
              disabled
              :model-value="user?.email"
            />
          </div>
        </UFormGroup>

        <!-- User information fields with spacing -->
        <div class="mb-2 pt-4">
          <TextField
            class="py-1"
            name="firstName"
            label="Imię"
            type="text"
            placeholder="Jan"
            required
          />
        </div>

        <div class="mb-2">
          <TextField
            class="py-1"
            name="lastName"
            label="Nazwisko"
            type="text"
            placeholder="Kowalski"
            required
          />
        </div>
      </div>
      <!-- Data change form -->
    </ProfileCard>
  </Form>
</template>
