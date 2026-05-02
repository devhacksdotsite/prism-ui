<script setup lang="ts">
import { computed } from 'vue'

type Color = 'pink' | 'purple' | 'blue' | 'mint' | 'coral'

const props = withDefaults(defineProps<{
  totalRecords: number
  rows: number
  color?: Color
}>(), {
  color: 'purple',
})

const emit = defineEmits<{ 'update:page': [page: number] }>()

const currentPage = defineModel<number>('page', { default: 0 })
const totalPages = computed(() => Math.ceil(props.totalRecords / props.rows))

const activeBg: Record<Color, string> = {
  pink: '#FF6B9D',
  purple: '#C084FC',
  blue: '#67D4FF',
  mint: '#6EECD4',
  coral: '#FF8A80',
}

function goTo(page: number) {
  if (page >= 0 && page < totalPages.value) {
    currentPage.value = page
    emit('update:page', page)
  }
}
</script>

<template>
  <nav class="flex items-center justify-center gap-1" aria-label="Pagination">
    <button @click="goTo(0)" :disabled="currentPage === 0" class="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:bg-surface-2 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed text-xs">«</button>
    <button @click="goTo(currentPage - 1)" :disabled="currentPage === 0" class="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:bg-surface-2 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed text-xs">‹</button>
    <button
      v-for="p in totalPages" :key="p"
      @click="goTo(p - 1)"
      class="w-8 h-8 rounded-lg flex items-center justify-center text-sm cursor-pointer transition-colors"
      :style="currentPage === p - 1 ? { background: activeBg[color], color: 'white' } : {}"
      :class="currentPage !== p - 1 ? 'text-text-muted hover:bg-surface-2' : ''"
    >{{ p }}</button>
    <button @click="goTo(currentPage + 1)" :disabled="currentPage >= totalPages - 1" class="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:bg-surface-2 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed text-xs">›</button>
    <button @click="goTo(totalPages - 1)" :disabled="currentPage >= totalPages - 1" class="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:bg-surface-2 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed text-xs">»</button>
  </nav>
</template>
