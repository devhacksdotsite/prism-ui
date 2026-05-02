<script setup lang="ts">
import Checkbox from 'primevue/checkbox'
import { computed } from 'vue'

type Color = 'pink' | 'purple' | 'blue' | 'mint' | 'coral'

const model = defineModel<any>()
const props = withDefaults(defineProps<{
  value?: any
  label?: string
  color?: Color
  disabled?: boolean
}>(), {
  color: 'pink',
})

const colorBg: Record<Color, string> = {
  pink: 'bg-pink border-pink',
  purple: 'bg-purple border-purple',
  blue: 'bg-blue border-blue',
  mint: 'bg-mint border-mint',
  coral: 'bg-coral border-coral',
}

const isBinary = computed(() => props.value === undefined)
const isChecked = computed(() => {
  if (isBinary.value) return !!model.value
  return Array.isArray(model.value) && model.value.includes(props.value)
})

const ptOverride = computed(() => ({
  root: { class: 'inline-flex items-center cursor-pointer relative' },
  input: { class: 'absolute w-full h-full top-0 left-0 opacity-0 z-10 cursor-pointer' },
  box: {
    class: [
      'w-5 h-5 rounded border-2 transition-all duration-200 flex items-center justify-center',
      isChecked.value ? colorBg[props.color] : 'border-surface-2 bg-surface-0',
    ],
  },
  icon: {
    class: [
      'text-white text-xs transition-transform duration-200',
      isChecked.value ? 'scale-100' : 'scale-0',
    ],
  },
}))
</script>

<template>
  <label class="inline-flex items-center gap-2 cursor-pointer" :class="{ 'opacity-50 cursor-not-allowed': disabled }">
    <Checkbox v-model="model" :value="value" :binary="isBinary" :disabled="disabled" :pt="ptOverride" unstyled />
    <span v-if="label" class="text-sm text-text">{{ label }}</span>
  </label>
</template>
