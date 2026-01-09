<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
    <div class="max-w-4xl mx-auto px-4">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Panel de Administración
      </h1>

      <!-- Aquí va todo el código del dashboard anterior: nombre app, color, mensaje, mantenimiento -->
      <!-- Lo mismo que tenías en dashboard.vue, pero con título "Administración" -->

      <!-- ... (pega aquí el grid de configs que ya teníamos) ... -->

      <div class="mt-12 p-6 bg-blue-100 dark:bg-blue-900 rounded-lg">
        <p class="text-blue-800 dark:text-blue-200 font-medium">
          ⚙️ Solo visible para administradores
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Mismo código que antes: loadConfigs, saveConfig, etc.
const auth = useAuthStore()
const router = useRouter()

onMounted(() => {
  auth.loadFromStorage()
  if (!auth.isAdmin) {
    router.push('/dashboard')
  }
  // cargar configs...
})
</script>
