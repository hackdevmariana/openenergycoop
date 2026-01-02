export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    'nuxt-icon',
  ],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  },
  ui: {
    icons: ['heroicons', 'lucide']
  }
})