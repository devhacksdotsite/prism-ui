import type { Meta, StoryObj } from '@storybook/vue3'
import { PrMenu } from '../PrMenu'
import { PrChip } from '../PrChip'

const meta: Meta = {
  parameters: { controls: { disable: true } },
  title: 'Components/Menu & Chip',
}

export default meta

export const Menu: StoryObj = {
  render: () => ({
    components: { PrMenu },
    template: `
      <PrMenu :items="[
        { label: 'Profile', icon: '👤' },
        { label: 'Settings', icon: '⚙️' },
        { separator: true },
        { label: 'Help', icon: '❓' },
        { label: 'Disabled', icon: '🚫', disabled: true },
        { separator: true },
        { label: 'Logout', icon: '🚪' },
      ]" />
    `,
  }),
}

export const Chips: StoryObj = {
  render: () => ({
    components: { PrChip },
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        <PrChip label="Vue" color="mint" />
        <PrChip label="React" color="blue" />
        <PrChip label="Svelte" color="coral" />
        <PrChip label="Removable" color="pink" removable />
        <PrChip label="With Avatar" color="purple" image="https://i.pravatar.cc/100?img=5" />
        <PrChip label="Lilac" color="lilac" removable />
      </div>
    `,
  }),
}
