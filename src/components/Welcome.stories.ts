import type { Meta, StoryObj } from '@storybook/vue3'
import { PrButton } from './PrButton'
import { PrBadge } from './PrBadge'
import { PrTag } from './PrTag'
import { PrAvatar } from './PrAvatar'
import { PrProgressBar } from './PrProgressBar'
import { PrDivider } from './PrDivider'
import { PrCard } from './PrCard'
import { PrInput } from './PrInput'
import { PrToggle } from './PrToggle'

const meta: Meta = {
  title: 'Design System/Overview',
}

export default meta

const colors = [
  { name: 'Pink', hex: '#FF6B9D' },
  { name: 'Purple', hex: '#C084FC' },
  { name: 'Blue', hex: '#67D4FF' },
  { name: 'Mint', hex: '#6EECD4' },
  { name: 'Yellow', hex: '#FDEB71' },
  { name: 'Coral', hex: '#FF8A80' },
  { name: 'Lilac', hex: '#D4AAFF' },
  { name: 'Aqua', hex: '#80F0E0' },
]

const neutrals = [
  { name: 'Surface 0', hex: '#FFFFFF', dark: '#1a1225' },
  { name: 'Surface 1', hex: '#FAFAFE', dark: '#231a30' },
  { name: 'Surface 2', hex: '#EDE6FF', dark: '#332a45' },
  { name: 'Text', hex: '#2D1B4E', dark: '#e8e0f0' },
  { name: 'Muted', hex: '#7C6B9E', dark: '#9a8cb5' },
]

