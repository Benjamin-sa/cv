import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '@fortawesome/fontawesome-free/css/all.css'


// Initialiseer AOS
AOS.init({
  duration: 1000,
  once: false,
  offset: 100
})

createApp(App).mount('#app')