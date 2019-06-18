import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import config from '@/config'
import  'lib-flexible'
import Vant from 'vant';
import 'vant/lib/index.css';
import dealNumber from '@/assets/js/dealNumber'
Vue.use(Vant);
Vue.prototype.$dealNumber = dealNumber;
Vue.prototype.axios = axios;
// if (process.env.NODE_ENV !== 'production') require('@/mock')
Vue.prototype.$config = config
// import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
