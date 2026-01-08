<template>
  <div v-if="auth.isAuthenticated" class="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-500">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-4">
        ¡Bienvenido al Dashboard, {{ auth.user?.name || auth.user?.email }}!
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 mb-12">
        Aquí podrás configurar todo el boilerplate: nombre, color, mensaje de bienvenida...
      </p>

      <!-- Tu grid de configs bonito aquí -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- ... (el contenido que ya tenías) ... -->
      </div>
    </div>
  </div>

  <!-- Si NO estás autenticado → mensaje claro y redirección -->
  <div v-else class="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
    <div class="text-center">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Acceso restringido
      </h2>
      <p class="text-gray-600 dark:text-gray-400 mb-8">
        Debes iniciar sesión para acceder al dashboard.
      </p>
      <button @click="router.push('/login')" class="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium transition">
        Ir al Login
      </button>
    </div>
  </div>
</template>

<script setup>
const auth = useAuthStore()
const router = useRouter()

onMounted(() => {
  auth.loadFromStorage()
  if (!auth.isAuthenticated) {
    router.push('/login')
  }
})
</script>
