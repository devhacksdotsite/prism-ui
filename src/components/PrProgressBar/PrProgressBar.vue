<script setup lang="ts">
type Color = 'pink' | 'purple' | 'blue' | 'mint' | 'coral' | 'lilac'

withDefaults(defineProps<{
  value?: number
  color?: Color
  height?: string
  showValue?: boolean
}>(), {
  value: 0,
  color: 'purple',
  height: '0.75rem',
  showValue: false,
})

const gradients: Record<Color, string> = {
  pink: 'linear-gradient(90deg, #FF6B9D, #FF8A80)',
  purple: 'linear-gradient(90deg, #C084FC, #D4AAFF)',
  blue: 'linear-gradient(90deg, #67D4FF, #80F0E0)',
  mint: 'linear-gradient(90deg, #6EECD4, #67D4FF)',
  coral: 'linear-gradient(90deg, #FF8A80, #FF6B9D)',
  lilac: 'linear-gradient(90deg, #D4AAFF, #C084FC)',
}
</script>

<template>
  <div class="w-full">
    <div class="w-full rounded-full bg-surface-2 overflow-hidden" :style="{ height }">
      <div
        class="h-full rounded-full transition-all duration-500 ease-out"
        :style="{ width: `${Math.min(100, Math.max(0, value))}%`, background: gradients[color] }"
      />
    </div>
    <p v-if="showValue" class="text-xs text-text-muted mt-1 text-right">{{ value }}%</p>
  </div>
</template>
