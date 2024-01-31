<script setup lang="ts">
defineProps<{
greenhouseStats :{
  averageTemperature: string
    averageAirHumidity: string
    averageLightLevel: string
    averagePAR: string
    averageCO2Level: string
    averageSoilWaterLevel: string
    averageSoilECLevel: string
    averageSoilTemperature: string
    averageSoilAndPlantWeight: string
    averageStemMicroVariability: string
}}>()
const filters = reactive({
  funkcyjne: true,
  sensor: true,
  temperatura: true,
  wilgotnosc: true,
  poziomSwiatla: true,
  PAR: true,
  CO2: true,
  poziomWodyWPodlozu: true,
  zasolenie: true,
  temperaturaPodloza: true,
  wagaPodlozaIRoslin: true,
  MikroZmiennosc: true
})
</script>
<template>
  <StatsCard v-model:filters="filters"> 
    <p class="flex justify-between" v-if="filters.temperatura">
      <span class="text-left">Średnia temperatura:</span>
      <span class="text-right">{{ greenhouseStats.averageTemperature }}</span>
    </p>
    <p class="flex justify-between" v-if="filters.wilgotnosc">
      <span class="text-left">Średnia wilgotność powietrza:</span>
      <span class="text-right">{{ greenhouseStats.averageAirHumidity }}</span>
    </p>
    <p class="flex justify-between" v-if="filters.poziomSwiatla">
      <span class="text-left">Średni poziom światła:</span>
      <span class="text-right">{{ greenhouseStats.averageLightLevel }}</span>
    </p>
    <p class="flex justify-between" v-if="filters.PAR">
      <span class="text-left">Średni PAR:</span>
      <span class="text-right">{{ greenhouseStats.averagePAR }}</span>
    </p>
    <p class="flex justify-between" v-if="filters.CO2">
      <span class="text-left">Średni poziom CO2:</span>
      <span class="text-right">{{ greenhouseStats.averageCO2Level }}</span>
    </p>
    <p class="flex justify-between" v-if="filters.poziomWodyWPodlozu">
      <span class="text-left">Średni poziom wody w podłożu:</span>
      <span class="text-right">{{ greenhouseStats.averageSoilWaterLevel }}</span>
    </p>
    <p class="flex justify-between" v-if="filters.zasolenie">
      <span class="text-left">Średni poziom zasolenia (EC) w podłożu:</span>
      <span class="text-right">{{ greenhouseStats.averageSoilECLevel }}</span>
    </p>
    <p class="flex justify-between" v-if="filters.temperaturaPodloza">
      <span class="text-left">Średnia temperatura podłoża:</span>
      <span class="text-right">{{ greenhouseStats.averageSoilTemperature }}</span>
    </p>
    <p class="flex justify-between" v-if="filters.wagaPodlozaIRoslin">
      <span class="text-left">Średnia waga podłoża i roślin:</span>
      <span class="text-right">{{ greenhouseStats.averageSoilAndPlantWeight }}</span>
    </p>
    <p class="flex justify-between" v-if="filters.MikroZmiennosc">
      <span class="text-left">Średnia mikro zmienność łodygi:</span>
      <span class="text-right">{{ greenhouseStats.averageStemMicroVariability }}</span>
    </p>
  </StatsCard>
</template>