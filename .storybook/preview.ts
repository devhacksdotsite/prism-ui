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
