<script setup>
const items = [
  [{
    label: 'Date',
    slot: 'date',
    disabled: true
  }], [{
    label: 'Dane',
    slot: 'dane',
    disabled: true
  }], [{
    label: 'Opcje',
    slot: 'opcje',
    disabled: true
  }
  ]]

const options = [{
  value: 'aboveAverage',
  label: 'Above average'
}, {
  value: 'belowAverage',
  label: 'Below Average'
}]

const selected = ref('aboveAverage')
</script>

<template>
  <UDropdown
    :items="items"
  >
    <UButton
      color="white"
      label="Options"
      trailing-icon="i-heroicons-chevron-down-20-solid"
    />
    <template #date="{ item }">
      <div class="text-left">
        <p>
          {{ item.label }}
        </p>
        <p>od </p> <!---DATEPICKER HERE-->
        <p>do </p> <!---DATEPICKER HERE-->
      </div>
    </template>

    <template #dane="{ item }">
      <div class="text-left">
        <p>
          {{ item.label }}
        </p>
        <UCheckbox
          v-model="averageTemperature"
          label="Average Temperature"
        />
        <UCheckbox
          v-model="averageAirHumidity"
          label="Average Air Humidity"
        />
        <UCheckbox
          v-model="averageLightLevel"
          label="Average Light Level"
        />
        <UCheckbox
          v-model="averagePAR"
          label="Average PAR"
        />
        <UCheckbox
          v-model="averageCO2Level"
          label="Average CO2 Level"
        />
        <UCheckbox
          v-model="averageSoilWaterLevel"
          label="Average Soil Water Level"
        />
        <UCheckbox
          v-model="averageSoilECLevel"
          label="Average Soil EC Level"
        />
        <UCheckbox
          v-model="averageSoilTemperature"
          label="Average Soil Temperature"
        />
        <UCheckbox
          v-model="averageSoilAndPlantWeight"
          label="Average Soil and Plant Weight"
        />
        <UCheckbox
          v-model="averageStemMicroVariability"
          label="Average Stem Micro Variability"
        />
      </div>
    </template>

    <template #opcje="{ item }">
      <div class="text-left">
        <p>
          {{ item.label }}
        </p>
        <URadioGroup
          v-model="selected"
          legend="Choose something"
          :options="options"
        />
      </div>
    </template>
  </UDropdown>
</template>
