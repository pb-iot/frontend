<script setup lang="ts">
import type { UButton } from '#ui-colors/components'
import { useRoute } from 'vue-router'
const route = useRoute()
const id = computed(() => route.params.greenhouseId)
const dataForTitle = 'xd'
const averageTemperature = '1'
const user = {
  firstname: 'Ola',
  lastname: 'Wrobel',
  avatar: 'https://avatars.githubusercontent.com/u/739984?v=4'
}
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
  averageStemMicroVariability: '2'}

</script>

<template>
  <div class="grid grid-cols-2 gap-8">
    <div>
      <h1>My Greenhouse: {{ id }}</h1>
      <StatsCardNew/>
    <StatsSingleGreenhouse :greenhouseStats="greenhouseStats" />

    </div>
  </div>
</template>
