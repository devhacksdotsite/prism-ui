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

const colorClasses: Record<Color, string> = {
  pink: 'bg-pink/15 text-pink',
  purple: 'bg-purple/15 text-purple',
  blue: 'bg-blue/15 text-blue',
  mint: 'bg-mint/15 text-mint',
  yellow: 'bg-yellow/20 text-text',
  coral: 'bg-coral/15 text-coral',
  lilac: 'bg-lilac/15 text-lilac',
}
</script>

<template>
  <span :class="['inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold', colorClasses[color]]">
    {{ value }}
    <button v-if="removable" @click="emit('remove')" class="hover:opacity-70 cursor-pointer" aria-label="Remove">✕</button>
  </span>
</template>
