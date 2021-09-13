import Vue from 'vue'
import VueRouter from 'vue-router'
// official document

import Home from '@/components/HelloWorld'
import Page from '@/components/pages/page'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      name: 'HomePage',
      path: '/index',
      component: Home // component of single page
    },
    {
      name: 'page',
      path: '/page',
      component: Page // component of single page
    }
  ]
})
