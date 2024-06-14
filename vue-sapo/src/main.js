// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//CSS global
import './assets/styles/global.css'
//Para os Icons
import '@fortawesome/fontawesome-free/css/all.css';

createApp(App).use(router).mount('#app')