export default defineNuxtConfig({
  compatibilityDate: '2026-01-08',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/ui',  // Maneja Tailwind v4 + dark mode perfecto
    '@pinia/nuxt',
  ],
  ui: {
    prefix: ''  // opcional, para usar clases sin prefijo
  },
  plugins: [
    '~/plugins/dark-mode.client.ts' // opcional si quieres tu toggle personalizado
  ]
})
