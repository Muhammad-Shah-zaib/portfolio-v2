import { ref } from 'vue'

const currentTheme = ref('light')

export function useTheme() {
  function setTheme(theme) {
    currentTheme.value = theme
    document.documentElement.setAttribute('data-theme', theme)
  }

  function toggleTheme() {
    const next = currentTheme.value === 'light' ? 'dark' : 'light'
    setTheme(next)
  }

  setTheme('light')

  return { currentTheme, setTheme, toggleTheme }
}
