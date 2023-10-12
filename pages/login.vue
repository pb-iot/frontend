<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
</script>

<template>
    <UFormGroup label="E-mail" required name="email" class="scale-90 ">
      <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
    </UFormGroup>
    <UFormGroup label="Hasło" required name="password" help="Nie pamiętasz hasła?" class="scale-90">
      <UInput type="password" />
    </UFormGroup>
    <UButton type="submit" class="mt-1 mx-auto min-w-[400px] justify-center scale-90">
      Zaloguj się
    </UButton>
</template>