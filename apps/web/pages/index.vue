<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center transition-colors duration-500">
    <div class="text-center px-6">
      <h1 class="text-6xl font-bold text-gray-900 dark:text-white mb-8">
        Hola mundo
      </h1>
      <p class="text-2xl text-gray-700 dark:text-gray-300 mb-12">
        Boilerplate listo y bonito
      </p>
      <p class="text-xl text-gray-600 dark:text-gray-400 mb-12">
        Modo actual: {{ isDark ? 'Oscuro' : 'Claro' }}
      </p>
      <button @click="toggleDarkMode" class="px-8 py-4 bg-primary-600 text-white rounded-lg font-bold text-lg hover:bg-primary-700 transition shadow-lg">
        Cambiar a {{ isDark ? 'claro' : 'oscuro' }}
      </button>
    </div>
  </div>
</template>

<script setup>
const isDark = ref(false)

const toggleDarkMode = () => {
  if (process.client) {
    window.toggleDarkMode()
    isDark.value = document.documentElement.classList.contains('dark')
  }
}

onMounted(() => {
  if (process.client) {
    isDark.value = document.documentElement.classList.contains('dark')
  }
})
</script>
