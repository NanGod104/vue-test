import Vue from 'vue'
import Router from 'vue-router'
import VuexTest from '@/components/VuexTest'
import Parent from '@/components/Parent-child-component-pass-value/Parent'
import List from '@/components/List'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/VuexTest',
      name: 'VuexTest',
      component: VuexTest
    },
    {
      path:'/Parent',
      name:'Parent',
      component:Parent
    }
  ]
})
