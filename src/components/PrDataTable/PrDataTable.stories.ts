import type { Meta, StoryObj } from '@storybook/vue3'
import { PrDataTable } from '.'

const columns = [
  { field: 'name', header: 'Name', sortable: true },
  { field: 'role', header: 'Role', sortable: true },
  { field: 'status', header: 'Status' },
]

const data = [
  { name: 'Jesse Salinas', role: 'Engineer', status: 'Active' },
  { name: 'Ana Reyes', role: 'Designer', status: 'Active' },
  { name: 'Carlos Diaz', role: 'PM', status: 'Away' },
  { name: 'Mia Chen', role: 'Engineer', status: 'Active' },
  { name: 'Liam Park', role: 'QA', status: 'Offline' },
  { name: 'Sofia Ruiz', role: 'Designer', status: 'Active' },
  { name: 'Noah Kim', role: 'Engineer', status: 'Away' },
  { name: 'Emma Tran', role: 'PM', status: 'Active' },
]

const meta: Meta<typeof PrDataTable> = {
  title: 'Components/PrDataTable',
  component: PrDataTable,
  render: (args) => ({
    components: { PrDataTable },
    setup: () => ({ args }),
    template: '<PrDataTable v-bind="args" />',
  }),
  argTypes: {
    striped: { control: 'boolean' },
    paginator: { control: 'boolean' },
    rows: { control: 'number' },
  },
  args: {
    value: data,
    columns,
    striped: false,
    paginator: false,
    rows: 5,
  },
}

export default meta
type Story = StoryObj<typeof PrDataTable>

export const Default: Story = {}

export const Paginated: Story = {
  args: { paginator: true, rows: 4 },
}
