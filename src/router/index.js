import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommond from 'components/recommond/recommond'
import Rank from 'components/rank/rank'
import Singer from 'components/singer/singer'
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/recommond',
      component: Recommond
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '*',
      redirect: '/recommond'
    }
  ]
})
