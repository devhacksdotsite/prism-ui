# 🔮 Prism UI

A vibrant, pastel-themed design system and component library built with Vue 3, PrimeVue 4, and Tailwind CSS v4.

## Stack

- **Vue 3** — Composition API
- **PrimeVue 4** — Unstyled mode with passthrough preset
- **Tailwind CSS v4** — Custom pastel theme tokens
- **Storybook 10** — Component documentation and playground
- **Vite** — Build tooling

## Getting Started

```bash
# Install dependencies
npm install

# Run Storybook
npm run storybook

# Build library
npm run build

# Build Storybook static site
npm run build-storybook
```

## Color Palette — "Pastel Neon"

| Token | Color | Hex |
|---|---|---|
| `pink` | 🩷 Hot Pastel Pink | `#FF6B9D` |
| `purple` | 💜 Electric Lavender | `#C084FC` |
| `blue` | 💙 Sky Pop | `#67D4FF` |
| `mint` | 💚 Neon Mint | `#6EECD4` |
| `yellow` | 💛 Lemon Drop | `#FDEB71` |
| `coral` | 🧡 Peach Punch | `#FF8A80` |
| `lilac` | 💟 Soft Lilac | `#D4AAFF` |
| `aqua` | 🩵 Bubblegum Aqua | `#80F0E0` |

## Components

### Form Controls

| Component | Description | Props |
|---|---|---|
| `PrButton` | Multi-variant button | `label`, `variant` (solid/outline/ghost/soft), `size` (sm/md/lg), `color`, `disabled` |
| `PrInput` | Text input | `placeholder`, `status` (default/success/error), `disabled` |
| `PrTextarea` | Multi-line input | `placeholder`, `status`, `disabled`, `maxlength`, `rows` |
| `PrSelect` | Dropdown select | `options`, `optionLabel`, `optionValue`, `placeholder`, `status`, `disabled` |
| `PrCheckbox` | Checkbox | `label`, `color`, `value`, `disabled` |
| `PrRadio` | Radio button | `label`, `color`, `value`, `disabled` |
| `PrToggle` | Toggle switch | `label`, `color`, `disabled` |

### Display

| Component | Description | Props |
|---|---|---|
| `PrBadge` | Count or dot badge | `value`, `color`, `dot` |
| `PrTag` | Removable tag | `value`, `color`, `removable` |
| `PrChip` | Chip with optional avatar | `label`, `color`, `removable`, `image` |
| `PrAvatar` | Initials or image avatar | `label`, `image`, `color`, `size` (sm/md/lg) |

### Layout & Feedback

| Component | Description | Props |
|---|---|---|
| `PrCard` | Content card with hover lift | `title`, `subtitle`, `color`. Slots: `header`, `default`, `footer` |
| `PrDivider` | Gradient divider | `color`, `layout` (horizontal/vertical), `label` |
| `PrDialog` | Modal dialog | `header`, `modal`, `closable`, `width`. Slots: `default`, `footer` |
| `PrToast` | Toast notifications | Place once, use via `useToast()` |
| `PrTooltip` | Hover tooltip | `text`, `position` (top/bottom) |
| `PrSkeleton` | Loading placeholder | `width`, `height`, `shape` (rectangle/circle) |
| `PrProgressBar` | Progress indicator | `value`, `color`, `height`, `showValue` |
| `PrAccordion` | Collapsible panels | `items: { label, content }[]` |

### Data & Navigation

| Component | Description | Props |
|---|---|---|
| `PrDataTable` | Data table | `value`, `columns: { field, header, sortable }[]`, `striped`, `paginator`, `rows` |
| `PrTabs` | Tabbed content | `tabs: { label, value }[]`, `color`. Named slots per tab value |
| `PrBreadcrumb` | Breadcrumb nav | `items: { label, url }[]`, `color` |
| `PrPaginator` | Standalone paginator | `totalRecords`, `rows`, `color`, `v-model:page` |
| `PrMenu` | Dropdown menu | `items: { label, icon, separator, disabled }[]` |

## Theming

### Light / Dark Mode

```ts
import { useTheme } from 'prism-ui'

const { theme, toggle, setTheme } = useTheme()

toggle()           // Switch between light and dark
setTheme('dark')   // Set explicitly
```

Dark mode uses deep purple backgrounds with the same vibrant pastel accents.

### Available Colors

All components that accept a `color` prop support: `pink`, `purple`, `blue`, `mint`, `yellow`, `coral`, `lilac`.

## Project Structure

```
src/
├── components/
│   ├── PrButton/
│   │   ├── PrButton.vue
│   │   ├── PrButton.stories.ts
│   │   └── index.ts
│   └── ...
├── composables/
│   └── useTheme.ts
├── theme/
│   ├── tokens.css          # Tailwind theme tokens
│   ├── preset.ts           # PrimeVue passthrough preset
│   └── animations.css      # Shared animation presets
└── index.ts                # Library entry point
```

## License

MIT
