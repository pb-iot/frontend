<script setup lang="ts">
import { ref, computed } from 'vue';

defineProps<{
    onCancel?:() => void | Promise<void>
    onConfirm?: () => void | Promise<void>
}>()

const deviceNameInput = ref('');
const deviceTypeSelect = ref('');
const deviceTypeSelect2 = ref('');

const isInputsFilled = computed(() => {
  return (
    deviceNameInput.value.trim() !== '' &&
    deviceTypeSelect.value.trim() !== '' &&
    deviceTypeSelect2.value.trim() !== ''
  );
});

const deviceType = ['Tablet', 'Natrysk', 'Termometr']
const selected = ref(deviceType[0])

const deviceType2 = ['Sensor', 'Funkcyjne']
const selected2 = ref(deviceType2[0])
</script>

<template>
  <UCard>
    <template #header>
      <div class="font-semibold text-gray-500 text-2xl">
        <UIcon name="i-heroicons-adjustments-vertical-solid"/>
        Edytowanie urządzenia
      </div>
    </template>

    <UFormGroup label="Nazwa" class="mb-4">
      <div>
        <UInput v-model="deviceNameInput" />
      </div>
    </UFormGroup>

    <UFormGroup label="Rodzaj" class="mb-4">
      <div>
        <USelectMenu v-model="selected" :options="deviceType" />
      </div>
    </UFormGroup>

    <UFormGroup label="Nazwa" class="mb-4">
      <div>
        <USelectMenu v-model="selected2" :options="deviceType2" />
      </div>
    </UFormGroup>

    <template #footer>
      <div class="flex">
        <UButton
          class="flex-1 mr-4 justify-center text-red-500 bg-red-50"
          variant="soft"
          @click="onCancel"
        >
          Anuluj
        </UButton>
        <UButton
          class="flex-1 ml-4 justify-center"
          :disabled="!isInputsFilled"
          @click="onConfirm"
        >
          Zapisz szklarnię
        </UButton>
      </div>
      <Placeholder class="h-8" />
    </template>
  </UCard>
</template>