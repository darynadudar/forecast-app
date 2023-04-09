import { createApp } from 'vue'

import Axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'

const app = createApp(App);

app.use(VueAxios, Axios)
app.mount('#app')
