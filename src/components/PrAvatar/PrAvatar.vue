<script setup lang="ts">
type Color = 'pink' | 'purple' | 'blue' | 'mint' | 'yellow' | 'coral' | 'lilac'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(defineProps<{
  label?: string
  image?: string
  icon?: string
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

const ringColors: Record<Color, string> = {
  pink: 'ring-pink',
  purple: 'ring-purple',
  blue: 'ring-blue',
  mint: 'ring-mint',
  yellow: 'ring-yellow',
  coral: 'ring-coral',
  lilac: 'ring-lilac',
}

const bgColors: Record<Color, string> = {
  pink: 'bg-pink/15 text-pink',
  purple: 'bg-purple/15 text-purple',
  blue: 'bg-blue/15 text-blue',
  mint: 'bg-mint/15 text-mint',
  yellow: 'bg-yellow/20 text-text',
  coral: 'bg-coral/15 text-coral',
  lilac: 'bg-lilac/15 text-lilac',
}

const initials = props.label?.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() || '?'
</script>

<template>
  <div :class="['inline-flex items-center justify-center rounded-full ring-2 font-semibold overflow-hidden', sizeClasses[size], ringColors[color], image ? '' : bgColors[color]]">
    <img v-if="image" :src="image" :alt="label" class="w-full h-full object-cover" />
    <span v-else>{{ initials }}</span>
  </div>
</template>
