<template>
  <div v-if="!auth.isAuthenticated" class="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4">
    <div class="max-w-md w-full space-y-8">
      <div class="text-center">
        <div class="bg-primary-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <span class="text-white font-bold text-3xl">B</span>
        </div>
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white">Iniciar sesión</h2>
      </div>

      <form class="mt-8 space-y-6" @submit.prevent="login">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input v-model="email" type="email" required class="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white" placeholder="tu@email.com" />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Contraseña</label>
          <input v-model="password" type="password" required class="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white" placeholder="••••••••" />
        </div>

        <button type="submit" class="w-full py-3 px-4 bg-primary-600 text-white rounded-lg font-bold hover:bg-primary-700 transition">
          Entrar
        </button>

        <p class="text-center text-sm text-gray-600 dark:text-gray-400">
          ¿No tienes cuenta? <NuxtLink to="/register" class="text-primary-600 hover:text-primary-500 font-medium">Regístrate</NuxtLink>
        </p>
      </form>
    </div>
  </div>

  <!-- Mensaje amable si por algún motivo llega logueado -->
  <div v-else class="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
    <div class="text-center">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Ya estás logueado como {{ auth.user?.name || auth.user?.email }}
      </h2>
      <p class="text-gray-600 dark:text-gray-400 mb-8">
        Serás redirigido al dashboard...
      </p>
      <button @click="router.push('/dashboard')" class="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium">
        Ir al Dashboard ahora
      </button>
    </div>
  </div>
</template>

<script setup>
const email = ref('')
const password = ref('')

const auth = useAuthStore()
const router = useRouter()

onMounted(() => {
  auth.loadFromStorage()
  if (auth.isAuthenticated) {
    router.push('/dashboard')
  }
})

const login = async () => {
  try {
    const response = await $fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      body: { email: email.value, password: password.value }
    })

    auth.setToken(response.accessToken, { email: email.value })
    router.push('/dashboard')
  } catch (err) {
    alert('Error al iniciar sesión: ' + (err.data?.message || err.message || 'Credenciales inválidas'))
  }
}
</script>
