import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 引入样式
import '@/assets/styles/base.less'
import '@/assets/styles/iconfont.less'
// import '@/assets/styles/my-iconfont.less'
// 导入vant组件
import { Tab, Tabs, Swipe, SwipeItem, Lazyload } from 'vant'
// 引入mockjs
import '@/mock/index'

const app = createApp(App)

app.use(Tab)
app.use(Tabs)
app.use(Swipe)
app.use(SwipeItem)
app.use(Lazyload, {
    LazyComponent: true,
})
app.use(router).mount('#app')
