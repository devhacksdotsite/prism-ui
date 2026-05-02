import type { Meta, StoryObj } from '@storybook/vue3'
import { PrButton } from '.'

const meta: Meta<typeof PrButton> = {
  title: 'Components/PrButton',
  component: PrButton,
  argTypes: {
    variant: { control: 'select', options: ['solid', 'outline', 'ghost', 'soft'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    color: { control: 'select', options: ['pink', 'purple', 'blue', 'mint', 'yellow', 'coral', 'lilac'] },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Button',
    variant: 'solid',
    size: 'md',
    color: 'pink',
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof PrButton>

export const Default: Story = {
  args: {
    color: "yellow"
  }
}

export const Variants: Story = {
  render: () => ({
    components: { PrButton },
    template: `
      <div class="flex gap-3 items-center">
        <PrButton label="Solid" variant="solid" />
        <PrButton label="Outline" variant="outline" />
        <PrButton label="Ghost" variant="ghost" />
        <PrButton label="Soft" variant="soft" />
      </div>
    `,
  }),
}

export const Colors: Story = {
  render: () => ({
    components: { PrButton },
    template: `
      <div class="flex flex-wrap gap-3">
        <PrButton label="Pink" color="pink" />
        <PrButton label="Purple" color="purple" />
        <PrButton label="Blue" color="blue" />
        <PrButton label="Mint" color="mint" />
        <PrButton label="Yellow" color="yellow" />
        <PrButton label="Coral" color="coral" />
        <PrButton label="Lilac" color="lilac" />
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { PrButton },
    template: `
      <div class="flex gap-3 items-center">
        <PrButton label="Small" size="sm" />
        <PrButton label="Medium" size="md" />
        <PrButton label="Large" size="lg" />
      </div>
    `,
  }),
}

export const OutlineColors: Story = {
  render: () => ({
    components: { PrButton },
    template: `
      <div class="flex flex-wrap gap-3">
        <PrButton label="Pink" color="pink" variant="outline" />
        <PrButton label="Purple" color="purple" variant="outline" />
        <PrButton label="Blue" color="blue" variant="outline" />
        <PrButton label="Mint" color="mint" variant="outline" />
        <PrButton label="Coral" color="coral" variant="outline" />
      </div>
    `,
  }),
}

export const Disabled: Story = {
  args: { label: 'Disabled', disabled: true },
}
