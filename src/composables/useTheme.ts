import { ref, watchEffect } from 'vue'

type Theme = 'light' | 'dark'

const theme = ref<Theme>('light')

export function useTheme() {
  function setTheme(t: Theme) {
    theme.value = t
    document.documentElement.setAttribute('data-theme', t)
  }

  function toggle() {
    setTheme(theme.value === 'light' ? 'dark' : 'light')
  }

  // Apply on first use
  watchEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.value)
  })

  return { theme, setTheme, toggle }
}
