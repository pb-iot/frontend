const runtimeConfig = useRuntimeConfig()
const baseURL = runtimeConfig.api.baseUrl ?? ''

export const $fetchAPI = $fetch.create({
  baseURL
})

export const useFetchAPI: typeof useFetch = (url, options) => {
  return useFetch(url, {
    baseURL,
    ...options
  })
}

export const useLazyFetchAPI: typeof useLazyFetch = (url, options) => {
  return useLazyFetch(url, {
    baseURL,
    ...options
  })
}
