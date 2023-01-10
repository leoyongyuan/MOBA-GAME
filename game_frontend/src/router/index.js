import Vue from 'vue'
import Router from 'vue-router'
import MOBAGAME from '@/components/MOBAGAME'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MOBAGAME',
      component: MOBAGAME
    }
  ]
})
