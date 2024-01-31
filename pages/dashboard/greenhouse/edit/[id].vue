<script setup lang="ts">
const greenhouses = await useGreenhouses()
const route = useRoute()
console.log(greenhouses)
const greenhouseToEdit = computed(() => {
  return greenhouses.value.find((greenhouse: any) => greenhouse.id === route.params.id)
})

console.log('Szklarnia do edycji')
console.log(greenhouseToEdit.value)

const addingGreenhouseElementType = ref('')
const targetGreenhouseEnvironment = ref()
const devices: Device[] = []

</script>

<template>
  <div class="flex w-full h-full px-20">
    <AddGreenhouse
      class="w-1/2"
      :greenhouse="greenhouseToEdit"
      @open-form-to-add-new-element="addingGreenhouseElementType = $event"
    />
    <div class="pl-20 w-1/2">
      <AddUsers
        v-if="addingGreenhouseElementType === 'Dodaj użytkowników'"
        :users="greenhouseToEdit?.authorizedUsers"
      />
      <AddGreenhouseDevices
        v-else-if="addingGreenhouseElementType === 'Dodaj urządzenia szklarni'"
        @add-device="devices.push($event)"
      />
      <AddTargetGreenhouseEnvironment
        v-else-if="addingGreenhouseElementType === 'Docelowe środowisko szklarni'"
        :environment-set="greenhouseToEdit.environmentSet"
        @update-greenhouse-environment="targetGreenhouseEnvironment = $event"
      />
    </div>
  </div>
</template>
