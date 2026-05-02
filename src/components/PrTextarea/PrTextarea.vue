<script setup lang="ts">
import Textarea from 'primevue/textarea'
import { computed } from 'vue'

type Status = 'default' | 'success' | 'error'

const model = defineModel<string>({ default: '' })
const props = withDefaults(defineProps<{
  placeholder?: string
  status?: Status
  disabled?: boolean
  maxlength?: number
  rows?: number
}>(), {
  status: 'default',
  rows: 3,
})

const statusClasses: Record<Status, string> = {
  default: 'border-surface-2 focus:border-purple focus:ring-purple/20',
  success: 'border-mint focus:border-mint focus:ring-mint/20',
  error: 'border-coral focus:border-coral focus:ring-coral/20',
}

const charCount = computed(() => model.value?.length ?? 0)

const ptOverride = {
  root: {
    class: [
      'w-full px-3 py-2 rounded-lg border-2 bg-surface-0 text-text resize-y',
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
  <div>
    <Textarea v-model="model" :placeholder="placeholder" :disabled="disabled" :rows="rows" :maxlength="maxlength" :pt="ptOverride" unstyled />
    <p v-if="maxlength" class="text-xs text-text-muted mt-1 text-right">{{ charCount }}/{{ maxlength }}</p>
  </div>
</template>
