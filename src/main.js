import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '../src/assets/style.css'
import App from './App.vue'
import '../src/components/entradas.vue'
import '../src/components/saidas.vue'


createApp(App).use(createPinia()).mount('#app')
