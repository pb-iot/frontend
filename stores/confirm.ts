export interface ConfirmOptions<T = void> {
  callback: () => T | Promise<T>
  message?: string
  list?: string[]
  question?: string
  confirm?: string
  abort?: string
}

interface ConfirmLockOptions<T = void> extends ConfirmOptions<T> {
  release: () => Promise<T>
  cancel: () => void
}

const E_LOCK_CANCELLED = new Error('Lock cancelled')
const CLOSE_TIMEOUT = 250

const createLock = <T>(fn: () => T | Promise<T>) => {
  const res = Object.create(null) as {
    release: () => Promise<T>
    cancel: () => void
    waitForRelease: () => Promise<T | void>
  }

  const lock = new Promise<T>((resolve, reject) => {
    res.release = async () => {
      const data = await fn()
      resolve(data)
      return data
    }
    res.cancel = () => reject(E_LOCK_CANCELLED)
  })

  res.waitForRelease = () => lock.catch(err => {
    if (err === E_LOCK_CANCELLED) return
    throw err
  })

  return res
}

export const useConfirmStore = defineStore('confirm', () => {
  const queue = ref([] as ConfirmLockOptions<any>[])
  const loading = ref(false)
  const forceClose = ref(false)

  const createConfirmation = async <T>(options: ConfirmOptions<T>) => {
    const { waitForRelease, release, cancel } = createLock(options.callback)

    // Zaraz pushniemy do kolejki
    queue.value.push({
      ...options,
      release,
      cancel
    })

    console.log('kolejka po pushnieciu')
    console.log(queue.value)
    return waitForRelease()
  }

  const current = computed(() => queue.value[0])

  const confirm = async () => {
    if (!current.value) return

    // Process confirmation and set loading state
    loading.value = true
    const data = await current.value.release()
    loading.value = false

    // Close confirmation modal
    forceClose.value = true
    await sleep(CLOSE_TIMEOUT)

    // Remove current confirmation from queue
    queue.value.shift()

    // Reset force close
    forceClose.value = false

    // Return data
    return data
  }

  const abort = async () => {
    if (!current.value) return

    // Close confirmation modal
    forceClose.value = true
    await sleep(CLOSE_TIMEOUT)

    // Cancel current confirmation
    current.value.cancel()
    queue.value.shift()

    // Reset force close
    forceClose.value = false
  }

  return {
    open: computed(() => {
      if (forceClose.value) return false
      return queue.value.length > 0
    }),
    options: computed(() => queue.value[0] ?? Object.create(null)),
    loading: readonly(loading),
    forceClose: readonly(forceClose),
    createConfirmation,
    actions: {
      confirm,
      abort
    }
  }
})
