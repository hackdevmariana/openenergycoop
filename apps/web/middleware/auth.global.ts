export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore()

  // Solo ejecutamos en cliente (evita errores SSR)
  if (process.client) {
    authStore.loadFromStorage()

    // Si estás autenticado y vas a login/register → dashboard
    if (authStore.isAuthenticated && ['/login', '/register'].includes(to.path)) {
      return navigateTo('/dashboard')
    }

    // Si NO estás autenticado y vas a dashboard → login
    if (!authStore.isAuthenticated && to.path === '/dashboard') {
      return navigateTo('/login')
    }
  }
})
