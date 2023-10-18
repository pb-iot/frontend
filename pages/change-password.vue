<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
</script>

<template>
  <div class="min-w-[450px] mx-auto">
    <UFormGroup label="Nowe hasło" required name="password" class="mb-1">
      <UInput type="password" />
    </UFormGroup>
    <UFormGroup label="Powtórz hasło" required name="password">
      <UInput type="password" />
    </UFormGroup>
    <UButton type="submit" class="mt-20 mx-auto" block>
      Zmień hasło
    </UButton>
  </div>
</template>