import Vue from 'vue'
import Router from 'vue-router'
import VuexTest from '@/components/VuexTest'
import Parent from '@/components/Parent child component pass value/Parent'
import Parent1 from '@/components/Parent and child component method calls/Parent'
import List from '@/components/List'
import Instruction from '@/components/Instruction'
import ElementUITable from '@/components/ElementUITable'
import ElementUITable1 from '@/components/ElementUITable1'

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
      path: '/Parent',
      name: 'Parent',
      component: Parent
    },
    {
      path: '/Parent1',
      name: 'Parent1',
      component: Parent1
    },
    {
      path: '/Instruction',
      name: 'Instruction',
      component: Instruction
    },
    {
      path: '/ElementUITable',
      name: 'ElementUITable',
      component: ElementUITable
    },
    {
      path: '/ElementUITable1',
      name: 'ElementUITable1',
      component: ElementUITable1
    }
  ]
})
