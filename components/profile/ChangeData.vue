<script setup lang="ts">
// TODO: ADD VALIDATION
defineProps<{
    // TODO: Use `User` type
    user: {
        firstname: string
        lastname: string
        avatar: string
    }
}>()
const submit = createSubmitHandler(schema, (values) => {
  // TODO: Send request to the backend
  console.log(values)
}) 
const confirm = () => console.log('confirm')
const cancel = () => console.log('cancel')


const schema = createSchema({
  name: Yup.string().required('Imię jest wymagane'),
  surname:Yup.string().required('Nazwisko jest wymagane'),
  email: useEmailValidationSchema()

})

const submit = createSubmitHandler(schema, (values) => {
  // TODO: Send request to the backend
  console.log(values)
})
</script>

<template>
  <ProfileCard
    :user="user"
    @confirm="confirm"
    @cancel="cancel"
  >
    <!-- Data change form -->
    <div class="-mx-4">
      <Form
        :validation-schema="schema"
        class="mx-5 mb-7"
        @submit="submit"
      >
        <!-- User information fields with spacing -->
        <div class="mb-2">
          <TextField
            class="py-1"
            name="name"
            label="Imię"
            type="text"
            placeholder="Jan"
            required
          />
        </div>

        <div class="mb-2">
          <TextField
            class="py-1"
            name="surname"
            label="Nazwisko"
            type="text"
            placeholder="Kowalski"
            required
          />
        </div>
        <div class="mb-2">
          <TextField
            class="py-1"
            name="email"
            label="Email"
            description="Nie możesz zmienić swojego e-maila."
            placeholder="kowalski.jan123@gmail.com"
            icon="i-heroicons-envelope"
            :disabled="true"/>
        </div>
      </Form>
    </div>
    <!-- Data change form -->
  </ProfileCard>
</template>
