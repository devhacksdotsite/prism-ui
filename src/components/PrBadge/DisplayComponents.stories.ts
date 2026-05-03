import type { Meta, StoryObj } from '@storybook/vue3'
import { PrBadge } from '../PrBadge'
import { PrTag } from '../PrTag'
import { PrAvatar } from '../PrAvatar'

const meta: Meta = {
  parameters: { controls: { disable: true } },
  title: 'Components/Badge, Tag & Avatar',
}

export default meta

export const Badges: StoryObj = {
  render: () => ({
    components: { PrBadge },
    template: `
      <div class="flex gap-4 items-center">
        <PrBadge value="3" color="pink" />
        <PrBadge value="12" color="purple" />
        <PrBadge value="99+" color="coral" />
        <PrBadge value="New" color="blue" />
        <PrBadge dot color="mint" />
        <PrBadge dot color="coral" />
        <PrBadge dot color="yellow" />
      </div>
    `,
  }),
}

export const Tags: StoryObj = {
  render: () => ({
    components: { PrTag },
    template: `
      <div class="flex flex-wrap gap-2">
        <PrTag value="Vue" color="mint" />
        <PrTag value="React" color="blue" />
        <PrTag value="Svelte" color="coral" />
        <PrTag value="Astro" color="purple" />
        <PrTag value="Removable" color="pink" removable />
        <PrTag value="Lilac" color="lilac" />
        <PrTag value="Warning" color="yellow" />
      </div>
    `,
  }),
}

export const Avatars: StoryObj = {
  render: () => ({
    components: { PrAvatar },
    template: `
      <div class="flex gap-4 items-end">
        <PrAvatar label="Jesse Salinas" color="pink" size="sm" />
        <PrAvatar label="Jesse Salinas" color="purple" size="md" />
        <PrAvatar label="Jesse Salinas" color="blue" size="lg" />
        <PrAvatar label="Ana B" color="mint" />
        <PrAvatar label="Carlos D" color="coral" />
        <PrAvatar image="https://i.pravatar.cc/100?img=3" label="Photo" color="lilac" size="lg" />
      </div>
    `,
  }),
}
