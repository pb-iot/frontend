<script setup lang="ts">
const people = [
  {
    id: 'editData',
    label: 'Edytuj dane',
    href: '',
    target: '_self',
    icon: 'i-heroicons-pencil-square-solid'
  },
  {
    id: 'editPassword',
    label: 'Zmień hasło',
    href: '',
    target: '_self',
    icon: 'i-heroicons-key-solid'
  },
  {
    id: 'deleteAccount',
    label: 'Usuń konto',
    href: '',
    target: '_self',
    icon: 'i-heroicons-trash-solid'
  }
]
</script>

<template>
  <div class="password-change-field bg-white border border-gray-300 rounded p-4">
    <div class="flex items-center justify-between mb-4 h-20">
      <div class="flex items-center">
        <UAvatar
          class="mr-2"
          size="2xl"
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="Avatar"
        />
        <p class="text-lg font-semibold">
          Profil
        </p>
      </div>
      <USelectMenu
        class="w-1/3"
        placeholder="Opcje"
        :options="people"
      />
    </div>

    <!-- Personal Information -->
    <div class="min-w-[450px] -mx-4 border-t border-b py-4">
      <div class="mx-5">
        <div class="flex items-center">
          <p class="font-semibold mr-2">
            Imię:
          </p>
          <p>Jan</p>
        </div>
        <div class="flex items-center">
          <p class="font-semibold mr-2">
            Nazwisko:
          </p>
          <p>Kowalski</p>
        </div>
        <div class="flex items-center">
          <p class="font-semibold mr-2">
            E-mail:
          </p>
          <p>Kowalski.jan.123@gmail.com</p>
        </div>
      </div>
    </div>
    <!-- Greenhouse Details -->
    <div class="min-w-[450px] -mx-4  py-4">
      <div class="mx-9">
        <div class="flex items-center">
          <p class="mr-2">
            Szklarnie właściciela:
          </p>
          <p>3</p>
        </div>
        <div class="flex items-center">
          <p class="mr-2">
            Szklarnie pracownika:
          </p>
          <p>1</p>
        </div>
        <div class="flex items-center">
          <p class="mr-2">
            Szklarnie obserwatora:
          </p>
          <p>5</p>
        </div>
      </div>
    </div>
  </div>
</template>
