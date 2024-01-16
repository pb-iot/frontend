import { fileURLToPath } from 'node:url'
import { existsSync, readFileSync, readdirSync } from 'node:fs'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@pinia/nuxt', '@vueuse/nuxt', '@vee-validate/nuxt', 'magic-regexp/nuxt', '@vue-macros/nuxt', 'nuxt-graphql-client'],
  ssr: false,

  ui: {
    global: true,
    icons: ['mdi', 'simple-icons', 'heroicons']
  },

  pinia: {
    autoImports: ['acceptHMRUpdate', 'defineStore', 'storeToRefs'],
    storesDirs: ['./stores/**']
  },

  components: [
    { path: '~/components/forms', pathPrefix: false },
    '~/components'
  ],

  imports: {
    dirs: ['./stores']
  },

  veeValidate: {
    autoImports: true
  },

  vite: {
    vue: {
      script: {
        globalTypeFiles: readdirSync(new URL('./types', import.meta.url)).map(
          (file) => fileURLToPath(new URL(`./types/${file}`, import.meta.url))
        ),
        fs: {
          fileExists (file: string) {
            return existsSync(file)
          },
          readFile (file: string) {
            return readFileSync(file, 'utf-8')
          }
        }
      }
    }
  },

  runtimeConfig: {
    public: {
      GQL_HOST: '',
      MAPBOX_TOKEN: ''
    }
  }
})
