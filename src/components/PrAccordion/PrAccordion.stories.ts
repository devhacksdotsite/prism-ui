import type { Meta, StoryObj } from '@storybook/vue3'
import { PrAccordion } from '.'

const meta: Meta<typeof PrAccordion> = {
  title: 'Components/PrAccordion',
  component: PrAccordion,
}

export default meta
type Story = StoryObj<typeof PrAccordion>

const faqItems = [
  { label: 'What is Prism UI?', content: 'A vibrant pastel component library built with Vue 3, PrimeVue, and Tailwind CSS.' },
  { label: 'Is it accessible?', content: 'Yes! Components inherit PrimeVue\'s built-in keyboard navigation and ARIA attributes.' },
  { label: 'Can I customize the colors?', content: 'Absolutely. All colors are defined as Tailwind theme tokens and can be overridden.' },
  { label: 'What about dark mode?', content: 'Dark mode support is planned for a future release with a pastel-dark palette.' },
]

export const Default: Story = {
  args: { items: faqItems },
}
