import type { Meta, StoryObj } from '@storybook/vue3'
import { PrCard } from '../PrCard'
import { PrDivider } from '../PrDivider'
import { PrButton } from '../PrButton'

const meta: Meta = {
  title: 'Components/Card & Divider',
}

export default meta

export const Cards: StoryObj = {
  render: () => ({
    components: { PrCard, PrButton },
    template: `
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; max-width: 48rem;">
        <PrCard title="Default" subtitle="No color border">
          <p class="text-sm text-text-muted">Card content goes here.</p>
        </PrCard>
        <PrCard title="Pink" subtitle="Accent border" color="pink">
          <p class="text-sm text-text-muted">Card content goes here.</p>
        </PrCard>
        <PrCard title="Purple" subtitle="Accent border" color="purple">
          <p class="text-sm text-text-muted">Card content goes here.</p>
        </PrCard>
        <PrCard title="With Footer" color="mint">
          <p class="text-sm text-text-muted">This card has a footer.</p>
          <template #footer>
            <PrButton label="Action" size="sm" color="mint" />
          </template>
        </PrCard>
        <PrCard title="Blue" color="blue">
          <p class="text-sm text-text-muted">Card content goes here.</p>
        </PrCard>
        <PrCard title="Coral" color="coral">
          <p class="text-sm text-text-muted">Card content goes here.</p>
        </PrCard>
      </div>
    `,
  }),
}

export const Dividers: StoryObj = {
  render: () => ({
    components: { PrDivider },
    template: `
      <div class="flex flex-col gap-6 max-w-md">
        <PrDivider />
        <PrDivider color="pink" />
        <PrDivider color="purple" label="or" />
        <PrDivider color="blue" label="section" />
        <PrDivider color="mint" />
        <div class="flex gap-6 h-16 items-center">
          <span class="text-sm text-text-muted">Left</span>
          <PrDivider layout="vertical" color="purple" />
          <span class="text-sm text-text-muted">Right</span>
        </div>
      </div>
    `,
  }),
}
