import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginPage from '../components/LoginPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(to.name === 'Home' && !localStorage.getItem('access_token')){
    next({name : 'LoginPage'})
  } else if(to.name === 'LoginPage' && localStorage.getItem('access_token')){
    next({name: 'Home'})
  } else {
    next()
  }
})

export default router
