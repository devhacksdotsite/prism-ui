<script setup lang="ts">
import Button from 'primevue/button'

type Variant = 'solid' | 'outline' | 'ghost' | 'soft'
type Size = 'sm' | 'md' | 'lg'
type Color = 'pink' | 'purple' | 'blue' | 'mint' | 'yellow' | 'coral' | 'lilac'

const props = withDefaults(defineProps<{
  label?: string
  variant?: Variant
  size?: Size
  color?: Color
  icon?: string
  disabled?: boolean
}>(), {
  variant: 'solid',
  size: 'md',
  color: 'pink',
})

const sizeClasses: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

const colorMap: Record<Color, { solid: string; outline: string; ghost: string; soft: string }> = {
  pink:   { solid: 'bg-pink text-white hover:brightness-110', outline: 'border-2 border-pink text-pink hover:bg-pink/10', ghost: 'text-pink hover:bg-pink/10', soft: 'bg-pink/15 text-pink hover:bg-pink/25' },
  purple: { solid: 'bg-purple text-white hover:brightness-110', outline: 'border-2 border-purple text-purple hover:bg-purple/10', ghost: 'text-purple hover:bg-purple/10', soft: 'bg-purple/15 text-purple hover:bg-purple/25' },
  blue:   { solid: 'bg-blue text-white hover:brightness-110', outline: 'border-2 border-blue text-blue hover:bg-blue/10', ghost: 'text-blue hover:bg-blue/10', soft: 'bg-blue/15 text-blue hover:bg-blue/25' },
  mint:   { solid: 'bg-mint text-text hover:brightness-110', outline: 'border-2 border-mint text-mint hover:bg-mint/10', ghost: 'text-mint hover:bg-mint/10', soft: 'bg-mint/15 text-mint hover:bg-mint/25' },
  yellow: { solid: 'bg-yellow text-text hover:brightness-110', outline: 'border-2 border-yellow text-yellow hover:bg-yellow/10', ghost: 'text-yellow hover:bg-yellow/10', soft: 'bg-yellow/15 text-yellow hover:bg-yellow/25' },
  coral:  { solid: 'bg-coral text-white hover:brightness-110', outline: 'border-2 border-coral text-coral hover:bg-coral/10', ghost: 'text-coral hover:bg-coral/10', soft: 'bg-coral/15 text-coral hover:bg-coral/25' },
  lilac:  { solid: 'bg-lilac text-white hover:brightness-110', outline: 'border-2 border-lilac text-lilac hover:bg-lilac/10', ghost: 'text-lilac hover:bg-lilac/10', soft: 'bg-lilac/15 text-lilac hover:bg-lilac/25' },
}

const ptOverride = {
  root: {
    class: [
      'inline-flex items-center justify-center gap-2 rounded-lg font-semibold',
      'transition-all duration-200 cursor-pointer',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'active:scale-95',
      sizeClasses[props.size],
      colorMap[props.color][props.variant],
    ],
  },
}
</script>

<template>
  <Button :label="label" :icon="icon" :disabled="disabled" :pt="ptOverride" unstyled />
</template>
