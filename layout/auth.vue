<template>
    <div class="md:grid grid-cols-12 h-[100vh]">
      <!-- Lewa część strony -->
      <div class="col-span-7 hidden md:block">
        <!-- Miejsce na główną grafikę -->
        <img src="~/public/szklarnia.avif" alt="Główna Grafika" class="w-full h-full object-cover" />
      </div>
  
      <!-- Prawa część strony -->
      <div class="col-span-5">
        <div class="flex flex-col px-4 py-12"> <!-- Nowy element do wyśrodkowania zawartości -->
          <!-- Logo -->
          <img src="~/public/logo.png" alt="Logo" class="w-1/2 min-w-[300px] mx-auto mb-5" />
          <div class="mx-auto">
            <NuxtPage />
          </div>
        </div>
      </div>
    </div>
</template>