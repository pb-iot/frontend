<script setup lang="ts">
defineProps<{
  // TODO: Use `User` type
  user: {
    firstname: string
    lastname: string
    avatar: string
  }
  onCancel?:() => void | Promise<void>
  onConfirm?: () => void | Promise<void>
}>()
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex items-center mb-4 mt-2 h-6">
        <UAvatar
          class="mr-2"
          size="2xl"
          :src="user.avatar"
          alt="Avatar"
        />
        <p class="text-lg font-semibold">
          {{ user.firstname }} {{ user.lastname }}
        </p>
        <div class="flex ml-auto">
          <slot name="options" />
        </div>
      </div>
    </template>

    <slot />

    <!-- Buttons for actions -->
    <template
      v-if="$slots.actions"
      #footer
    >
      <div class="flex justify-between mt-5 mx-1">
        <slot name="actions" />
      </div>
    </template>
    <template
      v-else-if="onCancel && onConfirm"
      #footer
    >
      <div class="flex justify-between mt-5 mx-1">
        <UButton
          type="button"
          class="flex-1 place-content-center"
          color="red"
          variant="soft"
          label="Anuluj"
          @click="onCancel"
        />
        <UButton
          type="submit"
          class="flex-1 ml-4 place-content-center"
          label="Zapisz zmiany"
          @click="onConfirm"
        />
      </div>
    </template>
  </UCard>
</template>
