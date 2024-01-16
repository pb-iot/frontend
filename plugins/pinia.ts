import type { PiniaPluginContext } from 'pinia'
import { cloneDeep } from 'lodash-es'

export default defineNuxtPlugin(() => {
  const pinia = usePinia()

  pinia.use(({ store }: PiniaPluginContext) => {
    const originalState = cloneDeep(store.$state)

    store.$reset = () => {
      store.$patch(($state) => {
        Object.assign($state, originalState)
      })
    }
  })
})
