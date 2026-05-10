# 🔮 Prism UI

A vibrant, pastel-themed design system and component library built with Vue 3, PrimeVue 4, and Tailwind CSS v4.

https://devhacksdotsite.github.io/prism-ui/?path=/story/design-system-overview--overview

## Stack

| Layer | Technology |
|---|---|
| Framework | Vue 3 (Composition API, TypeScript) |
| Component Base | PrimeVue 4 (unstyled mode + passthrough preset) |
| Styling | Tailwind CSS v4 (custom pastel theme tokens) |
| Documentation | Storybook 10 |
| Build | Vite (library mode, ESM output) |

## Installation

Prism UI requires **Vue 3** and **PrimeVue 4** as peer dependencies.

```bash
npm install prism-ui primevue vue
```

### Setup

```css
/* src/style.css */
@import "tailwindcss";
@source "../node_modules/prism-ui";
@import "prism-ui/style.css";
```

```ts
// main.ts
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { preset } from 'prism-ui'
import App from './App.vue'
import './style.css'

const app = createApp(App)
app.use(PrimeVue, { unstyled: true, pt: preset })
app.mount('#app')
```

### Usage

```vue
<script setup>
import { PrButton, PrCard, PrInput } from 'prism-ui'
</script>

<template>
  <PrCard title="Hello" color="pink">
    <PrInput placeholder="Type here..." />
    <PrButton label="Submit" color="purple" />
  </PrCard>
</template>
```

> **Note:** The `@source "../node_modules/prism-ui"` directive tells Tailwind v4 to scan the prism-ui bundle for utility classes used by the components.

## Color Palette — "Pastel Neon"

| Token | Color | Hex | Usage |
|---|---|---|---|
| `pink` | 🩷 Hot Pastel Pink | `#FF6B9D` | Primary actions, CTAs |
| `purple` | 💜 Electric Lavender | `#C084FC` | Secondary actions, accents |
| `blue` | 💙 Sky Pop | `#67D4FF` | Info, links |
| `mint` | 💚 Neon Mint | `#6EECD4` | Success, confirmations |
| `yellow` | 💛 Lemon Drop | `#FDEB71` | Warnings, highlights |
| `coral` | 🧡 Peach Punch | `#FF8A80` | Errors, destructive |
| `lilac` | 💟 Soft Lilac | `#D4AAFF` | Tags, badges |
| `aqua` | 🩵 Bubblegum Aqua | `#80F0E0` | Hover states |

### Neutrals

| Token | Light | Dark |
|---|---|---|
| `surface-0` | `#FFFFFF` | `#1a1225` |
| `surface-1` | `#FAFAFE` | `#231a30` |
| `surface-2` | `#EDE6FF` | `#332a45` |
| `text` | `#2D1B4E` | `#e8e0f0` |
| `text-muted` | `#7C6B9E` | `#9a8cb5` |

## Components (24)

### Form Controls

| Component | Props |
|---|---|
| `PrButton` | `label`, `variant` (solid/outline/ghost/soft), `size` (sm/md/lg), `color`, `disabled` |
| `PrInput` | `placeholder`, `status` (default/success/error), `disabled`, `v-model` |
| `PrTextarea` | `placeholder`, `status`, `disabled`, `maxlength`, `rows`, `v-model` |
| `PrSelect` | `options`, `optionLabel`, `optionValue`, `placeholder`, `status`, `disabled`, `v-model` |
| `PrCheckbox` | `label`, `color`, `value`, `disabled`, `v-model` |
| `PrRadio` | `label`, `color`, `value`, `disabled`, `v-model` |
| `PrToggle` | `label`, `color`, `disabled`, `v-model` |

### Display

| Component | Props |
|---|---|
| `PrBadge` | `value`, `color`, `dot` |
| `PrTag` | `value`, `color`, `removable` |
| `PrChip` | `label`, `color`, `removable`, `image` |
| `PrAvatar` | `label`, `image`, `color`, `size` (sm/md/lg) |

### Layout & Feedback

| Component | Props |
|---|---|
| `PrCard` | `title`, `subtitle`, `color`. Slots: `header`, `default`, `footer` |
| `PrDivider` | `color`, `layout` (horizontal/vertical), `label` |
| `PrDialog` | `header`, `modal`, `closable`, `width`, `v-model`. Slots: `default`, `footer` |
| `PrToast` | Place once, trigger via `useToast()` |
| `PrTooltip` | `text`, `position` (top/bottom). Wraps slot content |
| `PrSkeleton` | `width`, `height`, `shape` (rectangle/circle) |
| `PrProgressBar` | `value`, `color`, `height`, `showValue` |
| `PrAccordion` | `items: { label, content }[]` |

### Data & Navigation

| Component | Props |
|---|---|
| `PrDataTable` | `value`, `columns: { field, header, sortable }[]`, `striped`, `paginator`, `rows` |
| `PrTabs` | `tabs: { label, value }[]`, `color`. Named slots per tab value |
| `PrBreadcrumb` | `items: { label, url }[]`, `color` |
| `PrPaginator` | `totalRecords`, `rows`, `color`, `v-model:page` |
| `PrMenu` | `items: { label, icon, separator, disabled }[]` |

## Theming

### Light / Dark Mode

```ts
import { useTheme } from 'prism-ui'

const { theme, toggle, setTheme } = useTheme()

toggle()           // Switch between light and dark
setTheme('dark')   // Set explicitly
```

Dark mode uses deep purple backgrounds with the same vibrant pastel accents.

## Development

```bash
# Install dependencies
npm install

# Run Storybook
npm run storybook

# Build library (ESM output to dist/)
npm run build

# Build Storybook static site
npm run build-storybook
```

## Publishing

```bash
npm run build
npm publish --access public
```

## License

MIT
