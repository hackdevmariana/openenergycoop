<template>
  <header class="bg-white dark:bg-gray-800 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center space-x-4">
          <div class="bg-primary-600 w-10 h-10 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-xl">B</span>
          </div>
          <h1 class="text-2xl font-bold">Boilerplate</h1>
        </div>
        <nav class="hidden md:flex space-x-8">
          <NuxtLink to="/" class="text-gray-700 dark:text-gray-300 hover:text-primary-600">Home</NuxtLink>
          <NuxtLink to="/dashboard" class="text-gray-700 dark:text-gray-300 hover:text-primary-600">Dashboard</NuxtLink>
          <NuxtLink to="/about" class="text-gray-700 dark:text-gray-300 hover:text-primary-600">About</NuxtLink>
        </nav>
        <div class="flex items-center space-x-4">
          <button @click="$colorMode.preference = $colorMode.preference === 'dark' ? 'light' : 'dark'" class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            <svg v-if="$colorMode.preference === 'light'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
          <NuxtLink to="/login" class="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">Login</NuxtLink>
          <NuxtLink to="/register" class="px-4 py-2 rounded bg-primary-600 text-white hover:bg-primary-700">Register</NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>
