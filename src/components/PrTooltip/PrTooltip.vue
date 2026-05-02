<script setup lang="ts">
withDefaults(defineProps<{
  text: string
  position?: 'top' | 'bottom'
}>(), {
  position: 'top',
})
</script>

<template>
  <span class="relative inline-flex group">
    <slot />
    <span
      :class="[
        'absolute left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-text text-surface-0 text-xs font-medium whitespace-nowrap',
        'opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50',
        position === 'top' ? 'bottom-full mb-2' : 'top-full mt-2',
      ]"
    >
      {{ text }}
    </span>
  </span>
</template>
