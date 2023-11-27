<script setup lang="ts">
interface Map {
  street: String,
  city: String,
  code: String
}

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
  label: 'Obi-wana Kenobiego 69, 12-800 Poznań',
  value: {
    street: 'Obi-wana Kenobiego 69',
    city: 'Poznań',
    code: '12-800'
  } as Map
}]

interface Link {
  label: string
  to: string | undefined
  click: () => void
}

// NOTE: add vertical navigation for adding element to the greenhouse
const addGreenhouseElementsLinks = [{
  label: 'Dodaj użytkowników',
  icon: 'i-heroicons-plus-circle-20-solid',
}, {
  label: 'Dodaj urządzenia szklarni',
  icon: 'i-heroicons-plus-circle-20-solid',
}, {
  label: 'Docelowe środowisko szklarni',
  icon: 'i-heroicons-plus-circle-20-solid',
}] as const
const selectedLink = ref<typeof addGreenhouseElementsLinks[number]['label']>()

// NOTE: Define event to send which nav has been clicked
const emit = defineEmits<{
  openFormToAddNewElement: [type: string]
}>()

watch(selectedLink, () => {
  addGreenhouseElementsLinks.forEach((link: Link) => {
    if (link.label === selectedLink.value) {
      link.to = '/greenhouse/add-new'
      emit('openFormToAddNewElement', link.label)
    } else {
      link.to = undefined
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
    :ui="{ body: { padding: ''}}"
    class="w-96"
  >
    <template #header>
      <div>Nowa szklarnia</div>
    </template>
    <div class="px-4 py-5 sm:p-6">
      <Form
        :validation-schema="schema"
        @submit="submit"
      >
        <TextField
          placeholder="Wpisz nazwę"
          class="py-1"
          name="greenhouseName"
          label="Nazwa szklarni"
          required
        />

        <TextField
          placeholder="Wpisz rodzaj uprawy"
          class="py-1"
          name="typeOfCrop"
          label="Rodzaj uprawy"
          required
        />
        <!-- Add map -->
        <div class="flex items-center">
          <SelectMenuField
            class="w-44"
            label="Lokalizacja:)"
            name="location"
            icon="i-heroicons-map-pin-20-solid"
            :options="locationOptions"
            required
          />
          <div class="pl-1 pt-6">
            <UButton
              label="Dodaj nową lokację"
              size="xs"
              color="gray"
              icon="i-heroicons-plus-circle-20-solid"
            />
          </div>
        </div>
        <button
          ref="submitBtn"
          type="submit"
          hidden
        />
      </Form>
    </div>
    <div class="border-t-2 border-gray-200 px-4 py-6">
      <UButton
        v-for="link in addGreenhouseElementsLinks"
        :key="link.label"
        @click="selectedLink = link.label"
        :icon="link.icon"
        :label="link.label"
        variant="ghost"
        color="gray"
        class="justify-start"
        block
        :class="[selectedLink === link.label && '!bg-gray-100 !text-gray-900']"
      />
    </div>
    <!-- Miejsce na mape -->
    <template #footer>
      <div class="flex justify-center">
        <UButton
          color="red"
          class="px-16 mr-2"
          variant="soft"
          label="Anuluj"
        />
        <UButton
          class="ml-2 px-[33.35px]"
          :ui="{ base:'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0' }"
          label="Zapisz szklarnię"
          @click="submitBtn.click()"
        />
      </div>
    </template>
  </UCard>
</template>
