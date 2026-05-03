import type { Meta, StoryObj } from '@storybook/vue3'
import { PrSkeleton } from '../PrSkeleton'
import { PrProgressBar } from '../PrProgressBar'

const meta: Meta = {
  parameters: { controls: { disable: true } },
  title: 'Components/Skeleton & ProgressBar',
}

export default meta

export const Skeletons: StoryObj = {
  render: () => ({
    components: { PrSkeleton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 24rem;">
        <PrSkeleton />
        <PrSkeleton width="75%" />
        <PrSkeleton width="50%" height="0.75rem" />
        <PrSkeleton height="8rem" />
        <div style="display: flex; gap: 1rem; align-items: center;">
          <PrSkeleton shape="circle" width="3rem" />
          <div style="display: flex; flex-direction: column; gap: 0.5rem; flex: 1;">
            <PrSkeleton width="60%" />
            <PrSkeleton width="40%" height="0.75rem" />
          </div>
        </div>
      </div>
    `,
  }),
}

export const ProgressBars: StoryObj = {
  render: () => ({
    components: { PrProgressBar },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 24rem;">
        <PrProgressBar :value="25" color="pink" showValue />
        <PrProgressBar :value="50" color="purple" showValue />
        <PrProgressBar :value="75" color="blue" showValue />
        <PrProgressBar :value="90" color="mint" showValue />
        <PrProgressBar :value="40" color="coral" />
        <PrProgressBar :value="60" color="lilac" height="1.25rem" showValue />
      </div>
    `,
  }),
}
