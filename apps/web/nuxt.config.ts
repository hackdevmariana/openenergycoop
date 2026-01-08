import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-01-08', 
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
  ],
  plugins: [
    '~/plugins/dark-mode.client.ts'
  ]
})

