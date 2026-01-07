<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
    <div class="max-w-md w-full space-y-8">
      <div class="text-center">
        <div class="bg-primary-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <span class="text-white font-bold text-3xl">B</span>
        </div>
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white">Crea tu cuenta</h2>
        <p class="mt-2 text-gray-600 dark:text-gray-400">Únete al boilerplate más potente</p>
      </div>

      <form class="mt-8 space-y-5" @submit.prevent="submitRegister">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre completo</label>
          <input id="name" name="name" type="text" autocomplete="name" required
                 class="mt-1 appearance-none block w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                 placeholder="Juan Pérez" />
        </div>

        <div>
          <label for="email-reg" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input id="email-reg" name="email" type="email" autocomplete="email" required
                 class="mt-1 appearance-none block w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                 placeholder="tu@email.com" />
        </div>

        <div>
          <label for="password-reg" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Contraseña</label>
          <input id="password-reg" name="password" type="password" autocomplete="new-password" required
                 class="mt-1 appearance-none block w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                 placeholder="••••••••" />
        </div>

        <div>
          <label for="confirm-password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Confirmar contraseña</label>
          <input id="confirm-password" name="confirm-password" type="password" autocomplete="new-password" required
                 class="mt-1 appearance-none block w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                 placeholder="••••••••" />
        </div>

        <button type="submit" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition">
          Crear cuenta
        </button>

        <p class="text-center text-sm text-gray-600 dark:text-gray-400">
          ¿Ya tienes cuenta?
          <NuxtLink to="/login" class="font-medium text-primary-600 hover:text-primary-500">
            Inicia sesión aquí
          </NuxtLink>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
const submitRegister = () => {
  // Aquí iría la llamada a la API NestJS (lo hacemos después)
  alert('Registro simulado — ¡próximamente conectado al backend!')
}
</script>
