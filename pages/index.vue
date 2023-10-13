<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
</script>

<template>
  <div class="min-w-[450px] mx-auto text-center">
  <UButton to="/login" class="mt-20 mb-2 mx-auto" block size="sm">
      Zaloguj się
    </UButton>
    <UButton to="/register" class="mx-auto" block size="sm">
    Zarejestruj się
  </UButton>
</div>
</template>
