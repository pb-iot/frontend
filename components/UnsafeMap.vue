<script setup lang="ts">
import { MapboxMap, MapboxMarker, MapboxPopup } from 'vue-mapbox-ts'
defineProps<{ locations: Location[] }>()

const config = useRuntimeConfig()
</script>

<template>
  <MapboxMap
    :access-token="config.public.MAPBOX_TOKEN"
    :max-zoom="13"
  >
    <MapboxPositionInitializer :locations="locations ?? []" />
    <MapboxMarker
      v-for="loc in locations ?? []"
      :key="[loc.lng, loc.lat]"
      :lng-lat="[loc.lng, loc.lat]"
    >
      <template #icon>
        <img
          src="/pin.svg"
          class="w-6"
          alt="pin"
        >
      </template>

      <MapboxPopup class-name="custom-popup">
        <UCard>
          Test popup
        </UCard>
      </MapboxPopup>
    </MapboxMarker>
  </MapboxMap>
</template>

<style scoped lang="scss">
:deep(.custom-popup) {
  > .mapboxgl-popup-tip,
  > .mapboxgl-popup-content {
    background: transparent;
    border: none;
    box-shadow: none;
  }
}
</style>
