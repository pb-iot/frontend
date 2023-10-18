<script setup lang="ts">
const props = defineProps<TextFieldProps & {
  rows?: number
  autoresize?: boolean
  resize?: boolean
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
  >
    <UTextarea
      v-model="value"
      :placeholder="placeholder"
      :color="color"
      :size="size"
      :disabled="disabled"

      :rows="rows"
      :autoresize="autoresize"
      :resize="resize"
    />
  </UFormGroup>
</template>
