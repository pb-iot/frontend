<script setup lang="ts">
import { MapboxMap, MapboxMarker } from 'vue-mapbox-ts'
const props = defineProps<{ locations: Location[] }>()
const config = useRuntimeConfig()
</script>

<template>
  <MapboxMap 
    :accessToken="config.public.MAPBOX_TOKEN" 
    :maxZoom="13"
  >
    <MapboxPositionInitializer :locations="locations ?? []" />
    <MapboxMarker 
      v-for="loc in locations ?? []"
      :key="[loc.lng, loc.lat]"
      :lngLat="[loc.lng, loc.lat]"
    />
  </MapboxMap>
</template>
