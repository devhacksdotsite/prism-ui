<script setup lang="ts">
import Dialog from 'primevue/dialog'

withDefaults(defineProps<{
  header?: string
  modal?: boolean
  closable?: boolean
  width?: string
}>(), {
  modal: true,
  closable: true,
  width: '28rem',
})

const visible = defineModel<boolean>({ default: false })

const pt = {
  mask: { class: 'fixed inset-0 z-50 flex items-center justify-center bg-text/20 backdrop-blur-sm' },
  root: { class: 'bg-surface-0 rounded-2xl shadow-2xl border-2 border-surface-2 mx-4 max-h-[90vh] overflow-auto' },
  header: { class: 'flex items-center justify-between p-5 border-b border-surface-2' },
  title: { class: 'text-lg font-bold text-text' },
  headerActions: { class: 'flex items-center' },
  pcCloseButton: {
    root: { class: 'w-8 h-8 rounded-full flex items-center justify-center text-text-muted hover:bg-coral/15 hover:text-coral transition-colors cursor-pointer' },
  },
  content: { class: 'p-5 text-text' },
  footer: { class: 'p-5 border-t border-surface-2 flex justify-end gap-2' },
}
</script>

<template>
  <Dialog v-model:visible="visible" :header="header" :modal="modal" :closable="closable" :style="{ width }" :pt="pt" unstyled>
    <template v-if="$slots.default" #default>
      <slot />
    </template>
    <template v-if="$slots.footer" #footer>
      <slot name="footer" />
    </template>
  </Dialog>
</template>
