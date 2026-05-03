import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { PrBreadcrumb } from '../PrBreadcrumb'
import { PrPaginator } from '../PrPaginator'

const meta: Meta = {
  parameters: { controls: { disable: true } },
  title: 'Components/Breadcrumb & Paginator',
}

export default meta

export const Breadcrumbs: StoryObj = {
  render: () => ({
    components: { PrBreadcrumb },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <PrBreadcrumb :items="[{ label: 'Home', url: '#' }, { label: 'Components', url: '#' }, { label: 'Button' }]" color="purple" />
        <PrBreadcrumb :items="[{ label: 'Dashboard', url: '#' }, { label: 'Settings', url: '#' }, { label: 'Profile' }]" color="pink" />
        <PrBreadcrumb :items="[{ label: 'Docs', url: '#' }, { label: 'Getting Started' }]" color="mint" />
      </div>
    `,
  }),
}

export const Paginators: StoryObj = {
  render: () => ({
    components: { PrPaginator },
    setup: () => ({ p1: ref(0), p2: ref(2), p3: ref(0) }),
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <PrPaginator v-model:page="p1" :totalRecords="50" :rows="10" color="purple" />
        <PrPaginator v-model:page="p2" :totalRecords="80" :rows="10" color="pink" />
        <PrPaginator v-model:page="p3" :totalRecords="30" :rows="10" color="mint" />
      </div>
    `,
  }),
}
