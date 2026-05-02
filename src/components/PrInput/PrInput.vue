<script setup lang="ts">
import InputText from 'primevue/inputtext'

type Status = 'default' | 'success' | 'error'

const model = defineModel<string>()
const props = withDefaults(defineProps<{
  placeholder?: string
  status?: Status
  disabled?: boolean
}>(), {
  status: 'default',
})

const statusClasses: Record<Status, string> = {
  default: 'border-surface-2 focus:border-purple focus:ring-purple/20',
  success: 'border-mint focus:border-mint focus:ring-mint/20',
  error: 'border-coral focus:border-coral focus:ring-coral/20',
}

const ptOverride = {
  root: {
    class: [
      'w-full px-3 py-2 rounded-lg border-2 bg-surface-0 text-text',
      'transition-all duration-200',
      'placeholder:text-text-muted',
      'focus:outline-none focus:ring-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      statusClasses[props.status],
    ],
  },
}
</script>

<template>
  <InputText v-model="model" :placeholder="placeholder" :disabled="disabled" :pt="ptOverride" unstyled />
</template>
