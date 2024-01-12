import type { ConfirmOptions } from '~/stores/confirm'

type ConfirmMessages<T> = Omit<ConfirmOptions<T>, 'callback'>

export const useConfirm = <T>(callback: ConfirmOptions<T>['callback'], messages?: ConfirmMessages<T>) => {
  const store = useConfirmStore()

  return store.createConfirmation({
    callback,
    ...(messages || Object.create(null))
  })
}
