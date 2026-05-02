<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

defineProps<{
  value: any[]
  columns: { field: string; header: string; sortable?: boolean }[]
  striped?: boolean
  paginator?: boolean
  rows?: number
}>()

const pt = {
  root: { class: 'rounded-xl border-2 border-surface-2 overflow-hidden' },
  tableContainer: { class: 'overflow-auto' },
  table: { class: 'w-full' },
  thead: { class: 'bg-surface-1' },
  headerCell: {
    class: 'text-left text-xs font-semibold uppercase tracking-wider text-text-muted bg-surface-1 border-b-2 border-surface-2',
  },
  columnHeaderContent: { class: 'flex items-center gap-1.5' },
  columnTitle: { class: '' },
  sortIcon: { class: 'text-purple text-xs' },
  tbody: { class: '' },
  row: { class: 'border-b border-surface-2 transition-colors hover:bg-purple/5' },
  bodyCell: { class: 'px-4 py-3 text-sm text-text' },
  emptyMessage: { class: 'px-4 py-8 text-center text-text-muted text-sm' },
  pcPaginator: {
    root: { class: 'border-t-2 border-surface-2' },
    content: { class: 'flex items-center justify-center gap-1 px-4 py-3' },
    first: { class: 'w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:bg-purple/10 cursor-pointer' },
    prev: { class: 'w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:bg-purple/10 cursor-pointer' },
    next: { class: 'w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:bg-purple/10 cursor-pointer' },
    last: { class: 'w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:bg-purple/10 cursor-pointer' },
    pages: { class: 'flex gap-1' },
    page: { class: 'w-8 h-8 rounded-lg flex items-center justify-center text-sm text-text-muted hover:bg-purple/10 cursor-pointer data-[p-active=true]:bg-purple data-[p-active=true]:text-white' },
  },
}

const columnPt = {
  bodyCell: { class: 'px-4 py-3 text-sm text-text' },
}
</script>

<template>
  <DataTable
    :value="value"
    :stripedRows="striped"
    :paginator="paginator"
    :rows="rows || 5"
    :pt="pt"
    unstyled
  >
    <Column
      v-for="col in columns"
      :key="col.field"
      :field="col.field"
      :header="col.header"
      :sortable="col.sortable"
      :pt="columnPt"
    />
  </DataTable>
</template>
