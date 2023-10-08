// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@pinia/nuxt', '@vueuse/nuxt'],
  ui: {
    global: true,
    icons: ['mdi', 'simple-icons', 'heroicons']
  },
  pinia: {
    autoImports: [
      'defineStore',
      'acceptHMRUpdate',
    ]
  },
  imports: {
    dirs: ['~/stores']
  },
  runtimeConfig: {
    api: {
      baseUrl: ''
    }
  },
})
