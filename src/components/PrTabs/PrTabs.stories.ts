import type { Meta, StoryObj } from '@storybook/vue3'
import { PrTabs } from '.'

const tabs = [
  { label: 'Overview', value: 'overview' },
  { label: 'Features', value: 'features' },
  { label: 'Pricing', value: 'pricing' },
]

const meta: Meta<typeof PrTabs> = {
  title: 'Components/PrTabs',
  component: PrTabs,
  render: (args) => ({
    components: { PrTabs },
    setup: () => ({ args }),
    template: `
      <PrTabs v-bind="args" style="max-width: 32rem;">
        <template #overview><p class="text-text-muted">This is the overview panel content.</p></template>
        <template #features><p class="text-text-muted">Features panel with all the good stuff.</p></template>
        <template #pricing><p class="text-text-muted">Pricing details go here.</p></template>
      </PrTabs>
    `,
  }),
  argTypes: {
    color: { control: 'select', options: ['pink', 'purple', 'blue', 'mint', 'coral'] },
  },
  args: {
    tabs,
    color: 'purple',
  },
}

export default meta
type Story = StoryObj<typeof PrTabs>

export const Default: Story = {}

export const Colors: Story = {
  parameters: { controls: { disable: true } },
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
