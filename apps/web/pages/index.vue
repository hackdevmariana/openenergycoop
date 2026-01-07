<template>
  <div class="min-h-screen flex flex-col items-center justify-center transition-colors duration-500"
       :class="colorMode.preference === 'dark' ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white'">
    <h1 class="text-6xl font-bold mb-8 drop-shadow-lg">
      Hola mundo
    </h1>
    <p class="text-2xl mb-12">
      Modo actual: {{ colorMode.preference === 'dark' ? 'Oscuro' : 'Claro' }}
    </p>
    <button @click="colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'"
            class="px-8 py-4 bg-white text-indigo-600 rounded-lg font-bold text-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition">
      Cambiar a {{ colorMode.preference === 'dark' ? 'claro' : 'oscuro' }}
    </button>
  </div>
</template>

<script setup>
const colorMode = useColorMode()
</script>
