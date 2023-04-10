import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Axios from 'axios'

import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia, Axios)
app.mount('#app')
