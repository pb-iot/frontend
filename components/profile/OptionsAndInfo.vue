<script setup lang="ts">
// TODO: ADD VALIDATION
defineProps<{
    // TODO: Use `User` type
    user: {
        firstname: string
        lastname: string
        avatar: string
    }
}>()
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
const confirm = () => console.log('confirm')
const cancel = () => console.log('cancel')
</script>

<template>
  <ProfileCard
    :user="user"
  >
    <template #options>
      <USelectMenu
        placeholder="Opcje"
        :options="people"
      />
    </template>
    <!-- Personal Information -->
    <div class="-mx-4">
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
    <div class="-mx-4  py-4">
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
    <!-- Data change form -->
  </ProfileCard>
</template>
