export default defineNuxtPlugin(() => {
  if (process.client) {
    const getPreferredMode = () => {
      const saved = localStorage.getItem('dark-mode')
      if (saved !== null) {
        return saved === 'true'
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    const setDarkMode = (isDark: boolean) => {
      if (isDark) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('dark-mode', 'true')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('dark-mode', 'false')
      }
    }

    // Aplicar modo inicial
    setDarkMode(getPreferredMode())

    // Toggle global
    window.toggleDarkMode = () => {
      const current = getPreferredMode()
      setDarkMode(!current)
    }

    // Escuchar cambios del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (localStorage.getItem('dark-mode') === null) { // solo si no hay preferencia guardada
        setDarkMode(e.matches)
      }
    })
  }
})
