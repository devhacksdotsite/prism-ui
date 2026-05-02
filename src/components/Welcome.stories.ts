import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Welcome',
}

export default meta

export const PrismUI: StoryObj = {
  render: () => ({
    template: `
      <div class="p-8 text-center">
        <h1 class="text-4xl font-bold text-purple mb-4">🔮 Prism UI</h1>
        <p class="text-text-muted">A vibrant pastel component library</p>
        <div class="flex gap-3 justify-center mt-6">
          <span class="px-3 py-1 rounded-full bg-pink text-white text-sm">Pink</span>
          <span class="px-3 py-1 rounded-full bg-purple text-white text-sm">Purple</span>
          <span class="px-3 py-1 rounded-full bg-blue text-white text-sm">Blue</span>
          <span class="px-3 py-1 rounded-full bg-mint text-white text-sm">Mint</span>
          <span class="px-3 py-1 rounded-full bg-yellow text-text text-sm">Yellow</span>
          <span class="px-3 py-1 rounded-full bg-coral text-white text-sm">Coral</span>
          <span class="px-3 py-1 rounded-full bg-lilac text-white text-sm">Lilac</span>
          <span class="px-3 py-1 rounded-full bg-aqua text-text text-sm">Aqua</span>
        </div>
      </div>
    `,
  }),
}
