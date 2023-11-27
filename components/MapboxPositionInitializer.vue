<script setup lang="ts">
const props = defineProps<{ locations: Location[] }>()
const vmb_map = inject('vmb_map')
onMounted(async () => {
  const mapInstance = await vmb_map.promise

  // get bounds of locations
  const minPoint = [Infinity, Infinity]
  const maxPoint = [-Infinity, -Infinity]
  for (const loc of props.locations) {
    minPoint[0] = Math.min(minPoint[0], loc.lng)
    minPoint[1] = Math.min(minPoint[1], loc.lat)
    maxPoint[0] = Math.max(maxPoint[0], loc.lng)
    maxPoint[1] = Math.max(maxPoint[1], loc.lat)
  }

  mapInstance.fitBounds([minPoint, maxPoint])
})
</script>
