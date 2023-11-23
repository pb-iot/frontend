<script setup lang="ts">

</script>

<template>
<UCard
    :ui="{ body: { padding: ''}}"
    class="w-96"
  >
    <template #header>
      <div class="flex items-center font-bold text-gray-400">
        <svg-icon type="mdi" path="mdi-barley"></svg-icon>
        <TitleIcon icon="mdi-barley" />
        Użytkownicy
      </div>
    </template>
    <template #footer>

    </template>
  </UCard>
</template>
