<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
</script>

<template>
  <div class="min-w-[450px] mx-auto">
    <UAlert 
      title="Na podany adres e-mail została wysłana wiadomość z linkiem do zmiany hasła. Jeśli jej nie otrzymałeś, kliknij w poniższy przycisk abyśmy wysłali ponownie wiadomość." 
      color="primary"
      variant="outline"
      class="text-center"/>
      <div class="grid grid-cols-2 gap-x-4 mt-[9.25rem] mx-auto">
      <UButton to="/reset-password" block>Cofnij</UButton>
      <UButton to="/reset-password-message" block>Wyślij wiadomość ponownie</UButton>
    </div>
    <UAlert title="Porada" class="mt-5 text-justify">
      <template #description>
            Jeżeli nadal nie możesz odnaleźć wiadomości, poszukaj w katalogu spam lub w innych zakładkach.
      </template>
    </UAlert>
  </div>
</template>