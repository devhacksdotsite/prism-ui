<script setup lang="ts">
import Select from 'primevue/select'

type Status = 'default' | 'success' | 'error'

const model = defineModel<any>()
const props = withDefaults(defineProps<{
  options: any[]
  optionLabel?: string
  optionValue?: string
  placeholder?: string
  status?: Status
  disabled?: boolean
}>(), {
  status: 'default',
  placeholder: 'Select...',
})

const statusClasses: Record<Status, string> = {
  default: 'border-surface-2 focus-within:border-purple focus-within:ring-purple/20',
  success: 'border-mint focus-within:border-mint focus-within:ring-mint/20',
  error: 'border-coral focus-within:border-coral focus-within:ring-coral/20',
}

const ptOverride = {
  root: {
    class: [
      'inline-flex items-center w-full rounded-lg border-2 bg-surface-0',
      'transition-all duration-200 cursor-pointer',
      'focus-within:ring-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      statusClasses[props.status],
    ],
  },
  label: { class: 'px-3 py-2 text-text flex-1' },
  dropdown: { class: 'px-2 text-text-muted' },
  overlay: { class: 'bg-surface-0 border-2 border-surface-2 rounded-lg shadow-lg mt-1' },
  list: { class: 'py-1' },
  option: {
    class: [
      'px-3 py-2 text-text cursor-pointer transition-colors',
      'hover:bg-purple/10',
      'data-[p-selected=true]:bg-purple/20 data-[p-selected=true]:text-purple',
      'data-[p-focused=true]:bg-purple/10',
    ],
  },
  listContainer: { class: 'max-h-60 overflow-auto' },
}
</script>

<template>
  <Select
    v-model="model"
    :options="options"
    :optionLabel="optionLabel"
    :optionValue="optionValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :pt="ptOverride"
    unstyled
  />
</template>
