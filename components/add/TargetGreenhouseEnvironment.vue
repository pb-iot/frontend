<script setup lang="ts">
const emit = defineEmits<{
  updateGreenhouseEnvironment: [id: object]
}>()

const schema = createSchema({
  temperature: Yup.number().required('Temperatura jest wymagana'),
  airHumidity: Yup.number().min(0, 'Wartość nie może być mniejsza od 0').max(100, 'Wartość nie może być większa od 100').required('Wilgotność powietrza jest wymagana'),
  lightIntensity: Yup.number().min(0, 'Wartość nie może być mniejsza od 0').max(100, 'Wartość nie może być większa od 100').required('Poziom światła jest wymagany'),
  carbonDioxideLevel: Yup.number().min(0, 'Wartość nie może być mniejsza od 0').required('Poziom dwutlenku węgla jest wymagany'),
  waterLevelInSubstrate: Yup.number().min(0, 'Wartość nie może być mniejsza od 0').max(100, 'Wartość nie może być większa od 100').required('Poziom wody jest wymagany'),
  salinityLevelInSubstrate: Yup.number().min(0, 'Wartość nie może być mniejsza od 0').max(100, 'Wartość nie może być większa od 100').required('Poziom zasolenia jest wymagany'),
  substrateTemperature: Yup.number().required('Temperatura podłoża jest wymagana'),
  weightOfSubstrateAndPlant: Yup.number().min(0, 'Waga nie może być mniejsza od 0').required('Waga podłoża i roślin jest wymagana'),
  stemMicrovariation: Yup.number().required('Mikrozmienność łodygi jest wymagana')

})

const { submit, loading } = createSubmitHandler(schema, async (values) => {
  // TODO: Wysłanie zapytania do backendu
  console.log(values)
  emit('updateGreenhouseEnvironment', values)
})

const submitBtn = ref()
</script>

<template>
  <UCard
    class="w-full"
    :ui="{ body: { padding: ''}}"
  >
    <template #header>
      <div class="flex items-center font-bold text-gray-400">
        <UIcon
          name="i-heroicons-sun"
          class="w-12 h-12 mx-2"
        />
        Docelowe środowisko szklarni
      </div>
    </template>
    <div class="px-4 pt-5 sm:p-6 sm:pb-0">
      <Form
        :validation-schema="schema"
        @submit="submit"
      >
        <TextField
          placeholder="Wpisz temperaturę"
          class="py-2"
          name="temperature"
          label="Temperatura"
          trailing-text="°C"
          required
        />
        <TextField
          placeholder="Wpisz wilgotność powietrza"
          class="py-2"
          name="airHumidity"
          label="Wilgotność powietrza"
          trailing-text="%"
          required
        />
        <TextField
          placeholder="Wpisz poziom światła"
          class="py-2"
          name="lightIntensity"
          label="Poziom światła"
          trailing-text="%"
          required
        />
        <TextField
          placeholder="Wpisz poziom dwutlenku węgla"
          class="py-2"
          name="carbonDioxideLevel"
          label="Poziom dwutlenku węgla"
          trailing-text="ppm"
          required
        />
        <TextField
          placeholder="Wpisz poziom wody"
          class="py-2"
          name="waterLevelInSubstrate"
          label="Poziom wody w podłożu"
          trailing-text="%"
          required
        />
        <TextField
          placeholder="Wpisz poziom zasolenia"
          class="py-2"
          name="salinityLevelInSubstrate"
          label="Poziom zasolenia(EC) podłożu"
          trailing-text="%"
          required
        />
        <TextField
          placeholder="Wpisz temperaturę"
          class="py-2"
          name="substrateTemperature"
          label="Temperatura podłoża"
          trailing-text="°C"
          required
        />
        <TextField
          placeholder="Wpisz wagę"
          class="py-2"
          name="weightOfSubstrateAndPlant"
          label="Waga podłoża i roślin"
          trailing-text="kg"
          required
        />
        <TextField
          placeholder="Podaj mikrozmienność"
          class="py-2"
          name="stemMicrovariation"
          label="Mikrozmienność łodygi"
          trailing-text="idk"
          required
        />
        <button
          ref="submitBtn"
          type="submit"
          hidden
        />
      </Form>
    </div>
    <template #footer>
      <div class="grid grid-cols-2">
        <UButton
          color="red"
          class="px-16 mr-2"
          variant="soft"
          label="Anuluj"
          block
        />
        <UButton
          class="ml-2 px-[33.35px]"
          :loading="loading"
          :ui="{ base:'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0' }"
          label="Zapisz szklarnię"
          block
          @click="submitBtn.click()"
        />
      </div>
    </template>
  </UCard>
</template>
