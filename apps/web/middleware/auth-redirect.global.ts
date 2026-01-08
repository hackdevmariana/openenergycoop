export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore()

  if (process.client) {
    authStore.loadFromStorage()
  }

  // Si está autenticado y va a login o register → redirige al dashboard
  if (authStore.isAuthenticated && ['/login', '/register'].includes(to.path)) {
    return navigateTo('/dashboard')
  }
})
