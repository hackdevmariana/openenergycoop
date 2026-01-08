export default defineNuxtPlugin(() => {
  if (process.client) {
    const getPreferred = () => {
      const saved = localStorage.getItem('dark-mode');
      if (saved !== null) return saved === 'true';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    };

    const setDark = (isDark) => {
      if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('dark-mode', 'true');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('dark-mode', 'false');
      }
    };

    setDark(getPreferred());

    window.toggleDarkMode = () => {
      setDark(!getPreferred());
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (localStorage.getItem('dark-mode') === null) {
        setDark(e.matches);
      }
    });
  }
})
