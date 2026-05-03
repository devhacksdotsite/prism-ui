import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PrismUI',
      fileName: 'prism-ui',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue', 'primevue/config', 'primevue/button', 'primevue/inputtext', 'primevue/textarea', 'primevue/select', 'primevue/checkbox', 'primevue/radiobutton', 'primevue/toggleswitch', 'primevue/badge', 'primevue/dialog', 'primevue/toast', 'primevue/toastservice', 'primevue/usetoast', 'primevue/accordion', 'primevue/accordionpanel', 'primevue/accordionheader', 'primevue/accordioncontent', 'primevue/tabs', 'primevue/tablist', 'primevue/tab', 'primevue/tabpanels', 'primevue/tabpanel', 'primevue/datatable', 'primevue/column'],
      output: {
        globals: { vue: 'Vue' },
      },
    },
  },
})
