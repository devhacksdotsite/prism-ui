<script setup lang="ts">
import Toast from 'primevue/toast'

const pt = {
  root: { class: 'fixed top-4 right-4 z-[100] flex flex-col gap-2 w-80' },
  message: { class: 'rounded-xl border-2 border-surface-2 p-4 shadow-lg bg-surface-0 flex items-start gap-3 pr-slide-enter-active' },
  messageContent: { class: 'flex-1 flex items-start gap-3' },
  messageText: { class: 'flex-1' },
  summary: { class: 'font-semibold text-text text-sm' },
  detail: { class: 'text-text-muted text-sm mt-1' },
  closeButton: { class: 'text-text-muted hover:text-coral cursor-pointer shrink-0' },
  closeIcon: { class: 'w-4 h-4' },
}
</script>

<template>
  <Toast :pt="pt" unstyled />
</template>
