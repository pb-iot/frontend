<script setup lang="ts">
// TODO: ADD VALIDATION
</script>

<template>
  <div class="password-change-field bg-white border border-gray-300 rounded p-4">
    <div class="flex items-center mb-4 h-20">
      <UAvatar
        class="mr-2"
        size="2xl"
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        alt="Avatar"
      />
      <p class="text-lg font-semibold">
        Profil
      </p>
    </div>

    <!-- Data change form -->
    <div class="min-w-[450px] -mx-4 border-t border-b">
      <Form
        :validation-schema="schema"
        class="mx-5 mb-7 my-2"
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

        <UFormGroup
          label="Email"
          description="Nie możesz zmienić swojego e-maila."
          required
        >
          <div class="mb-2">
            <UInput
              placeholder="kowalski.jan123@gmail.com"
              icon="i-heroicons-envelope"
            />
          </div>
        </UFormGroup>
      </Form>
    </div>
    <!-- Data change form -->

    <!-- Buttons for actions -->
    <div class="flex justify-between mt-5 mx-1">
      <UButton
        type="button"
        class="flex-1 place-content-center"
        color="red"
        variant="soft"
        label="Anuluj"
      />
      <UButton
        type="submit"
        class="flex-1 ml-4 place-content-center"
        label="Zapisz zmiany"
      />
    </div>
  </div>
</template>
