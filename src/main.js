import Vue from 'vue'
import App from './App'
import router from './router'
import vueScroller from 'vue-scroller'
import 'common/style/index.styl'
import store from './store/index'
import lazyLoad from 'vue-lazyload'
import loading from './common/image/loading.gif'
Vue.use(lazyLoad, {
  loading: loading
})
Vue.use(vueScroller)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
