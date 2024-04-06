import '@/assets/main.css'
import 'vue-flux/style.css';
import { createApp } from 'vue'
import { MotionPlugin } from "@vueuse/motion";
import App from './App.vue'
import router from './router'
import 'aos/dist/aos.css'
import Aos from 'aos'
Aos.init()


const app = createApp(App)

app.use(router)

app.use(MotionPlugin)
app.mount('#app')
