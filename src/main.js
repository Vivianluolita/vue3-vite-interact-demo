// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './route'
// import './styles/index.css'
// import globalThis from './utils/window'
// // 引入所需要的的依赖
// import {
//     ElementPlus,
//     interact
// } from './utils/index'
// app.use(router)
// app.use(ElementPlus)
// app.provide('interact', interact)
// let app = createApp(App)
// app.config.globalProperties.globalThis = globalThis
// app.mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
import router from './route'
// 引入所需要的的依赖
import {
    ElementPlus,
    interact
} from './utils/index'

let app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.provide('interact', interact)


app.mount('#app')