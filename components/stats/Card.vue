<script setup lang="ts">
const items = [
  [{
    label: 'Data',
    type: 'date',
    filterKey: 'date'
  }]
]
const options = [{
  value: 'ponizejNormy',
  label: 'Poniżej normy'
}, {
  value: 'powyzejNormy',
  label: 'Powyżej normy'
}]

const props = defineProps<{
  filters: Record<string, boolean>
}>() 
const emit=defineEmits<{(e: 'update:filters', v: Record<string, boolean>): void
}>() 
const filters = useVModel(props, 'filters', emit) 
const selected = ref('aboveAverage')

</script>

<template>
  <UCard>
    <template #header>
      <div class="flex">
        <div class="flex-1 align-middle font-semibold items-center text-gray-500 text-2xl">
          <UIcon name="i-heroicons-chart-bar-solid" />
          Statystyki
        </div>
        <div class="ml-auto">
          <Placeholder class="h-8" />
          <UPopover>
            <UButton
              color="white"
              label="Filtruj"
              icon="i-heroicons-funnel-solid"
            />
            <template #panel>
              <div>
                <Placeholder class="h-20 w-48" />
                <UCard>
                  <template #header>
                    <Placeholder class="h-8" />
                    Data
                    <p>KASPER DATA OD</p>
                    <p>KASPER DATA DO</p>
                  </template>

                  <Placeholder class="h-32" />
                  Dane
                  <UCheckbox
                    v-model="filters.funkcyjne"
                    label="Funkcyjne"
                  />
                  <UCheckbox
                    v-model="filters.sensor"
                    label="Sensor"
                  />
                  <UCheckbox
                    v-model="filters.temperatura"
                    label="Temperatura"
                  />
                  <UCheckbox
                    v-model="filters.wilgotnosc"
                    label="Wilgotność"
                  />
                  <UCheckbox
                    v-model="filters.poziomSwiatla"
                    label="Poziom światła"
                  />
                  <UCheckbox
                    v-model="filters.PAR"
                    label="Średni PAR"
                  />
                  <UCheckbox
                    v-model="filters.CO2"
                    label="Poziom CO2"
                  />
                  <UCheckbox
                    v-model="filters.poziomWodyWPodlozu"
                    label="Poziom wody w podłożu"
                  />
                  <UCheckbox
                    v-model="filters.zasolenie"
                    label="Poziom zasolenia (ED) w podłożu"
                  />
                  <UCheckbox
                    v-model="filters.temperaturaPodloza"
                    label="Temperatura podłoża"
                  />
                  <UCheckbox
                    v-model="filters.wagaPodlozaIRoslin"
                    label="Waga podłoża i roślin"
                  />
                  <UCheckbox
                    v-model="filters.MikroZmiennosc"
                    label="Mikro zmienność łodygi"
                  />
                  <template #footer>
                    <Placeholder class="h-8" />
                    Opcje
                    <URadioGroup
                      v-model="selected"
                      :options="options"
                    />
                  </template>
                </UCard>
              </div>
            </template>
          </UPopover>
        </div>
      </div>
    </template>
    <Placeholder class="h-32" />
    <div class="flex justify-end">
      <UButton
        color="gray"
        variant="ghost"
        icon="i-heroicons-chart-pie-solid"
      />
      <UButton
        color="gray"
        variant="ghost"
        icon="i-heroicons-list-bullet"
      />
    </div>
    <div class="text-gray-500">
      <slot />
    </div>
  </UCard>
</template>
