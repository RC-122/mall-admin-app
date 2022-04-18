import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/layout/Home";
import Login from "@/views/layout/Login"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name:"Home",
    component:Home,
    children:[
      
    ]
  },
  {
    path:"/login",
    name:"Login",
    component:Login
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
