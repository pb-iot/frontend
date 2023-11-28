<script setup lang="ts">
interface Map {
  street: String,
  city: String,
  code: String
}

const locations = [
  {
    lng: 23.342342,
    lat: 53.342342
  }
]

// locationOptions for now when we don't use library to choose location
// TODO: Add locationOptions and map
const locationOptions: SelectFieldOption[] = [{
  label: 'Ogrodowa 5, 16-500 Sejny',
  value: {
    street: 'Ogrodowa 5',
    city: 'Sejny',
    code: '16-500'
  } as Map
},
{
  label: 'Wyszyńskiego 30, 15-800 Białystok',
  value: {
    street: 'Wyszyńskiego 30',
    city: 'Sejny',
    code: '15-800'
  } as Map
},
{
  label: 'Obi-wana Kenobiego 9, 12-800 Poznań',
  value: {
    street: 'Obi-wana Kenobiego 9',
    city: 'Poznań',
    code: '12-800'
  } as Map
}]

interface Link {
  label: string
  icon: string
}

// NOTE: add vertical navigation for adding element to the greenhouse
const addGreenhouseElementsLinks = [{
  label: 'Dodaj użytkowników',
  icon: 'i-heroicons-plus-circle-20-solid'
}, {
  label: 'Dodaj urządzenia szklarni',
  icon: 'i-heroicons-plus-circle-20-solid'
}, {
  label: 'Docelowe środowisko szklarni',
  icon: 'i-heroicons-plus-circle-20-solid'
}] as const
const selectedLink = ref<typeof addGreenhouseElementsLinks[number]['label']>()

// NOTE: Define event to send which nav has been clicked
const emit = defineEmits<{
  openFormToAddNewElement: [type: string]
}>()

watch(selectedLink, () => {
  addGreenhouseElementsLinks.forEach((link: Link) => {
    if (link.label === selectedLink.value) {
      emit('openFormToAddNewElement', link.label)
    }
  })
})

const schema = createSchema({
  greenhouseName: useGreenhouseNameValidationSchema(),
  typeOfCrop: Yup.string().min(2, 'Niepoprawny typ uprawy').required('Typ uprawy jest wymagany')
})

const submit = createSubmitHandler(schema, (values) => {
  // TODO: Send request to the backend
  console.log(values)
})

const submitBtn = ref()
</script>

<template>
  <UCard
    class="sticky top-[112px] w-full h-[804px]"
    :ui="{ body: { padding: ''}}"
  >
    <template #header>
      <div>Nowa szklarnia</div>
    </template>
    <div class="px-4 pt-5 sm:p-6 sm:pb-0">
      <Form
        :validation-schema="schema"
        @submit="submit"
      >
        <TextField
          placeholder="Wpisz nazwę"
          class="py-2"
          name="greenhouseName"
          label="Nazwa szklarni"
          required
        />

        <TextField
          placeholder="Wpisz rodzaj uprawy"
          class="py-2"
          name="typeOfCrop"
          label="Rodzaj uprawy"
          required
        />
        <!-- Add map -->
        <div class="flex items-end gap-4 py-2">
          <SelectMenuField
            class="flex-1"
            label="Lokalizacja"
            name="location"
            icon="i-heroicons-map-pin-20-solid"
            :options="locationOptions"
            required
          />
          <UButton
            label="Dodaj nową lokację"
            color="gray"
            icon="i-heroicons-plus-circle-20-solid"
          />
        </div>
        <button
          ref="submitBtn"
          type="submit"
          hidden
        />
      </Form>
    </div>
    <Map
      class="h-64 mx-4 mb-6 mt-2"
      :locations="locations"
    />

    <div class="border-t-2 border-gray-200 px-4 py-6">
      <UButton
        v-for="link in addGreenhouseElementsLinks"
        :key="link.label"
        :icon="link.icon"
        :label="link.label"
        variant="ghost"
        color="gray"
        class="justify-start"
        block
        :class="[selectedLink === link.label && '!bg-gray-100 !text-gray-900']"
        @click="selectedLink = link.label"
      />
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
          :ui="{ base:'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0' }"
          label="Zapisz szklarnię"
          block
          @click="submitBtn.click()"
        />
      </div>
    </template>
  </UCard>
</template>
