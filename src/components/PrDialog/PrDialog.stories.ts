import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { PrDialog } from '.'
import { PrButton } from '../PrButton'

const meta: Meta<typeof PrDialog> = {
  title: 'Components/PrDialog',
  component: PrDialog,
  render: (args) => ({
    components: { PrDialog, PrButton },
    setup: () => {
      const visible = ref(false)
      return { args, visible }
    },
    template: `
      <div>
        <PrButton label="Open Dialog" @click="visible = true" />
        <PrDialog v-bind="args" v-model="visible">
          <p class="text-text-muted">This is a pastel-themed dialog with a blurred backdrop.</p>
          <template #footer>
            <PrButton label="Cancel" variant="ghost" color="coral" @click="visible = false" />
            <PrButton label="Confirm" color="mint" @click="visible = false" />
          </template>
        </PrDialog>
      </div>
    `,
  }),
  argTypes: {
    closable: { control: 'boolean' },
    modal: { control: 'boolean' },
    width: { control: 'text' },
  },
  args: {
    header: 'Hello Prism',
    closable: true,
    modal: true,
    width: '28rem',
  },
}

export default meta
type Story = StoryObj<typeof PrDialog>

export const Default: Story = {}

export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { PrDialog, PrButton },
    setup: () => ({ sm: ref(false), lg: ref(false) }),
    template: `
      <div style="display: flex; gap: 0.75rem;">
        <PrButton label="Small (20rem)" color="purple" @click="sm = true" />
        <PrButton label="Large (40rem)" color="blue" @click="lg = true" />
        <PrDialog v-model="sm" header="Small Dialog" width="20rem">
          <p class="text-text-muted">Compact dialog.</p>
        </PrDialog>
        <PrDialog v-model="lg" header="Large Dialog" width="40rem">
          <p class="text-text-muted">This is a wider dialog for more content.</p>
        </PrDialog>
      </div>
    `,
  }),
}
