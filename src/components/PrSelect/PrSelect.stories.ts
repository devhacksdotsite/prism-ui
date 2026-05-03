import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { PrSelect } from '.'

const cities = [
  { name: 'Phoenix', code: 'PHX' },
  { name: 'Los Angeles', code: 'LAX' },
  { name: 'New York', code: 'NYC' },
  { name: 'Chicago', code: 'CHI' },
  { name: 'Miami', code: 'MIA' },
]

const meta: Meta<typeof PrSelect> = {
  title: 'Components/PrSelect',
  component: PrSelect,
  render: (args) => ({
    components: { PrSelect },
    setup: () => ({ args }),
    template: '<PrSelect v-bind="args" class="max-w-xs" />',
  }),
  argTypes: {
    status: { control: 'select', options: ['default', 'success', 'error'] },
    disabled: { control: 'boolean' },
  },
  args: {
    options: cities,
    optionLabel: 'name',
    placeholder: 'Choose a city',
    status: 'default',
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof PrSelect>

export const Default: Story = {}

export const States: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { PrSelect },
    setup: () => ({ cities, v1: ref(null), v2: ref(null), v3: ref(null) }),
    template: `
      <div class="flex flex-col gap-3 max-w-xs">
        <PrSelect v-model="v1" :options="cities" optionLabel="name" placeholder="Default" />
        <PrSelect v-model="v2" :options="cities" optionLabel="name" placeholder="Success" status="success" />
        <PrSelect v-model="v3" :options="cities" optionLabel="name" placeholder="Error" status="error" />
        <PrSelect :options="cities" optionLabel="name" placeholder="Disabled" disabled />
      </div>
    `,
  }),
}
