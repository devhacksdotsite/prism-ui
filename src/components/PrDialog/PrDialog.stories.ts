import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { PrDialog } from '.'
import { PrButton } from '../PrButton'

const meta: Meta<typeof PrDialog> = {
  title: 'Components/PrDialog',
  component: PrDialog,
}

export default meta
type Story = StoryObj<typeof PrDialog>

export const Default: Story = {
  render: () => ({
    components: { PrDialog, PrButton },
    setup: () => ({ visible: ref(false) }),
    template: `
      <div>
        <PrButton label="Open Dialog" @click="visible = true" />
        <PrDialog v-model="visible" header="Hello Prism">
          <p class="text-text-muted">This is a pastel-themed dialog with a blurred backdrop.</p>
          <template #footer>
            <PrButton label="Cancel" variant="ghost" color="coral" @click="visible = false" />
            <PrButton label="Confirm" color="mint" @click="visible = false" />
          </template>
        </PrDialog>
      </div>
    `,
  }),
}

export const Sizes: Story = {
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

export const Scrollable: Story = {
  render: () => ({
    components: { PrDialog, PrButton },
    setup: () => ({ visible: ref(false) }),
    template: `
      <div>
        <PrButton label="Scrollable Content" color="coral" @click="visible = true" />
        <PrDialog v-model="visible" header="Long Content">
          <div class="flex flex-col gap-4">
            <p v-for="i in 15" :key="i" class="text-text-muted">Paragraph {{ i }} — Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <template #footer>
            <PrButton label="Close" variant="outline" color="purple" @click="visible = false" />
          </template>
        </PrDialog>
      </div>
    `,
  }),
}
