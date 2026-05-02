<script setup lang="ts">
type Color = 'pink' | 'purple' | 'blue' | 'mint' | 'coral'

defineProps<{
  items: { label: string; url?: string }[]
  color?: Color
}>()

const separatorColors: Record<string, string> = {
  pink: '#FF6B9D',
  purple: '#C084FC',
  blue: '#67D4FF',
  mint: '#6EECD4',
  coral: '#FF8A80',
}
</script>

<template>
  <nav aria-label="Breadcrumb">
    <ol class="flex items-center gap-2 text-sm">
      <li v-for="(item, i) in items" :key="i" class="flex items-center gap-2">
        <span v-if="i > 0" class="text-text-muted" :style="{ color: separatorColors[color || 'purple'] }">/</span>
        <a v-if="item.url && i < items.length - 1" :href="item.url" @click.prevent class="text-text-muted hover:text-text transition-colors cursor-pointer">{{ item.label }}</a>
        <span v-else class="text-text font-medium">{{ item.label }}</span>
      </li>
    </ol>
  </nav>
</template>
