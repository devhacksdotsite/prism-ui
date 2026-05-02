<script setup lang="ts">
import Badge from 'primevue/badge'

type Color = 'pink' | 'purple' | 'blue' | 'mint' | 'yellow' | 'coral' | 'lilac'

const props = withDefaults(defineProps<{
  value?: string | number
  color?: Color
  dot?: boolean
}>(), {
  color: 'pink',
})

const colorClasses: Record<Color, string> = {
  pink: 'bg-pink text-white',
  purple: 'bg-purple text-white',
  blue: 'bg-blue text-white',
  mint: 'bg-mint text-text',
  yellow: 'bg-yellow text-text',
  coral: 'bg-coral text-white',
  lilac: 'bg-lilac text-white',
}

const ptOverride = {
  root: {
    class: [
      'inline-flex items-center justify-center font-semibold',
      props.dot ? 'w-2.5 h-2.5 rounded-full' : 'min-w-5 h-5 px-1.5 rounded-full text-xs',
      colorClasses[props.color],
    ],
  },
}
</script>

<template>
  <Badge :value="dot ? undefined : value" :pt="ptOverride" unstyled />
</template>
