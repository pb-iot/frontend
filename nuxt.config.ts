import { fileURLToPath } from 'node:url'
import { existsSync, readFileSync, readdirSync } from 'node:fs'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // NOTE: Add to modules 'nuxt-graphql-client' when this issue https://github.com/Diizzayy/nuxt-graphql-client/issues/455 is solved
  // Also add nuxt-graphql-client to package.json
  modules: ['@nuxt/ui', '@pinia/nuxt', '@vueuse/nuxt', '@vee-validate/nuxt', 'magic-regexp/nuxt', '@vue-macros/nuxt'],
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
