import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/layout/Home";


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name:"Home",
    component:Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router