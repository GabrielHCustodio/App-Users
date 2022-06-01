import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import emitterPlugin from './emitter.js';

const app = createApp(App)
app.use(emitterPlugin)
app.use(router)

app.mount('#app')
