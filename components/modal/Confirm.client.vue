<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
const store = useConfirmStore()

const confirmState = useClamp(0, 0, 1)

const confirm = async () => {
  switch (confirmState.value) {
    case 0:
      confirmState.value += 1
      break

    case 1: {
      const data = await store.actions.confirm()
      confirmState.value = 0
      return data
    }
  }
}

const abort = async () => {
  await store.actions.abort()
  confirmState.value = 0
}

const open = computed({
  get: () => store.open,
  set: (value) => {
    if (value) return
    abort()
  }
})
</script>

<template>
  <ModalGeneric
    v-model="open"
    width="max-w-lg"
  >
    <template #header>
      <template v-if="store.options.header">
        {{ store.options.header }}
      </template>
      Czy jesteś pewien?
    </template>
    <p class="pb-4">
      {{ store.options.message }}
    </p>

    <div
      v-if="store.options.list"
      class="p-4 rounded bg-slate-100 dark:bg-gray-800 shadow-inner text-gray-800 dark:text-gray-200"
    >
      <div
        v-for="item in store.options.list"
        :key="item"
        class="font-mono"
      >
        - {{ item }}
      </div>
    </div>
    <template #footer>
      <UButton
        color="gray"
        variant="soft"
        size="lg"
        block
        @click="abort"
      >
        <template v-if="store.options.abort">
          {{ store.options.abort }}
        </template>
        Anuluj
      </UButton>
      <UButton
        v-if="confirmState === 0"
        color="red"
        variant="soft"
        size="lg"
        block
        @click="confirm"
      >
        <template v-if="store.options.confirm">
          {{ store.options.confirm }}
        </template>
        Potwierdź
      </UButton>
      <UButton
        v-else
        color="red"
        size="lg"
        block
        :loading="store.loading"
        @click="confirm"
      >
        Czy jesteś pewien?
      </UButton>
    </template>
  </ModalGeneric>
</template>
