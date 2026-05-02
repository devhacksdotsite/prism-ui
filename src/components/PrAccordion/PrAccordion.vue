<script setup lang="ts">
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'

defineProps<{
  items: { label: string; content: string }[]
}>()

const ptAccordion = {
  root: { class: 'flex flex-col gap-1' },
}

const ptPanel = {
  root: { class: 'rounded-xl border-2 border-surface-2 overflow-hidden' },
}

const ptHeader = {
  root: {
    class: [
      'flex items-center justify-between w-full px-4 py-3 bg-surface-1 text-text font-semibold text-sm',
      'cursor-pointer transition-colors hover:bg-surface-2',
      'focus:outline-none focus:ring-2 focus:ring-purple/20',
    ],
  },
  toggleicon: { class: 'text-text-muted text-xs transition-transform duration-200' },
}

const ptContent = {
  root: { class: '' },
  content: { class: 'px-4 py-3 text-sm text-text-muted' },
}
</script>

<template>
  <Accordion :pt="ptAccordion" unstyled>
    <AccordionPanel v-for="(item, i) in items" :key="i" :value="String(i)" :pt="ptPanel">
      <AccordionHeader :pt="ptHeader">{{ item.label }}</AccordionHeader>
      <AccordionContent :pt="ptContent">
        <p>{{ item.content }}</p>
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>
