<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary-600 to-indigo-600 text-white py-24 md:py-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          The Ultimate Monorepo Starter
        </h1>
        <p class="text-xl md:text-3xl mb-12 opacity-90">
          NestJS backend + Nuxt 3 frontend + Expo mobile — todo en un solo repo
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/register" class="px-8 py-4 bg-white text-primary-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-xl">
            Get Started
          </NuxtLink>
          <NuxtLink to="/dashboard" class="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition">
            Ver Dashboard
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Cards Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Full-stack ready from day 1
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <!-- Card Backend -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow duration-300">
            <div class="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">Backend</h3>
            <p class="text-gray-600 dark:text-gray-300 text-center">
              NestJS + Prisma + PostgreSQL + Redis + JWT Auth completo
            </p>
          </div>

          <!-- Card Web -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow duration-300">
            <div class="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">Web</h3>
            <p class="text-gray-600 dark:text-gray-300 text-center">
              Nuxt 3 + Tailwind + Dark Mode + Responsive + SSR
            </p>
          </div>

          <!-- Card Mobile -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow duration-300">
            <div class="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h6M12 6h6m-6 6h6M5 12h.01M5 6h.01M5 18h.01" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">Mobile</h3>
            <p class="text-gray-600 dark:text-gray-300 text-center">
              Expo + React Native + Nativewind (Tailwind)
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
