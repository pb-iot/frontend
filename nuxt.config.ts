import { existsSync, readFileSync } from 'node:fs'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@pinia/nuxt', '@vueuse/nuxt', '@vee-validate/nuxt'],

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

  components: [
    { path: '~/components/forms', pathPrefix: false },
    '~components'
  ],

  imports: {
    dirs: ['~/stores']
  },

  veeValidate: {
    autoImports: true
  },

  vite: {
    vue: {
      script: {
        fs: {
          fileExists(file: string) {
            return existsSync(file);
          },
          readFile(file: string) {
            return readFileSync(file, "utf-8");
          },
        },
      }
    }
  },

  runtimeConfig: {
    api: {
      baseUrl: ''
    }
  },
})
