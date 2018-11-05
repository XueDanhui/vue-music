import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/pages/recommend'
import Singer from '@/pages/singer'
import Ranking from '@/pages/ranking'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: Ranking
    }
  ]
})