export const Overview: StoryObj = {
  render: () => ({
    components: { PrButton, PrBadge, PrTag, PrAvatar, PrProgressBar, PrDivider, PrCard, PrInput, PrToggle },
    setup: () => ({ colors, neutrals }),
    template: `
      <div class="max-w-4xl mx-auto p-8">

        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-5xl font-extrabold text-purple mb-2">🔮 Prism UI</h1>
          <p class="text-text-muted text-lg">A vibrant pastel design system &amp; component library</p>
          <div class="flex gap-2 justify-center mt-4">
            <PrTag value="Vue 3" color="mint" />
            <PrTag value="PrimeVue 4" color="purple" />
            <PrTag value="Tailwind v4" color="blue" />
            <PrTag value="Storybook 10" color="pink" />
          </div>
        </div>

        <PrDivider color="purple" />

        <!-- Color Palette -->
        <div class="my-10">
          <h2 class="text-2xl font-bold text-text mb-5">🎨 Color Palette</h2>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;">
            <div v-for="c in colors" :key="c.name" class="rounded-xl overflow-hidden border-2 border-surface-2">
              <div :style="{ background: c.hex, height: '4rem' }" />
              <div class="p-3 bg-surface-1">
                <p class="font-semibold text-sm text-text m-0">{{ c.name }}</p>
                <p class="text-xs text-text-muted mt-1 m-0">{{ c.hex }}</p>
              </div>
            </div>
          </div>

          <h3 class="text-base font-semibold text-text mt-6 mb-3">Neutrals</h3>
          <div class="flex gap-3">
            <div v-for="n in neutrals" :key="n.name" class="flex-1 rounded-xl overflow-hidden border-2 border-surface-2">
              <div :style="{ background: n.hex, height: '2.5rem' }" />
              <div class="p-2 bg-surface-1">
                <p class="font-semibold text-xs text-text m-0">{{ n.name }}</p>
                <p class="text-text-muted mt-0.5 m-0" style="font-size: 0.625rem;">{{ n.hex }}</p>
              </div>
            </div>
          </div>
        </div>

        <PrDivider color="pink" />

        <!-- Typography -->
        <div class="my-10">
          <h2 class="text-2xl font-bold text-text mb-5">📝 Typography</h2>
          <div class="flex flex-col gap-3">
            <p class="text-text m-0" style="font-size: 2rem; font-weight: 800;">Heading 1 — Inter 2rem/800</p>
            <p class="text-text m-0" style="font-size: 1.5rem; font-weight: 700;">Heading 2 — Inter 1.5rem/700</p>
            <p class="text-text m-0" style="font-size: 1.125rem; font-weight: 600;">Heading 3 — Inter 1.125rem/600</p>
            <p class="text-text m-0" style="font-size: 0.875rem;">Body — Inter 0.875rem/400</p>
            <p class="text-text-muted m-0" style="font-size: 0.75rem;">Caption — Inter 0.75rem/400 muted</p>
            <p class="text-text-muted m-0" style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">OVERLINE — Inter 0.75rem/600 uppercase</p>
          </div>
        </div>

        <PrDivider color="blue" />

        <!-- Component Samples -->
        <div class="my-10">
          <h2 class="text-2xl font-bold text-text mb-5">🧩 Component Samples</h2>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;">

            <PrCard title="Buttons" color="pink">
              <div class="flex flex-wrap gap-2">
                <PrButton label="Solid" color="pink" size="sm" />
                <PrButton label="Outline" color="purple" variant="outline" size="sm" />
                <PrButton label="Ghost" color="blue" variant="ghost" size="sm" />
                <PrButton label="Soft" color="mint" variant="soft" size="sm" />
              </div>
            </PrCard>

            <PrCard title="Badges & Tags" color="purple">
              <div class="flex flex-wrap gap-2 items-center">
                <PrBadge value="3" color="pink" />
                <PrBadge value="99+" color="coral" />
                <PrBadge dot color="mint" />
                <PrTag value="Vue" color="mint" />
                <PrTag value="React" color="blue" />
                <PrTag value="Remove" color="pink" removable />
              </div>
            </PrCard>

            <PrCard title="Avatars" color="blue">
              <div class="flex gap-3 items-end">
                <PrAvatar label="Jesse S" color="pink" size="sm" />
                <PrAvatar label="Ana R" color="purple" size="md" />
                <PrAvatar label="Carlos D" color="mint" size="lg" />
                <PrAvatar image="https://i.pravatar.cc/100?img=3" label="Photo" color="lilac" size="lg" />
              </div>
            </PrCard>

            <PrCard title="Form Controls" color="mint">
              <div class="flex flex-col gap-3">
                <PrInput placeholder="Type something..." />
                <div class="flex gap-4">
                  <PrToggle label="Dark mode" color="purple" />
                  <PrToggle label="Notifications" color="mint" />
                </div>
              </div>
            </PrCard>

            <PrCard title="Progress" color="coral">
              <div class="flex flex-col gap-3">
                <PrProgressBar :value="75" color="pink" showValue />
                <PrProgressBar :value="45" color="purple" showValue />
                <PrProgressBar :value="90" color="mint" showValue />
              </div>
            </PrCard>

            <PrCard title="Dividers" color="lilac">
              <div class="flex flex-col gap-3">
                <PrDivider color="pink" />
                <PrDivider color="purple" label="or" />
                <PrDivider color="mint" />
              </div>
            </PrCard>

          </div>
        </div>

        <PrDivider color="mint" />

        <!-- Component Inventory -->
        <div class="my-10">
          <h2 class="text-2xl font-bold text-text mb-5">📦 Component Inventory (24)</h2>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem;">
            <span v-for="name in ['PrButton','PrInput','PrTextarea','PrSelect','PrCheckbox','PrRadio','PrToggle','PrBadge','PrTag','PrChip','PrAvatar','PrCard','PrDivider','PrDialog','PrToast','PrTooltip','PrSkeleton','PrProgressBar','PrAccordion','PrTabs','PrDataTable','PrBreadcrumb','PrPaginator','PrMenu']"
              :key="name"
              class="px-3 py-2 rounded-lg text-xs font-medium font-mono border border-surface-2 text-text-muted"
            >{{ name }}</span>
          </div>
        </div>

      </div>
    `,
  }),
}
