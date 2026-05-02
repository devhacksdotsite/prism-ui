<script setup lang="ts">
type Shape = 'rectangle' | 'circle'

withDefaults(defineProps<{
  width?: string
  height?: string
  shape?: Shape
}>(), {
  width: '100%',
  height: '1rem',
  shape: 'rectangle',
})
</script>

<template>
  <div
    :class="['animate-pulse bg-surface-2', shape === 'circle' ? 'rounded-full' : 'rounded-lg']"
    :style="{ width, height: shape === 'circle' ? width : height }"
  />
</template>
