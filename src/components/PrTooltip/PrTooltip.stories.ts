import type { Meta, StoryObj } from '@storybook/vue3'
import { PrTooltip } from '.'
import { PrButton } from '../PrButton'

const meta: Meta = {
  title: 'Components/PrTooltip',
}

export default meta

export const Default: StoryObj = {
  render: () => ({
    components: { PrTooltip, PrButton },
    template: `
      <div style="display: flex; gap: 1.5rem; padding: 3rem;">
        <PrTooltip text="I'm on top!" position="top">
          <PrButton label="Hover me (top)" color="purple" />
        </PrTooltip>
        <PrTooltip text="I'm on bottom!" position="bottom">
          <PrButton label="Hover me (bottom)" color="blue" />
        </PrTooltip>
      </div>
    `,
  }),
}
