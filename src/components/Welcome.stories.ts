import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Introduction/Welcome',
}

export default meta

export const PrismUI: StoryObj = {
  render: () => ({
    template: `
      <div style="padding: 2rem; max-width: 36rem;">
        <h1 style="font-size: 2.5rem; font-weight: 800; color: #C084FC; margin-bottom: 0.5rem;">🔮 Prism UI</h1>
        <p style="color: #7C6B9E; margin-bottom: 2rem;">A vibrant pastel component library built with Vue 3, PrimeVue, and Tailwind CSS.</p>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 2rem;">
          <span class="px-3 py-1 rounded-full text-sm font-medium" style="background: rgba(255,107,157,0.15); color: #FF6B9D;">Pink</span>
          <span class="px-3 py-1 rounded-full text-sm font-medium" style="background: rgba(192,132,252,0.15); color: #C084FC;">Purple</span>
          <span class="px-3 py-1 rounded-full text-sm font-medium" style="background: rgba(103,212,255,0.15); color: #67D4FF;">Blue</span>
          <span class="px-3 py-1 rounded-full text-sm font-medium" style="background: rgba(110,236,212,0.15); color: #6EECD4;">Mint</span>
          <span class="px-3 py-1 rounded-full text-sm font-medium" style="background: rgba(253,235,113,0.2); color: #2D1B4E;">Yellow</span>
          <span class="px-3 py-1 rounded-full text-sm font-medium" style="background: rgba(255,138,128,0.15); color: #FF8A80;">Coral</span>
          <span class="px-3 py-1 rounded-full text-sm font-medium" style="background: rgba(212,170,255,0.15); color: #D4AAFF;">Lilac</span>
          <span class="px-3 py-1 rounded-full text-sm font-medium" style="background: rgba(128,240,224,0.15); color: #80F0E0;">Aqua</span>
        </div>
        <h2 style="font-size: 1.25rem; font-weight: 700; color: #2D1B4E; margin-bottom: 0.75rem;">Stack</h2>
        <ul style="color: #7C6B9E; line-height: 1.8; font-size: 0.875rem;">
          <li>🖼️ Vue 3 (Composition API)</li>
          <li>🎨 PrimeVue 4 (unstyled mode + passthrough)</li>
          <li>💨 Tailwind CSS v4</li>
          <li>📖 Storybook 10</li>
          <li>⚡ Vite</li>
        </ul>
      </div>
    `,
  }),
}
