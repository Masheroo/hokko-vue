import './assets/css/style.sass'
import 'highlight.js/styles/ir-black.css'
import "@fortawesome/fontawesome-free/css/fontawesome.min.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios from 'axios'




const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


axios.defaults.baseURL = 'https://hokko-courses.ru/api'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')