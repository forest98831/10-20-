import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'HelloWorld',
      component: ()=>
        import('../containers/home')
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>
        import('../containers/login')
    },
  ]
})
