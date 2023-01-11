import Vue from 'vue'
import App from './App'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

