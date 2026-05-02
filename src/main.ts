import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import preset from './theme/preset'
import './theme/tokens.css'
import App from './App.vue'

const app = createApp(App)

app.use(PrimeVue, {
  unstyled: true,
  pt: preset,
})

app.mount('#app')
