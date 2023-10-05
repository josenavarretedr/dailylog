import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import bootstrapicons from 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.vue'

const pinia = createPinia()

createApp(App).use(pinia).mount('#app')