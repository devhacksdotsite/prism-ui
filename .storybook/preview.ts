import type { Preview } from '@storybook/vue3-vite'
import { setup } from '@storybook/vue3-vite'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import preset from '../src/theme/preset'
import '../src/theme/tokens.css'

setup((app) => {
  app.use(PrimeVue, { unstyled: true, pt: preset })
  app.use(ToastService)
})

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Theme',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'light', title: '☀️ Light' },
          { value: 'dark', title: '🌙 Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [
    (story, context) => {
      const theme = context.globals.theme || 'light'
      document.documentElement.setAttribute('data-theme', theme)
      return story()
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
}

export default preview
