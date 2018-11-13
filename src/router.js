import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/Index.vue'
import Details from './views/Details.vue'
import Products from './views/Products.vue'
import Login from './views/Login.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        { path:"/", component:Index},
        { path:"/details", component:Details},
        { path:"/products", component:Products},
      ]
    },
    { path: '/login', name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    { path: '/*',component:NotFound }
  ]
})
