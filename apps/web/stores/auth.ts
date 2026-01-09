import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null as string | null,
    user: null as { name?: string; email?: string; role?: 'USER' | 'ADMIN' } | null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
    isAdmin: (state) => state.user?.role === 'ADMIN',
  },
  actions: {
    setToken(token: string, user: any) {
      this.token = token
      this.user = user
      if (process.client) {
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
      }
    },
    loadFromStorage() {
      if (process.client) {
        const token = localStorage.getItem('token')
        const userStr = localStorage.getItem('user')
        if (token) this.token = token
        if (userStr) this.user = JSON.parse(userStr)
      }
    },
    logout() {
      this.token = null
      this.user = null
      if (process.client) {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
      }
    },
  },
})
