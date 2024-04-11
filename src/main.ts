import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


// 注意 `.mount()` 前面的链式调用 `.use(router)`
createApp(App).use(router).use(ElementPlus).mount('#app')