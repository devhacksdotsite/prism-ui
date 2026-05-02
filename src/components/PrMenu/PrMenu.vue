<script setup lang="ts">
defineProps<{
  items: { label: string; icon?: string; separator?: boolean; disabled?: boolean }[]
}>()

const emit = defineEmits<{ select: [item: { label: string }] }>()
</script>

<template>
  <ul class="bg-surface-0 border-2 border-surface-2 rounded-xl py-1 min-w-48 shadow-lg" role="menu">
    <template v-for="(item, i) in items" :key="i">
      <li v-if="item.separator" class="my-1 border-t border-surface-2" role="separator" />
      <li v-else role="menuitem">
        <button
          @click="!item.disabled && emit('select', item)"
          :disabled="item.disabled"
          class="w-full px-4 py-2.5 text-left text-sm text-text transition-colors hover:bg-purple/10 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <span v-if="item.icon">{{ item.icon }}</span>
          {{ item.label }}
        </button>
      </li>
    </template>
  </ul>
</template>
