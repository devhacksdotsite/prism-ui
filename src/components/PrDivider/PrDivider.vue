<script setup lang="ts">
type Color = 'pink' | 'purple' | 'blue' | 'mint' | 'coral' | 'lilac' | 'default'
type Layout = 'horizontal' | 'vertical'

withDefaults(defineProps<{
  color?: Color
  layout?: Layout
  label?: string
}>(), {
  color: 'default',
  layout: 'horizontal',
})

const gradients: Record<Color, string> = {
  pink: 'from-pink/40 to-coral/40',
  purple: 'from-purple/40 to-lilac/40',
  blue: 'from-blue/40 to-mint/40',
  mint: 'from-mint/40 to-blue/40',
  coral: 'from-coral/40 to-pink/40',
  lilac: 'from-lilac/40 to-purple/40',
  default: 'from-surface-2 to-surface-2',
}
</script>

<template>
  <div :class="['flex items-center gap-3', layout === 'vertical' ? 'flex-col' : '']">
    <div :class="['flex-1 h-px bg-gradient-to-r rounded', gradients[color], layout === 'vertical' ? 'w-px h-full min-h-8' : 'w-full']" />
    <span v-if="label" class="text-xs text-text-muted font-medium uppercase tracking-widest shrink-0">{{ label }}</span>
    <div :class="['flex-1 h-px bg-gradient-to-r rounded', gradients[color], layout === 'vertical' ? 'w-px h-full min-h-8' : 'w-full']" />
  </div>
</template>
