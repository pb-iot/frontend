<script setup lang="ts">
defineProps<{
greenhouseStats :{
  temperature: string
    humidity: string
    lightLevel: string
    PAR: string
    CO2Level: string
    soilWaterLevel: string
    soilECLevel: string
    soilTemperature: string
    soilAndPlantWeight: string
    stemMicroVariability: string
}}>()
</script>

<template>
  <EnvironmentCard>
    <template #header>
      <UButton
        icon="i-heroicons-pencil-square"
        size="sm"
        color="gray"
        square
        variant="outline"
        label="Edytuj"
      >
        Edytuj
      </Ubutton>
    </template>
    <template #content>
      <p class="flex justify-between">
        <span class="text-left">Temperatura: </span>
        <span class="text-right font-bold">{{ greenhouseStats.temperature}}</span>
      </p>
      <p class="flex justify-between">
        <span class="text-left">Wilgotność powietrza: </span>
        <span class="text-right font-bold">{{ greenhouseStats.humidity}}</span>
      </p>
      <p class="flex justify-between">
        <span class="text-left">Poziom światła: </span>
        <span class="text-right font-bold">{{greenhouseStats.lightLevel }}</span>
      </p>
      <p class="flex justify-between">
        <span class="text-left">PAR: </span>
        <span class="text-right font-bold">{{greenhouseStats.PAR }}</span>
      </p>
      <p class="flex justify-between">
        <span class="text-left">Poziom CO2: </span>
        <span class="text-right font-bold">{{ greenhouseStats.CO2Level}}</span>
      </p>
      <p class="flex justify-between">
        <span class="text-left">Poziom wody w podłożu: </span>
        <span class="text-right font-bold">{{greenhouseStats.soilWaterLevel }}</span>
      </p>
      <p class="flex justify-between">
        <span class="text-left">Poziom zasolenia(EC) w podłożu: </span>
        <span class="text-right font-bold">{{ greenhouseStats.soilECLevel}}</span>
      </p>
      <p class="flex justify-between">
        <span class="text-left">Temperatura podłoża: </span>
        <span class="text-right font-bold">{{ greenhouseStats.soilTemperature}}</span>
      </p>
      <p class="flex justify-between">
        <span class="text-left">Waga podłoża i roślin: </span>
        <span class="text-right font-bold">{{ greenhouseStats.soilAndPlantWeight}}</span>
      </p>
      <p class="flex justify-between">
        <span class="text-left">Mikro zmienność łodygi: </span>
        <span class="text-right font-bold">{{greenhouseStats.stemMicroVariability}} </span>
      </p>
    </template>
  </EnvironmentCard>
</template>
