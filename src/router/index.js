import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Quemsomos from '@/components/Quemsomos'
import Estados from '@/components/Estados'

Vue.use(Router)

export default new Router({
    mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
      {
        path: '/quemsomos',
          name: 'Quemsomos',
          component: Quemsomos
      },
      {
          path: '/estados',
          name: 'Estados',
          component: Estados
      }
  ]
})
