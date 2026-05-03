<script setup lang="ts">
type Color = 'pink' | 'purple' | 'blue' | 'mint' | 'coral' | 'lilac' | 'none'

withDefaults(defineProps<{
  title?: string
  subtitle?: string
  color?: Color
}>(), {
  color: 'none',
})

const borderMap: Record<Color, { base: string; hover: string }> = {
  pink:   { base: 'rgba(255,107,157,0.4)', hover: '#FF6B9D' },
  purple: { base: 'rgba(192,132,252,0.4)', hover: '#C084FC' },
  blue:   { base: 'rgba(103,212,255,0.4)', hover: '#67D4FF' },
  mint:   { base: 'rgba(110,236,212,0.4)', hover: '#6EECD4' },
  coral:  { base: 'rgba(255,138,128,0.4)', hover: '#FF8A80' },
  lilac:  { base: 'rgba(212,170,255,0.4)', hover: '#D4AAFF' },
  none:   { base: 'var(--color-surface-2)', hover: 'rgba(192,132,252,0.3)' },
}
</script>

<template>
  <div
    class="rounded-xl border-2 bg-surface-1 overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
    :style="{ borderColor: borderMap[color].base, '--hover-border': borderMap[color].hover }"
    @mouseenter="($event.currentTarget as HTMLElement).style.borderColor = borderMap[color].hover"
    @mouseleave="($event.currentTarget as HTMLElement).style.borderColor = borderMap[color].base"
  >
    <slot name="header" />
    <div class="p-5">
      <h3 v-if="title" class="text-lg font-bold text-text mb-1">{{ title }}</h3>
      <p v-if="subtitle" class="text-sm text-text-muted mb-3">{{ subtitle }}</p>
      <slot />
    </div>
    <div v-if="$slots.footer" class="px-5 py-3 border-t border-surface-2">
      <slot name="footer" />
    </div>
  </div>
</template>
