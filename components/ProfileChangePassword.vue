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
    <div class="min-w-[450px] -mx-4 border-t border-b ">
      <Form
        :validation-schema="schema"
        class="mx-5 my-2"
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
            name="newPassword"
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
