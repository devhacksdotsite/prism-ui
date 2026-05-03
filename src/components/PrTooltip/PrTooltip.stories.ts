import type { Meta, StoryObj } from '@storybook/vue3'
import { PrTooltip } from '.'
import { PrButton } from '../PrButton'

const meta: Meta<typeof PrTooltip> = {
  title: 'Components/PrTooltip',
  component: PrTooltip,
  render: (args) => ({
    components: { PrTooltip, PrButton },
    setup: () => ({ args }),
    template: `
      <div style="padding: 3rem;">
        <PrTooltip v-bind="args">
          <PrButton label="Hover me" color="purple" />
        </PrTooltip>
      </div>
    `,
  }),
  argTypes: {
    position: { control: 'select', options: ['top', 'bottom'] },
  },
  args: {
    text: 'Hello from Prism UI!',
    position: 'top',
  },
}

export default meta
type Story = StoryObj<typeof PrTooltip>

export const Default: Story = {}
