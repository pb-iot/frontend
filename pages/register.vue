<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
</script>

<template>
  <div class="min-w-[450px] mx-auto">
    <UFormGroup label="Imie" required name="name" class="mb-1">
      <UInput class="normal-case"/>
    </UFormGroup>
    <UFormGroup label="Nazwisko" required name="surname" class="mb-1">
      <UInput />
    </UFormGroup>
    <UFormGroup label="E-mail" required name="email" class="mb-1">
      <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
    </UFormGroup>
    <UFormGroup label="Hasło" required name="password" class="mb-1">
      <UInput type="password" />
    </UFormGroup>
    <UFormGroup label="Powtórz hasło" required name="password">
      <UInput type="password" />
    </UFormGroup>
    <UButton type="submit" class="mt-20 mx-auto" block>
      Zarejestruj się
    </UButton>
    <UAlert title="Posiadasz już konto?" class="mt-5">
      <template #description>
        <ULink to="/login" class="text-primary text-sm hover:underline">
          Zaloguj się!
        </ULink>
      </template>
    </UAlert>
  </div>
</template>