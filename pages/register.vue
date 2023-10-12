<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
</script>

<template>
  <UFormGroup label="Imie" required name="name" class="scale-90 ">
    <UInput />
  </UFormGroup>
  <UFormGroup label="Nazwisko" required name="surname" class="scale-90 ">
    <UInput />
  </UFormGroup>
  <UFormGroup label="E-mail" required name="email" class="scale-90 ">
    <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
  </UFormGroup>
  <UFormGroup label="Hasło" required name="password" class="scale-90">
    <UInput type="password" />
  </UFormGroup>
  <UFormGroup label="Powtórz hasło" required name="password" class="scale-90">
    <UInput type="password" />
  </UFormGroup>
  <UButton type="submit" class="mt-6 mx-auto min-w-[400px] justify-center scale-90">
    Zarejestruj się
  </UButton>
</template>