import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'


Vue.use(VueMeta)
Vue.config.productionTip = false

require('./plugins')


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
