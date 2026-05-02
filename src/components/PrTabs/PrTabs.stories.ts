import type { Meta, StoryObj } from '@storybook/vue3'
import { PrTabs } from '.'

const meta: Meta<typeof PrTabs> = {
  title: 'Components/PrTabs',
  component: PrTabs,
}

export default meta
type Story = StoryObj<typeof PrTabs>

const tabs = [
  { label: 'Overview', value: 'overview' },
  { label: 'Features', value: 'features' },
  { label: 'Pricing', value: 'pricing' },
]

export const Default: Story = {
  render: () => ({
    components: { PrTabs },
    setup: () => ({ tabs }),
    template: `
      <PrTabs :tabs="tabs" style="max-width: 32rem;">
        <template #overview><p class="text-text-muted">This is the overview panel content.</p></template>
        <template #features><p class="text-text-muted">Features panel with all the good stuff.</p></template>
        <template #pricing><p class="text-text-muted">Pricing details go here.</p></template>
      </PrTabs>
    `,
  }),
}

export const Colors: Story = {
  render: () => ({
    components: { PrTabs },
    setup: () => ({ tabs }),
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 32rem;">
        <PrTabs :tabs="tabs" color="pink">
          <template #overview><p class="text-text-muted">Pink active bar.</p></template>
          <template #features><p class="text-text-muted">Features content.</p></template>
          <template #pricing><p class="text-text-muted">Pricing content.</p></template>
        </PrTabs>
        <PrTabs :tabs="tabs" color="mint">
          <template #overview><p class="text-text-muted">Mint active bar.</p></template>
          <template #features><p class="text-text-muted">Features content.</p></template>
          <template #pricing><p class="text-text-muted">Pricing content.</p></template>
        </PrTabs>
      </div>
    `,
  }),
}
