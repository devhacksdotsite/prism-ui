import type { Meta, StoryObj } from '@storybook/vue3'
import { PrDataTable } from '.'

const meta: Meta<typeof PrDataTable> = {
  title: 'Components/PrDataTable',
  component: PrDataTable,
}

export default meta
type Story = StoryObj<typeof PrDataTable>

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

export const Default: Story = {
  args: { value: data, columns },
}

export const Sortable: Story = {
  args: { value: data, columns },
}

export const Paginated: Story = {
  args: { value: data, columns, paginator: true, rows: 4 },
}
