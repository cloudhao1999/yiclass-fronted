import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FormsMorning from '../components/FormsMorning.vue'
import FormsAfternoon from '../components/FormsAfternoon.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form',
    name: 'FormsMorning',
    component: FormsMorning
  },
  {
    path: '/form2',
    name: 'FormsAfternoon',
    component: FormsAfternoon
  }
]

const router = new VueRouter({
  routes
})

export default router
