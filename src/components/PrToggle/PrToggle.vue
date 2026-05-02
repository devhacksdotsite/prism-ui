<script setup lang="ts">
import ToggleSwitch from 'primevue/toggleswitch'
import { computed } from 'vue'

type Color = 'mint' | 'pink' | 'purple' | 'blue' | 'coral'

const model = defineModel<boolean>({ default: false })
const props = withDefaults(defineProps<{
  label?: string
  color?: Color
  disabled?: boolean
}>(), {
  color: 'mint',
})

const checkedBg: Record<Color, string> = {
  mint: 'bg-mint',
  pink: 'bg-pink',
  purple: 'bg-purple',
  blue: 'bg-blue',
  coral: 'bg-coral',
}

const ptOverride = computed(() => ({
  root: { class: 'inline-flex items-center cursor-pointer relative' },
  input: { class: 'absolute w-full h-full top-0 left-0 opacity-0 z-10 cursor-pointer disabled:cursor-not-allowed' },
  slider: {
    class: [
      'w-11 h-6 rounded-full transition-colors duration-200',
      model.value ? checkedBg[props.color] : 'bg-surface-2',
    ],
  },
  handle: {
    class: [
      'absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all duration-200',
      model.value ? 'left-6' : 'left-1',
    ],
  },
}))
</script>

<template>
  <label class="inline-flex items-center gap-2 cursor-pointer" :class="{ 'opacity-50 cursor-not-allowed': disabled }">
    <ToggleSwitch v-model="model" :disabled="disabled" :pt="ptOverride" unstyled />
    <span v-if="label" class="text-sm text-text">{{ label }}</span>
  </label>
</template>
