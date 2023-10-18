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
      <div class="grid grid-cols-2 gap-x-4 mt-[8.5rem] mx-auto">
      <UButton to="/reset-password" block>Cofnij</UButton>
      <UButton to="/reset-password-message" block>Wyślij wiadomość ponownie</UButton>
    </div>
    <!-- <UButton type="submit" class="mt-[8.5rem] mx-auto" block>
        Wyślij wiadomość ponownie
    </UButton> -->
    <!-- <UAlert 
      title="Porada" 
      description="Jeżeli nie możesz odnaleźć wiadomości, poszukaj w katalogu spam lub w innych zakładkach."
      color="primary"
      variant="outline"
      class="text-center mt-5"/> -->
    <UAlert title="Porada" class="mt-5 text-justify">
      <template #description>
            Jeżeli nadal nie możesz odnaleźć wiadomości, poszukaj w katalogu spam lub w innych zakładkach.
      </template>
    </UAlert>

  </div>
</template>