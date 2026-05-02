<script setup lang="ts">
type Color = 'pink' | 'purple' | 'blue' | 'mint' | 'yellow' | 'coral' | 'lilac'

const props = withDefaults(defineProps<{
  label: string
  color?: Color
  removable?: boolean
  image?: string
}>(), {
  color: 'purple',
})

const emit = defineEmits<{ remove: [] }>()

const styles: Record<Color, { bg: string; text: string }> = {
  pink:   { bg: 'rgba(255,107,157,0.15)', text: '#FF6B9D' },
  purple: { bg: 'rgba(192,132,252,0.15)', text: '#C084FC' },
  blue:   { bg: 'rgba(103,212,255,0.15)', text: '#67D4FF' },
  mint:   { bg: 'rgba(110,236,212,0.15)', text: '#6EECD4' },
  yellow: { bg: 'rgba(253,235,113,0.2)', text: '#2D1B4E' },
  coral:  { bg: 'rgba(255,138,128,0.15)', text: '#FF8A80' },
  lilac:  { bg: 'rgba(212,170,255,0.15)', text: '#D4AAFF' },
}
</script>

<template>
  <span
    class="inline-flex items-center gap-2 pl-1 pr-3 py-1 rounded-full text-sm font-medium"
    :style="{ backgroundColor: styles[color].bg, color: styles[color].text }"
  >
    <img v-if="image" :src="image" :alt="label" class="w-6 h-6 rounded-full object-cover" />
    <span :class="!image ? 'pl-2' : ''">{{ label }}</span>
    <button v-if="removable" @click="emit('remove')" class="ml-1 hover:opacity-70 cursor-pointer text-xs" aria-label="Remove">✕</button>
  </span>
</template>
