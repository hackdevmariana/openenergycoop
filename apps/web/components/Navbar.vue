<template>
  <header class="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center space-x-4">
          <div class="bg-primary-600 w-12 h-12 rounded-full flex items-center justify-center shadow-md">
            <span class="text-white font-bold text-2xl">B</span>
          </div>
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Boilerplate</h1>
        </div>

        <!-- Menú -->
        <nav class="hidden md:flex space-x-8">
          <NuxtLink to="/" class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition">Home</NuxtLink>
          <NuxtLink to="/dashboard" class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition">Dashboard</NuxtLink>
          <NuxtLink to="/about" class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition">About</NuxtLink>
        </nav>

        <!-- Acciones -->
        <div class="flex items-center space-x-4">
          <!-- Toggle -->
          <button @click="toggleDarkMode" class="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition shadow-sm">
            <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>

          <NuxtLink to="/login" class="px-6 py-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition shadow-sm">
            Login
          </NuxtLink>
          <NuxtLink to="/register" class="px-6 py-2.5 rounded-lg bg-primary-600 text-white hover:bg-primary-700 font-medium transition shadow-md">
            Register
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
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
