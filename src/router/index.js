import Vue from 'vue'
import Router from 'vue-router'
import Calculadora from '@/components/Calculadora'
import Calculadora2 from '@/components/Calculadora2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Calculadora',
      component: Calculadora
    },
    {
    	path: '/Calculadora2',
      name: 'Calculadora2',
      component: Calculadora2
    }
  ]
})
