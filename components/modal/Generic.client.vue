<script setup lang="ts">
const { modelValue } = defineModels<{ modelValue: boolean }>()
const preventClose = defineProp<boolean>()
const title = defineProp<string>()

const width = defineProp<string>('max-w-6xl')

const slots = useSlots()
</script>

<template>
  <UModal
    v-model="modelValue"
    :prevent-close="preventClose"
    :ui="{ width }"
  >
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template
        v-if="slots.header || title"
        #header
      >
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            <slot name="header">
              {{ title }}
            </slot>
          </h3>

          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="modelValue = false"
          />
        </div>
      </template>

      <slot />

      <template
        v-if="slots.footer"
        #footer
      >
        <div class="flex gap-4 justify-end footer">
          <slot name="footer" />
        </div>
      </template>
    </UCard>
  </UModal>
</template>

<style scoped>
.footer > :deep(button) {
  flex-shrink: initial !important;
}
</style>
