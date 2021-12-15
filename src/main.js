import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './permission'
import axios from 'axios';
let app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(Antd).use(store).use(router).mount('#app')
