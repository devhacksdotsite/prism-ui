import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { PrCheckbox } from '../PrCheckbox'
import { PrRadio } from '../PrRadio'
import { PrToggle } from '../PrToggle'

const meta: Meta = {
  parameters: { controls: { disable: true } },
  title: 'Components/Selection Controls',
}

export default meta

export const Checkboxes: StoryObj = {
  render: () => ({
    components: { PrCheckbox },
    setup: () => ({ checked: ref(false), colors: ref([]) }),
    template: `
      <div class="flex flex-col gap-4">
        <PrCheckbox v-model="checked" label="Accept terms" color="pink" />
        <div class="flex gap-4">
          <PrCheckbox v-model="colors" value="red" label="Red" color="coral" />
          <PrCheckbox v-model="colors" value="blue" label="Blue" color="blue" />
          <PrCheckbox v-model="colors" value="green" label="Green" color="mint" />
        </div>
        <PrCheckbox label="Disabled" disabled />
      </div>
    `,
  }),
}

export const RadioButtons: StoryObj = {
  render: () => ({
    components: { PrRadio },
    setup: () => ({ selected: ref(null) }),
    template: `
      <div class="flex flex-col gap-3">
        <PrRadio v-model="selected" value="vue" label="Vue" color="mint" />
        <PrRadio v-model="selected" value="react" label="React" color="blue" />
        <PrRadio v-model="selected" value="svelte" label="Svelte" color="coral" />
        <PrRadio v-model="selected" value="disabled" label="Disabled" disabled />
      </div>
    `,
  }),
}

export const Toggles: StoryObj = {
  render: () => ({
    components: { PrToggle },
    setup: () => ({ v1: ref(false), v2: ref(true), v3: ref(false), v4: ref(true), v5: ref(false) }),
    template: `
      <div class="flex flex-col gap-3">
        <PrToggle v-model="v1" label="Mint" color="mint" />
        <PrToggle v-model="v2" label="Pink" color="pink" />
        <PrToggle v-model="v3" label="Purple" color="purple" />
        <PrToggle v-model="v4" label="Blue" color="blue" />
        <PrToggle v-model="v5" label="Disabled" disabled />
      </div>
    `,
  }),
}
