import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommond from 'components/recommond/recommond'
import Rank from 'components/rank/rank'
import Singer from 'components/singer/singer'
import Search from 'components/search/search'
import SingerDetial from 'components/singer-detial/singer-detial'
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
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetial
        }
      ]
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '*',
      redirect: '/recommond'
    }
  ]
})
