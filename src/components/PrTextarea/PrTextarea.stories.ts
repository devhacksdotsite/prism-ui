import type { Meta, StoryObj } from '@storybook/vue3'
import { PrTextarea } from '.'

const meta: Meta<typeof PrTextarea> = {
  title: 'Components/PrTextarea',
  component: PrTextarea,
  argTypes: {
    status: { control: 'select', options: ['default', 'success', 'error'] },
    disabled: { control: 'boolean' },
    maxlength: { control: 'number' },
    rows: { control: 'number' },
  },
  args: {
    placeholder: 'Write something...',
    status: 'default',
    disabled: false,
    rows: 3,
  },
}

export default meta
type Story = StoryObj<typeof PrTextarea>

export const Default: Story = {}

export const WithCharCount: Story = {
  args: { maxlength: 200, placeholder: 'Max 200 characters...' },
}

export const States: Story = {
  render: () => ({
    components: { PrTextarea },
    template: `
      <div class="flex flex-col gap-3 max-w-sm">
        <PrTextarea placeholder="Default" />
        <PrTextarea placeholder="Success" status="success" />
        <PrTextarea placeholder="Error" status="error" />
        <PrTextarea placeholder="Disabled" disabled />
      </div>
    `,
  }),
}
