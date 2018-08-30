import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Cars from '@/components/Cars'
import Car from '@/components/Car'
import Houses from '@/components/Houses'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/cars',
      name: 'Cars',
      component: Cars
    },
    {
      path: '/cars/:id',
      name: 'Car',
      props: true,
      component: Car
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/houses',
      name: 'Houses',
      component: Houses
    }
  ]
})
