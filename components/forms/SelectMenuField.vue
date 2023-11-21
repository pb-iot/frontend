<script setup lang="ts" generic="T extends SelectFieldOption">
const props = defineProps<SelectMenuFieldProps<T>>()
type ValueType = typeof props.modelValue

const { value, errorMessage } = useField<ValueType>(() => props.name, undefined, {
  syncVModel: true
})
</script>

<template>
  <UFormGroup
    :label="label"
    :error="errorMessage"
    :help="help"
  >
    <USelectMenu
      v-model="value"
      :placeholder="placeholder"
      :size="size"
      :disabled="disabled"

      :options="options"
      :multiple="multiple"
      :icon="icon"
      :searchable="searchable"
      :searchable-placeholder="searchablePlaceholder"
    />
  </UFormGroup>
</template>
