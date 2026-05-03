<script setup lang="ts">
type Color = 'pink' | 'purple' | 'blue' | 'mint' | 'yellow' | 'coral' | 'lilac'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(defineProps<{
  label?: string
  image?: string
  color?: Color
  size?: Size
}>(), {
  color: 'purple',
  size: 'md',
})

const sizeClasses: Record<Size, string> = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-14 h-14 text-lg',
}

const colorStyles: Record<Color, { ring: string; bg: string; text: string }> = {
  pink:   { ring: '#FF6B9D', bg: 'rgba(255,107,157,0.15)', text: '#FF6B9D' },
  purple: { ring: '#C084FC', bg: 'rgba(192,132,252,0.15)', text: '#C084FC' },
  blue:   { ring: '#67D4FF', bg: 'rgba(103,212,255,0.15)', text: '#67D4FF' },
  mint:   { ring: '#6EECD4', bg: 'rgba(110,236,212,0.15)', text: '#6EECD4' },
  yellow: { ring: '#FDEB71', bg: 'rgba(253,235,113,0.2)', text: 'var(--color-text)' },
  coral:  { ring: '#FF8A80', bg: 'rgba(255,138,128,0.15)', text: '#FF8A80' },
  lilac:  { ring: '#D4AAFF', bg: 'rgba(212,170,255,0.15)', text: '#D4AAFF' },
}

const initials = props.label?.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() || '?'
</script>

<template>
  <div
    :class="['inline-flex items-center justify-center rounded-full font-semibold overflow-hidden', sizeClasses[size]]"
    :style="{
      boxShadow: `0 0 0 2px ${colorStyles[color].ring}`,
      backgroundColor: image ? undefined : colorStyles[color].bg,
      color: image ? undefined : colorStyles[color].text,
    }"
  >
    <img v-if="image" :src="image" :alt="label" class="w-full h-full object-cover" />
    <span v-else>{{ initials }}</span>
  </div>
</template>
