<script setup lang="ts">

const schema = createSchema({
  locationName: Yup.string().required()
})

const { submit, loading } = createSubmitHandler(schema, async (values) => {
  // TODO: Send request to the backend
  console.log(values)
})

const locations = await useLocations()
const submitBtn = ref()
</script>

<template>
  <div class="flex w-full h-full px-20">
    <UCard
      class="sticky top-[112px] w-[500px] h-[537px]"
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
          @submit="submit"
        >
          <TextField
            placeholder="Wpisz nazwę"
            class="py-2"
            name="locationName"
            label="Nazwa lokacji"
            required
          />
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
  </div>
</template>
