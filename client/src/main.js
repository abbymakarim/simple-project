import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './router'
import Chartkick from 'vue-chartkick'


Vue.use(Chartkick)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
