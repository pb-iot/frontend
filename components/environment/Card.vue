<script setup lang="ts">
import { ref, computed } from 'vue';

const temperatureInput = ref('');
const airHumidutyInput = ref('');
const lightLevelInput = ref('');
const C02LevelInput = ref('');
const subsoilWaterLevelInput = ref('');
const subsoilSalinityLevelInput = ref('');
const subsoilTemperatureInput = ref('');
const subsoilAndPlantsWeightInput = ref('');
const stemMicrovarietyInput = ref('');

const isInputsFilled = computed(() => {
  return (
    temperatureInput.value.trim() !== '' &&
    airHumidutyInput.value.trim() !== '' &&
    lightLevelInput.value.trim() !== '' &&
    C02LevelInput.value.trim() !== '' &&
    subsoilWaterLevelInput.value.trim() !== '' &&
    subsoilSalinityLevelInput.value.trim() !== '' &&
    subsoilTemperatureInput.value.trim() !== '' &&
    subsoilAndPlantsWeightInput.value.trim() !== '' &&
    stemMicrovarietyInput.value.trim() !== ''
  );
});
</script>

<template>
  <UCard>
    <template #header>
      <div class="font-semibold text-gray-500 text-2xl">
        <UIcon name="i-heroicons-globe-americas-solid"/>
        Docelowe środowisko
      </div>
    </template>
    <UFormGroup label="Temperatura" class="mb-4">
      <div class="input-container">
        <UInput v-model="temperatureInput" placeholder="32" />
        <div class="unit-symbol">°C</div>
      </div>
    </UFormGroup>
    <UFormGroup label="Wilgotność powietrza" class="mb-4">
      <div class="input-container">
        <UInput v-model="airHumidutyInput" placeholder="32" />
        <div class="unit-symbol">%</div>
      </div>
    </UFormGroup>
    <UFormGroup label="Poziom światła" class="mb-4">
      <div class="input-container">
        <UInput v-model="lightLevelInput" placeholder="45" />
        <div class="unit-symbol">°C</div>
      </div>
    </UFormGroup>
    <UFormGroup label="Poziom CO2" class="mb-4">
      <div class="input-container">
        <UInput v-model="C02LevelInput" />
        <div class="unit-symbol">?</div>
      </div>
    </UFormGroup>
    <UFormGroup label="Poziom wody w podłożu" class="mb-4">
      <div class="input-container">
        <UInput v-model="subsoilWaterLevelInput" />
        <div class="unit-symbol">°C</div>
      </div>
    </UFormGroup>
    <UFormGroup label="Poziom zasolenia (EC) w podłożu" class="mb-4">
      <div class="input-container">
        <UInput v-model="subsoilSalinityLevelInput" />
        <div class="unit-symbol">°C</div>
      </div>
    </UFormGroup>
    <UFormGroup label="Temperatura podłoża" class="mb-4">
      <div class="input-container">
        <UInput v-model="subsoilTemperatureInput" />
        <div class="unit-symbol">°C</div>
      </div>
    </UFormGroup>
    <UFormGroup label="Waga podłoża i roślin" class="mb-4">
      <div class="input-container">
        <UInput v-model="subsoilAndPlantsWeightInput" />
        <div class="unit-symbol">?</div>
      </div>
    </UFormGroup>
    <UFormGroup label="Mikro zmienność łodygi" class="mb-4">
      <div class="input-container">
        <UInput v-model="stemMicrovarietyInput" />
        <div class="unit-symbol">?</div>
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
          Zapisz szklarnie
        </UButton>
      </div>
      <Placeholder class="h-8" />
    </template>
  </UCard>
</template>

<style scoped>
.unit-symbol {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
}
</style>
