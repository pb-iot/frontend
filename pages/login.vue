<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
</script>

<template>
  <div class="min-w-[450px] mx-auto">
    <UFormGroup label="E-mail" required name="email" class="mb-1">
      <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
    </UFormGroup>
    <UFormGroup label="Hasło" required name="password">
      <UInput type="password" />
      <ULink to="/reset-password" class="text-primary text-sm hover:underline">
        Nie pamiętasz hasła?
      </ULink>
    </UFormGroup>
    <UButton type="submit" class="mt-20 mx-auto" block>
      Zaloguj się
    </UButton>
    <UAlert title="Nie posiadasz konta?" class="mt-5">
      <template #description>
        <ULink to="/register" class="text-primary text-sm hover:underline">
          Zarejestruj się!
        </ULink>
      </template>
    </UAlert>
  </div>
</template>