import { createAvatar } from '@dicebear/core'
import { miniavs } from '@dicebear/collection'

export const useAvatar = (data?: any) => {
  return createAvatar(miniavs, {
    seed: data && typeof data === 'object' ? data.id ?? JSON.stringify(data) : data ?? 'none',
    backgroundColor: ["b6e3f4","c0aede","d1d4f9"],
    backgroundType: ["gradientLinear"],
    size: 128
  }).toDataUriSync()
}
