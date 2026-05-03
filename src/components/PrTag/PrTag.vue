<script setup lang="ts">
type Color = 'pink' | 'purple' | 'blue' | 'mint' | 'yellow' | 'coral' | 'lilac'

const props = withDefaults(defineProps<{
  value: string
  color?: Color
  removable?: boolean
}>(), {
  color: 'purple',
})

const emit = defineEmits<{ remove: [] }>()

const styles: Record<Color, { bg: string; text: string }> = {
  pink:   { bg: 'rgba(255,107,157,0.15)', text: '#FF6B9D' },
  purple: { bg: 'rgba(192,132,252,0.15)', text: '#C084FC' },
  blue:   { bg: 'rgba(103,212,255,0.15)', text: '#67D4FF' },
  mint:   { bg: 'rgba(110,236,212,0.15)', text: '#6EECD4' },
  yellow: { bg: 'rgba(253,235,113,0.2)', text: 'var(--color-text)' },
  coral:  { bg: 'rgba(255,138,128,0.15)', text: '#FF8A80' },
  lilac:  { bg: 'rgba(212,170,255,0.15)', text: '#D4AAFF' },
}
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
    :style="{ backgroundColor: styles[color].bg, color: styles[color].text }"
  >
    {{ value }}
    <button v-if="removable" @click="emit('remove')" class="hover:opacity-70 cursor-pointer" aria-label="Remove">✕</button>
  </span>
</template>
