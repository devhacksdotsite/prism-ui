import type { Meta, StoryObj } from '@storybook/vue3'
import { PrToast } from '.'
import { PrButton } from '../PrButton'

const meta: Meta = {
  title: 'Components/PrToast',
}

export default meta

export const Default: StoryObj = {
  render: () => ({
    components: { PrToast, PrButton },
    setup() {
      const { useToast } = require('primevue/usetoast')
      const toast = useToast()
      const showSuccess = () => toast.add({ severity: 'success', summary: 'Success', detail: 'Operation completed', life: 3000 })
      const showInfo = () => toast.add({ severity: 'info', summary: 'Info', detail: 'Here is some information', life: 3000 })
      const showWarn = () => toast.add({ severity: 'warn', summary: 'Warning', detail: 'Something needs attention', life: 3000 })
      const showError = () => toast.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong', life: 3000 })
      return { showSuccess, showInfo, showWarn, showError }
    },
    template: `
      <div>
        <PrToast />
        <div style="display: flex; gap: 0.75rem;">
          <PrButton label="Success" color="mint" @click="showSuccess" />
          <PrButton label="Info" color="blue" @click="showInfo" />
          <PrButton label="Warning" color="yellow" @click="showWarn" />
          <PrButton label="Error" color="coral" @click="showError" />
        </div>
      </div>
    `,
  }),
}
