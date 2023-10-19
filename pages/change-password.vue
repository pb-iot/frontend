<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
</script>

<template>
  <UAlert 
      title="Wprowadź nowe hasło" 
      description="Ustal swoje nowe hasło do logowania się w Greenhouse Manager"
      color="primary"
      variant="soft"
      class="text-justify mb-1"/>
  <div class="min-w-[450px] mx-auto">
    <UFormGroup label="Nowe hasło" required name="password" class="mb-1">
      <UInput type="password" />
    </UFormGroup>
    <UFormGroup label="Powtórz hasło" required name="password">
      <UInput type="password" />
    </UFormGroup>
    <UButton type="submit" class="mt-12 mx-auto" block>
      Zmień hasło
    </UButton>
  </div>
  <UAlert
  title="Hasło powinno zawierać minimum:"
  class="mt-5">
    <template #description>
        <div>
        <div style="display: flex;">
            <div style="flex: 1;">
            <i class="i-heroicons-command-line"></i>
            10 znaków
            </div>
            <div style="flex: 1;">
            <i class="i-heroicons-command-line"></i>
            1 dużą literę
            </div>
        </div>
        <div style="display: flex;">
            <div style="flex: 1;">
            <i class="i-heroicons-command-line"></i>
            1 cyfrę
            </div>
            <div style="flex: 1;">
            <i class="i-heroicons-command-line"></i>
            1 znak specjalny
            </div>
        </div>
        </div>
    </template>
  </UAlert>
</template>