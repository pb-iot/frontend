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
      class="text-center"/>
    <UFormGroup label="E-mail" required name="email" class="mt-4">
      <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
    </UFormGroup>
    <UButton type="submit" class="mt-16 mx-auto" block>
      Resetuj hasło
    </UButton>
  </div>
</template>