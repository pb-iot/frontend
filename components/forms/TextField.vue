<script setup lang="ts">

const props = defineProps<TextFieldProps & {
  icon?: string
  loading?: boolean
  trailingIcon?: string
  leadingIcon?: string
  type?: string
  required?: boolean
  trailingText?: string
}>()

const name = toRef(props, 'name')

const { value, errorMessage } = useField<string>(name, undefined, {
  syncVModel: true
})
</script>

<template>
  <UFormGroup
    :label="label"
    :error="errorMessage"
    :help="help"
    :required="required ?? false"
  >
    <UInput
      v-model="value"
      :placeholder="placeholder"
      :color="color"
      :size="size"
      :disabled="disabled"

      :leading-icon="leadingIcon ?? ''"
      :trailing-icon="trailingIcon ?? ''"
      :type="type"
      :loading="loading"
    >
      <template #trailing>
        <slot name="trailing" />
        <span
          v-if="!trailingIcon"
          class="text-gray-500 dark:text-gray-400 text-xs"
        > {{ trailingText ?? '' }}</span>
      </template>
    </UInput>
  </UFormGroup>
</template>
