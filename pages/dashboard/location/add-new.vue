<script setup lang="ts">

const schema = createSchema({
  name: Yup.string().required(),
  lat: Yup.number().required(),
  lng: Yup.number().required(),
})

const latLng = ref({
  lat: 52.123456,
  lng: 22.123456,
})

const router = useRouter()
const { submit, loading } = createSubmitHandler(schema, async (values) => {
  await GqlCreateLocation(values)
  router.back()
})

const submitBtn = ref()
</script>

<template>
  <div class="flex w-full px-20">
    <UCard
      class="sticky top-[112px] w-[500px]"
      :ui="{ body: { padding: ''}}"
    >
      <template #header>
        <div class="flex items-center font-bold text-gray-400">
          <UIcon
            name="i-heroicons-map-pin"
            class="w-12 h-12 mx-2"
          />
          Nowa lokacja
        </div>
      </template>
      <div class="px-4 pt-5 sm:p-6 sm:pb-0">
        <Form
          :validation-schema="schema"
          :initial-values="latLng"
          @submit="submit"
        >
          <TextField
            placeholder="Wpisz nazwę"
            class="py-2"
            name="name"
            label="Nazwa lokacji"
            required
          />

          <div class="grid grid grid-cols-2 gap-2">
            <TextField
              placeholder="52.123456"
              class="py-2"
              name="lat"
              label="Latitude"
              required
              @update:model-value="latLng.lat = +$event"
            />

            <TextField
              placeholder="22.123456"
              class="py-2"
              name="lng"
              label="Longitude"
              required
              @update:model-value="latLng.lng = +$event"
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
        :locations="[latLng]"
        :watch-changes="true"
      />

      <template #footer>
        <div class="grid grid-cols-2">
          <UButton
            @click="router.back()"
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
  </div>
</template>
