import Vue from 'vue'
import App from './App'
import router from './router'
import vueScroller from 'vue-scroller'
import 'common/style/index.styl'
import store from './store/index'
Vue.use(vueScroller)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
