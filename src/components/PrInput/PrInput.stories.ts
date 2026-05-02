import type { Meta, StoryObj } from '@storybook/vue3'
import { PrInput } from '.'

const meta: Meta<typeof PrInput> = {
  title: 'Components/PrInput',
  component: PrInput,
  argTypes: {
    status: { control: 'select', options: ['default', 'success', 'error'] },
    disabled: { control: 'boolean' },
  },
  args: {
    placeholder: 'Enter text...',
    status: 'default',
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof PrInput>

export const Default: Story = {}

export const States: Story = {
  render: () => ({
    components: { PrInput },
    template: `
      <div class="flex flex-col gap-3 max-w-xs">
        <PrInput placeholder="Default" />
        <PrInput placeholder="Success" status="success" />
        <PrInput placeholder="Error" status="error" />
        <PrInput placeholder="Disabled" disabled />
      </div>
    `,
  }),
}
