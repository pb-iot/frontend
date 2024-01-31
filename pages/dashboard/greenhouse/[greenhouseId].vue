<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
const greenhouse = await useGreenhouse(() => route.params.greenhouseId)

const greenhouseStats = {
  averageTemperature: '1',
  averageAirHumidity: '2',
  averageLightLevel: '1',
  averagePAR: '1',
  averageCO2Level: '1',
  averageSoilWaterLevel: '1',
  averageSoilECLevel: '1',
  averageSoilTemperature: '1',
  averageSoilAndPlantWeight: '1',
  averageStemMicroVariability: '2'
}
</script>

<template>
  <div class="grid grid-cols-2 gap-8">
    <StatsCard/>
  </div>
</template>
