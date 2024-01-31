<script setup lang="ts">
const props = defineProps<{
  users: string[]
}>()

const props = defineProps<{
  greenhouse?: Greenhouse
}>()

const { locations } = await useLocations()
const locationOptions = computed(() => {
  return locations.value.map((location) => {
    return {
      label: location.name,
      value: location
    }
  })
})

const location = ref(locationOptions.value?.[0] ?? undefined)
const mapLocation = computed(() => {
  return location.value?.value ?? { lat: 0, lng: 0 }
})

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
  name: useGreenhouseNameValidationSchema(),
  cropType: Yup.string().oneOf(['TT', 'PT'], 'Niepoprawny typ uprawy. (Poprawne typy: TT, PT)').required('Typ uprawy jest wymagany')

})

const router = useRouter()
const { submit, loading } = createSubmitHandler(schema, async (values) => {
  if (!location.value) return

  const { createGreenhouse: greenhouse } = await GqlCreateGreenhouse({
    authorizedUsers: props.users,
    ...values,
    location: location.value.value!.id,
  })

  router.push(`/dashboard/greenhouse/${greenhouse!.greenhouse!.id}`)
})

const submitBtn = ref()
</script>

<template>
  <UCard
    class="sticky top-[112px] w-full h-[827px]"
    :ui="{ body: { padding: ''}}"
  >
    <template #header>
      <div class="flex items-center font-bold text-gray-400">
        <UIcon
          name="i-mdi-greenhouse"
          class="w-12 h-12 mx-2"
        />
        Nowa szklarnia
      </div>
    </template>
    <div class="px-4 pt-5 sm:p-6 sm:pb-0">
      <Form
        :validation-schema="schema"
        :initial-values="greenhouse ?? {}"
        @submit="submit"
      >
        <TextField
          placeholder="Wpisz nazwę"
          class="py-2"
          name="name"
          label="Nazwa szklarni"
          required
        />

        <TextField
          placeholder="Wpisz rodzaj uprawy"
          class="py-2"
          name="cropType"
          label="Rodzaj uprawy"
          required
        />
        <!-- Add map -->
        <div class="flex items-end gap-4 py-2">
          <SelectMenuField
            v-model="greenhouse.location.name"
            class="flex-1"
            label="Lokalizacja"
            name="location"
            icon="i-heroicons-map-pin-20-solid"
            :options="locationOptions"
            v-model="location"
            required
          />
          <UButton
            label="Dodaj nową lokację"
            to="/dashboard/location/add-new"
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
      :locations="[mapLocation]"
      watch-changes
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
