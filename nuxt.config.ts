// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@vueuse/nuxt'],
  ui: {    
    global: true,    
    icons: ['mdi', 'simple-icons', 'heroicons']  
  }
})