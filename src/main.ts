import { createApp } from 'vue';
import App from './App';
import router from './router';
import store from './store';
import createToast from './components/global/Toast'

import './assets/styles/reset.css';
import './assets/styles/common.css';
import './assets/fonts/iconfont/iconfont.css';

const app = createApp(App)

app.config.globalProperties.$createToast = createToast // 挂载全局弹框方法(这个可以遍历global文件安装)

app.use(router).use(store).mount('#app'); //链式调用

