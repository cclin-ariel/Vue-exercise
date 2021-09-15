import Vue from 'vue'
import VueRouter from 'vue-router'
// official document

import Home from '@/components/HelloWorld'
import Page from '@/components/pages/page'
import Menu from '@/components/pages/menu'
import child from '@/components/pages/child'
import child2 from '@/components/pages/child2'
import child3 from '@/components/pages/child3'

Vue.use(VueRouter)

export default new VueRouter({
//   mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      name: 'HomePage',
      path: '/index',
      component: Home // component of single page
    },
    {
    //   name: 'page',
      path: '/page',
      //   component: Page, // component of single page
      components: {
        default: Page,
        menu: Menu
      },
      children: [
        {
          name: 'card 1',
          path: '',
          component: child
        },
        {
          name: 'card 2',
          path: 'child2',
          component: child2
        },
        {
          name: 'card 3',
          path: 'child3',
          component: child3
        }
      ]
    }
  ]
})
