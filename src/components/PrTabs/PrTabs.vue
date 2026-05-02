<script setup lang="ts">
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'

type Color = 'pink' | 'purple' | 'blue' | 'mint' | 'coral'

const props = withDefaults(defineProps<{
  tabs: { label: string; value: string }[]
  color?: Color
}>(), {
  color: 'purple',
})

const activeBarColors: Record<Color, string> = {
  pink: '#FF6B9D',
  purple: '#C084FC',
  blue: '#67D4FF',
  mint: '#6EECD4',
  coral: '#FF8A80',
}

const ptTabs = { root: { class: 'flex flex-col' } }
const ptTabList = {
  root: { class: 'relative' },
  content: { class: 'overflow-hidden' },
  tabList: { class: 'flex gap-1 border-b-2 border-surface-2' },
  activeBar: { class: 'absolute bottom-0 h-0.5 transition-all duration-300', style: `background: ${activeBarColors[props.color]}` },
}
const ptTab = {
  root: {
    class: [
      'px-4 py-2.5 text-sm font-semibold cursor-pointer transition-colors',
      'text-text-muted hover:text-text',
      'focus:outline-none focus:ring-2 focus:ring-purple/20 rounded-t-lg',
      'data-[p-active=true]:text-text',
    ],
  },
}
const ptPanels = { root: { class: 'pt-4' } }
const ptPanel = { root: { class: 'text-sm text-text' } }
</script>

<template>
  <Tabs :value="tabs[0]?.value" :pt="ptTabs" unstyled>
    <TabList :pt="ptTabList">
      <Tab v-for="tab in tabs" :key="tab.value" :value="tab.value" :pt="ptTab">
        {{ tab.label }}
      </Tab>
    </TabList>
    <TabPanels :pt="ptPanels">
      <TabPanel v-for="tab in tabs" :key="tab.value" :value="tab.value" :pt="ptPanel">
        <slot :name="tab.value" />
      </TabPanel>
    </TabPanels>
  </Tabs>
</template>
