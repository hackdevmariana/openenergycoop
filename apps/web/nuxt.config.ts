import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    '@nuxtjs/color-mode',
  ],
colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
    dataValue: 'class'
  }
})

