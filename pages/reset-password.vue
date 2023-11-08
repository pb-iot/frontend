<script setup lang="ts">
definePageMeta({
  layout: 'auth'
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
    <UFormGroup
      label="E-mail"
      required
      name="email"
      class="mt-4"
    >
      <UInput
        placeholder="you@example.com"
        icon="i-heroicons-envelope"
      />
    </UFormGroup>
    <div class="grid grid-cols-2 gap-x-4 mt-[4.75rem] mx-auto">
      <UButton
        color="gray"
        variant="soft"
        to="/login"
        block
      >
        Cofnij
      </UButton>
      <UButton
        to="/reset-password-message"
        block
      >
        Resetuj hasło
      </UButton>
    </div>
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
