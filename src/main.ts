// 引入全局样式
import '@/styles/index.scss'
import './assets/iconfont/iconfont.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'
import router from './router'
import globalComponentsPlugin from '@/utils/globalComponentsPlugin'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@/router/permission'
// svg
import 'virtual:svg-icons-register'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus, { locale })
app.use(router)
app.use(createPinia())
app.use(globalComponentsPlugin)

app.mount('#app')
