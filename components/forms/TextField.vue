<script setup lang="ts">

const props = defineProps<TextFieldProps & {
  icon?: string
  loading?: boolean
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
    <UInput
      v-model="value"
      :placeholder="placeholder"
      :color="color"
      :size="size"
      :disabled="disabled"

      :icon="icon ?? ''"
      :loading="loading"
    >
      <template #trailing>
        <slot name="trailing" />
      </template>
    </UInput>
  </UFormGroup>
</template>
